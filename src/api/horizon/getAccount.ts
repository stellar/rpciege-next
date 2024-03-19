import { useQuery } from '@tanstack/react-query';

import { Account } from '@/types/horizon';

import { HORIZON_API, handleResponse } from '..';

type GetAccountOptions = {
  publicKey?: string;
};

export const getAccount = ({ publicKey }: GetAccountOptions): Promise<Account> => {
  return fetch(`${HORIZON_API}/accounts/${publicKey}`).then(handleResponse);
};

export const useGetAccount = <SelectType = Account>(
  options: GetAccountOptions & { enabled?: boolean; select?: (data: Account) => SelectType }
) => {
  return useQuery({
    queryKey: ['horizon', 'account', options],
    queryFn: () => getAccount(options),
    enabled: !!options.publicKey && options.enabled,
    select: options.select,
  });
};
