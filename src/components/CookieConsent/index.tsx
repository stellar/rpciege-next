import { useLocalStorage } from '@mantine/hooks';

export const CookieConsent = () => {
  const [isAccepted, setIsAccepted] = useLocalStorage({
    key: 'rpciege-cookie-consent',
    defaultValue: false,
  });

  if (isAccepted) return null;

  return (
    <div className="fixed w-full bottom-0 bg-neutral-gray">
      <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-12 p-4">
        <p className="flex-1 text-sm text-neutral-white max-w-xl">
          We use cookies to provide the services and features offered by our website and to improve
          your experience.
        </p>

        <button className="btn btn-primary py-4 max-sm:w-full" onClick={() => setIsAccepted(true)}>
          Accept
        </button>
      </div>
    </div>
  );
};
