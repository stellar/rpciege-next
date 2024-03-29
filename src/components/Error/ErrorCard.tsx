import clsx from 'clsx';

import { useClipboard } from '@mantine/hooks';

type ErrorCardProps = {
  error?: unknown;
} & React.ComponentPropsWithoutRef<'div'>;

export const ErrorCard = ({ error, ...props }: ErrorCardProps) => {
  const { copy, copied } = useClipboard({ timeout: 3000 });

  const errorString = JSON.stringify(error, Object.getOwnPropertyNames(error), 2);

  return (
    <div {...props} className={clsx('space-y-4', props.className)}>
      <p className="text-h4 font-capitolina">Error!</p>

      <pre
        className="w-full p-6 border-2 border-primary-red flex-1 max-h-96 text-xs leading-6 overflow-auto rounded"
        dangerouslySetInnerHTML={{
          __html: errorString,
        }}
      />

      <button
        className="btn btn-primary block ml-auto max-sm:w-full px-6 py-2"
        onClick={() => copy(errorString)}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};
