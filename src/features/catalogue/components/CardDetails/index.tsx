import { Disclosure } from '@headlessui/react';
import clsx from 'clsx';

import { Card } from '@/types/card';

import { Caret, Search } from '@/components/Icons';

import styles from './styles.module.css';

type CardDetailsProps = { card?: Card } & React.ComponentPropsWithoutRef<'div'>;

export const CardDetails = ({ card, ...restProps }: CardDetailsProps) => {
  return (
    <div
      {...restProps}
      className={clsx('border border-neutral-gray rounded-md', restProps.className)}
    >
      <label className="flex gap-2 items-center p-4 border-b border-neutral-gray">
        <Search />

        <input
          placeholder="Search"
          className="flex-1 p-1 bg-transparent text-h6 font-nanum placeholder:uppercase placeholder:text-neutral-gray/60"
        />
      </label>

      {card ? (
        <div className="p-8">
          <img
            src={card.src}
            alt=""
            className="rounded-lg w-full max-w-[17rem] mx-auto shadow-xl shadow-black/50"
          />

          <h4 className="mt-8">{card.name}</h4>

          <p className="mt-2.5">{`“${card.description}”`}</p>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="mt-4 flex items-center justify-between gap-2 text-body-lg font-bold text-neutral-black">
                  Backstory
                  <Caret className={clsx('transition-transform', open && 'rotate-180')} />
                </Disclosure.Button>

                <Disclosure.Panel className="">{card.backstory}</Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <table className={clsx('mt-6', styles.CardDetails__table)}>
            <tbody>
              <tr>
                <th>Power</th>
                <td>{card.power}</td>
              </tr>

              <tr>
                <th>Modifier</th>
                <td>{card.modifier}</td>
              </tr>

              <tr>
                <th>Type</th>
                <td>{card.type}</td>
              </tr>

              <tr>
                <th>Pack</th>
                <td>{card.pack}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};