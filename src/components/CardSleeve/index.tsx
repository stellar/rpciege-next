import styles from './styles.module.css';

import cardSleeve from '@/assets/marketing/card-sleeve.png';
import clsx from 'clsx';

type CardSleeveProps = {
  children: React.ReactNode;
  className?: string;
};

export const CardSleeve = (props: CardSleeveProps) => {
  return (
    <div className={clsx('group relative max-w-max p-1 pt-6', styles.CardSleeve, props.className)}>
      <figure
        className="absolute inset-0 drop-shadow-xl bg-cover pointer-events-none z-10 border border-neutral-white/40"
        style={{ backgroundImage: `url(${cardSleeve.src})` }}
      />

      <div className="absolute inset-x-4 h-[1px] bg-neutral-white/40 top-3 z-10" />

      <div className="transition-transform group-hover:-translate-y-12 duration-300">
        {props.children}
      </div>
    </div>
  );
};
