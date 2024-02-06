export type CardPack = 'Midnight Madness';
export type CardType = 'Land' | 'Space';

export type Card = {
  src: string;
  name: string;
  description: string;
  backstory: string;
  power: number;
  modifier: number;
  pack: CardPack;
  type: CardType;
};
