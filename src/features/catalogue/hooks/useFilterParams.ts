import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

export type Sort = 'name' | 'power' | 'modifier';
export type FilterParams = { pack?: any; type?: any; sort?: Sort };

export function useFilterParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const setParams = (params: FilterParams) => {
    const newParams = filterUndefined({ ...router.query, ...params });

    router.replace({ query: newParams }, undefined, {
      shallow: true,
    });
  };

  const params = useMemo(() => {
    const pack = searchParams.has('pack') ? (searchParams.get('pack') as any) : undefined;
    const type = searchParams.has('type') ? (searchParams.get('type') as any) : undefined;
    const sort = searchParams.has('sort') ? (searchParams.get('sort') as Sort) : undefined;

    return filterUndefined({
      pack,
      type,
      sort,
    });
  }, [searchParams]);

  return [params, setParams] as const;
}

const filterUndefined = <T extends Record<string, unknown>>(obj: T) => {
  Object.keys(obj).forEach((key) => obj[key] ?? delete obj[key]);
  return obj;
};
