import { useQuery } from '@tanstack/react-query';

import { IS_DEV } from '@/config';
import { ClaimableBalance, HorizonResponse } from '@/types/horizon';

import { handleResponse, horizon } from '..';

export type ListClaimableBalancesOptions = {
  sponsor: string;
  claimant: string;
};

type ListClaimableBalancesResponse = HorizonResponse<ClaimableBalance>;

export const listClaimableBalances = (
  options: ListClaimableBalancesOptions
): Promise<ListClaimableBalancesResponse> => {
  const url = new URL(`${IS_DEV ? horizon.TESTNET : horizon.PUBLIC}/claimable_balances`);

  if (options.sponsor) url.searchParams.set('sponsor', options.sponsor);
  url.searchParams.set('claimant', options.claimant);

  return fetch(url).then(handleResponse);
};

export const useListClaimableBalances = <SelectType = ListClaimableBalancesResponse>(
  options: ListClaimableBalancesOptions & {
    select?: (data: ListClaimableBalancesResponse) => SelectType;
  }
) => {
  return useQuery({
    queryKey: ['horizon', 'list', 'claimable_balances', options],
    queryFn: () => listClaimableBalances(options),
    select: options.select,
  });
};
