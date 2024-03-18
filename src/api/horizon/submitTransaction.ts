import { useMutation } from '@tanstack/react-query';

import { HORIZON_API, handleResponse } from '..';

type SubmitTransactionOptions = {
  xdr: string;
};

export const submitTransaction = (options: SubmitTransactionOptions): Promise<null> => {
  const body = new FormData();
  body.append('tx', options.xdr);

  return fetch(`${HORIZON_API}/transactions`, {
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
