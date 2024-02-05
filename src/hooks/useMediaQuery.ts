import React from 'react';

export function useMediaQuery(query: string) {
  const subscribe = React.useCallback(
    (callback: any) => {
      const matchMedia = window.matchMedia(query);

      try {
        matchMedia.addEventListener('change', callback);
        return () => matchMedia.removeEventListener('change', callback);
      } catch (e) {
        matchMedia.addListener(callback);
        return () => matchMedia.removeListener(callback);
      }
    },
    [query]
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    return undefined;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
