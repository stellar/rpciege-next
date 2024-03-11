import { useQuery } from '@tanstack/react-query';
import { parse } from 'toml';

import { handleResponse } from '..';
import { links } from '@/constants';

import { TomlResponse } from '@/types/toml';

export const getToml = (): Promise<TomlResponse> => {
  return fetch(`${links.FCAOOC}/.well-known/stellar.toml`)
    .then(handleResponse)
    .then((toml) => parse(toml));
};

export const useGetToml = <SelectType = TomlResponse>(options?: {
  select?: (data: TomlResponse) => SelectType;
}) => {
  return useQuery({ queryKey: ['toml', 'fca00c'], queryFn: getToml, select: options?.select });
};
