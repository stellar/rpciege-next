import { useState } from 'react';
import { usePagination } from '@mantine/hooks';

import { useWallet } from '@/hooks/useWallet';
import { useGetAccount } from '@/api/horizon/getAccount';
import { useGetToml } from '@/api/fca00c/getToml';

import { TomlCurrency } from '@/types/toml';
import { CARDS_PER_PAGE } from '../constants';

export const useMyCards = () => {
  const { publicKey } = useWallet();

  const [selectedCard, setSelectedCard] = useState<TomlCurrency>();

  const tomlQuery = useGetToml({
    select: (data) => {
      return data.CURRENCIES.filter((currency) => /RPCIEGE.*[0-9]$/i.test(currency.code));
    },
  });

  const accountQuery = useGetAccount({
    publicKey,
    select: (data) => {
      return new Set(
        data.balances
          .filter((balance) => /RPCIEGE.*[0-9]$/i.test(balance.asset_code))
          .map((balance) => balance.asset_code)
      );
    },
  });

  const cards = tomlQuery.data?.filter((card) => accountQuery.data?.has(card.code)) ?? [];

  const pagination = usePagination({
    total: Math.ceil(cards.length / CARDS_PER_PAGE),
  });

  const paginatedCards = cards.slice(
    (pagination.active - 1) * CARDS_PER_PAGE,
    pagination.active * CARDS_PER_PAGE
  );

  return {
    isPending: tomlQuery.isPending || accountQuery.isPending,
    error: tomlQuery.error || accountQuery.error,
    pagination,
    paginatedCards,
    selectedCard,
    setSelectedCard,
  };
};
