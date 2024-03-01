import { createContext } from '@/utils/createContext';

import { useCards } from '../hooks/useCards';
import { useMyCards } from '../hooks/useMyCards';

export const [useBinderContext, BinderProvider] = createContext<ReturnType<typeof useCards>>();

export const CardsProvider = ({ children }: { children?: React.ReactNode }) => {
  const value = useCards();

  return <BinderProvider value={value}>{children}</BinderProvider>;
};

export const MyCardsProvider = ({ children }: { children?: React.ReactNode }) => {
  const value = useMyCards();

  return <BinderProvider value={value}>{children}</BinderProvider>;
};
