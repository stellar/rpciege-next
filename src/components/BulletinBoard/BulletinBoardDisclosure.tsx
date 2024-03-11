import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';

import { Caret } from '@/components/Icons';

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
            <Caret className={clsx('transition-transform', open && 'rotate-180')} />
          </Disclosure.Button>

          <Disclosure.Panel className="p-5 space-y-4">{children}</Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
