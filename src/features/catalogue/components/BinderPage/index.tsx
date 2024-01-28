import Image from 'next/image';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';

import vikingRaider from '@/assets/cards/viking-raider.jpg';
import cardSleeveTexture from '@/assets/card-sleeve-texture.png';
import paperTexture from '@/assets/paper-texture.png';

import binderRings from '@/assets/binder-rings.svg';
import binderSpine from '@/assets/binder-spine.svg';

import styles from './styles.module.css';

import { Rows, Grid, Caret } from '@/components/Icons';

export const BinderPage = () => {
  return (
    <div>
      <BinderFilters />
      <div className="relative max-w-max">
        <div className="absolute -inset-y-[10%] -left-[27.5%] pointer-events-none">
          <Image src={binderRings} alt="" className="absolute h-full w-auto left-[5%] z-10" />
          <Image src={binderSpine} alt="" className="h-full w-auto" />
        </div>

        <div className="flex justify-center">
          <BinderTab isActive>My Cards</BinderTab>
          <BinderTab className="-ml-4 -z-10">Card Catalogue</BinderTab>
          <BinderTab className="-ml-4 -z-20">Deck Builder</BinderTab>
        </div>

        <div className="relative bg-neutral-black/15 rounded-md">
          <div
            className={clsx(
              'grid grid-cols-3 max-w-[48rem] gap-y-2.5 p-2 shadow-[16px_8px_24px_rgba(0,0,0,0.2)] pl-[12.5%]',
              styles.BinderPage
            )}
          >
            {Array.from({ length: 9 }).map((_, i) => {
              return (
                <div
                  key={i}
                  className={clsx(
                    'p-2.5 pt-4 border-l border-t border-b border-white/60 [border-style:solid_dashed_dashed_dashed]',
                    styles.BinderItem
                  )}
                >
                  <Image
                    src={vikingRaider}
                    alt=""
                    className="rounded-xl shadow-[0px_4px_8px_black]"
                  />
                </div>
              );
            })}
          </div>

          <figure
            className="absolute inset-0 pointer-events-none bg-cover opacity-75 bg-black/10"
            style={{ backgroundImage: `url(${cardSleeveTexture.src})` }}
          />

          <figure
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: `url(${paperTexture.src})`, backgroundSize: '1024px' }}
          />
        </div>
      </div>
    </div>
  );
};

type BinderTabProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

const BinderTab = (props: BinderTabProps) => {
  const { isActive, children, ...restProps } = props;
  return (
    <div {...restProps} className={clsx('relative w-max', restProps.className)}>
      <div
        className={clsx(
          'flex items-stretch p-1 pr-3 isolate',
          isActive ? '*:bg-primary-red' : '*:bg-neutral-gray'
        )}
      >
        <div className="min-w-[10rem] py-1 px-2 pr-0 text-lg text-center font-nanum uppercase text-neutral-white font-bold rounded-l-md border-2 border-r-0 border-white/40">
          {children}
        </div>

        <div className="w-6 skew-x-12 -ml-2 rounded-r-md border-2 border-l-0 border-white/40 -z-10" />
      </div>

      <figure
        className="absolute inset-0 pointer-events-none bg-cover opacity-50 bg-black/20 rounded-md border-2 border-white/40"
        style={{
          backgroundImage: `url(${cardSleeveTexture.src})`,
          backgroundSize: '512px',
          clipPath: 'polygon(0 0, 93% 0, 100% 100%, 0% 100%)',
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
    <div className="relative flex items-center mb-20 gap-6">
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
