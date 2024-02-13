import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import clsx from 'clsx';

import { Card } from '@/types/card';

import { Rows, Grid } from '@/components/Icons';

import { useBinderContext } from '../..';

import { BinderFilters } from '../BinderFilters';
import { BinderGridView } from '../BinderGridView';
import { BinderModal } from '../BinderModal';
import { BinderPaginator } from '../BinderPaginator';
import { BinderRow, BinderRowView } from '../BinderRowView';
import { BinderSidePanel } from '../BinderSidePanel';
import { BinderTabs } from '../BinderTabs';
import { CardDetails } from '../CardDetails';
import { ClaimCTA } from '../ClaimCTA';

export const Binder = () => {
  const [selectedCard, setSelectedCard] = useState<Card>();
  const [isGridView, setIsGridView] = useState(false);
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');

  const { cards } = useBinderContext();

  return (
    <div className="max-w-[85rem] mx-auto mb-9 mt-10">
      <ClaimCTA className="m-2" />

      <div className="lg:px-2 lg:mb-20 lg:mt-24 grid gap-7.5 lg:grid-cols-[2fr_1fr]">
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
              {cards.map((card) => (
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
              {cards.map((card) => (
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

        <BinderPaginator className="mx-auto" />

        {isSmallDevice && selectedCard ? (
          <BinderModal open onClose={() => setSelectedCard(undefined)}>
            <CardDetails className="p-8" card={selectedCard} />
          </BinderModal>
        ) : null}
      </div>
    </div>
  );
};
