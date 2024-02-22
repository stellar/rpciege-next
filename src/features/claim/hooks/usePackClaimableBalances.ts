import {
  ListClaimableBalancesOptions,
  useListClaimableBalances,
} from '@/api/horizon/listClaimableBalances';
import { ExtendedClaimableBalance } from '@/api/rpciege/claimClaimableBalances';
import { PACK_SPONSOR } from '@/constants/accounts';
import { processAssetCode } from '@/utils';

import packCards from '@/constants/pack_cards.json';

type UsePackClaimableBalancesOptions = Pick<ListClaimableBalancesOptions, 'claimant'>;

export const usePackClaimableBalances = (options: UsePackClaimableBalancesOptions) => {
  const query = useListClaimableBalances({
    ...options,
    sponsor: PACK_SPONSOR,
    select: (data) => {
      const _packs: Record<string, ExtendedClaimableBalance[]> = {};

      for (const record of data._embedded.records) {
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
    },
  });

  return query;
};
