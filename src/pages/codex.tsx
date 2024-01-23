import React from 'react';
import Image from 'next/image';

import { Link } from '@/components/Link';
import { RulesCard } from '@/components/RulesCard';
import { Carousel } from '@/features/codex';

import codexBg1 from '@/assets/marketing/codex-bg-1.png';
import codexBg2 from '@/assets/marketing/codex-bg-2.png';
import codexBg3 from '@/assets/marketing/codex-bg-3.png';

import vanillaPack from '@/assets/marketing/vanilla-pack.png';
import horrorPack from '@/assets/marketing/horror-pack.png';

export default function Codex() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Collections />
      <Characters />
      <DiveIn />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="relative max-w-[1412px] mx-auto shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-2">
        <Image
          src={codexBg1}
          alt=""
          className="justify-self-end md:order-1 -z-10 drop-shadow-2xl"
        />

        <div className="px-4 self-center justify-self-end md:max-w-[33rem]">
          <h1 className="italic">Background</h1>

          <p className="text-body-lg first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">B</span> lossom Bernice Bredenblach (Bee for short) has
            returned to Earth after spending several years in space learning to communicate with an
            alien species. The aliens have revealed to Bee that there is an ancient and evil
            organization on Earth called the Dragons of Destiny (DOD) that has been plotting
            humanity’s demise for centuries. 
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Image src={codexBg2} alt="" className="-z-10 self-end md:-mt-[25%]" />

        <p className="text-body-lg px-4 self-center md:max-w-[33rem] md:mb-40">
          Bee is tasked with recruiting the help of various warriors, spies, and other brave
          individuals to aid her in finding the organization’s leader and destroying the DODs before
          their nefarious schemes end the world as we know it.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <Image
          src={codexBg3}
          alt=""
          className="-z-10 md:order-1 md:max-w-none md:w-[150%] md:-mt-[50%] md:-ml-[25%]"
        />

        <p className="md:max-w-[34rem] px-4 self-center justify-self-end md:mt-32 md:-mr-24 text-body-lg">
          Of course, this immense task is fraught with peril. The Dragons of Destiny have the
          ability to travel through time and space, entering into other dimensions to enlist the
          help of ancient and supernatural monsters and beasts. 
        </p>
      </div>

      <div className="mx-2 mb-2 mt-14 lg:mt-28 bg-primary-red flex justify-center">
        <p className=" text-neutral-white font-capitolina italic text-center text-descriptor lg:text-descriptor-lg px-3 py-9 lg:py-10 max-w-5xl">
          Each siege in RPCiege sees Bee and our hero (that’s you!) leveraging the power of Soroban
          to overcome the challenges set upon them by the DODs as they work to bring everlasting
          peace to Planet Earth.
        </p>
      </div>
    </div>
  );
};

const Collections = () => {
  return (
    <div className="mt-44 md:mt-32 max-w-5xl mx-auto px-4">
      <h1 className="italic hidden md:block">Collections</h1>

      <div className="mt-10 gap-10 grid md:grid-cols-2">
        <div className="flex flex-col items-center">
          <Image src={vanillaPack} alt="" className="rotate-3" />

          <RulesCard className="-mt-16 -z-10 pt-24 pb-12">
            <h5>RPCiege Vanilla</h5>
            <p className="mt-3 md:mt-5 text-body-lg">
              The first siege of RPCiege saw our heroes vanquish several evil overlords, instated by
              the Syndicate of Scoundrels, that had been ruling over the realm’s territories with
              tyranny and warfare for decades. 
            </p>
          </RulesCard>
        </div>

        <div className="flex flex-col items-center">
          <Image src={horrorPack} alt="" className="-rotate-3" />

          <RulesCard className="-mt-16 -z-10 pt-24 pb-12">
            <h5>Midnight Madness</h5>
            <p className="mt-3 md:mt-5 text-body-lg">
              Following the defeat of the ruthless overlords, a different type of monster emerged.
              In the second siege, our heroes fought against ghouls, zombies, and werewolves to
              defend the lives of innocent villagers.
            </p>
          </RulesCard>
        </div>
      </div>
    </div>
  );
};

const Characters = () => {
  return (
    <div className="mt-28 md:mt-36 relative">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-h1-bold lg:text-h1-bold-lg">Characters</h1>

        <p className="text-body-lg max-w-[37.5rem] md:mt-10">
          The realm of RPCiege is full of unique characters, both hero and villain, all with
          colorful backstories. Here are some of the personas you may encounter as you embark upon
          your own journey.
        </p>
      </div>

      <Carousel className="mt-10" />
    </div>
  );
};

const DiveIn = () => {
  return (
    <div className="mt-72 sm:mt-28 mb-28 sm:mb-44 px-4 flex flex-col items-center text-center max-w-3xl mx-auto">
      <h3>Ready to dive in?</h3>

      <p className="mt-2 sm:mt-5">
        Step forth into the world of RPCiege, where coding challenges await. Harness the power of
        smart contract development on Soroban and fight for everlasting peace!
      </p>

      <div className="mt-7 sm:mt-5 w-full flex justify-center max-sm:flex-col gap-4">
        <Link href="/" className="btn btn-primary">
          Play RPCiege
        </Link>

        <Link href="/" className="btn btn-primary">
          Claim Cards
        </Link>
      </div>
    </div>
  );
};
