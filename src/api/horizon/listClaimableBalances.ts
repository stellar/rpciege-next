import { useQuery } from '@tanstack/react-query';

import { IS_DEV } from '@/config';
import { ClaimableBalance, HorizonResponse } from '@/types/horizon';

import { handleResponse, horizon } from '..';

type ListClaimableBalancesOptions = {
  sponsor?: string;
  claimant?: string;
};

type ListClaimableBalancesResponse = HorizonResponse<ClaimableBalance>;

export const listClaimableBalances = (
  options: ListClaimableBalancesOptions
): Promise<ListClaimableBalancesResponse> => {
  const url = new URL(`${IS_DEV ? horizon.TESTNET : horizon.PUBLIC}/claimable_balances`);

  if (options.sponsor) url.searchParams.set('sponsor', options.sponsor);
  if (options.claimant) url.searchParams.set('claimant', options.claimant);
  url.searchParams.set('limit', '200');

  return fetch(url).then(handleResponse);
};

export type UseListClaimableBalancesOptions<T = ListClaimableBalancesResponse> =
  ListClaimableBalancesOptions & {
    select?: (data: ListClaimableBalancesResponse) => T;
  };

export const useListClaimableBalances = <T = ListClaimableBalancesResponse>(
  options: UseListClaimableBalancesOptions<T>
) => {
  return useQuery({
    queryKey: ['horizon', 'list', 'claimable_balances', options],
    queryFn: () => listClaimableBalances(options),
    select: options.select,
    enabled: !!options.claimant && !!options.sponsor,
  });
};
