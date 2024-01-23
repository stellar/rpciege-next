import Image from 'next/image';

import { links, routes } from '@/constants';

import { Link } from '@/components/Link';
import { RulesCard } from '@/components/RulesCard';
import { CardSleeve } from '@/components/CardSleeve';
import { Pamphlet } from '@/components/Pamphlet';

import knight from '@/assets/marketing/knight.png';

import rulesHelmet from '@/assets/marketing/rules-helmet.png';
import rulesBooklet from '@/assets/marketing/rules-booklet.png';
import rulesLeaderboard from '@/assets/marketing/rules-leaderboard.png';

import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';

import yellowD12 from '@/assets/dice/yellow-d12.png';
import redD10 from '@/assets/dice/red-d10.png';
import redD20 from '@/assets/dice/red-d20.png';

import preparation from '@/assets/marketing/preparation.png';

import equipment from '@/assets/marketing/equipment.png';

import horrorPack from '@/assets/marketing/horror-pack.png';

import sorobanKnights from '@/assets/marketing/soroban-knights.png';

import siegePeople from '@/assets/marketing/siege-people.png';

export default function GettingStarted() {
  return (
    <main className="overflow-hidden">
      <Banner />
      <Rules />
      <Equipment />
      <Preparation />
      <CollectingCards />
      <Soroban />
      <StellarNetwork />
      <DiveIn />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="max-w-[1412px] mx-auto shadow-2xl pt-16 pb-2">
      <div className="grid lg:grid-cols-[1fr_auto] place-items-center max-w-max mx-auto gap-y-14 gap-x-7.5 px-2">
        <div className="max-w-[38rem]">
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

        <Image src={knight} alt="" />
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
      <div className="absolute top-24 lg:top-64 right-1/2 mr-[200px] lg:mr-[576px]">
        <CardSleeve className="rotate-[24deg]">
          <Image
            src={orbitalCannon}
            alt=""
            className="w-[218px] lg:w-[291px] rounded-xl max-w-none"
          />
        </CardSleeve>

        <Image
          src={yellowD12}
          alt=""
          className="absolute w-[35%] -top-[5%] -right-[20%] pointer-events-none"
        />
        <Image
          src={redD10}
          alt=""
          className="absolute w-[35%] -top-[15%] -right-[60%] pointer-events-none"
        />
      </div>

      <div className="absolute top-0 left-1/2 ml-[160px] lg:ml-[576px]">
        <CardSleeve className="-rotate-45">
          <Image
            src={vikingRaider}
            alt=""
            className="w-[218px] lg:w-[291px] rounded-xl max-w-none"
          />
        </CardSleeve>

        <Image
          src={redD20}
          alt=""
          className="absolute w-[40%] top-1/2 -left-[10%] pointer-events-none"
        />
      </div>

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
            channels in the <Link href={links.DISCORD}>Stellar Developer Discord</Link> or by
            following
            <Link href={links.TWITTER}>Soroban on Twitter</Link>.
          </p>
        </RulesCard>

        <RulesCard number={2}>
          <Image src={rulesBooklet} alt="" className="h-40 object-contain" />

          <p>
            New siege instructions will be added to the{' '}
            <Link href={links.RPCIEGE_BOOKLET}>RPCiege booklet</Link> as they are released.
          </p>
        </RulesCard>

        <RulesCard number={3}>
          <Image src={rulesLeaderboard} alt="" className="h-40 object-contain" />

          <p>
            Follow the booklet’s instructions carefully to complete each skirmish, receive NFT
            playing card(s), and earn your spot on the{' '}
            <Link href="https://rpciege.com/leaderboard?field=timestamp&skirmish=1">
              RPCiege leaderboard
            </Link>
            .
          </p>
        </RulesCard>
      </div>
    </div>
  );
};

