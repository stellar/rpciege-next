import Image from 'next/image';
import clsx from 'clsx';

import { routes } from '@/constants';

import { useWallet } from '@/hooks/useWallet';
import { usePackClaimableBalances } from '@/hooks/usePackClaimableBalances';

import { Link } from '@/components/Link';

import cardFrame from '@/assets/marketing/card-frame.png';
import paperTexture from '@/assets/paper-texture.png';

type ClaimCTAProps = React.ComponentPropsWithoutRef<'div'>;

export const ClaimCTA = (props: ClaimCTAProps) => {
  const { publicKey } = useWallet();
  const cbQuery = usePackClaimableBalances({ claimant: publicKey });

  if (cbQuery.isPending || cbQuery.isError || cbQuery.data.length === 0) return null;

  return (
    <div
      {...props}
      className={clsx(
        'relative grid md:grid-cols-3 gap-x-8 items-center p-4 md:px-8 rounded-2xl text-center bg-primary-red text-white overflow-hidden isolate',
        props.className
      )}
    >
      <h4 className="text-neutral-white">You've got cards to claim!</h4>

      <Link
        href={routes.CLAIM}
        className="max-md:mt-6 btn btn-secondary w-full md:w-max justify-self-center"
      >
        Claim Cards
      </Link>

      <Image
        className="max-md:mt-8 max-md:translate-x-[2%] -mb-[25%] md:-mb-[30%] md:order-[-1]"
        src={cardFrame}
        alt=""
      />

      <figure
        className="absolute inset-0 pointer-events-none z-10"
        style={{ backgroundImage: `url(${paperTexture.src})` }}
      />
    </div>
  );
};
