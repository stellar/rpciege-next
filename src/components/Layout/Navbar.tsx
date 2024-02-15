import { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/components/Link';
import { Popover } from '@headlessui/react';

import { links, routes } from '@/constants';

import { useWallet } from '@/hooks/useWallet';

import { BulletinBoardCard } from '@/components/BulletinBoard/BulletinBoardCard';
import { BulletinBoardDropdown } from '@/components/BulletinBoard/BulletinBoardDropdown';
import { BulletinBoardDisclosure } from '@/components/BulletinBoard/BulletinBoardDisclosure';
import { SignInModal } from '@/components/SignInModal';

import { Helmet, Hamburger, Caret } from '@/components/Icons';

import logo from '@/assets/logo.svg';
import clsx from 'clsx';

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

const menuLinkStyle =
  'flex gap-2 items-center text-center uppercase font-nanum font-bold px-11 text-neutral-gray';

const bulletinItems = [
  <BulletinBoardCard
    key="siege-5"
    date="December 31st"
    title="Siege 5, Skirmishes 11-14: Space Continuum"
    href="/siege-5"
  />,
];

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex divide-x divide-neutral-gray border-x border-neutral-gray">
      <Link href={routes.GETTING_STARTED} className={menuLinkStyle}>
        Get Started
      </Link>

      <Link href={routes.CODEX} className={menuLinkStyle}>
        Codex
      </Link>

      <Link href={routes.GIVEWAY} className={menuLinkStyle}>
        Giveaway
      </Link>

      {/* <BulletinBoardDropdown className={menuLinkStyle}>{bulletinItems}</BulletinBoardDropdown> */}
    </div>
  );
};

const dropdownLinkStyles =
  'w-full flex items-center font-nanum font-bold px-[22px] py-[19.5px] text-neutral-gray uppercase';

const MobileMenu = () => {
  return (
    <Popover className="flex lg:hidden">
      <Popover.Button className="bg-neutral-gray px-2.5">
        <Hamburger className="size-8" />
      </Popover.Button>

      <Popover.Panel className="absolute inset-x-0 top-14 bg-neutral-white shadow-2xl divide-y divide-neutral-gray border-b border-neutral-gray z-50">
        <Link href={routes.GETTING_STARTED} className={dropdownLinkStyles}>
          Get Started
        </Link>

        <Link href={routes.CODEX} className={dropdownLinkStyles}>
          Codex
        </Link>

        <BulletinBoardDisclosure className={dropdownLinkStyles}>
          {bulletinItems}
        </BulletinBoardDisclosure>

        <div className={dropdownLinkStyles}>
          <Helmet className="size-7" />
        </div>
      </Popover.Panel>
    </Popover>
  );
};

const SignInButton = () => {
  const wallet = useWallet();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {wallet.publicKey ? (
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button className="h-full font-nanum font-bold uppercase flex items-center px-7.5 gap-1">
                <p className="overflow-hidden overflow-ellipsis max-w-[10ch]">{wallet.publicKey}</p>
                <Caret className={clsx('transition-transform size-3 ', open && 'rotate-180')} />
              </Popover.Button>

              <Popover.Panel className="w-full max-w-[14rem] absolute top-full right-0 mt-2 bg-neutral-white z-50 rounded-md border border-black p-6 text-h6 font-nanum space-y-4 *:block *:text-neutral-gray">
                <Link href={routes.CARDS}>My Cards</Link>

                <button onClick={() => wallet.disconnect()}>Disconnect</button>
              </Popover.Panel>
            </>
          )}
        </Popover>
      ) : (
        <button
          className="mr-4 max-lg:hidden flex items-center gap-4"
          onClick={() => setIsOpen(true)}
        >
          <p className="text-h6 font-nanum uppercase">Sign In</p>
          <Helmet className="size-7" />
        </button>
      )}

      <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
