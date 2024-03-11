import clsx from 'clsx';
import { useMediaQuery } from '@mantine/hooks';

import { padEndArray } from '@/utils';
import { useBinderContext } from '../..';

import { BinderGridView } from '../BinderGridView';
import { BinderModal } from '../BinderModal';
import { BinderPaginator } from '../BinderPaginator';
import { BinderRowView } from '../BinderRowView';
import { BinderTabs } from '../BinderTabs';
import { CardDetails } from '../CardDetails';

import styles from './styles.module.css';

export const BinderLayout = (props: { children?: React.ReactNode }) => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 1024px)');
  const { selectedCard, setSelectedCard } = useBinderContext();

  return (
    <>
      <div className={clsx(styles.BinderLayoutBase)}>
        <div className="[grid-area:content]">
          <BinderTabs className="max-lg:mb-9 max-lg:-mx-2" />
          <GridView />
        </div>

        {props.children}

        <BinderPaginator className="[grid-area:pagination] justify-self-center" />
      </div>

      {isSmallDevice && selectedCard ? (
        <BinderModal open onClose={() => setSelectedCard(undefined)}>
          <CardDetails className="p-8" card={selectedCard} />
        </BinderModal>
      ) : null}
    </>
  );
};

const GridView = () => {
  const { isPending, paginatedCards, selectedCard, setSelectedCard } = useBinderContext();

  if (isPending) return <BinderGridView.Loader />;

  // Add filler cards to make the grid look nice
  const cards = padEndArray(paginatedCards, 9);

  return (
    <BinderGridView>
      {cards.map((card, index) => {
        if (!card) return <div key={index} className="w-full aspect-card bg-black/10" />;

        return (
          <BinderGridView.Item
            key={card.code}
            src={card.image}
            isActive={selectedCard?.code === card.code}
            onClick={() => setSelectedCard(card)}
          />
        );
      })}
    </BinderGridView>
  );
};

const RowView = () => {
  const { error, isPending, paginatedCards, selectedCard, setSelectedCard } = useBinderContext();

  if (error) return <p>Failed to load cards.</p>;
  if (isPending) return <BinderRowView.Loader />;

  return (
    <BinderRowView>
      {paginatedCards.map((card) => (
        <BinderRowView.Item
          key={card.code}
          card={card as any}
          onClick={() => setSelectedCard(card)}
          className={clsx(
            'cursor-pointer',
            selectedCard === card && 'outline outline-4 outline-primary-red'
          )}
        />
      ))}
    </BinderRowView>
  );
};
