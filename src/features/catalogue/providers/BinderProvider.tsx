import { createContext } from '@/utils/createContext';

import { useCards } from '../hooks/useCards';

export const [useBinderContext, BinderContext] = createContext<ReturnType<typeof useCards>>();

type BinderProviderProp = {
  children: React.ReactNode;
};

export const BinderProvider = ({ children }: BinderProviderProp) => {
  const value = useCards();

  return <BinderContext value={value}>{children}</BinderContext>;
};
