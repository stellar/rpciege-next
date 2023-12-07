import Image from 'next/image';

import { RulesCard } from '@/features/getting-started';
import { CardSleeve } from '@/components/CardSleeve';
import { Pamphlet } from '@/components/Pamphlet';

import knight from '@/assets/marketing/knight.png';

import rulesHelmet from '@/assets/marketing/rules-helmet.png';
import rulesBooklet from '@/assets/marketing/rules-booklet.png';
import rulesLeaderboard from '@/assets/marketing/rules-leaderboard.png';

import orbitalCannon from '@/assets/marketing/orbital-cannon.png';
import vikingRaider from '@/assets/marketing/viking-raider.png';

import preparation from '@/assets/marketing/preparation.png';

import equipment from '@/assets/marketing/equipment.png';

import horrorPack from '@/assets/marketing/horror-pack.png';

import sorobanKnights from '@/assets/marketing/soroban-knights.png';

export default function GettingStarted() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Rules />
      <Equipment />
      <Preparation />
      <CollectingCards />
      <Soroban />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="shadow-2xl pt-16 pb-2">
      <div className="flex items-center justify-center gap-y-14 gap-x-7.5 px-2 flex-col lg:flex-row">
        <div className="flex-1 max-w-[35rem]">
          <h1 className="italic">Introduction</h1>

          <p className="mt-4 first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">B</span> ecome a hero of the ages in RPCiege, a game unlike
            any other, where your strength of mind is the only thing standing between innocent lives
            and the beasts and monsters of the realm.
          </p>

          <p className="mt-4">
            In RPCiege, sieges are released periodically and are composed of a series of individual
            games called skirmishes that teach the basics of Soroban smart contract development.
            Each skirmish presents a small coding challenge in Rust that must be completed for
            players to be awarded NFT playing cards. 
          </p>
        </div>

        <Image src={knight} alt="" className="shrink min-w-0" />
      </div>

      <div className="mt-14 lg:mt-24 lg:px-2">
        <p className="bg-primary-red text-neutral-white font-capitolina italic text-center text-descriptor lg:text-descriptor-lg px-2 py-15 lg:py-6">
          So dive into the world of RPCiege and let your feats reverberate throughout the realm! 
        </p>
      </div>
    </div>
  );
};

const Rules = () => {
  return (
    <div className="relative px-4 pt-60 lg:pt-32">
      <CardSleeve className="absolute top-20 right-[calc(50%+10rem)] lg:top-64 lg:right-[calc(50%+35rem)] rotate-[24deg] w-[218px] lg:w-max">
        <Image src={orbitalCannon} alt="" />
      </CardSleeve>

      <CardSleeve className="absolute top-0 left-[calc(50%+10rem)] lg:left-[calc(50%+35rem)] -rotate-45 w-[218px] lg:w-max">
        <Image src={vikingRaider} alt="" />
      </CardSleeve>

      <div className="max-w-md lg:max-w-[55rem] mx-auto">
        <h2 className="text-[0.4rem] sm:text-[0.6rem] lg:text-[1rem] text-center">
          <span className="text-[11em] block mr-[0.75em]">Rules</span>
          <span className="text-[8.77em] italic align-top mr-[0.3em] ">of</span>
          <span className="text-[12.93em] font-extrabold uppercase">Play</span>
        </h2>

        <p className="text-center text-body-lg">
          Learn about upcoming sieges by keeping an eye out for announcements in the coding games
          channels in the Stellar Developer Discord or by following Soroban on Twitter.
        </p>
      </div>

      <div className="mt-15 grid lg:grid-cols-3 gap-y-16 gap-x-8 max-w-sm lg:max-w-[62rem] mx-auto">
        <RulesCard number={1}>
          <Image src={rulesHelmet} alt="" className="h-40 object-contain" />

          <p>
            Learn about upcoming sieges by keeping an eye out for announcements in the coding games
            channels in the Stellar Developer Discord or by following Soroban on Twitter.
          </p>
        </RulesCard>

        <RulesCard number={2}>
          <Image src={rulesBooklet} alt="" className="h-40 object-contain" />

          <p>New siege instructions will be added to the RPCiege booklet as they are released.</p>
        </RulesCard>

        <RulesCard number={3}>
          <Image src={rulesLeaderboard} alt="" className="h-40 object-contain" />

          <p>
            Follow the booklet’s instructions carefully to complete each skirmish, receive NFT
            playing card(s), and earn your spot on the RPCiege leaderboard.
          </p>
        </RulesCard>
      </div>
    </div>
  );
};

