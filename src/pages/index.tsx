import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import { CardSleeve } from '@/components/CardSleeve';

import pamphlet1 from '@/assets/marketing/pamphlet-1.png';
import pamphlet1Lg from '@/assets/marketing/pamphlet-1-lg.png';

import cardFrame from '@/assets/marketing/card-frame.png';
import cardFrameLg from '@/assets/marketing/card-frame-lg.png';
import discordCard from '@/assets/marketing/discord-card.png';

import pamphlet2 from '@/assets/marketing/pamphlet-2.png';
import pamphlet2Lg from '@/assets/marketing/pamphlet-2-lg.png';

import communityBg from '@/assets/marketing/community-bg.png';
import communityBgLg from '@/assets/marketing/community-bg-lg.png';

import youtubeCard from '@/assets/marketing/youtube-card.png';
import twitterCard from '@/assets/marketing/twitter-card.png';
import blogCard from '@/assets/marketing/blog-card.png';

import fca00cTv from '@/assets/marketing/fca00c-tv.png';

import { Banner } from '@/features/landing';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <ShapeTheFuture />
      <GatherYourArmy />
      <ForgeAlliances />
      <PrepareForTheSiege />
      <Community />
      <Fca00c />
    </main>
  );
}

const ShapeTheFuture = () => {
  return (
    <div className="mt-8 relative text-body-lg max-w-max mx-auto isolate -z-10">
      <Image
        src={pamphlet1}
        alt=""
        className="relative object-cover min-w-max pointer-events-none left-1/2 translate-x-[calc(-50%-8px)] sm:hidden"
        style={{ height: pamphlet1.height }}
        aria-hidden="true"
      />

      <Image
        src={pamphlet1Lg}
        alt=""
        className="relative object-cover min-w-max pointer-events-none left-1/2 translate-x-[calc(-50%-20px)] hidden sm:block"
        style={{ height: pamphlet1Lg.height }}
        aria-hidden="true"
      />

      <div className="pamphlet-content flex flex-col pt-8 pl-10 sm:pt-14 sm:px-5 md:px-10 lg:px-20">
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
    <div className="mt-20 flex flex-col items-center gap-4">
      <h2 className="text-[0.35rem] sm:text-[0.6rem] lg:text-[1rem] leading-none text-center">
        <span className="text-[11em] block mr-[0.5em]">Gather</span>
        <span className="text-[8.77em] italic align-top leading-[0.75]">Your</span>
        <span className="text-[12.93em] font-extrabold uppercase">Army</span>
      </h2>

      <div className="relative flex flex-col items-center">
        <Image
          src={cardFrame}
          alt=""
          aria-hidden="true"
          className="object-cover [object-position:calc(50%+10px)] md:hidden"
          style={{ height: cardFrame.height }}
        />

        <Image
          src={cardFrameLg}
          alt=""
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
            <Link href="/" className="button button-primary">
              Play RPCiege
            </Link>
            <Link href="/" className="button button-primary">
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
    <div className="mt-32 relative max-w-[1100px] mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-y-4">
      <div className="px-4 max-w-[800px]">
        <h1>
          <span className="italic">Forge</span> <span className="font-extrabold">Alliances</span>
        </h1>

        <div className="mt-10 lg:ml-24">
          <span className="drop-cap">W</span>

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

      <Link href="/" className="rotate-12 py-8">
        <CardSleeve>
          <Image src={discordCard} alt="Discord invite" />
        </CardSleeve>
      </Link>
    </div>
  );
};

// Random leaderboard data
const leaderboard = [
  ['GDCIR2JGAOQV2LWC3PQVLUSQAUXHZ7BBULCB2CC5KMCWSSDUKIXPFM77', '1576599152'],
  ['GCD3CADJSJUQ67YDOY6ULBAZVNVVPK6BUYDZJJNWSINIUJ7V37EXFFT6', '1675839629'],
  ['GAFIRIZGJS4EVTFYHS56U3G2CQC5HC5MQG2RS6ARB4KQ4ABMEHF7B4RJ', '1678677215'],
  ['GA5PJMXCSVGZG767NSWTZGIT6M7PV5JT3MRH7EZ472TGR4GWXFFUSB52', '1642454335'],
  ['GDFI4POKUN7QWT3CIY3LNT5ONOHX67UP7T3ZTJWJPGYZFOHA5Y3SH6RZ', '1665614576'],
  ['GB3MA4K6OVM7UDUUKN4XROK5XKDJRR2SWHO2BZ72T74GAIWSUTBCYOHT', '1555117775'],
];

