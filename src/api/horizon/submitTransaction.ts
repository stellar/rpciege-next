import { useMutation } from '@tanstack/react-query';

import { handleResponse, horizon } from '..';

type SubmitTransactionOptions = {
  xdr: string;
};

export const submitTransaction = (options: SubmitTransactionOptions): Promise<null> => {
  const body = new FormData();
  body.append('tx', options.xdr);

  return fetch(`${horizon.TESTNET}/transactions`, {
    method: 'POST',
    body,
  }).then(handleResponse);
};

export const useSubmitTransaction = () => {
  return useMutation({
    mutationKey: ['horizon', 'submit', 'transaction'],
    mutationFn: submitTransaction,
  });
};
