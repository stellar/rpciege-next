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
    // Sometimes these dependencies are async so they can be undefined even though their key was passed in.
    // This is to prevent the query from executing before all dependencies are available.
    enabled:
      'claimant' in options === !!options.claimant && 'sponsor' in options === !!options.sponsor,
  });
};
