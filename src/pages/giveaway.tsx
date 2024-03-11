import { useState } from 'react';
import { Account, Networks, TransactionBuilder } from '@stellar/stellar-base';
import Image from 'next/image';
import clsx from 'clsx';

import { IS_DEV } from '@/config';
import { links } from '@/constants';

import { useWallet } from '@/hooks/useWallet';
import { useGetGiveawayCode } from '@/api/rpciege/getGiveawayCode';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { Pamphlet } from '@/components/Pamphlet';
import { SignInModal } from '@/components/SignInModal';

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

          <GiveawayButton className="mt-15 mx-auto" />
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
    <div className="sm:hidden mb-36 isolate">
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

          <GiveawayButton className="mt-10" />

          <div className="mt-16 text-black text-body">
            <p>While supplies last</p>
            <p>Something else legal will probably need to tell us</p>
          </div>
        </Pamphlet.Content>
      </Pamphlet>
    </div>
  );
};

const GiveawayButton = (props: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { publicKey, kit } = useWallet();

  const giveaway = useGetGiveawayCode();

  const getCode = async (publicKey: string) => {
    const xdr = new TransactionBuilder(new Account(publicKey, '0'), {
      networkPassphrase: IS_DEV ? Networks.TESTNET : Networks.PUBLIC,
      fee: '0',
    })
      .setTimeout(0)
      .build()
      .toXDR();

    const { result: signedXdr } = await kit.signTx({ xdr, publicKeys: [publicKey] } as any);

    giveaway.mutate({ pubkey: publicKey, xdr: signedXdr });
  };

  if (!publicKey) {
    return (
      <>
        <button
          className={clsx('btn btn-primary max-sm:w-full', props.className)}
          onClick={() => setIsOpen(true)}
        >
          Connect Wallet
        </button>

        <SignInModal open={isOpen} onClose={() => setIsOpen(false)} onConnect={getCode} />
      </>
    );
  }

  return (
    <>
      <Button
        className={clsx('btn btn-primary max-sm:w-full', props.className)}
        onClick={() => getCode(publicKey)}
        isLoading={giveaway.isPending}
        loadingText="Getting Code"
      >
        Get Code
      </Button>

      <Modal open={!!giveaway.data} onClose={giveaway.reset} className="text-neutral-white">
        <p className="text-h4 font-capitolina">Congratulations!</p>

        <p className="mt-6 max-w-[28rem] text-body-lg md:text-h5 md:font-capitolina">
          You’ve proven your worth and are eligible to receive an RPCiege booster pack! Here is your
          unique claim link:
        </p>

        <div className="w-full flex justify-center border border-primary-red rounded-xl p-6 mt-7">
          <a
            className="underline font-nanum text-sm md:text-body-lg"
            href={`https://giveaways.useslingshot.com/playing-cards-7c06470b/${giveaway.data}`}
          >{`giveaways.useslingshot.com/playing-cards-7c06470b/${giveaway.data}`}</a>
        </div>
      </Modal>

      <Modal open={!!giveaway.error} onClose={giveaway.reset} className="text-neutral-white">
        <p className="text-h4 font-capitolina">Dang!!</p>

        <p className="mt-6 max-w-[28rem] text-body-lg md:text-h5 md:font-capitolina">
          It looks like you don’t have enough cards in your wallet to be eligible for an RPCiege
          booster pack. But all is not lost! Keep completing RPCiege skirmishes to build your
          collection and check back again! 
        </p>

        <a href={links.RPCIEGE_BOOKLET} className="mt-6 btn btn-primary md:w-max">
          Play Game
        </a>
      </Modal>
    </>
  );
};