const Equipment = () => {
  return (
    <Pamphlet className="mt-24 -rotate-2 text-body-lg isolate">
      <Pamphlet.Content>
        <Pamphlet.Title>Equipment</Pamphlet.Title>

        <div className="mt-16 grid lg:grid-cols-2 gap-x-4 gap-y-10 max-w-2xl lg:max-w-none">
          <div>
            <p className="sm:text-h5 sm:font-capitolina">
              Gather your allies, your weapons, your wits, for your fate in RPCiege depends on them!
            </p>

            <Image src={equipment} alt="" className="pointer-events-none hidden lg:block" />
          </div>

          <div className="flex flex-col">
            <div>
              <h5>What you’ll need for success:</h5>

              <ul className="list-disc ml-6">
                <li>A computer. Even a tiny computer will do.</li>
                <li>Your fingers, or whatever you use to type.</li>
                <li>The ability to read.</li>
                <li>An adventurous spirit and powerful smarts.</li>
              </ul>
            </div>

            <div className="mt-4 lg:my-auto">
              <h5>But for real:</h5>

              <ul className="list-disc ml-6">
                <li>A Rust toolchain</li>
                <li>
                  An editor that supports Rust: many editors support Rust, including Visual Studio
                  Code.
                </li>
                <li>
                  Soroban CLI: the command line interface to Soroban that allows you to build,
                  deploy, and interact with smart contracts, configure identities, generate
                  keypairs, manage networks, and more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Pamphlet.Content>
    </Pamphlet>
  );
};

const Preparation = () => {
  return (
    <div className="mt-16 md:mt-20 pt-12 max-w-max mx-auto shadow-2xl">
      <div className="px-4 max-w-md md:max-w-6xl mx-auto">
        <h2 className="text-h1 lg:text-h1-lg italic">Preparation</h2>

        <h5 className="mt-2.5 md:mt-10">
          Each skirmish is unique, but the following two items apply to all:
        </h5>

        <div className="mt-16 md:mt-9 grid gap-x-7.5 gap-y-9 max-w-4xl ml-auto md:grid-cols-2">
          <RulesCard>
            Always use our official RPC endpoint when enacting your attacks:
            https://futurenet.rpciege.com:443, along with the `FUTURENET` network passphrase `Test
            SDF Future Network ; October 2022`
          </RulesCard>

          <RulesCard>
            For each gameplay contract invocation, you’ll want to include as the function’s final
            argument the `Address` of your own Mainnet Stellar public key where you’d like to
            receive your pack of commemorative NFT cards. We will issue NFTs as claimable balances
            to this address only if it exists as a funded account on the `PUBLIC` network.
          </RulesCard>
        </div>
      </div>

      <div className="relative">
        <Image
          src={preparation}
          alt=""
          className="relative md:-mt-96 pointer-events-none object-cover md:h-[906px]"
          aria-hidden="true"
        />

        <div className="bg-checkerboard h-[14.5px] w-full absolute bottom-0" />
      </div>
    </div>
  );
};

const CollectingCards = () => {
  return (
    <div className="mt-14 lg:mt-52 relative max-w-[68rem] mx-auto px-4">
      <h1>
        <span className="italic">Collecting </span>
        <span className="font-extrabold">Cards</span>
      </h1>

      <div className="lg:ml-24 mt-6">
        <div className="max-w-[35rem]">
          <p className="first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">E</span>very siege has its own unique set of NFT playing
            cards available for players to collect. And each skirmish overcome awards the player
            between one and three cards from that siege’s expansion pack. 
          </p>

          <p className="mt-4">
            Cards depict a courageous hero, villainous villain, useful (or useless) tool (I’m
            looking at you, Orbital Cannon), or other various characters.
          </p>
        </div>

        <p className="max-w-[40rem] text-h5 mt-7 lg:mt-10 font-capitolina">
          Read more about the characters and lore on our{' '}
          <a className="text-primary-red">World page</a>.
        </p>
      </div>

      <RulesCard className="mt-7 lg:mt-9 text-body-lg lg:text-h5 text-center lg:font-capitolina px-7.5 py-10 lg:px-16 lg:py-11">
        You can claim your NFT cards wherever you wish. However, we’ve built a simple claim page
        over at rpciege.com/claim to aid in the claiming process.
      </RulesCard>

      <div className="absolute left-[calc(50%+22rem)] -top-28">
        <CardSleeve className="absolute rotate-[30deg] w-max ml-28 mt-28">
          <Image src={vikingRaider} alt="" />
        </CardSleeve>

        <CardSleeve className="absolute rotate-[15deg] w-max">
          <Image src={orbitalCannon} alt="" />
        </CardSleeve>
      </div>

      <Image
        src={horrorPack}
        alt=""
        className="absolute w-[200px] top-[90%] -left-20 sm:w-max sm:top-[85%] sm:-left-48 rotate-[-20deg]"
      />
    </div>
  );
};

const Soroban = () => {
  return (
    <Pamphlet className="mt-20 sm:mt-32 -rotate-2 text-body-lg">
      <Pamphlet.Content>
        <Pamphlet.Title>Soroban</Pamphlet.Title>

        <div className="mt-20 sm:flex items-center gap-x-16">
          <div className="max-w-[31rem] basis-9/12">
            <p>
              And, of course, it would be neglectful to not talk about the backbone of RPCiege, the
              Soroban smart contracts platform, which is designed to work alongside and integrate
              with the Stellar blockchain. Soroban smart contracts are written in Rust and compiled
              into Wasm for deployment.
            </p>

            <p className="mt-5 md:text-h5 md:font-capitolina">
              If you’re new to Soroban and want to get your feet wet before diving into RPCiege, the
              Getting Started section in the Soroban docs is a great place to begin your journey.
            </p>
          </div>

          <Image src={sorobanKnights} alt="" className="min-w-0" />
        </div>
      </Pamphlet.Content>
    </Pamphlet>
  );
};
