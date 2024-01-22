import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

import cursedKnight from '@/assets/cards/cursed-knight.jpg';
import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import theHacker from '@/assets/cards/the-hacker.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';
import theAnnihilator from '@/assets/cards/the-annihilator.jpg';

import tableTop from '@/assets/marketing/table-top.png';
import arrowRight from '@/assets/icons/arrow-right.svg';

// TODO: Add full card data or fetch from external API.
const cardData = [
  {
    src: vikingRaider.src,
    name: 'Viking Raider',
    description:
      'Fierce and relentless, the Viking Raider sails forth, their axe and shield a harbinger of conquest and plunder.',
  },
  {
    src: cursedKnight.src,
    name: 'Cursed Knight',
    description:
      'Bound in deathless servitude, the Cursed Knight fights a never-ending battle. Its spectral blade cuts through despair.',
  },
  {
    src: theHacker.src,
    name: 'The Hacker',
    description:
      'A digital samurai, he dances in the shadows of cyberspace, carving new realities from the raw matrix of ones and zeros.',
  },
  {
    src: orbitalCannon.src,
    name: 'Orbital Cannon',
    description:
      'A mechanical eye in the star-studded void. With a cold, calculated precision, it unleashes celestial fury upon the earthbound adversaries below.',
  },
  {
    src: theAnnihilator.src,
    name: 'The Annihilator',
    description:
      'He descends upon evil like a tempest, delivering retribution with unyielding fury. The Annihilator, the shadowed scourge of darkness, fights until all that remains is silence.',
  },
];

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
    <div className={clsx('grid *:[grid-area:1/1] justify-center px-2', props.className)}>
      <Image
        src={tableTop}
        alt=""
        className="h-[95%] md:h-3/4 pointer-events-none self-end rounded-3xl object-cover shadow-[0px_8px_8px_rgba(0,0,0,0.25)]"
      />

      <div className="flex flex-col items-center">
        <div className="grid grid-cols-[minmax(3rem,1fr)_auto_minmax(3rem,1fr)] gap-4 items-center">
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
                  key={card.src}
                  src={card.src}
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
            {cardData[selectedIndex].description}
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
    </div>
  );
};
