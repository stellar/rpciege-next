import { useMemo } from 'react';
import { usePagination } from '@mantine/hooks';

import { cardData } from '@/mocks/cardData';

import { useFilterParams } from './useFilterParams';

const ITEMS_PER_PAGE = 9;

export const useCards = () => {
  const [filters] = useFilterParams();

  const cards = useMemo(() => {
    const filterList = Object.entries(filters);

    const filteredCards = cardData.filter((card) => {
      return filterList.every(([key, value]) => {
        if (key === 'pack') {
          return card.pack === value;
        }

        if (key === 'type') {
          return card.type === value;
        }

        return true;
      });
    });

    const sortedCards = filteredCards.sort((a, b) => {
      switch (filters.sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'modifier':
          return a.modifier - b.modifier;
        case 'power':
          return a.power - b.power;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sortedCards;
  }, [filters]);

  const pagination = usePagination({
    total: Math.ceil(cards.length / ITEMS_PER_PAGE),
    siblings: 0,
  });

  const paginatedCards = cards.slice(
    (pagination.active - 1) * ITEMS_PER_PAGE,
    pagination.active * ITEMS_PER_PAGE
  );

  return { cards: paginatedCards, pagination };
};
