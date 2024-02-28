import { useQuery } from '@tanstack/react-query';
import { handleResponse } from '..';

type GetCardMetadataOptions = {
  code: string;
};

export type CardMetadata = {
  code: string;
  name: string;
  desc: string;
  power: number;
  modifier: number;
  image: string;
  video: string;
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
