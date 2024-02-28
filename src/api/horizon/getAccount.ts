import { useQuery } from '@tanstack/react-query';

import { IS_DEV } from '@/config';
import { Account } from '@/types/horizon';

import { handleResponse, horizon } from '..';

type GetAccountOptions = {
  publicKey?: string;
};

export const getAccount = ({ publicKey }: GetAccountOptions): Promise<Account> => {
  const url = IS_DEV ? horizon.TESTNET : horizon.PUBLIC;
  return fetch(`${url}/accounts/${publicKey}`).then(handleResponse);
};

export const useGetAccount = <SelectType = Account>(
  options: GetAccountOptions & { select?: (data: Account) => SelectType }
) => {
  return useQuery({
    queryKey: ['horizon', 'account', options],
    queryFn: () => getAccount(options),
    enabled: !!options.publicKey,
    select: options.select,
  });
};
