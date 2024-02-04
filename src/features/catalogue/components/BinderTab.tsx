import clsx from 'clsx';

import cardSleeveTexture from '@/assets/card-sleeve-texture.png';
import paperTexture from '@/assets/paper-texture.png';

type BinderTabProps = {
  isActive?: boolean;
} & React.ComponentPropsWithoutRef<'div'>;

export const BinderTab = (props: BinderTabProps) => {
  const { isActive, children, ...restProps } = props;

  return (
    <div {...restProps} className={clsx('relative p-1 pr-3 ', restProps.className)}>
      <div className={clsx('flex isolate', isActive ? '*:bg-primary-red' : '*:bg-neutral-gray')}>
        <div className="flex-1 py-1 px-2 pr-0 text-lg text-center font-nanum uppercase text-neutral-white font-bold rounded-l-md border-2 border-r-0 border-white/40">
          {children}
        </div>

        <div className="w-6 skew-x-12 -ml-2 rounded-r-md border-2 border-l-0 border-white/40 -z-10" />
      </div>

      <figure
        className="absolute inset-0 pointer-events-none bg-cover opacity-50 bg-black/20 rounded-md border-2 border-white/40"
        style={{
          backgroundImage: `url(${cardSleeveTexture.src})`,
          backgroundSize: '512px',
          clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0% 100%)',
        }}
      />

      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url(${paperTexture.src})` }}
      />
    </div>
  );
};
