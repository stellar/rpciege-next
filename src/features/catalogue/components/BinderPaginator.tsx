import clsx from 'clsx';

import { ArrowRight } from '@/components/Icons';

import { useBinderContext } from '..';

type BinderPaginatorProps = React.ComponentPropsWithoutRef<'div'>;

export const BinderPaginator = (props: BinderPaginatorProps) => {
  const { pagination } = useBinderContext();

  const isFirstPage = pagination.active === pagination.range[0];
  const isLastPage = pagination.active === pagination.range[pagination.range.length - 1];
  const isMultiPage = pagination.range.length > 1;

  if (pagination.range.length === 0) return null;

  return (
    <div
      {...props}
      className={clsx('grid grid-cols-[1rem_1fr_1rem] max-w-max gap-4', props.className)}
    >
      {!isFirstPage && isMultiPage ? (
        <button onClick={pagination.previous} className="justify-self-end">
          <ArrowRight className="rotate-180" />
        </button>
      ) : null}

      <div
        className="grid gap-4 col-start-2"
        style={{
          gridTemplateColumns: `repeat(${Math.min(7, pagination.range.length)}, minmax(0, 1fr))`,
        }}
      >
        {pagination.range.map((page, index) => {
          if (page === 'dots') return '...';
          return (
            <button
              key={`${page}-${index}`}
              onClick={() => pagination.setPage(page)}
              className={clsx(pagination.active === page && 'text-primary-red')}
            >
              {page}
            </button>
          );
        })}
      </div>

      {!isLastPage && isMultiPage ? (
        <button onClick={pagination.next}>
          <ArrowRight />
        </button>
      ) : null}
    </div>
  );
};
