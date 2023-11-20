import { Popover } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';

import caret from '@/assets/icons/caret.svg';

type BulletinBoardDropdownProps = React.ComponentPropsWithoutRef<typeof Popover.Button>;

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

          <Popover.Panel className="absolute -inset-x-[1px] top-[calc(100%+1px)] p-5 space-y-4 border-x border-b border-neutral-gray bg-neutral-white shadow-2xl z-10">
            {children}
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
