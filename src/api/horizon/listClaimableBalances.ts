import { useQuery } from '@tanstack/react-query';

import { IS_DEV } from '@/config';
import { ClaimableBalance, HorizonResponse } from '@/types/horizon';

import { handleResponse, horizon } from '..';

type ListClaimableBalancesOptions = {
  sponsor: string;
  claimant: string;
};

export const listClaimableBalances = (
  options: ListClaimableBalancesOptions
): Promise<HorizonResponse<ClaimableBalance>> => {
  const url = new URL(`${IS_DEV ? horizon.TESTNET : horizon.PUBLIC}/claimable_balances`);

  if (options.sponsor) url.searchParams.set('sponsor', options.sponsor);
  url.searchParams.set('claimant', options.claimant);

  return fetch(url).then(handleResponse);
};

export const useListClaimableBalances = (options: ListClaimableBalancesOptions) => {
  return useQuery({
    queryKey: ['horizon', 'list', 'claimable_balances', options],
    queryFn: () => listClaimableBalances(options),
  });
};
