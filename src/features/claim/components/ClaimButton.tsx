import { useClaim } from '@/hooks/useClaim';
import { usePackClaimableBalances } from '@/hooks/usePackClaimableBalances';

import { Button } from '@/components/Button';
import { ErrorCard } from '@/components/Error/ErrorCard';
import { Modal } from '@/components/Modal';

type ClaimButtonProps = {
  claimant: string;
  onSuccess?: (data: { code: string }[]) => void;
};

export const ClaimButton = ({ claimant, onSuccess }: ClaimButtonProps) => {
  const cbQuery = usePackClaimableBalances({ claimant });

  const { claim, error, reset, isPending } = useClaim({
    pubkey: claimant,
    records: cbQuery.data ?? [],
    onSuccess,
  });

  if (cbQuery.isError) return <div>Failed to load claimable balances</div>;

  const claimableCards = cbQuery.data;

  return (
    <div>
      <Button
        className="btn btn-primary max-sm:w-full"
        isLoading={isPending || cbQuery.isPending}
        loadingText={cbQuery.isPending ? 'Checking' : 'Claiming'}
        isDisabled={claimableCards?.length === 0}
        disabledText="No packs available"
        onClick={claim}
        spinnerPosition="right"
      >
        Claim
      </Button>

      <Modal open={!!error} onClose={reset}>
        <ErrorCard error={error} />
      </Modal>
    </div>
  );
};
