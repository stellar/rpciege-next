import { CardMetadata } from '@/types/card';

import styles from './styles.module.css';
import clsx from 'clsx';
import React from 'react';

type BinderRowViewProps = React.ComponentPropsWithoutRef<'table'>;

const BinderRowViewBase = (props: BinderRowViewProps) => {
  return (
    <table {...props} className={clsx(styles.Binder__table, props.className)}>
      <thead>
        <tr>
          <th>Name</th>
          <th>
            P<span className="max-lg:hidden">ower</span>
          </th>
          <th>
            M<span className="max-lg:hidden">odifier</span>
          </th>
          <th>Pack</th>
        </tr>
      </thead>

      <tbody>{props.children}</tbody>
    </table>
  );
};

type ItemProps = { card: CardMetadata } & React.ComponentPropsWithoutRef<'tr'>;

const Item = (props: ItemProps) => {
  const { card, ...restProps } = props;

  return (
    <tr {...restProps}>
      <td>
        <div className="flex gap-4 items-center">
          <img src={card.image} className="w-12 max-md:hidden rounded" width={48} height={72} />
          {card.name}
        </div>
      </td>
      <td>{card.power}</td>
      <td>{card.modifier}</td>
      {/* <td>{card.pack}</td> */}
    </tr>
  );
};

const Loader = () => {
  return (
    <BinderRowView>
      {Array.from({ length: 9 }, (_, i) => (
        <tr key={i}>
          <td colSpan={4}>
            <div className="rounded-md bg-black/20 animate-pulse h-10 md:h-20" />
          </td>
        </tr>
      ))}
    </BinderRowView>
  );
};

export const BinderRowView = Object.assign(BinderRowViewBase, { Item, Loader });
