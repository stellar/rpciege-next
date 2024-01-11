import Image from 'next/image';

import claimBanner from '@/assets/marketing/claim-banner.png';

export default function Claim() {
  return (
    <main className="overflow-hidden">
      <ClaimBanner />
    </main>
  );
}

const ClaimBanner = () => {
  return (
    <div className="relative grid md:grid-cols-[1fr_auto] max-w-[90rem] mx-auto pt-6 pb-20 md:pb-32 items-center">
      <Image
        src={claimBanner}
        alt=""
        className="justify-self-center md:order-1 w-[250px] sm:w-[320px] md:w-[480px] lg:w-[640px] max-w-none md:-mr-[128px]"
      />

      <div className="max-w-6xl justify-self-end">
        <div className="max-w-3xl px-4">
          <h1 className="*:block">
            <span className="text-h1-bold sm:text-[8.25rem] sm:font-normal">Claim</span>
            <span className="text-h2 sm:text-[9.5rem] sm:font-extrabold sm:uppercase">Pack</span>
          </h1>

          <p className="mt-3 lg:mt-5 text-body-lg lg:text-h5">
            Grow your deck stronger with the cards you’ve earned through your most recent siege.
          </p>

          <button className="mt-10 md:mt-20 btn btn-primary max-sm:w-full">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
