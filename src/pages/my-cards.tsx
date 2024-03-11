import {
  BinderLayout,
  BinderSidePanel,
  CardDetails,
  MyCardsProvider,
  useBinderContext,
} from '@/features/catalogue';

import { useWallet } from '@/hooks/useWallet';

// TODO: add message for when user has no cards
export default function Cards() {
  return (
    <MyCardsProvider>
      <main className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-2 lg:px-4">
          <ConnectCTA />
          <Content />
        </div>
      </main>
    </MyCardsProvider>
  );
}

const ConnectCTA = () => {
  const { publicKey } = useWallet();

  if (publicKey) return null;

  return (
    <p className="my-8 text-h4 font-capitolina text-neutral-white bg-primary-red rounded-2xl p-8 text-center">
      Connect your wallet to view your collection!
    </p>
  );
};

const Content = () => {
  return (
    <BinderLayout>
      <BinderSidePanel>
        <SidePanelContent />
      </BinderSidePanel>
    </BinderLayout>
  );
};

const SidePanelContent = () => {
  const { selectedCard, paginatedCards } = useBinderContext();
  const { publicKey } = useWallet();

  if (!publicKey) {
    return (
      <h4 className="p-8 text-center flex flex-col justify-center h-full">
        Connect your wallet to view your collection!
      </h4>
    );
  }

  if (paginatedCards.length === 0) {
    return (
      <h4 className="p-8 text-center flex flex-col justify-center h-full">
        You don't have any cards yet!
      </h4>
    );
  }

  if (selectedCard) {
    return <CardDetails className="p-8" card={selectedCard} />;
  }

  return (
    <h4 className="p-8 text-center flex flex-col justify-center h-full">
      Select a card to learn more about it!
    </h4>
  );
};
