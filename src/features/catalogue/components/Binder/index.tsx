import { useState } from 'react';
import clsx from 'clsx';
import { Popover } from '@headlessui/react';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { Card } from '@/types/card';

import { Rows, Grid, Caret } from '@/components/Icons';

import { cardData } from '@/mocks/cardData';

import { BinderGridView } from '../BinderGridView';
import { BinderModal } from '../BinderModal';
import { BinderRow, BinderRowView } from '../BinderRowView';
import { BinderSidePanel } from '../BinderSidePanel';
import { BinderTabs } from '../BinderTabs';
import { CardDetails } from '../CardDetails';

export const Binder = () => {
  const [selectedCard, setSelectedCard] = useState<Card>();
  const [isGridView, setIsGridView] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');

  return (
    <div className="max-w-[85rem] mx-auto mb-9 lg:px-2 lg:mb-20 lg:mt-24 grid gap-7.5 lg:grid-cols-[2fr_1fr]">
      <div>
        <div className="flex flex-col lg:flex-row">
          <BinderTabs />

          <div className="flex gap-4 items-center justify-between max-lg:my-9 max-lg:px-2">
            <BinderFilters />

            <div className="flex gap-1 *:p-1">
              <button onClick={() => setIsGridView(false)}>
                <Rows className={clsx(!isGridView && 'text-primary-red')} />
              </button>

              <button onClick={() => setIsGridView(true)}>
                <Grid className={clsx(isGridView && 'text-primary-red')} />
              </button>
            </div>
          </div>
        </div>

        {isGridView ? (
          <BinderGridView>
            {cardData.map((card) => (
              <img
                key={card.name}
                src={card.src}
                onClick={() => setSelectedCard(card)}
                className={clsx(
                  'rounded-md shadow-xl shadow-black/50 cursor-pointer',
                  selectedCard === card && 'outline outline-4 outline-primary-red'
                )}
                width={272}
                height={410}
              />
            ))}
          </BinderGridView>
        ) : (
          <BinderRowView>
            {cardData.map((card) => (
              <BinderRow
                key={card.name}
                card={card}
                onClick={() => setSelectedCard(card)}
                className={clsx(
                  'cursor-pointer',
                  selectedCard === card && 'outline outline-4 outline-primary-red'
                )}
              />
            ))}
          </BinderRowView>
        )}
      </div>

      <BinderSidePanel className="max-lg:hidden">
        {selectedCard ? <CardDetails className="p-8" card={selectedCard} /> : null}
      </BinderSidePanel>

      {isSmallDevice && selectedCard ? (
        <BinderModal open onClose={() => setSelectedCard(undefined)}>
          <CardDetails className="p-8" card={selectedCard} />
        </BinderModal>
      ) : null}
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
    </div>
  );
};
