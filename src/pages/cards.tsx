import {
  BinderLayout,
  BinderSidePanel,
  CardDetails,
  CardsProvider,
  useBinderContext,
} from '@/features/catalogue';

export default function Cards() {
  return (
    <CardsProvider>
      <main className="overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-2 lg:px-4">
          <Content />
        </div>
      </main>
    </CardsProvider>
  );
}

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
  const { selectedCard } = useBinderContext();

  if (selectedCard) {
    return <CardDetails className="p-8" card={selectedCard} />;
  }

  return (
    <h4 className="p-8 text-center flex flex-col justify-center h-full">
      Select a card to learn more about it!
    </h4>
  );
};
