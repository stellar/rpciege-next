import Image from 'next/image';
import Link from 'next/link';

import { routes } from '@/constants';

import { CardSleeve } from '@/components/CardSleeve';

import landingBanner from '@/assets/marketing/landing-banner.png';

import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';

export const Banner = () => {
  return (
    <div className="relative max-w-[1412px] mx-auto pt-10 py-2 sm:px-2 shadow-2xl">
      <BannerBackground />

      <Link
        href={routes.GETTING_STARTED}
        className="absolute left-1/2 -translate-x-1/2 min-w-max bottom-[30%] -rotate-2"
      >
        <CardSleeve>
          <div className="btn btn-secondary text-neutral-gray shadow-none">Get Started</div>
        </CardSleeve>
      </Link>

      <p className="bg-primary-red text-neutral-white font-capitolina italic text-center text-descriptor lg:text-descriptor-lg px-2 py-6">
        Code. Control. Conquer!
      </p>
    </div>
  );
};

const BannerBackground = () => {
  return (
    <>
      <Image
        src={landingBanner}
        alt=""
        className="w-full pointer-events-none object-cover object-top h-[26rem] sm:h-[53rem]"
        aria-hidden="true"
      />

      <p className="absolute top-[3.5%] right-1/2 mr-[34rem] w-32 text-center text-body-lg">
        A Stellar Community Game
      </p>

      <p className="absolute top-[20%] right-1/2 mr-[34rem] w-32 text-center text-neutral-white text-sm">
        Clear <span className="text-nowrap">Step-By-Step</span> Rules
      </p>

      <CardSleeve className="absolute rotate-12 -bottom-24 right-1/2 mr-[448px] max-sm:hidden">
        <Image src={vikingRaider} alt="" className="w-[291px] rounded-xl max-w-none" />
      </CardSleeve>

      <CardSleeve className="absolute -rotate-12 -bottom-80 left-1/2 ml-[26rem] max-sm:hidden">
        <Image src={orbitalCannon} alt="" className="w-[291px] rounded-xl max-w-none" />
      </CardSleeve>
    </>
  );
};
