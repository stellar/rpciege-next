import { Disclosure } from '@headlessui/react';
import Image from 'next/image';
import clsx from 'clsx';

import caretOutline from '@/assets/icons/caret-outline.svg';

type BulletinBoardDisclosureProps = React.ComponentPropsWithoutRef<typeof Disclosure.Button>;

export const BulletinBoardDisclosure = ({
  className,
  children,
  ...props
}: BulletinBoardDisclosureProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button
            {...props}
            className={clsx(className, 'flex items-center justify-between')}
          >
            Bulletin Board
            <Image
              src={caretOutline}
              alt="dropdown caret"
              className={clsx('transition-transform', open && 'rotate-180')}
            />
          </Disclosure.Button>

          <Disclosure.Panel className="p-5 space-y-4">{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
