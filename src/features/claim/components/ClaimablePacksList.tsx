import { PulseLoader } from '@/components/Icons';
import { usePackClaimableBalances } from '../hooks/usePackClaimableBalances';
import { ClaimablePack } from './ClaimablePack';

type ClaimablePacksListProps = {
  claimant: string;
};

export const ClaimablePacksList = (props: ClaimablePacksListProps) => {
  const cbQuery = usePackClaimableBalances({ claimant: props.claimant });

  if (cbQuery.isPending) return <PulseLoader />;
  if (cbQuery.isError) return <div>Failed to load claimable balances</div>;
  if (Object.keys(cbQuery.data).length === 0) return <p>You have no packs available to claim.</p>;

  return (
    <div className="">
      {Object.entries(cbQuery.data).map(([packId, records]) => (
        <ClaimablePack packId={packId} pubkey={props.claimant} records={records} />
      ))}
    </div>
  );
};
