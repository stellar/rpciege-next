import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';

import { useGetCardMetadata } from '@/api/rpciege/getCardMetadata';

import { TomlCurrency } from '@/types/toml';
import { Caret, PulseLoader } from '@/components/Icons';

import styles from './styles.module.css';

type CardDetailsProps = { card: TomlCurrency } & React.ComponentPropsWithoutRef<'div'>;

export const CardDetails = ({ card, ...restProps }: CardDetailsProps) => {
  const cardMetadataQuery = useGetCardMetadata({ code: card.code });

  if (cardMetadataQuery.isPending) return <PulseLoader className="size-10 mx-auto my-10" />;
  if (cardMetadataQuery.isError) return <div {...restProps}>Failed to load card metadata.</div>;

  const cardMetadata = cardMetadataQuery.data;

  return (
    <div {...restProps}>
      <img
        src={cardMetadata.image}
        alt=""
        className="rounded-lg mx-auto shadow-xl shadow-black/50"
        width={272}
        height={410}
      />

      <h4 className="mt-8">{cardMetadata.name}</h4>

      <p className="mt-2.5">{`“${cardMetadata.desc}”`}</p>

      {/* <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="mt-4 flex items-center justify-between gap-2 text-body-lg font-bold text-neutral-black">
              Backstory
              <Caret className={clsx('transition-transform', open && 'rotate-180')} />
            </Disclosure.Button>

            <Disclosure.Panel className="">{cardMetadata.backstory}</Disclosure.Panel>
          </>
        )}
      </Disclosure> */}

      <table className={clsx('mt-6', styles.CardDetails__table)}>
        <tbody>
          <tr>
            <th>Power</th>
            <td>{cardMetadata.power}</td>
          </tr>

          <tr>
            <th>Modifier</th>
            <td>{cardMetadata.modifier}</td>
          </tr>

          {/* <tr>
            <th>Type</th>
            <td>{cardMetadata.type}</td>
          </tr>

          <tr>
            <th>Pack</th>
            <td>{cardMetadata.pack}</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};
