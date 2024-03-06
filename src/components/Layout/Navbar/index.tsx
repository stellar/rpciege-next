import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { Popover } from '@headlessui/react';
import clsx from 'clsx';

import { links, routes } from '@/constants';

import { useWallet } from '@/hooks/useWallet';

import {
  BulletinBoardCard,
  BulletinBoardCardProps,
} from '@/components/BulletinBoard/BulletinBoardCard';
import { BulletinBoardDropdown } from '@/components/BulletinBoard/BulletinBoardDropdown';
import { BulletinBoardDisclosure } from '@/components/BulletinBoard/BulletinBoardDisclosure';
import { SignInModal } from '@/components/SignInModal';

import { Helmet, Hamburger, Caret } from '@/components/Icons';

import logo from '@/assets/logo.svg';

import styles from './styles.module.css';

export const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-neutral-gray h-14 lg:border lg:mx-0.5 lg:mt-0.5 relative">
      <Link href={routes.HOME} className="px-3 flex items-center">
        <Image src={logo} alt="logo" className="w-[117.1px]" />
      </Link>

      <DesktopMenu />

      <div className="flex">
        <SignInButton />

        <Link
          href={links.RPCIEGE_BOOKLET}
          className="font-nanum font-bold uppercase flex items-center px-7.5 border-l border-neutral-gray bg-primary-red text-neutral-black"
        >
          Play Game
        </Link>

        <MobileMenu />
      </div>
    </nav>
  );
};

const bulletinItems: BulletinBoardCardProps[] = [
  { date: 'December 31st', title: 'Siege 5, Skirmishes 11-14: Space Continuum', href: '/siege-5' },
];

const DesktopMenu = () => {
  return (
    <div
      className={clsx(
        'hidden lg:flex divide-x divide-neutral-gray border-x border-neutral-gray',
        styles.DesktopMenu
      )}
    >
      <Link href={routes.GETTING_STARTED}>Get Started</Link>
      <Link href={routes.CODEX}>Codex</Link>
      <Link href={routes.GIVEWAY}>Giveaway</Link>

      {/* <BulletinBoardDropdown >
        {bulletinItems.map((item) => (
          <BulletinBoardCard {...item} />
        ))}
      </BulletinBoardDropdown> */}
    </div>
  );
};

const MenuLink = (props: React.ComponentPropsWithoutRef<typeof Link>) => {
  const router = useRouter();

  const pathname = typeof props.href === 'string' ? props.href : props.href.pathname;

  const isActive = router.pathname.includes(pathname ?? '');

  return (
    <Popover.Button
      {...props}
      as={Link}
      className={clsx(
        'relative',
        isActive && 'after:absolute after:inset-y-0 after:left-0 after:w-1 after:bg-primary-red'
      )}
    />
  );
};

const MobileMenu = () => {
  const wallet = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Popover className="flex lg:hidden">
        <Popover.Button className="bg-neutral-gray px-2.5">
          <Hamburger className="size-8" />
        </Popover.Button>

        <Popover.Panel
          className={clsx(
            'absolute inset-x-0 top-14 bg-neutral-white shadow-2xl divide-y divide-neutral-gray border-b border-neutral-gray z-50',
            styles.DropdownMenu
          )}
        >
          <MenuLink href={routes.GETTING_STARTED}>Get Started</MenuLink>
          <MenuLink href={routes.CODEX}>Codex</MenuLink>
          <MenuLink href={routes.GIVEWAY}>Giveaway</MenuLink>

          {/* <BulletinBoardDisclosure>
            {bulletinItems.map((item) => (
              <BulletinBoardCard {...item} />
            ))}
          </BulletinBoardDisclosure> */}

          {wallet.publicKey ? (
            <>
              <MenuLink href={routes.MY_CARDS}>My Cards</MenuLink>
              <button onClick={() => wallet.disconnect()}>Disconnect</button>
            </>
          ) : (
            <button onClick={() => setIsOpen(true)}>
              <p className="text-h6 font-nanum uppercase">Sign In</p>
              <Helmet className="size-7" />
            </button>
          )}
        </Popover.Panel>
      </Popover>

      <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const SignInButton = () => {
  const wallet = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="max-lg:hidden">
        {wallet.publicKey ? (
          <Popover className="relative h-full">
            {({ open }) => (
              <>
                <Popover.Button className={styles.SignInButton}>
                  <p className="overflow-hidden overflow-ellipsis max-w-[10ch]">
                    {wallet.publicKey}
                  </p>
                  <Caret className={clsx('transition-transform size-3 ', open && 'rotate-180')} />
                </Popover.Button>

                <Popover.Panel
                  className={clsx(
                    'w-full max-w-[14rem] absolute top-full right-0 bg-neutral-white z-50 border border-black text-h6 font-nanum',
                    styles.DropdownMenu
                  )}
                >
                  <MenuLink href={routes.MY_CARDS}>My Cards</MenuLink>
                  <button onClick={() => wallet.disconnect()}>Disconnect</button>
                </Popover.Panel>
              </>
            )}
          </Popover>
        ) : (
          <button className={styles.SignInButton} onClick={() => setIsOpen(true)}>
            <p>Sign In</p>
            <Helmet className="size-7" />
          </button>
        )}
      </div>

      <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
