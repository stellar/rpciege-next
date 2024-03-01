import { Binder, CardsProvider } from '@/features/catalogue';

export default function Cards() {
  return (
    <main className="overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-2 lg:px-4">
        <CardsProvider>
          <Binder />
        </CardsProvider>
      </div>
    </main>
  );
}
