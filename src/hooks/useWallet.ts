import {
  StellarWalletsKit,
  WalletNetwork,
  AlbedoModule,
  FreighterModule,
  ALBEDO_ID,
  FREIGHTER_ID,
} from '@creit.tech/stellar-wallets-kit/build/main/index';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect } from 'react';

type WalletId = typeof ALBEDO_ID | typeof FREIGHTER_ID;

type WalletMeta = {
  publicKey?: string;
  selectedWalletId: WalletId;
};

type ConnectOptions = {
  walletId?: WalletId;
};

const kit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: ALBEDO_ID,
  modules: [new AlbedoModule(), new FreighterModule()],
});

export const useWallet = () => {
  const [wallet, setWallet] = useLocalStorage<WalletMeta>({
    key: 'rpciege-wallet',
    defaultValue: {
      publicKey: undefined,
      selectedWalletId: ALBEDO_ID,
    },
  });

  useEffect(() => {
    kit.setWallet(wallet.selectedWalletId);
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
    setWallet((oldState) => ({
      ...oldState,
      publicKey: undefined,
    }));
  };

  return { kit, connect, disconnect, ...wallet };
};
