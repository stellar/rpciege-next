import { Binder, BinderProvider } from '@/features/catalogue';

export default function Cards() {
  return (
    <main className="overflow-hidden">
      <BinderProvider>
        <Binder />
      </BinderProvider>
    </main>
  );
}
