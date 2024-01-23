import Image from 'next/image';
import Link from 'next/link';

import { Banner } from '@/features/landing';
import { CardSleeve } from '@/components/CardSleeve';
import { Pamphlet } from '@/components/Pamphlet';

import horrorPack from '@/assets/marketing/horror-pack.png';

import cardFrame from '@/assets/marketing/card-frame.png';
import discordCard from '@/assets/marketing/discord-card.png';

import communityBg from '@/assets/marketing/community-bg.png';
import communityBgLg from '@/assets/marketing/community-bg-lg.png';

import youtubeCard from '@/assets/marketing/youtube-card.png';
import twitterCard from '@/assets/marketing/twitter-card.png';
import blogCard from '@/assets/marketing/blog-card.png';

import fca00cTv from '@/assets/marketing/fca00c-tv.png';

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
    <Pamphlet className="mt-16 relative -rotate-2">
      <Pamphlet.Title>Shape the future!</Pamphlet.Title>

      <Pamphlet.Content className="text-body-lg grid gap-10 sm:gap-10 sm:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h5>Vanquish villainous evildoers</h5>
            <p className="mt-2.5">Become a hero of legends and immerse yourself in lore and art.</p>
          </div>

          <div>
            <h5>Master smart contract development</h5>
            <p className="mt-2.5">Gain wisdom in smart contract development fundamentals.</p>
          </div>
        </div>

        <div className="space-y-10 sm:mt-40">
          <div>
            <h5>Hone your Rust knowledge</h5>
            <p className="mt-2.5">
              Sharpen your coding savvy by completing bite-sized challenges in Rust.
            </p>
          </div>

          <div>
            <h5>Collect coveted NFT playing cards</h5>
            <p className="mt-2.5">
              Amass NFT playing cards dedicated to the feats of your fellow champions.
            </p>
          </div>
        </div>
      </Pamphlet.Content>

      <Image
        src={horrorPack}
        alt=""
        className="absolute right-1/2 bottom-[-20%] max-sm:w-[230px] sm:mr-64 rotate-[-70deg]"
      />
    </Pamphlet>
  );
};

const GatherYourArmy = () => {
  return (
    <div className="mt-72 sm:mt-56 flex flex-col items-center">
      <h2 className="text-[0.35rem] sm:text-[0.6rem] lg:text-[1rem] leading-none text-center">
        <span className="text-[11em] block mr-[0.5em]">Gather</span>
        <span className="text-[8.77em] italic align-top leading-[0.75]">Your</span>
        <span className="text-[12.93em] font-extrabold uppercase">Army</span>
      </h2>

      <Image
        src={cardFrame}
        alt=""
        className="mt-4 translate-x-[3.5%] max-w-none max-md:w-[26rem] -mb-32 md:-mb-[28rem] pointer-events-none"
      />

      <div className="relative">
        <div className="absolute inset-y-0 -inset-x-6 md:-inset-x-64 border-decoration border-[3.25rem] md:border-[6.25rem] -z-10" />

        <div className="max-w-[291px] md:max-w-[690px] mx-auto text-center px-2 pt-28 pb-20 md:pt-[28rem] md:pb-32">
          <p className="md:text-body-lg">
            In the realm of RPCiege, every skirmish conquered is not just a victory but a badge of
            honor. Each challenge completed earns the player an NFT playing card they can show off
            to display their impressive coding acumen.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-7 mt-12 md:mt-15">
            <Link href="/" className="btn btn-primary">
              Play RPCiege
            </Link>

            <Link href="/" className="btn btn-primary">
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
    <Pamphlet className="mt-32 z-10 rotate-3">
      <Pamphlet.Title>Prepare for the siege!</Pamphlet.Title>

      <Pamphlet.Content className="flex flex-wrap gap-x-12 gap-y-4">
        <table className="flex-1 table-pamphlet">
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

        <p className="flex-1 basis-3/5 mt-4 first-line:text-h5 first-line:font-capitolina max-w-[36rem]">
          <span className="drop-cap">B</span>race yourselves, adventurers! New sieges are released
          periodically, where you will leverage Soroban, the Stellar network's smart contract
          platform, to complete a set of skirmishes. Or put your mettle to the test by revisiting
          previous games and claiming the top spot in the corresponding leaderboard.
        </p>
      </Pamphlet.Content>
    </Pamphlet>
  );
};

const Community = () => {
  return (
    <div className="mt-12 sm:-mt-56 relative flex flex-col items-center">
      <Image
        src={communityBg}
        alt=""
        className="drop-shadow-[0px_0px_20px_#000] pointer-events-none absolute sm:hidden max-w-none -z-10"
        aria-hidden="true"
      />

      <Image
        src={communityBgLg}
        alt=""
        className="drop-shadow-[0px_0px_20px_#000] pointer-events-none max-sm:hidden max-w-none"
        aria-hidden="true"
      />

      <div className="pt-20 sm:absolute sm:pt-72">
        <p className="text-neutral-white font-capitolina text-4xl font-extrabold text-center max-sm:max-w-xs">
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
        className="mx-auto object-cover pointer-events-none h-[500px] -mt-12 sm:h-[1000px] sm:-mt-40"
        aria-hidden="true"
      />
    </div>
  );
};
