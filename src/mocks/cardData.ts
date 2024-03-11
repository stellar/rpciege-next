import { CardMetadata } from '@/types/card';

import cursedKnight from '@/assets/cards/cursed-knight.jpg';
import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import theHacker from '@/assets/cards/the-hacker.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';
import theAnnihilator from '@/assets/cards/the-annihilator.jpg';

export const cardData: CardMetadata[] = [
  {
    image: vikingRaider.src,
    name: 'Viking Raider',
    desc: 'Fierce and relentless, the Viking Raider sails forth, their axe and shield a harbinger of conquest and plunder.',
    power: 9,
    modifier: 4,
    code: '',
    video: '',
  },
  {
    image: cursedKnight.src,
    name: 'Cursed Knight',
    desc: 'Bound in deathless servitude, the Cursed Knight fights a never-ending battle. Its spectral blade cuts through despair.',
    power: 11,
    modifier: 4,
    code: '',
    video: '',
  },
  {
    image: theHacker.src,
    name: 'The Hacker',
    desc: 'A digital samurai, he dances in the shadows of cyberspace, carving new realities from the raw matrix of ones and zeros.',
    power: 3,
    modifier: 11,
    code: '',
    video: '',
  },
  {
    image: orbitalCannon.src,
    name: 'Orbital Cannon',
    desc: 'A mechanical eye in the star-studded void. With a cold, calculated precision, it unleashes celestial fury upon the earthbound adversaries below.',
    power: 15,
    modifier: 0,
    code: '',
    video: '',
  },
  {
    image: theAnnihilator.src,
    name: 'The Annihilator',
    desc: 'He descends upon evil like a tempest, delivering retribution with unyielding fury. The Annihilator, the shadowed scourge of darkness, fights until all that remains is silence.',
    power: 14,
    modifier: 2,
    code: '',
    video: '',
  },
];
