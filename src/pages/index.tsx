import Image from 'next/image';

import pamphlet from '@/assets/marketing/pamphlet.png';
import pamphletLg from '@/assets/marketing/pamphlet-lg.png';
import cardFrame from '@/assets/marketing/card-frame.png';
import cardFrameLg from '@/assets/marketing/card-frame-lg.png';
import horrorPack from '@/assets/marketing/horror-pack.png';
import discordCard from '@/assets/marketing/discord-card.png';
import clsx from 'clsx';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* <ShapeTheFuture /> */}
      {/* <GatherYourArmy /> */}
      {/* <ForgeAlliances /> */}
    </main>
  );
}

const ShapeTheFuture = () => {
  return (
    <div className="relative text-body-lg max-w-max mx-auto isolate mb-52">
      <Image
        src={pamphlet}
        alt="pamphlet"
        className="object-cover sm:hidden pointer-events-none"
        style={{ height: pamphlet.height }}
        aria-hidden="true"
      />

      <Image
        src={pamphletLg}
        alt="pamphlet"
        className="object-cover hidden sm:block pointer-events-none"
        style={{ height: pamphletLg.height }}
        aria-hidden="true"
      />

      <Image
        src={horrorPack}
        alt="pamphlet"
        className="absolute -bottom-52 left-0 rotate-[-70deg] pointer-events-none"
        aria-hidden="true"
      />

      <div className="pamphlet-content pt-8 sm:pt-14 sm:px-3 lg:px-8 flex flex-col">
        <h3>Shape the future!</h3>

        <div
          className={clsx(
            'grid mt-[72px] max-w-[290px] gap-10',
            'sm:mt-[101px] sm:max-w-[1000px] sm:grid-cols-2 sm:flex-1'
          )}
        >
          <div className="space-y-10">
            <div>
              <h5>Vanquish villainous evildoers</h5>
              <p className="mt-2.5">
                Become a hero of legends and immerse yourself in lore and art.
              </p>
            </div>

            <div>
              <h5>Master smart contract development</h5>
              <p className="mt-2.5">Gain wisdom in smart contract development fundamentals.</p>
            </div>
          </div>

          <div className="space-y-10 sm:my-auto">
            <div>
              <h5>Hone your Rust knowledge</h5>
              <p className="mt-2.5">
                Sharpen your coding savvy by completing bite-sized challenges in Rust.
              </p>
            </div>

            <div>
              <h5>Collect coveted playing cards</h5>
              <p className="mt-2.5">
                Amass NFT playing cards dedicated to the feats of your fellow champions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GatherYourArmy = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-[0.35rem] sm:text-[0.6rem] lg:text-[1rem] leading-none text-center">
        <span className="text-[11em] block mr-[0.5em]">Gather</span>
        <span className="text-[8.77em] italic align-top leading-[0.75]">Your</span>
        <span className="text-[12.93em] font-extrabold uppercase">Army</span>
      </h2>

      <div className="relative flex flex-col items-center">
        <Image
          src={cardFrame}
          alt="Card Frame"
          aria-hidden="true"
          className="object-cover [object-position:calc(50%+10px)] md:hidden"
          style={{ height: cardFrame.height }}
        />

        <Image
          src={cardFrameLg}
          alt="Card Frame"
          aria-hidden="true"
          className="object-cover hidden md:block"
          style={{ height: cardFrameLg.height }}
        />

        <div className="absolute inset-0 top-64 max-w-[291px] md:top-[700px] md:max-w-[690px] px-2 mx-auto text-center">
          <p className="md:text-body-lg">
            In the realm of RPCiege, every skirmish conquered is not just a victory but a badge of
            honor. Each challenge overcome earns the player an NFT playing card they can show off to
            display their impressive coding acumen.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-7 mt-12 md:mt-15">
            <Link href="/" className="button">
              Play RPCiege
            </Link>
            <Link href="/" className="button">
              Claim Cards
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ForgeAlliances = () => {
  return (
    <div className="relative max-w-[1100px] mx-auto mb-[1000px] flex flex-col items-center">
      <div className="px-4 max-w-[800px] lg:mr-auto">
        <h1 className="">
          <span className="italic">Forge</span> <span className="font-extrabold">Alliances</span>
        </h1>

        <div className="mt-10 lg:ml-24">
          <span className="float-left leading-[0.6] mr-2 text-h2 font-capitolina heading-outline text-primary-red">
            W
          </span>

          <p>
            <span className="text-h5 font-capitolina">hat is success if you can’t celebrate </span>
            <span className="block text-body-lg md:text-h5 md:font-capitolina">
              (or boast about it) amongst your friends?
            </span>
          </p>

          <p className="mt-4 text-body-lg">
            Join the Stellar Developer Discord and select the Coding Games and Challenges role to
            revel in victory, commiserate in hardship, and unite against the realm’s nefarious
            villains
          </p>
        </div>
      </div>

      <Link href="/" className="absolute top-full lg:top-0 lg:-right-24">
        <Image
          src={discordCard}
          alt="Discord invite"
          className="relative left-1/2 -translate-x-[calc(50%-40px)] min-w-max"
          style={{ height: discordCard.height }}
        />
      </Link>
    </div>
  );
};
