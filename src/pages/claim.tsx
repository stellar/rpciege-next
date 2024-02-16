import { useMemo, useState } from 'react';
import Image from 'next/image';

import { useWallet } from '@/hooks/useWallet';
import { useListClaimableBalances } from '@/api/horizon/listClaimableBalances';
import { PACK_SPONSOR } from '@/constants/accounts';
import { ClaimableBalance } from '@/types/horizon';

import packCards from '@/constants/pack_cards.json';

import { Button } from '@/components/Button';
import { SignInModal } from '@/components/SignInModal';
import { PulseLoader } from '@/components/Icons';

import claimBanner from '@/assets/marketing/claim-banner.png';

export default function Claim() {
  return (
    <main className="overflow-hidden">
      <ClaimBanner />
    </main>
  );
}

const ClaimBanner = () => {
  const wallet = useWallet();

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

          <div className="mt-10 md:mt-20">
            {wallet.publicKey ? <ClaimButton claimant={wallet.publicKey} /> : <ConnectButton />}
          </div>
        </div>
      </div>
    </div>
  );
};

const ConnectButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="btn btn-primary max-sm:w-full" onClick={() => setIsOpen(true)}>
        Connect Wallet
      </button>

      <SignInModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

const ClaimButton = (props: { claimant: string }) => {
  const cbQuery = useListClaimableBalances({ claimant: props.claimant, sponsor: PACK_SPONSOR });

  const packs = useMemo(() => {
    const _packs: Record<string, ClaimableBalance[]> = {};

    if (!cbQuery.data) return _packs;

    for (const record of cbQuery.data._embedded.records) {
      const [code, issuer] = record.asset.split(':');

      const packIndex = packCards.findIndex((pack) => pack.includes(processAssetCode(code)));
      const packKey = packIndex > -1 ? `pack_${packIndex + 1}` : 'pack_0';

      const pack = { ...record, code, issuer };

      if (_packs[packKey]) {
        _packs[packKey].push(pack);
      } else {
        _packs[packKey] = [pack];
      }
    }

    return _packs;
  }, [cbQuery.data]);

  if (cbQuery.isPending) return <PulseLoader />;
  if (cbQuery.isError) return <div>Failed to load claimable balances</div>;

  const claimableBalances = cbQuery.data._embedded.records;

  return (
    <>
      <Button
        className="btn btn-primary max-sm:w-full"
        isDisabled={claimableBalances.length === 0}
        spinnerPosition="right"
      >
        Claim
      </Button>

      {claimableBalances.length === 0 ? (
        <p className="mt-3 text-body-xs uppercase font-nanum font-bold">
          You have no packs available to claim.
        </p>
      ) : null}
    </>
  );
};

function processAssetCode(code: string) {
  if (code.substr(-1) === 'c') return code.replace(/[a-z]/g, '').replace('RPCIEGE', 'RPCIEGE0');

  return code;
}
