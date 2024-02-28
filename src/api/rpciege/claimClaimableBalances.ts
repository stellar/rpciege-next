import { useMutation } from '@tanstack/react-query';

import { ClaimableBalance } from '@/types/horizon';

import { api, handleResponse } from '..';

export type ExtendedClaimableBalance = ClaimableBalance & {
  code: string;
  issuer: string;
};

type ClaimClaimableBalancesOptions = {
  pubkey: string;
  records: ExtendedClaimableBalance[];
};

export const claimClaimableBalances = (
  options: ClaimClaimableBalancesOptions
): Promise<{ token: string; xdr: string }> => {
  return fetch(`${api.RPCIEGE}/claim`, { method: 'POST', body: JSON.stringify(options) }).then(
    handleResponse
  );
};

export const useClaimClaimableBalances = (options: ClaimClaimableBalancesOptions) => {
  return useMutation({
    mutationKey: ['rpciege', 'claim', 'claimable_balances', options],
    mutationFn: () => claimClaimableBalances(options),
  });
};