const PrepareForTheSiege = () => {
  return (
    <div className="relative">
      <Image
        src={pamphlet2}
        alt=""
        className="relative object-cover min-w-max pointer-events-none left-1/2 translate-x-[calc(-50%+8px)] sm:hidden"
        style={{ height: pamphlet2.height }}
        aria-hidden="true"
      />

      <Image
        src={pamphlet2Lg}
        alt=""
        className="relative object-cover min-w-max pointer-events-none left-1/2 translate-x-[calc(-50%+4px)] hidden sm:block"
        style={{ height: pamphlet2Lg.height }}
        aria-hidden="true"
      />

      <div className={clsx('pamphlet-content-clockwise pt-6 pl-2', 'sm:pt-11 sm:px-7')}>
        <h3>Prepare for the siege!</h3>

        <div className="mt-32 flex flex-wrap gap-x-12 gap-y-4 max-w-4xl">
          <table className="flex-1 pamphlet-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Address</th>
                <th>Timestamp</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map(([key, timestamp], i) => {
                return (
                  <tr key={key}>
                    <td>{i + 1}</td>
                    <td>{`${key.substring(0, 5)}...${key.substring(key.length - 5)}`}</td>
                    <td>{timestamp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <p className="flex-1 basis-3/5 mt-4 first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">B</span>race yourselves, adventurers! New sieges are released
            periodically, where you will leverage Soroban, Stellar's smart contract platform, to
            complete a set of skirmishes. Or put your mettle to the test by revisiting previous
            games and claiming the top spot in the corresponding leaderboard.
          </p>
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  return (
    <div className="mt-12 sm:-mt-56 relative flex justify-center">
      <Image
        src={communityBg}
        alt=""
        style={{ height: communityBg.height }}
        className="object-cover mx-auto drop-shadow-[0px_0px_20px_#000] pointer-events-none absolute sm:hidden -z-10"
        aria-hidden="true"
      />

      <Image
        src={communityBgLg}
        alt=""
        style={{ height: communityBgLg.height }}
        className="object-cover mx-auto drop-shadow-[0px_0px_20px_#000] pointer-events-none hidden sm:block -z-10"
        aria-hidden="true"
      />

      <div className="pt-20 sm:absolute sm:pt-72">
        <p className="text-neutral-white font-capitolina text-4xl font-extrabold text-center max-w-xs sm:max-w-none">
          Don’t worry, your allies are always by your side!
        </p>

        <div className="mt-7.5 flex flex-col items-center gap-4 sm:flex-row sm:gap-12">
          <Link href="/" className="-rotate-12 relative">
            <CardSleeve>
              <Image src={youtubeCard} alt="youtube card" />
            </CardSleeve>
          </Link>

          <Link href="/" className="sm:mb-[20%]">
            <CardSleeve>
              <Image src={twitterCard} alt="youtube card" />
            </CardSleeve>
          </Link>

          <Link href="/" className="rotate-12">
            <CardSleeve>
              <Image src={blogCard} alt="youtube card" />
            </CardSleeve>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Fca00c = () => {
  return (
    <div className="mt-24 text-center">
      <h3>Want more games?</h3>

      <p className="mt-5">
         Check out Fast, Cheap & Out of Control to find more coding challenges on Soroban.
      </p>

      <Image
        src={fca00cTv}
        alt=""
        className="mx-auto object-cover pointer-events-none -z-10 w-auto h-[500px] -mt-12 sm:h-[1000px] sm:-mt-40"
        aria-hidden="true"
      />
    </div>
  );
};
