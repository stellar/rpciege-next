import React from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

import cardSleeve from '@/assets/card-sleeve-texture.png';

type CardSleeveProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardSleeve = (props: CardSleeveProps) => {
  const child = React.Children.only(props.children);

  return (
    <div className={clsx('group p-1 pt-6 max-w-max isolate', styles.CardSleeve, props.className)}>
      <figure
        className="absolute inset-0 bg-cover pointer-events-none z-10 border border-neutral-white/40"
        style={{ backgroundImage: `url(${cardSleeve.src})` }}
      />

      <div className="absolute inset-x-4 h-[1px] bg-neutral-white/40 top-3 z-10" />

      {React.cloneElement(child as React.ReactElement, {
        className: clsx(
          (child as React.ReactElement).props.className,
          'transition-transform group-hover:-translate-y-12 duration-300'
        ),
      })}
    </div>
  );
};
