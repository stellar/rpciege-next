import { Popover } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';

import caret from '@/assets/icons/caret.svg';

type BulletinBoardDropdownProps = React.ComponentPropsWithoutRef<typeof Popover.Button> & {
  children?: React.ReactNode;
};

export const BulletinBoardDropdown = ({
  className,
  children,
  ...props
}: BulletinBoardDropdownProps) => {
  return (
    <Popover className="flex">
      {({ open }) => (
        <>
          <Popover.Button {...props} className={clsx(className, 'flex items-center gap-2')}>
            Bulletin Board
            <Image
              src={caret}
              alt="dropdown caret"
              className={clsx('transition-transform', open && 'rotate-180')}
            />
          </Popover.Button>

          <Popover.Panel className="absolute inset-x-0 top-[calc(100%+1px)] bg-neutral-white shadow-2xl z-10">
            <div className="p-7.5 flex gap-5 *:basis-96 *:shrink-0 overflow-x-auto">{children}</div>
            <div className="bg-checkerboard-red h-[14.5px]" />
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
