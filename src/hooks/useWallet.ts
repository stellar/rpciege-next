import { useMemo } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import {
  StellarWalletsKit,
  WalletNetwork,
  AlbedoModule,
  FreighterModule,
  ALBEDO_ID,
  FREIGHTER_ID,
} from '@creit.tech/stellar-wallets-kit/build/index';

import { IS_DEV } from '@/config';

type WalletId = typeof ALBEDO_ID | typeof FREIGHTER_ID;

type WalletMeta = {
  publicKey?: string;
  selectedWalletId: WalletId;
};

type ConnectOptions = {
  walletId?: WalletId;
};

export const NETWORK = IS_DEV ? WalletNetwork.TESTNET : WalletNetwork.PUBLIC;

export const useWallet = () => {
  const [wallet, setWallet] = useLocalStorage<WalletMeta>({
    key: 'rpciege-wallet',
    defaultValue: {
      selectedWalletId: ALBEDO_ID,
    },
  });

  const kit = useMemo(() => {
    return new StellarWalletsKit({
      network: NETWORK,
      selectedWalletId: wallet.selectedWalletId,
      modules: [new AlbedoModule(), new FreighterModule()],
    });
  }, [wallet]);

  const connect = async (options?: ConnectOptions) => {
    if (options?.walletId) kit.setWallet(options?.walletId);

    const publicKey = await kit.getPublicKey();

    setWallet((oldState) => ({
      publicKey,
      selectedWalletId: options?.walletId ?? oldState.selectedWalletId,
    }));

    return publicKey;
  };

  const disconnect = () => {
    setWallet(({ publicKey, ...oldState }) => oldState);
  };

  return { kit, connect, disconnect, ...wallet };
};
