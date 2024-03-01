import { useQuery } from '@tanstack/react-query';

import { CardMetadata } from '@/types/card';

import { handleResponse } from '..';

type GetCardMetadataOptions = {
  code: string;
};

const getCardMetadata = async (options: GetCardMetadataOptions): Promise<CardMetadata> => {
  return fetch(`https://assets.rpciege.com/${options.code}.json`).then(handleResponse);
};

export const useGetCardMetadata = (options: GetCardMetadataOptions) => {
  return useQuery({
    queryKey: ['rpciege', 'get', 'card', 'metadata', options],
    queryFn: () => getCardMetadata(options),
  });
};
