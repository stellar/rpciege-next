import { useState } from 'react';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const QueryProvider = (props: { children?: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache(),
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            retry: false,
          },
        },
      })
  );

  return <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>;
};
