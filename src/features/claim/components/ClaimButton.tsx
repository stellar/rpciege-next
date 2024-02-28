import { useState } from 'react';

import { useClaim } from '@/hooks/useClaim';
import { usePackClaimableBalances } from '@/hooks/usePackClaimableBalances';

import { Button } from '@/components/Button';
import { ErrorCard } from '@/components/Error/ErrorCard';
import { Modal } from '@/components/Modal';

import { ClaimSummary } from './ClaimSummary';

export const ClaimButton = (props: { claimant: string }) => {
  const [claimedCards, setClaimedCards] = useState<{ code: string }[]>();

  const cbQuery = usePackClaimableBalances({ claimant: props.claimant });

  const { claim, error, reset, isPending } = useClaim({
    pubkey: props.claimant,
    records: cbQuery.data ?? [],
    onSuccess: (data) => setClaimedCards(data),
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

      {claimedCards && claimedCards?.length > 0 ? (
        <ClaimSummary
          cards={claimedCards}
          claimant={props.claimant}
          onClose={() => setClaimedCards(undefined)}
          open
        />
      ) : null}
    </div>
  );
};
