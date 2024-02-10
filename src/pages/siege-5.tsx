import Image from 'next/image';

import { useCountdown } from '@/hooks/useCountdown';

import { RulesCard } from '@/components/RulesCard';
import { Link } from '@/components/Link';

import siege5Bg1 from '@/assets/marketing/siege-5-bg-1.png';
import siege5Bg2 from '@/assets/marketing/siege-5-bg-2.png';
import horrorPack from '@/assets/marketing/horror-pack.png';
import cardFrame from '@/assets/marketing/card-frame.png';
import practiceBg from '@/assets/marketing/practice-bg.png';

export default function Seige5() {
  return (
    <main className="overflow-hidden mb-20 md:mb-28">
      <Banner />
      <Practice />
    </main>
  );
}

const Banner = () => {
  return (
    <div className="max-w-[88.375rem] mx-auto shadow-2xl overflow-hidden">
      <div className="grid md:grid-cols-[auto_fit-content(100%)]">
        <Image
          src={siege5Bg1}
          alt=""
          className="md:order-1 drop-shadow-2xl justify-self-end max-md:w-96"
        />

        <div className="md:py-12 px-4 max-w-[44rem] self-center justify-self-end">
          <h3 className="text-balance">Siege 5, Skirmishes 11-14: Space Continuum</h3>

          <p className="mt-14 text-body-lg first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">O</span>ur journey takes a turn for the cosmic when our
            heroes venture into space to bring legendary archaeologist Blossom Bernice Breydenblach
            back down to Earth.
          </p>
        </div>
      </div>

      <div className="max-md:mt-12 grid md:grid-cols-[auto_auto] gap-y-15">
        <Image src={siege5Bg2} alt="" className="relative right-10 max-md:w-96" />

        <p className="px-4 md:max-w-[35rem] self-center text-h5 font-capitolina">
          This siege is all about Soroban’s state expiration and storage types and will run from
          November 7th through November 10th.
        </p>
      </div>

      <div className="max-md:mt-20 md:grid grid-cols-[auto_auto]">
        <div className="px-4 md:max-w-lg self-center justify-self-end">
          <h3>Collections</h3>

          <Image
            src={horrorPack}
            alt=""
            className="relative md:hidden w-[334px] -rotate-6 mx-auto -mb-32 z-10"
          />

          <RulesCard className="pt-36 px-7.5 pb-14 md:mt-12 md:p-14">
            <h5>Midnight Madness</h5>
            <p className="mt-5">
              Following the defeat of the ruthless overlords, a different type of monster emerged.
              In the second siege, our heroes fought against ghouls, zombies, and werewolves to
              defend the lives of innocent villagers.
            </p>
          </RulesCard>
        </div>

        <Image
          src={horrorPack}
          alt=""
          className="max-md:hidden w-[476px] -rotate-6 -mt-20 justify-self-center"
        />
      </div>

      <Collection />

      <div className="mt-24 lg:mt-20 grid lg:grid-cols-[5fr_2fr] gap-1 mx-2 mb-2">
        <Newsletter />
        <Countdown />
      </div>
    </div>
  );
};

const Collection = () => {
  return (
    <div className="mt-28 md:mt-14 flex flex-col items-center">
      <h1 className="*:block text-center text-base md:text-2xl lg:text-4xl">
        <span className="text-[4.375em]">Collection</span>
        <span className="text-[5.25em] uppercase font-extrabold">Drop</span>
      </h1>

      <Image
        src={cardFrame}
        alt=""
        className="mt-4 translate-x-[2.5%] max-w-none max-md:w-[26rem] -mb-32 md:-mb-[26rem] pointer-events-none"
      />

      <div className="relative">
        <div className="absolute inset-y-0 -inset-x-6 md:-inset-x-64 border-decoration border-[3.25rem] md:border-[6.25rem] -z-10" />

        <div className="max-w-[18rem] md:max-w-[42rem] px-4 pt-28 pb-15 md:pt-96 md:pb-32">
          <p className="text-center text-h5 font-capitolina">Midnight Madness</p>

          <p className="mt-3 md:mt-5 md:text-center">
            Following the defeat of the ruthless overlords, a different type of monster emerged. In
            the second siege, our heroes fought against ghouls, zombies, and werewolves to defend
            the lives of innocent villagers.
          </p>
        </div>
      </div>
    </div>
  );
};

const Newsletter = () => {
  return (
    <div className="flex-1 min-w-0 bg-primary-red px-4 lg:px-8 py-15 lg:py-24">
      <div className="max-w-[52rem] w-full lg:ml-auto">
        <p className="text-neutral-white text-descriptor md:text-descriptor-lg font-capitolina">
          Sign up to be notified!
        </p>

        <form className="mt-3 flex max-sm:flex-col gap-x-6 gap-y-3">
          <NewsletterInput type="text" placeholder="Name" />
          <NewsletterInput type="email" placeholder="Email Address" />
          <button className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
};

const NewsletterInput = (props: React.ComponentPropsWithoutRef<'input'>) => {
  return (
    <input
      className="border border-neutral-gray bg-neutral-white text-neutral-gray placeholder-neutral-gray p-3 min-w-0 flex-1"
      {...props}
    />
  );
};

const Countdown = () => {
  const { hours, minutes, seconds } = useCountdown({ time: '2024-12-31' });

  return (
    <div className="px-4 lg:px-8 py-15 lg:py-24 font-capitolina bg-primary-red text-neutral-white">
      <p className="italic text-descriptor md:text-descriptor-lg">Countdown</p>
      <p className="text-h3 md:text-h3-lg">
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

// TODO: Update copy
const Practice = () => {
  return (
    <div className="mt-20 md:mt-32 grid *:[grid-area:1/1] place-items-center mx-2 rounded-3xl overflow-hidden">
      <Image src={practiceBg} alt="" className="object-cover min-h-[34rem]" />

      <div className="text-center px-4">
        <h2 className="text-[1rem] sm:text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-none text-center">
          <span className="text-[3em] mr-[0.15em] block">Practice</span>
          <span className="text-[1.8em] italic align-top leading-[1em]">With The</span>
          <span className="text-[3em] font-extrabold uppercase ml-[0.15em]">Past</span>
        </h2>

        <p className="mt-4 max-w-[55rem] text-body-lg text-neutral-white md:text-h5 md:font-capitolina">
          Insert some text about how the games build on each other and players don’t want to miss
          the knowledge from previous games.
        </p>

        <Link href="/practice" className="btn btn-primary inline-block mt-7.5">
          Play Other Games
        </Link>
      </div>
    </div>
  );
};
