import { useMutation } from '@tanstack/react-query';

import { api, handleResponse } from '..';

type BumpTransactionFeeOptions = {
  token: string;
  tx: string;
};

export const bumpTransactionFee = (
  options: BumpTransactionFeeOptions
): Promise<{ xdr: string }> => {
  return fetch(`${api.RPCIEGE}/claim`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${options.token}`,
    },
    body: JSON.stringify({ tx: options.tx }),
  }).then(handleResponse);
};

export const useBumpTransactionFee = () => {
  return useMutation({
    mutationKey: ['rpciege', 'bump', 'transaction', 'fee'],
    mutationFn: bumpTransactionFee,
  });
};
