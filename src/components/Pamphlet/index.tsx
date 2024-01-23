import clsx from 'clsx';

import paperTexture from '@/assets/paper-texture.png';

import styles from './styles.module.css';

type PamphletBaseProps = {
  className?: string;
  children?: React.ReactNode;
};

export const PamphletBase = (props: PamphletBaseProps) => {
  return (
    <div
      className={clsx(
        'relative max-w-[78rem] min-h-[50rem] mx-auto flex flex-col',
        props.className
      )}
    >
      <div className="absolute -top-2 bottom-3 left-0 -right-3 bg-neutral-white -rotate-[0.25deg] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] -z-10" />
      <div className="absolute -top-1 left-0 -right-1.5 bottom-2 bg-neutral-white shadow-[0px_0px_8px_rgba(0,0,0,0.25)] -z-10" />
      <div
        className={clsx(
          'absolute inset-0 rotate-[0.25deg] bg-neutral-white shadow-[0px_8px_16px_rgba(0,0,0,0.5)] -z-10',
          styles.PamphletPage
        )}
      />

      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url(${paperTexture.src})` }}
      />

      {props.children}

      <div className="ml-auto mr-6 mb-6 mt-auto font-capitolina text-2xl font-bold rounded-full border-2 border-neutral-gray size-16 grid place-items-center">
        2
      </div>
    </div>
  );
};

type PamphletTitleProps = {
  className?: string;
  children?: React.ReactNode;
};

const PamphletTitle = (props: PamphletTitleProps) => {
  return (
    <>
      <h3
        {...props}
        className={clsx(
          'flex items-center px-8 my-8 sm:px-12 max-w-6xl w-full self-center text-balance',
          props.className
        )}
      />
      <div className="bg-checkerboard-red h-[14.5px] sm:ml-10" />
    </>
  );
};

type PamphletContentProps = {
  className?: string;
  children?: React.ReactNode;
};

const PamphletContent = (props: PamphletContentProps) => {
  return (
    <div
      {...props}
      className={clsx('px-8 my-16 sm:px-12 max-w-6xl w-full self-center', props.className)}
    />
  );
};

export const Pamphlet = Object.assign(PamphletBase, {
  Content: PamphletContent,
  Title: PamphletTitle,
});
