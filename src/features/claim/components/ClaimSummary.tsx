import { Dialog } from '@headlessui/react';

import { processAssetCode } from '@/utils';
import { routes } from '@/constants';

import { usePackClaimableBalances } from '@/hooks/usePackClaimableBalances';

import { Caret } from '@/components/Icons';
import { Link } from '@/components/Link';

type ClaimSummaryProps = {
  claimant: string;
  cards: { code: string }[];
} & React.ComponentPropsWithoutRef<'div'> &
  React.ComponentPropsWithoutRef<typeof Dialog>;

const MAX_SLICE = 5;

export const ClaimSummary = ({ claimant, cards, ...props }: ClaimSummaryProps) => {
  const cbQuery = usePackClaimableBalances({ claimant });

  const SLICE = Math.min(MAX_SLICE, cards.length);
  const ADDITIONAL_CARDS = cards.length - SLICE;

  return (
    <Dialog {...props}>
      <Dialog.Panel className="fixed inset-0 bg-neutral-white py-6 px-4 overflow-y-auto  overflow-hidden">
        <button
          className="text-body-lg font-bold text-neutral-black flex items-center gap-4"
          onClick={props.onClose as any}
        >
          <Caret className="rotate-90" /> Back
        </button>

        <div className="mt-10 flex flex-col items-center">
          <h2 className="italic text-[clamp(3rem,14vw,8rem)]">Congratulations!</h2>

          <div className="mt-6 sm:mt-15 grid *:[grid-area:1/1] justify-center items-center">
            {cards.slice(0, SLICE).map((card, index) => {
              const centerIndex = (SLICE - 1) / 2;

              return (
                <img
                  key={card.code}
                  src={`https://assets.rpciege.com/${processAssetCode(card.code)}.jpg`}
                  className="aspect-card object-cover rounded-xl shadow-lg shadow-black/50"
                  style={{
                    transform: `rotate(${(index - centerIndex) * 5}deg) translateX(${
                      (index - centerIndex) * 150
                    }px)`,
                    zIndex: centerIndex - Math.abs(index - centerIndex),
                  }}
                  width={320}
                />
              );
            })}
          </div>

          {ADDITIONAL_CARDS > 0 ? (
            <p className="mt-10 font-nanum uppercase font-bold">+{ADDITIONAL_CARDS} more</p>
          ) : null}

          <Link href={routes.MY_CARDS} className="mt-20 btn btn-primary">
            View in your cards
          </Link>

          {!cbQuery.isError ? (
            <p className="mt-4 font-nanum font-bold uppercase">{`Cards left to claim: ${
              cbQuery.isPending || cbQuery.isLoading ? '...' : cbQuery.data.length
            }`}</p>
          ) : null}
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};
