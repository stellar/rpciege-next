import { useMutation } from '@tanstack/react-query';

import { ClaimableBalance, HorizonResponse } from '@/types/horizon';

import { api, handleResponse } from '..';

type Record = {
  code: string;
  id: string;
  issuer: string;
};

type ClaimClaimableBalancesOptions = {
  publicKey: string;
  records: Record[];
};

export const claimClaimableBalances = (
  options: ClaimClaimableBalancesOptions
): Promise<HorizonResponse<ClaimableBalance>> => {
  return fetch(api.RPCIEGE, { method: 'POST', body: JSON.stringify(options) }).then(handleResponse);
};

export const useClaimClaimableBalances = (options: ClaimClaimableBalancesOptions) => {
  return useMutation({
    mutationKey: ['rpciege', 'claim', 'claimable_balances', options],
    mutationFn: () => claimClaimableBalances(options),
  });
};
