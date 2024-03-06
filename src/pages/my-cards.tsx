import { Binder, MyCardsProvider } from '@/features/catalogue';
import { useWallet } from '@/hooks/useWallet';

// TODO: add message for when user has no cards
export default function Cards() {
  const { publicKey } = useWallet();

  return (
    <main className="overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-2 lg:px-4">
        {!publicKey ? (
          <p className="my-8 text-h4 font-capitolina text-neutral-white bg-primary-red rounded-2xl p-8 text-center">
            Connect your wallet to see your collection!
          </p>
        ) : null}

        <MyCardsProvider>
          <Binder />
        </MyCardsProvider>
      </div>
    </main>
  );
}
