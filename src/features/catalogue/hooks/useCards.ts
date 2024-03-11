import { useState } from 'react';
import { usePagination } from '@mantine/hooks';

import { useGetToml } from '@/api/fca00c/getToml';
import { TomlCurrency } from '@/types/toml';
import { CARDS_PER_PAGE } from '../constants';

export const useCards = () => {
  const [selectedCard, setSelectedCard] = useState<TomlCurrency>();

  const query = useGetToml({
    select: (data) => {
      return data.CURRENCIES.filter((currency) => /RPCIEGE.*[0-9]$/i.test(currency.code));
    },
  });

  const cards = query.data ?? [];

  const pagination = usePagination({
    total: Math.ceil(cards.length / CARDS_PER_PAGE),
  });

  const paginatedCards = cards.slice(
    (pagination.active - 1) * CARDS_PER_PAGE,
    pagination.active * CARDS_PER_PAGE
  );

  return {
    isPending: query.isPending,
    error: query.error,
    pagination,
    paginatedCards,
    selectedCard,
    setSelectedCard,
  };
};
