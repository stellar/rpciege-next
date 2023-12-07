import Image from 'next/image';
import clsx from 'clsx';

import styles from './styles.module.css';

import pamphlet from '@/assets/marketing/pamphlet.png';
import pamphletLg from '@/assets/marketing/pamphlet-lg.png';

type PamphletBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PamphletBase = (props: PamphletBaseProps) => {
  return (
    <div className={clsx('relative flex flex-col items-center', props.className)}>
      <Image
        src={pamphlet}
        alt=""
        className="pointer-events-none translate-x-4 sm:hidden max-w-none"
        aria-hidden="true"
      />

      <Image
        src={pamphletLg}
        alt=""
        className="pointer-events-none translate-x-2 hidden sm:block max-w-none"
        aria-hidden="true"
      />

      {props.children}
    </div>
  );
};

type PamphletTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

const PamphletTitle = (props: PamphletTitleProps) => {
  return <h3 {...props} className={clsx(styles.PamphletTitle, props.className)} />;
};

type PamphletContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const PamphletContent = (props: PamphletContentProps) => {
  return <div {...props} className={clsx(styles.PamphletContent, props.className)} />;
};

export const Pamphlet = Object.assign(PamphletBase, {
  Content: PamphletContent,
  Title: PamphletTitle,
});
