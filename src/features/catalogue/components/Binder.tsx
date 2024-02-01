import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';

import { Card } from '@/types/card';

import cardSleeveTexture from '@/assets/card-sleeve-texture.png';
import paperTexture from '@/assets/paper-texture.png';

import binderRings from '@/assets/binder-rings.svg';
import binderSpine from '@/assets/binder-spine.svg';

import { Rows, Grid, Caret } from '@/components/Icons';
import { CardDetails } from './CardDetails';
import { BinderPage } from './BinderPage';

import { cardData } from '@/mocks/cardData';

export const Binder = () => {
  const [selectedCard, setSelectedCard] = useState<Card>();

  return (
    <div className="px-4 grid grid-cols-[2fr_1fr] gap-7.5 mx-auto max-w-[85rem]">
      <div className=" max-lg:hidden">
        <div className="ml-[7.5%] flex items-center gap-4 flex-wrap-reverse">
          <div className="flex-1 flex *:flex-1 *:max-w-[11rem] *:text-nowrap -space-x-4">
            <BinderTab isActive>My Cards</BinderTab>
            <BinderTab className="-z-10">Card Catalogue</BinderTab>
            <BinderTab className="-z-20">Deck Builder</BinderTab>
          </div>

          <BinderFilters />
        </div>

        <div className="relative max-w-max">
          <Image
            src={binderSpine}
            alt=""
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-1/4 h-[115%] w-auto"
          />

          <BinderPage>
            {cardData.map((card) => {
              return (
                <BinderPage.Item key={card.name} onClick={() => setSelectedCard(card)}>
                  <img
                    src={card.src}
                    alt=""
                    className={clsx(
                      'rounded-xl shadow-xl shadow-black/50',
                      selectedCard === card && 'outline outline-4 outline-primary-red'
                    )}
                  />
                </BinderPage.Item>
              );
            })}
          </BinderPage>

          <Image
            src={binderRings}
            alt=""
            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-1/4 h-full w-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-fit-36 gap-x-5 gap-y-3 self-start lg:hidden">
        {cardData.map((card) => {
          return (
            <img
              key={card.name}
              src={card.src}
              alt=""
              className={clsx(
                'rounded-xl shadow-xl shadow-black/50',
                selectedCard === card && 'outline outline-4 outline-primary-red'
              )}
              onClick={() => setSelectedCard(card)}
            />
          );
        })}
      </div>

      <CardDetails className="" card={selectedCard} />
    </div>
  );
};

type BinderTabProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

const BinderTab = (props: BinderTabProps) => {
  const { isActive, children, ...restProps } = props;
  return (
    <div {...restProps} className={clsx('relative p-1 pr-3 ', restProps.className)}>
      <div className={clsx('flex isolate', isActive ? '*:bg-primary-red' : '*:bg-neutral-gray')}>
        <div className="flex-1 py-1 px-2 pr-0 text-lg text-center font-nanum uppercase text-neutral-white font-bold rounded-l-md border-2 border-r-0 border-white/40">
          {children}
        </div>

        <div className="w-6 skew-x-12 -ml-2 rounded-r-md border-2 border-l-0 border-white/40 -z-10" />
      </div>

      <figure
        className="absolute inset-0 pointer-events-none bg-cover opacity-50 bg-black/20 rounded-md border-2 border-white/40"
        style={{
          backgroundImage: `url(${cardSleeveTexture.src})`,
          backgroundSize: '512px',
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0% 100%)',
        }}
      />

      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url(${paperTexture.src})` }}
      />
    </div>
  );
};

const BinderFilters = () => {
  return (
    <div className="relative flex items-center gap-4">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-2 p-1">
              <div className="text-h6 font-nanum uppercase">Filter:</div>
              <Caret className={clsx('transition-transform', open && 'rotate-180')} />
            </Popover.Button>

            <Popover.Panel className="absolute top-full mt-2 bg-neutral-white z-50 rounded-md border border-black p-6 w-full max-w-[12rem] text-h6 uppercase font-nanum space-y-4">
              <p>Type</p>
              <ul className="ml-4 space-y-4">
                <li>Type 1</li>
                <li>Type 2</li>
                <li>Type 3</li>
              </ul>

              <p>Pack</p>
              <ul className="ml-4 space-y-4">
                <li>Pack 1</li>
                <li>Pack 2</li>
                <li>Pack 3</li>
              </ul>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-2 p-1">
              <div className="text-h6 font-nanum uppercase">Sort By: Name</div>
              <Caret className={clsx('transition-transform ', open && 'rotate-180')} />
            </Popover.Button>

            <Popover.Panel className="absolute top-full mt-2 bg-neutral-white z-50 rounded-md border border-black p-6 w-full max-w-[12rem] text-h6 uppercase font-nanum space-y-4">
              <p>Name</p>
              <p>Power</p>
              <p>Modifier</p>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="flex gap-1">
        <button className="p-1">
          <Rows className="" />
        </button>

        <button className="p-1">
          <Grid className="" />
        </button>
      </div>
    </div>
  );
};
