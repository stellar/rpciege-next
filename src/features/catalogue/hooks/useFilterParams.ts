import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import { CardPack, CardType } from '@/types/card';

export type Sort = 'name' | 'power' | 'modifier';
export type FilterParams = { pack?: CardPack; type?: CardType; sort?: Sort };

export function useFilterParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setParams = (params: FilterParams) => {
    const newParams = filterUndefined({ ...router.query, ...params });

    router.replace({ query: newParams }, undefined, {
      shallow: true,
    });
  };

  const pack = searchParams.has('pack') ? (searchParams.get('pack') as CardPack) : undefined;
  const type = searchParams.has('type') ? (searchParams.get('type') as CardType) : undefined;
  const sort = searchParams.has('sort') ? (searchParams.get('sort') as Sort) : undefined;

  const params = filterUndefined({
    pack,
    type,
    sort,
  });

  return [params, setParams] as const;
}

const filterUndefined = <T extends Record<string, unknown>>(obj: T) => {
  Object.keys(obj).forEach((key) => obj[key] ?? delete obj[key]);
  return obj;
};
