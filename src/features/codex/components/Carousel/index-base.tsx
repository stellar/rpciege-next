import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import cursedKnight from '@/assets/cards/cursed-knight.jpg';
import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import theHacker from '@/assets/cards/the-hacker.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';

import tableTop from '@/assets/marketing/table-top.png';
import arrowRight from '@/assets/icons/arrow-right.svg';

const images = [vikingRaider, cursedKnight, theHacker, orbitalCannon];

// TODO: Add full card data or fetch from external API.
const cardData = [
  { src: vikingRaider.src, name: 'Viking Raider', description: 'A viking raider' },
  { src: cursedKnight.src, name: 'Cursed Knight', description: 'A cursed knight' },
  { src: theHacker.src, name: 'The Hacker', description: 'A hacker' },
  { src: orbitalCannon.src, name: 'Orbital Cannon', description: 'An orbital cannon' },
];

const itemStyle = [
  { x: '-100%', y: '10%', zIndex: 1, scale: 0.95, rotate: -10 },
  { x: '-60%', y: '5%', zIndex: 2, scale: 0.95, rotate: -5 },
  { x: '0%', y: '0%', zIndex: 3, scale: 1 },
  { x: '60%', y: '5%', zIndex: 1, scale: 0.95, rotate: 5 },
  { x: '100%', y: '10%', zIndex: 1, scale: 0.95, rotate: 10 },
];

type CarouselProps = {
  // images: string[];
  className?: string;
};

export const Carousel = (props: CarouselProps) => {
  const [itemWindow, setItemWindow] = useState(cardData);

  const displayedItems = itemWindow.slice(0, itemStyle.length);
  const selectedItem = displayedItems[Math.floor(displayedItems.length / 2)];

  console.log(selectedItem);

  return (
    <div className={clsx('mx-auto', props.className)}>
      <div className="mb-4 flex gap-4 justify-center">
        <button
          className="btn btn-primary"
          onClick={() =>
            setItemWindow((oldState) => {
              const newState = [...oldState];
              newState.unshift(newState.pop()!);
              return newState;
            })
          }
        >
          left
        </button>

        <button
          className="btn btn-primary"
          onClick={() =>
            setItemWindow((oldState) => {
              const newState = [...oldState];
              newState.push(newState.shift()!);
              return newState;
            })
          }
        >
          right
        </button>
      </div>

      <div className="grid *:[grid-area:1/1] justify-center px-2">
        <Image
          src={tableTop}
          alt=""
          className="pointer-events-none self-end rounded-3xl object-cover h-[95%] md:h-3/4 shadow-[0px_8px_8px_rgba(0,0,0,0.25)]"
        />

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-[minmax(3rem,1fr)_auto_minmax(3rem,1fr)] gap-4 items-center">
            <button className="z-10 justify-self-end">
              <Image src={arrowRight} alt="" className="rotate-180" />
            </button>

            <div className="grid *:[grid-area:1/1] justify-center items-center">
              {itemWindow.map((card, index) => {
                return (
                  <motion.img
                    key={card.src}
                    src={card.src}
                    transition={{ duration: 0.75, type: 'spring' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      ...itemStyle[index],
                      opacity: itemStyle[index] ? 1 : 0,
                    }}
                    style={{
                      filter: selectedItem === card ? 'none' : 'brightness(0.5)',
                    }}
                    className="w-[420px] pointer-events-none"
                  />
                );
              })}
            </div>

            <button className="z-10">
              <Image src={arrowRight} alt="" />
            </button>
          </div>

          <div className="pb-16 px-8 flex flex-col items-center">
            <div className="mt-20 w-full max-w-[31.25rem] flex justify-center rounded-lg border-2 border-primary-yellow text-neutral-white bg-primary-red text-h5 font-capitolina p-3">
              Legionary | Titus
            </div>

            <p className="mt-9 max-w-[47.5rem] text-neutral-white text-body-lg">
              Titus fought in his first battle at the age of three, and although his sword was three
              times his size, he still fought with the strength of ten three-year-olds. Now a
              grizzled warrior in his late forties, Titus is looking to hang up his battleax and
              settle down with a nice farm wench. That is, after this last battle. Titus’s brute
              strength and formidable countenance ignite fear in all adversaries, and he’s looking
              to maintain this reputation as his combat career comes to an end.
            </p>

            <div className="mt-10 md:mt-12 flex gap-4">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className="size-2.5 border-2 border-neutral-white rounded-full bg-neutral-white shadow-[inset_1px_1px_1px_rgba(0,0,0,0.5)]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
