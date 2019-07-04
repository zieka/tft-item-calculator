type Item = {
  name: string;
  imageUrl: string;
  description: string;
};

type BaseItem = Item & {
  map: {
    [key: string]: string;
  };
};

type CompositeItem = Item & {
  createdBy: [string, string];
};

export const baseItems: BaseItem[] = [
  {
    name: 'B. F. Sword',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/1.png',
    description: '+20.0 Attack Damage',
    map: {}
  },
  {
    name: 'Recurve Bow',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/2.png',
    description: '+15.0% Attack Speed',
    map: {}
  },
  {
    name: 'Needlessly Large Rod',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/3.png',
    description: '+20.0% Spell Damage',
    map: {}
  },
  {
    name: 'Tear of the Goddess',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/4.png',
    description: '+20.0 Mana',
    map: {}
  },
  {
    name: 'Chain Vest',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/5.png',
    description: '+20.0 Armor',
    map: {}
  },
  {
    name: 'Negatron Cloak',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/6.png',
    description: '+20.0 Magic Resist',
    map: {}
  },
  {
    name: `Giant's Belt`,
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/7.png',
    description: `+200.0 Health`,
    map: {}
  },
  {
    name: 'Spatula',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/8.png',
    description: 'upgrades into rule breaking items',
    map: {}
  }
];

export const compoundItems: CompositeItem[] = [];
