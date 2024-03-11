import { useSubmitTransaction } from '@/api/horizon/submitTransaction';
import { useBumpTransactionFee } from '@/api/rpciege/bumpTransactionFee';
import {
  ExtendedClaimableBalance,
  useClaimClaimableBalances,
} from '@/api/rpciege/claimClaimableBalances';
import { useWallet } from './useWallet';
import { useQueryClient } from '@tanstack/react-query';

/*
100 available operations
2 used for sponsoring reserves
2 used per claimable balance (1 for changing trust, 1 for claiming)
100 = 2 + 2 * MAX_CLAIMABLE_BALANCES
*/
const MAX_CLAIMABLE_BALANCES = 49;

type UseClaimOptions = {
  pubkey: string;
  records: ExtendedClaimableBalance[];
  onSuccess?: (data: ExtendedClaimableBalance[]) => void;
};

export const useClaim = (options: UseClaimOptions) => {
  const claimableCards = options.records.slice(0, MAX_CLAIMABLE_BALANCES);

  const { kit } = useWallet();
  const queryClient = useQueryClient();

  const _bumpFee = useBumpTransactionFee();
  const _submit = useSubmitTransaction();
  const _claim = useClaimClaimableBalances({
    pubkey: options.pubkey,
    records: claimableCards,
  });

  const isPending = _claim.isPending || _bumpFee.isPending || _submit.isPending;
  const error = _claim.error || _bumpFee.error || _submit.error;

  const reset = () => {
    _claim.reset();
    _bumpFee.reset();
    _submit.reset();
  };

  const claim = async () => {
    const { token, xdr: xdrInner } = await _claim.mutateAsync();

    const { result: signedXdr } = await kit.signTx({
      xdr: xdrInner,
      publicKeys: [options.pubkey],
    } as any);

    const { xdr } = await _bumpFee.mutateAsync({ token, tx: signedXdr });

    await _submit.mutateAsync({ xdr });

    options.onSuccess?.(claimableCards);

    queryClient.invalidateQueries({
      queryKey: ['horizon', 'list', 'claimable_balances'],
    });
  };

  return { claim, isPending, error, reset };
};
