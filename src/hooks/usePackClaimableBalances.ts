import {
  UseListClaimableBalancesOptions,
  useListClaimableBalances,
} from '@/api/horizon/listClaimableBalances';
import { PACK_SPONSOR } from '@/constants/accounts';

type UsePackClaimableBalancesOptions = Pick<UseListClaimableBalancesOptions, 'claimant'>;

export const usePackClaimableBalances = (options: UsePackClaimableBalancesOptions) => {
  const query = useListClaimableBalances({
    ...options,
    sponsor: PACK_SPONSOR,
    select: (data) => {
      return data._embedded.records.map((record) => {
        const [code, issuer] = record.asset.split(':');
        return { ...record, code, issuer };
      });
    },
  });

  return query;
};
