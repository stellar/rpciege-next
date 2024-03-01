import { useMemo } from 'react';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { Link } from '@/components/Link';
import { Caret } from '@/components/Icons';

import { BinderTab } from './BinderTab';

type Link = {
  label: string;
  href: string;
};

const LINKS: Link[] = [
  {
    label: 'Card Catalogue',
    href: '/cards',
  },
  {
    label: 'My Cards',
    href: '/my-cards',
  },
];

type BinderTabsProps = React.ComponentPropsWithoutRef<'div'>;

export const BinderTabs = (props: BinderTabsProps) => {
  return (
    <div {...props}>
      <MobileBinderTabs links={LINKS} className="lg:hidden" />
      <DesktopBinderTabs links={LINKS} className="max-lg:hidden" />
    </div>
  );
};

type DesktopBinderTabsProps = { links: Link[] } & React.ComponentPropsWithoutRef<'div'>;

const DesktopBinderTabs = ({ links, ...props }: DesktopBinderTabsProps) => {
  const { asPath } = useRouter();

  const selectedLink = useMemo(
    () => links.find((link) => link.href === asPath) ?? links[0],
    [asPath]
  );

  return (
    <div
      {...props}
      className={clsx(
        'flex-1 flex *:flex-1 *:text-nowrap *:max-w-48 -space-x-4 isolate',
        props.className
      )}
    >
      {links.map((link, index) => (
        <Link key={link.href} href={link.href} style={{ zIndex: -1 * index }}>
          <BinderTab isActive={selectedLink === link}>{link.label}</BinderTab>
        </Link>
      ))}
    </div>
  );
};

type MobileBinderTabsProps = { links: Link[] } & React.ComponentPropsWithoutRef<
  typeof Disclosure.Button
>;

const MobileBinderTabs = ({ links, ...props }: MobileBinderTabsProps) => {
  const { asPath } = useRouter();

  const selectedLink = useMemo(
    () => links.find((link) => link.href === asPath) ?? links[0],
    [asPath]
  );

  return (
    <Disclosure as="div" {...props} className={props.className}>
      {({ open }) => (
        <>
          <Disclosure.Button className="w-full text-body-lg font-bold flex items-center justify-center gap-2 py-3 px-8 border-b border-neutral-gray">
            {selectedLink.label}
            <Caret className={clsx('transition-transform size-4', open && 'rotate-180')} />
          </Disclosure.Button>

          <Disclosure.Panel>
            {({ close }) => (
              <>
                {links.map((link) => (
                  <Link
                    key={link.href}
                    className="text-body-lg font-bold text-neutral-black block py-3 px-8 border-b border-neutral-gray"
                    href={link.href}
                    onClick={() => close()}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
