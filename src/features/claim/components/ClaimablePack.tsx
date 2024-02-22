import Image from 'next/image';
import { useQueryClient } from '@tanstack/react-query';

import { useWallet } from '@/hooks/useWallet';
import { useBumpTransactionFee } from '@/api/rpciege/bumpTransactionFee';
import { useSubmitTransaction } from '@/api/horizon/submitTransaction';
import {
  ExtendedClaimableBalance,
  useClaimClaimableBalances,
} from '@/api/rpciege/claimClaimableBalances';

import { Button } from '@/components/Button';
import { ErrorCard } from '@/components/Error/ErrorCard';
import { Modal } from '@/components/Modal';

import pack0 from '@/assets/packs/pack0.png';
import pack1 from '@/assets/packs/pack1.png';
import pack2 from '@/assets/packs/pack2.png';
import pack3 from '@/assets/packs/pack3.png';
import pack4 from '@/assets/packs/pack4.png';
import pack5 from '@/assets/packs/pack5.png';

const packImages = [pack0, pack1, pack2, pack3, pack4, pack5];

type ClaimablePackProps = {
  packId: string;
  pubkey: string;
  records: ExtendedClaimableBalance[];
};

export const ClaimablePack = (props: ClaimablePackProps) => {
  const { packId, pubkey, records } = props;

  const queryClient = useQueryClient();
  const { kit } = useWallet();

  const claim = useClaimClaimableBalances({ pubkey, records });
  const bumpFee = useBumpTransactionFee();
  const submit = useSubmitTransaction();

  const packIndex = parseInt(packId.split('_')[1]);

  const isPending = claim.isPending || bumpFee.isPending || submit.isPending;
  const error = claim.error || bumpFee.error || submit.error;

  const reset = () => {
    claim.reset();
    bumpFee.reset();
    submit.reset();
  };

  return (
    <div className="">
      <h4 className="text-center">{packId}</h4>

      <Image src={packImages[packIndex]} alt="" className="h-96 w-auto" />

      <Button
        className="btn btn-primary py-3"
        isLoading={isPending}
        loadingText="Claiming"
        onClick={() => {
          claim.mutate(undefined, {
            onSuccess: async ({ token, xdr: xdrInner }) => {
              const { result: signedXdr } = await kit.signTx({ xdr: xdrInner } as any);

              const { xdr } = await bumpFee.mutateAsync({
                token,
                tx: signedXdr,
              });

              await submit.mutateAsync({ xdr });

              queryClient.invalidateQueries({
                queryKey: ['horizon', 'list', 'claimable_balances'],
              });
            },
          });
        }}
      >
        Claim
      </Button>

      <Modal open={!!error} onClose={reset}>
        <ErrorCard error={error} />
      </Modal>
    </div>
  );
};
