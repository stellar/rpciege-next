import clsx from 'clsx';

import styles from './styles.module.css';

type RulesCardProps = {
  number?: number;
  children?: React.ReactNode;
  className?: string;
};

export const RulesCard = (props: RulesCardProps) => {
  return (
    <div
      className={clsx(
        'bg-neutral-white outline outline-1 -outline-offset-1 outline-neutral-gray border-neutral-gray flex flex-col items-center h-full',
        props.number && 'pb-14',
        styles.RulesCard,
        props.className
      )}
    >
      <div className="absolute top-0 left-0 w-7 h-7 rounded-br-full border-b border-r border-inherit bg-inherit" />
      <div className="absolute top-0 right-0 w-7 h-7 rounded-bl-full border-b border-l border-inherit bg-inherit" />
      <div className="absolute bottom-0 left-0 w-7 h-7 rounded-tr-full border-t border-r border-inherit bg-inherit" />
      <div className="absolute bottom-0 right-0 w-7 h-7 rounded-tl-full border-t border-l border-inherit bg-inherit" />

      {props.children}

      {props.number ? (
        <div
          className={clsx(
            'absolute -bottom-8',
            'font-capitolina font-bold text-2xl rounded-full border-[3px] border-neutral-gray bg-neutral-white w-16 h-16 flex items-center justify-center'
          )}
        >
          {props.number}
        </div>
      ) : null}
    </div>
  );
};
