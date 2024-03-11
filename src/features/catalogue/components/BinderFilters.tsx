import { Popover } from '@headlessui/react';
import clsx from 'clsx';

import { Caret, Close } from '@/components/Icons';
import { useFilterParams, Sort, FilterParams } from '../hooks/useFilterParams';

export const BinderFilters = () => {
  const [filters, setFilters] = useFilterParams();

  return (
    <div className="relative flex items-center gap-4">
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-2 p-1">
              <div className="text-h6 font-nanum uppercase">Filter:</div>
              <Caret className={clsx('transition-transform', open && 'rotate-180')} />
            </Popover.Button>

            <Popover.Panel className="max-w-[14rem] absolute top-full mt-2 bg-neutral-white z-50 rounded-md border border-black p-6 w-full text-h6 uppercase font-nanum space-y-4">
              <p className="flex gap-2 justify-between">
                Type{' '}
                {filters.type ? (
                  <ClearButton onClick={() => setFilters({ type: undefined })} />
                ) : null}
              </p>

              <div className="ml-4 space-y-4 *:cursor-pointer">
                <FilterButton params={{ type: 'Land' }}>Land</FilterButton>
                <FilterButton params={{ type: 'Space' }}>Space</FilterButton>
              </div>

              <p className="flex gap-2 justify-between">
                Pack{' '}
                {filters.pack ? (
                  <ClearButton onClick={() => setFilters({ pack: undefined })} />
                ) : null}
              </p>

              <div className="ml-4 space-y-4 *:cursor-pointer">
                <FilterButton params={{ pack: 'Midnight Madness' }}>Midnight Madness</FilterButton>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <Popover>
        {({ open }) => (
          <>
            <Popover.Button className="flex items-center gap-2 p-1">
              <div className="text-h6 font-nanum uppercase">Sort By: {filters.sort ?? 'Name'}</div>
              <Caret className={clsx('transition-transform ', open && 'rotate-180')} />
            </Popover.Button>

            <Popover.Panel className="max-w-[14rem] absolute top-full right-0 mt-2 bg-neutral-white z-50 rounded-md border border-black p-6 w-full text-h6 font-nanum space-y-4">
              <SortButton sort="name">Name</SortButton>
              <SortButton sort="power">Power</SortButton>
              <SortButton sort="modifier">Modifier</SortButton>
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
};

type ClearButtonProps = React.ComponentPropsWithoutRef<'button'>;

const ClearButton = (props: ClearButtonProps) => {
  return (
    <button
      className="uppercase text-neutral-black/50 flex items-center gap-1"
      onClick={props.onClick}
    >
      Clear <Close />
    </button>
  );
};

type FilterButtonProps = { params: FilterParams } & React.ComponentPropsWithoutRef<'button'>;

const FilterButton = (props: FilterButtonProps) => {
  const [filters, setFilters] = useFilterParams();

  const isActive = Object.entries(props.params).every(
    ([key, value]) => (filters as any)[key] === value
  );

  return (
    <button
      {...props}
      className={clsx(
        'w-full uppercase text-left flex gap-6 items-center',
        isActive && 'text-primary-red'
      )}
      onClick={() => setFilters(props.params)}
    >
      {props.children}
    </button>
  );
};

type SortButtonProps = {
  children?: React.ReactNode;
  sort?: Sort;
};

const SortButton = (props: SortButtonProps) => {
  const [filters, setFilters] = useFilterParams();

  if (filters.sort === props.sort) {
    return (
      <div className="w-full uppercase text-left flex gap-6 items-center justify-between">
        <p className="text-primary-red">{props.children}</p>
        <ClearButton onClick={() => setFilters({ sort: undefined })} />
      </div>
    );
  }

  return (
    <button
      onClick={() => setFilters({ sort: props.sort })}
      className="w-full uppercase text-left flex gap-6 items-center"
    >
      {props.children}
    </button>
  );
};