const Equipment = () => {
  return (
    <Pamphlet className="mt-24 -rotate-2 text-body-lg isolate">
      <Pamphlet.Title>Equipment</Pamphlet.Title>

      <Pamphlet.Content className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
        <div>
          <p className="sm:text-h5 sm:font-capitolina">
            Gather your allies, your weapons, your wits, for your fate in RPCiege depends on them!
          </p>

          <Image src={equipment} alt="" className="pointer-events-none max-lg:hidden" />
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
                Soroban CLI: the command line interface to Soroban that allows you to build, deploy,
                and interact with smart contracts, configure identities, generate keypairs, manage
                networks, and more.
              </li>
            </ul>
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
            receive your pack of commemorative NFT playing cards. We will issue these NFT playing
            cards as claimable balances to this address only if it exists as a funded account on the
            `PUBLIC` network.
          </RulesCard>
        </div>
      </div>

      <div className="relative pointer-events-none">
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
            cards available for players to collect. And each completed skirmish entitles the player
            to receive between one and three cards from that siege's expansion pack.
          </p>

          <p className="mt-4">
            Cards depict a courageous hero, villainous villain, useful (or useless) tool (I’m
            looking at you, Orbital Cannon), or other various characters.
          </p>
        </div>

        <p className="max-w-[40rem] text-h5 mt-7 lg:mt-10 font-capitolina">
          Read more about the characters and lore on our <Link href="/">World page</Link>.
        </p>
      </div>

      <RulesCard className="mt-7 lg:mt-9 text-body-lg lg:text-h5 text-center lg:font-capitolina px-7.5 py-10 lg:px-16 lg:py-11">
        <div>
          You can claim your NFT playing cards using whatever method you'd like with any Stellar
          network wallet. However, we’ve built a simple claim page over at{' '}
          <Link href={routes.CLAIM}>rpciege.com/claim</Link> to aid in the claiming process.
        </div>
      </RulesCard>

      <div className="absolute left-1/2 ml-80 -top-28">
        <CardSleeve className="absolute rotate-[30deg] ml-28 mt-28">
          <Image src={vikingRaider} alt="" className="w-[291px] rounded-xl max-w-none" />
        </CardSleeve>

        <CardSleeve className="absolute rotate-[15deg]">
          <Image src={orbitalCannon} alt="" className="w-[291px] rounded-xl max-w-none" />
        </CardSleeve>
      </div>
    </div>
  );
};

const Soroban = () => {
  return (
    <div className="relative mt-32">
      <Image
        src={horrorPack}
        alt=""
        className="absolute right-1/2 max-sm:w-[200px] mr-12 sm:mr-96 -translate-y-1/2 -rotate-[20deg]"
      />

      <Pamphlet className="-rotate-2 text-body-lg z-10">
        <Pamphlet.Title>Soroban</Pamphlet.Title>

        <Pamphlet.Content className="sm:flex items-center gap-x-16">
          <div className="max-w-[31rem] basis-9/12">
            <p>
              And, of course, it would be neglectful to not talk about the backbone of RPCiege, the
              <Link href={links.SOROBAN}>Soroban smart contracts platform</Link>, which is designed
              to work alongside and integrate with the Stellar blockchain. Soroban smart contracts
              are written in Rust and compiled into Wasm for deployment.
            </p>

            <p className="mt-5 md:text-h5 md:font-capitolina">
              If you’re new to Soroban and want to get your feet wet before diving into RPCiege, the{' '}
              <Link href={'https://soroban.stellar.org/docs/category/getting-started'}>
                Getting Started section
              </Link>{' '}
              in the Soroban docs is a great place to begin your journey.
            </p>
          </div>

          <Image src={sorobanKnights} alt="" className="min-w-0" />
        </Pamphlet.Content>
      </Pamphlet>
    </div>
  );
};

const StellarNetwork = () => {
  return (
    <div className="grid *:[grid-area:1/1] items-center justify-center mt-28 lg:-mt-24 xl:-mt-36 mx-2 rounded-3xl overflow-hidden">
      <Image src={siegePeople} alt="" className="pointer-events-none object-cover min-h-[34rem]" />

      <div className="flex flex-col items-center px-4 lg:mt-10">
        <h2 className="text-[1rem] sm:text-[2rem] lg:text-[3rem] xl:text-[4rem] leading-none">
          <span className="text-[2em] mr-[0.15em] italic">The</span>
          <span className="text-[2.8em]">Stellar</span>
          <span className="text-[2.8em] font-extrabold uppercase block ml-[1.6em]">Network</span>
        </h2>

        <p className="mt-2.5 text-neutral-white max-w-xs text-center sm:max-w-[54rem] lg:text-h5 lg:font-capitolina">
          The Stellar network is a layer-1, open-source, decentralized blockchain network that
          provides the framework for developers to create applications, issue assets, and more. With
          the addition of Soroban, the Stellar network now supports smart contracts on Futurenet and
          Testnet!
        </p>
      </div>
    </div>
  );
};

const DiveIn = () => {
  return (
    <div className="mt-28 mb-28 sm:mb-44 px-4 flex flex-col items-center text-center max-w-3xl mx-auto">
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
