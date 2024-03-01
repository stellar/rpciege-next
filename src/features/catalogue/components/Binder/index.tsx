import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import clsx from 'clsx';

import { Rows, Grid } from '@/components/Icons';
import { padEndArray } from '@/utils';

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

// TODO: Add RowView
export const Binder = () => {
  const { selectedCard, setSelectedCard } = useBinderContext();
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');

  return (
    <>
      <ClaimCTA className="my-4 lg:my-8" />

      <div className="mb-20 lg:mb-44 lg:mt-20 grid gap-7.5 lg:grid-cols-[2fr_1fr]">
        <div>
          <BinderTabs className="max-lg:mb-9 max-lg:-mx-2" />
          <GridView />
        </div>

        <BinderSidePanel className="max-lg:hidden">
          {selectedCard ? (
            <CardDetails className="p-8" card={selectedCard} />
          ) : (
            <h4 className="p-8 text-center flex flex-col justify-center h-full">
              Select a card to learn more about it!
            </h4>
          )}
        </BinderSidePanel>

        <BinderPaginator className="mx-auto" />
      </div>

      {isSmallDevice && selectedCard ? (
        <BinderModal open onClose={() => setSelectedCard(undefined)}>
          <CardDetails className="p-8" card={selectedCard} />
        </BinderModal>
      ) : null}
    </>
  );
};

const GridView = () => {
  const { error, isPending, paginatedCards, selectedCard, setSelectedCard } = useBinderContext();

  if (error) return <p>Failed to load cards.</p>;

  // Add filler cards to make the grid look nice
  const cards = padEndArray(paginatedCards, 9);

  return (
    <BinderGridView>
      {cards.map((card, index) => {
        if (!card)
          return (
            <div
              key={index}
              className={clsx('rounded-md bg-black/10 aspect-card', isPending && 'animate-pulse')}
            />
          );

        return (
          <img
            key={card.code}
            src={card.image}
            onClick={() => setSelectedCard(card)}
            className={clsx(
              'rounded-md shadow-lg shadow-black/50 cursor-pointer w-full aspect-card object-cover bg-black',
              selectedCard === card && 'outline outline-4 outline-primary-red'
            )}
          />
        );
      })}
    </BinderGridView>
  );
};

const RowView = () => {
  const { error, isPending, paginatedCards, selectedCard, setSelectedCard } = useBinderContext();

  if (error) return <p>Failed to load cards.</p>;

  return (
    <BinderRowView>
      {isPending
        ? Array.from({ length: 9 }, (_, i) => (
            <tr key={i}>
              <td colSpan={4}>
                <div className="rounded-md bg-black/30 animate-pulse h-10 md:h-20" />
              </td>
            </tr>
          ))
        : paginatedCards.map((card) => (
            <BinderRow
              key={card.code}
              card={card as any}
              onClick={() => setSelectedCard(card)}
              className={clsx(
                'cursor-pointer',
                selectedCard === card && 'outline outline-4 outline-primary-red'
              )}
            />
          ))}
    </BinderRowView>
  );
};
