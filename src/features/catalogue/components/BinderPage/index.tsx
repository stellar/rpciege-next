import React from 'react';
import clsx from 'clsx';

import cardSleeveTexture from '@/assets/card-sleeve-texture.png';
import paperTexture from '@/assets/paper-texture.png';

const BinderPageBase = (props: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={clsx(
        'relative rounded-md py-2 pr-[5%] pl-[10%] bg-neutral-black/15 shadow-2xl shadow-black/50',
        props.className
      )}
    >
      <div className="grid grid-cols-3 grid-rows-3 gap-y-2.5 h-full">{props.children}</div>

      <figure
        className="absolute inset-0 pointer-events-none bg-cover opacity-75"
        style={{ backgroundImage: `url(${cardSleeveTexture.src})` }}
      />

      <figure
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `url(${paperTexture.src})`, backgroundSize: '1024px' }}
      />
    </div>
  );
};

const BinderPageItem = (props: React.ComponentPropsWithoutRef<'button'>) => {
  return (
    <button
      {...props}
      className={clsx(
        'p-2.5 pt-4 border border-white/60 [border-style:solid_dashed_dashed_dashed]',
        props.className
      )}
    />
  );
};

export const BinderPage = Object.assign(BinderPageBase, { Item: BinderPageItem });
