import { useMutation } from '@tanstack/react-query';

import { api, handleResponse } from '..';

type GetGiveawayCodeOptions = {
  pubkey: string;
  xdr: string;
};

export const getGiveawayCode = (options: GetGiveawayCodeOptions): Promise<string> => {
  return fetch(`${api.RPCIEGE}/giveaway`, {
    method: 'POST',
    body: JSON.stringify({ tx: options.xdr, pubkey: options.pubkey }),
  }).then(handleResponse);
};

export const useGetGiveawayCode = () => {
  return useMutation({
    mutationKey: ['rpciege', 'get', 'giveaway', 'code'],
    mutationFn: getGiveawayCode,
  });
};
