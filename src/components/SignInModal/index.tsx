import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { ISupportedWallet } from '@creit.tech/stellar-wallets-kit';
import Image from 'next/image';

import { useWallet } from '@/hooks/useWallet';
import { Close, PulseLoader } from '../Icons';

type SignInModalProps = React.ComponentPropsWithoutRef<'div'> &
  React.ComponentPropsWithoutRef<typeof Dialog> & {
    onClose?: () => void;
    onConnect?: (publicKey: string) => void;
  };

export const SignInModal = ({ onClose, onConnect, ...props }: SignInModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [supportedWallets, setSupportedWallets] = useState<ISupportedWallet[]>([]);

  const { kit, connect } = useWallet();

  useEffect(() => {
    setIsLoading(true);

    kit
      .getSupportedWallets()
      .then((wallets) => {
        setSupportedWallets(wallets);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Dialog {...props} onClose={onClose}>
      <div className="fixed inset-0 w-screen overflow-y-auto bg-black/50">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="flex-1 max-w-xl p-4 md:p-7.5 bg-neutral-black rounded-md text-neutral-white">
            <div className="flex gap-4 items-center justify-between">
              <h4 className="text-neutral-white text-balance">Connect a wallet to continue</h4>

              <button onClick={onClose as any}>
                <Close className="size-8" />
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {!isLoading ? (
                supportedWallets.map((wallet) => (
                  <button
                    key={wallet.name}
                    className="w-full flex items-center gap-4 p-4 bg-neutral-gray rounded-md font-nanum disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={async () => {
                      onClose?.();
                      connect({ walletId: wallet.id as any }).then(onConnect);
                    }}
                    disabled={!wallet.isAvailable}
                  >
                    <Image src={wallet.icon} alt="" width={24} height={24} />

                    <p className="text-h6">{wallet.name}</p>

                    {!wallet.isAvailable ? (
                      <p className="ml-auto text-sm uppercase font-bold">Unavailable</p>
                    ) : null}
                  </button>
                ))
              ) : (
                <PulseLoader className="size-10 mx-auto" />
              )}
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
