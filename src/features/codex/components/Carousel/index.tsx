import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

import tableTop from '@/assets/marketing/table-top.png';
import redD10 from '@/assets/dice/red-d10.png';
import redD20 from '@/assets/dice/red-d20.png';
import yellowD12 from '@/assets/dice/yellow-d12.png';
import arrowRight from '../../assets/arrow-right.svg';

import { cardData } from '@/mocks/cardData';

const itemStyle = [
  { x: '0%', y: '0%', zIndex: 3, scale: 1 },
  { x: '60%', y: '5%', zIndex: 2, scale: 0.95, rotate: 5 },
  { x: '100%', y: '10%', zIndex: 1, scale: 0.95, rotate: 10 },
  { x: '-100%', y: '10%', zIndex: 1, scale: 0.95, rotate: -10 },
  { x: '-60%', y: '5%', zIndex: 2, scale: 0.95, rotate: -5 },
];

type CarouselProps = {
  // images: string[];
  className?: string;
};

export const Carousel = (props: CarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const wrapIndex = (index: number) => {
    return ((index % cardData.length) + cardData.length) % cardData.length;
  };

  const window = [
    ...cardData.slice(selectedIndex, cardData.length),
    ...cardData.slice(0, selectedIndex),
  ];

  return (
    <div
      className={clsx('relative grid *:[grid-area:1/1] justify-items-center px-2', props.className)}
    >
      <Image
        src={tableTop}
        alt=""
        className="h-[95%] md:h-3/4 pointer-events-none self-end rounded-3xl object-cover shadow-[0px_8px_8px_rgba(0,0,0,0.25)]"
      />

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-[minmax(3rem,1fr)_auto_minmax(3rem,1fr)] gap-4 items-center isolate">
          <button
            className="z-10 justify-self-end"
            onClick={() => setSelectedIndex((oldIndex) => wrapIndex(oldIndex - 1))}
          >
            <Image src={arrowRight} alt="" className="rotate-180" />
          </button>

          <div className="grid *:[grid-area:1/1] justify-center items-center">
            {window.map((card, index) => {
              return (
                <motion.img
                  key={card.image}
                  src={card.image}
                  transition={{ duration: 1, type: 'spring' }}
                  animate={itemStyle[index]}
                  style={{
                    filter: cardData[selectedIndex] === card ? 'none' : 'brightness(0.5)',
                  }}
                  className="w-[420px] rounded-xl pointer-events-none"
                />
              );
            })}
          </div>

          <button
            className="z-10"
            onClick={() => setSelectedIndex((oldIndex) => wrapIndex(oldIndex + 1))}
          >
            <Image src={arrowRight} alt="" />
          </button>
        </div>

        <div className="mt-20 md:mt-28 pb-16 px-8 flex flex-col items-center flex-1">
          <div className="w-full max-w-[31.25rem] text-center rounded-md border-2 border-primary-yellow text-neutral-white bg-primary-red text-h5 font-capitolina p-3">
            {cardData[selectedIndex].name}
          </div>

          <p className="mt-9 max-w-[36rem] text-neutral-white text-body-lg flex-1 min-h-[16rem] md:min-h-[12rem]">
            {cardData[selectedIndex].desc}
          </p>

          <div className="mt-10 md:mt-12 flex gap-4">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                key={index}
                className={clsx(
                  'size-2.5 border-2 border-neutral-white rounded-full shadow-[inset_1px_1px_1px_rgba(0,0,0,0.5)]',
                  index === selectedIndex && 'bg-neutral-white'
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-20 w-[34rem] sm:bottom-0 sm:w-[82rem] pointer-events-none">
        <Image src={redD10} alt="" className="absolute bottom-10 left-10" />
        <Image src={yellowD12} alt="" className="absolute -bottom-14 left-32" />
        <Image src={redD20} alt="" className="absolute bottom-6 right-10" />
      </div>
    </div>
  );
};
