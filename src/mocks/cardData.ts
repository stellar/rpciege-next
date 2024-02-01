import { Card } from '@/types/card';

import cursedKnight from '@/assets/cards/cursed-knight.jpg';
import orbitalCannon from '@/assets/cards/orbital-cannon.jpg';
import theHacker from '@/assets/cards/the-hacker.jpg';
import vikingRaider from '@/assets/cards/viking-raider.jpg';
import theAnnihilator from '@/assets/cards/the-annihilator.jpg';

export const cardData: Card[] = [
  {
    src: vikingRaider.src,
    name: 'Viking Raider',
    description:
      'Fierce and relentless, the Viking Raider sails forth, their axe and shield a harbinger of conquest and plunder.',
    backstory:
      'The Viking Raider is a fearsome warrior, born of the icy fjords and the roaring sea. They are the scourge of the northern lands, and their name is whispered in fear by those who dwell in the shadow of their longships. The Viking Raider is a master of the axe and shield, and their battle prowess is unmatched. They are the first to charge into battle, and the last to leave, and their ferocity is unmatched. They are the embodiment of the Viking spirit, and their name will be remembered for all time.',
    power: 9,
    modifier: 4,
    type: 'Land',
    pack: 'Midnight Madness',
  },
  {
    src: cursedKnight.src,
    name: 'Cursed Knight',
    description:
      'Bound in deathless servitude, the Cursed Knight fights a never-ending battle. Its spectral blade cuts through despair.',
    backstory:
      'The Cursed Knight is a tragic figure, a once noble warrior who has been bound in deathless servitude. They are a spectral figure, their armor and weapons eternally stained with the blood of the innocent. They are a fearsome sight to behold, and their spectral blade cuts through despair. They are a relentless foe, and their cursed existence is a testament to the cruelty of fate. They are a tragic figure, and their name will be remembered for all time.',
    power: 11,
    modifier: 4,
    type: 'Land',
    pack: 'Midnight Madness',
  },
  {
    src: theHacker.src,
    name: 'The Hacker',
    description:
      'A digital samurai, he dances in the shadows of cyberspace, carving new realities from the raw matrix of ones and zeros.',
    backstory:
      'The Hacker is a digital samurai, a master of the cybernetic arts. They are a shadowy figure, their movements swift and precise as they dance through the shadows of cyberspace. They are a master of the blade, and their skill is unmatched. They are a fearsome foe, and their name is whispered in fear by those who dwell in the digital realm. They are a relentless warrior, and their mastery of the cybernetic arts is unmatched. They are a figure of legend, and their name will be remembered for all time.',
    power: 3,
    modifier: 11,
    type: 'Space',
    pack: 'Midnight Madness',
  },
  {
    src: orbitalCannon.src,
    name: 'Orbital Cannon',
    description:
      'A mechanical eye in the star-studded void. With a cold, calculated precision, it unleashes celestial fury upon the earthbound adversaries below.',
    backstory:
      'The Orbital Cannon is a fearsome weapon, a mechanical eye in the star-studded void. It is a relentless foe, and its cold, calculated precision is unmatched. It is a fearsome sight to behold, and its celestial fury is unmatched. It is a relentless weapon, and its name is whispered in fear by those who dwell in the shadow of its gaze. It is a fearsome figure, and its name will be remembered for all time.',
    power: 15,
    modifier: 0,
    type: 'Space',
    pack: 'Midnight Madness',
  },
  {
    src: theAnnihilator.src,
    name: 'The Annihilator',
    description:
      'He descends upon evil like a tempest, delivering retribution with unyielding fury. The Annihilator, the shadowed scourge of darkness, fights until all that remains is silence.',
    backstory:
      'The Annihilator is a fearsome warrior, a shadowed figure who descends upon evil like a tempest. They are a relentless foe, and their unyielding fury is unmatched. They are a fearsome sight to behold, and their retribution is swift and merciless. They are a relentless warrior, and their name is whispered in fear by those who dwell in the shadow of their gaze. They are a fearsome figure, and their name will be remembered for all time.',
    power: 14,
    modifier: 2,
    type: 'Land',
    pack: 'Midnight Madness',
  },
];
