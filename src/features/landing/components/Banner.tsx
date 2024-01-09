import Image from 'next/image';
import Link from 'next/link';

import { CardSleeve } from '@/components/CardSleeve';

import banner from '@/assets/marketing/banner.png';
import bannerLg from '@/assets/marketing/banner-lg.png';

import orbitalCannon from '@/assets/marketing/orbital-cannon.png';
import vikingRaider from '@/assets/marketing/viking-raider.png';

export const Banner = () => {
  return (
    <div className="relative z-10">
      <BannerBackground />

      <Link href="/" className="absolute left-1/2 -translate-x-1/2 min-w-max bottom-[30%]">
        <CardSleeve>
          <div className="btn btn-secondary">Get Started</div>
        </CardSleeve>
      </Link>
    </div>
  );
};

const BannerBackground = () => {
  return (
    <div className="-mt-20 relative w-max left-1/2 -translate-x-1/2">
      <Image
        src={banner}
        alt=""
        className="pointer-events-none drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)] sm:hidden"
        aria-hidden="true"
      />

      <Image
        src={bannerLg}
        alt=""
        className="pointer-events-none drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)] max-sm:hidden"
        aria-hidden="true"
      />

      <CardSleeve className="absolute rotate-12 bottom-0 left-0 max-sm:hidden">
        <Image src={vikingRaider} alt="" className="drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)]" />
      </CardSleeve>

      <CardSleeve className="absolute -rotate-12 -bottom-64 right-10 max-sm:hidden">
        <Image src={orbitalCannon} alt="" className="drop-shadow-[0px_0px_20px_rgba(0,0,0,0.5)]" />
      </CardSleeve>
    </div>
  );
};