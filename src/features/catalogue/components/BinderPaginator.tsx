import clsx from 'clsx';

import { ArrowRight } from '@/components/Icons';

import { useBinderContext } from '..';

type BinderPaginatorProps = React.ComponentPropsWithoutRef<'div'>;

export const BinderPaginator = (props: BinderPaginatorProps) => {
  const { pagination } = useBinderContext();

  const isFirstPage = pagination.active === pagination.range[0];
  const isLastPage = pagination.active === pagination.range[pagination.range.length - 1];

  return (
    <div {...props} className={clsx('grid grid-cols-3 max-w-max gap-4', props.className)}>
      {!isFirstPage ? (
        <button onClick={pagination.previous} className="justify-self-end">
          <ArrowRight className="rotate-180" />
        </button>
      ) : null}

      <div
        className="grid grid-cols-5 gap-4 col-start-2"
        style={{
          gridTemplateColumns: `repeat(${Math.min(5, pagination.range.length)}, minmax(0, 1fr))`,
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

      {!isLastPage ? (
        <button onClick={pagination.next}>
          <ArrowRight />
        </button>
      ) : null}
    </div>
  );
};
