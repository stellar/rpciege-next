import Image from 'next/image';

import horrorPack from '@/assets/marketing/horror-pack.png';

import redD20 from '@/assets/dice/red-d20.png';
import redD10 from '@/assets/dice/red-d10.png';
import yellowD12 from '@/assets/dice/yellow-d12.png';

export default function Claim() {
  return (
    <main className="overflow-hidden">
      <ClaimBanner />
    </main>
  );
}

const ClaimBanner = () => {
  return (
    <div className="grid md:grid-cols-[1fr_auto] gap-y-9 max-w-[1516px] mx-auto place-items-center pt-6 pb-20 md:pt-24 md:pb-32">
      <div className="relative md:order-1">
        <Image
          src={horrorPack}
          alt=""
          className="-rotate-12 w-[176px] sm:w-[320px] lg:w-[464px] md:translate-x-[10%]"
        />

        <Image src={redD20} alt="" className="absolute w-1/4 top-0 left-[10%]" />
        <Image src={redD10} alt="" className="absolute w-1/4  bottom-0 -left-[10%]" />
        <Image src={yellowD12} alt="" className="absolute w-1/4 -bottom-[10%] right-[25%]" />
      </div>

      <div className="max-w-6xl">
        <div className="max-w-3xl px-4">
          <h1 className="*:block">
            <span className="text-h1-bold sm:text-[8.25rem] sm:font-normal">Claim</span>
            <span className="text-h2 sm:text-[9.5rem] sm:font-extrabold sm:uppercase">Pack</span>
          </h1>

          <p className="mt-3 lg:mt-5 text-body-lg lg:text-h5">
            Grow your deck stronger with the cards you’ve earned through your most recent siege.
          </p>

          <button className="mt-10 md:mt-20 btn btn-primary w-full sm:w-auto">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
