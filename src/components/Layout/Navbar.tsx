import Image from 'next/image';
import Link from 'next/link';
import { Popover } from '@headlessui/react';

import { routes } from '@/constants';

import logo from '@/assets/logo.svg';
import hamburger from '@/assets/icons/hamburger.svg';
import helmet from '@/assets/icons/helmet.svg';

import { BulletinBoardCard } from '@/components/BulletinBoard/BulletinBoardCard';
import { BulletinBoardDropdown } from '@/components/BulletinBoard/BulletinBoardDropdown';
import { BulletinBoardDisclosure } from '@/components/BulletinBoard/BulletinBoardDisclosure';

export const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-neutral-gray h-14 lg:border lg:mx-0.5 lg:mt-0.5 relative">
      <Link href="/" className="px-3 flex items-center">
        <Image src={logo} alt="logo" className="w-[117.1px]" />
      </Link>

      <DesktopMenu />

      <div className="flex">
        <Link
          href="/"
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

      <BulletinBoardDropdown className={menuLinkStyle}>{bulletinItems}</BulletinBoardDropdown>
    </div>
  );
};

const dropdownLinkStyles =
  'w-full flex items-center font-nanum font-bold px-[22px] py-[19.5px] text-neutral-gray uppercase';

const MobileMenu = () => {
  return (
    <Popover className="flex lg:hidden">
      <Popover.Button className="bg-neutral-gray px-2.5">
        <Image src={hamburger} alt="menu" />
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
          <Image src={helmet} alt="helmet" />
        </div>
      </Popover.Panel>
    </Popover>
  );
};
