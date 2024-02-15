import Image from 'next/image';

import { Pamphlet } from '@/components/Pamphlet';

import giveawayBannerLeft from '@/assets/marketing/giveaway-banner-left.png';
import giveawayBannerRight from '@/assets/marketing/giveaway-banner-right.png';
import giveawayBannerCenter from '@/assets/marketing/giveaway-banner-center.png';

export default function Giveaway() {
  return (
    <main className="overflow-hidden">
      <GiveawayBanner />
      <MobileGiveawayBanner />
    </main>
  );
}

const GiveawayBanner = () => {
  return (
    <div className="max-sm:hidden mb-6">
      <div className="relative">
        <div className="max-w-[40rem] mx-auto py-52 px-4 text-body-lg">
          <h1 className="uppercase text-h1-bold-lg">Giveaway</h1>

          <p className="mt-10 first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">R</span> PCiege booster packs are available to collect for
            accomplished coders who have completed enough skirmishes to claim 20 NFT playing cards. 
          </p>

          <p className="mt-2">
            Brave adventurer, have your feats earned you the right to claim this sweet swag? Prove
            it by connecting your wallet and showing us your accomplishments!
          </p>

          <button className="mt-15 btn btn-primary block mx-auto">Connect Wallet</button>
        </div>

        <Image
          src={giveawayBannerLeft}
          alt=""
          className="absolute top-4 right-1/2 mr-[352px] pointer-events-none max-w-none"
        />

        <Image
          src={giveawayBannerRight}
          alt=""
          className="absolute top-0 left-1/2 ml-[336px] pointer-events-none max-w-none"
        />
      </div>

      <div className="max-w-[87rem] px-4 mx-auto text-h6 font-nanum uppercase mt-6">
        <p>While supplies last</p>
        <p>Something else legal will probably need to tell us</p>
      </div>
    </div>
  );
};

const MobileGiveawayBanner = () => {
  return (
    <div className="sm:hidden mb-36">
      <Image src={giveawayBannerCenter} alt="" className="relative mx-auto pointer-events-none" />

      <Pamphlet className="-mt-8 -rotate-2 -z-10">
        <Pamphlet.Title>Giveaway</Pamphlet.Title>

        <Pamphlet.Content className="text-body-lg">
          <p className="first-line:text-h5 first-line:font-capitolina">
            <span className="drop-cap">R</span> PCiege booster packs are available to collect for
            accomplished coders who have completed enough skirmishes to claim 20 NFT playing cards. 
          </p>

          <p className="mt-2">
            Brave adventurer, have your feats earned you the right to claim this sweet swag? Prove
            it by connecting your wallet and showing us your accomplishments!
          </p>

          <button className="mt-10 btn btn-primary w-full">Connect Wallet</button>

          <div className="mt-16 text-black text-body">
            <p>While supplies last</p>
            <p>Something else legal will probably need to tell us</p>
          </div>
        </Pamphlet.Content>
      </Pamphlet>
    </div>
  );
};
