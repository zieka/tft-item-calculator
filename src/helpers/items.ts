type Item = {
  name: string;
  imageUrl: string;
  description: string;
};

export type BaseItem = Item & {
  buildsIntoMap: {
    [key: string]: number;
  };
};

export type CompoundItem = Item & {
  builtFrom: [string, string];
};

export const baseItems: BaseItem[] = [
  {
    // 1
    name: 'B. F. Sword',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/1.png',
    description: '+20.0 Attack Damage',
    buildsIntoMap: {
      'B. F. Sword': 0,
      'Recurve Bow': 1,
      'Needlessly Large Rod': 2,
      'Tear of the Goddess': 3,
      'Chain Vest': 4,
      'Negatron Cloak': 5,
      "Giant's Belt": 6,
      Spatula: 7
    }
  },
  {
    // 2
    name: 'Recurve Bow',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/2.png',
    description: '+15.0% Attack Speed',
    buildsIntoMap: {
      'B. F. Sword': 1,
      'Recurve Bow': 8,
      'Needlessly Large Rod': 9,
      'Tear of the Goddess': 10,
      'Chain Vest': 11,
      'Negatron Cloak': 12,
      "Giant's Belt": 13,
      Spatula: 14
    }
  },
  {
    // 3
    name: 'Needlessly Large Rod',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/3.png',
    description: '+20.0% Spell Damage',
    buildsIntoMap: {
      'B. F. Sword': 2,
      'Recurve Bow': 9,
      'Needlessly Large Rod': 15,
      'Tear of the Goddess': 16,
      'Chain Vest': 17,
      'Negatron Cloak': 18,
      "Giant's Belt": 19,
      Spatula: 20
    }
  },
  {
    // 4
    name: 'Tear of the Goddess',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/4.png',
    description: '+20.0 Mana',
    buildsIntoMap: {
      'B. F. Sword': 3,
      'Recurve Bow': 10,
      'Needlessly Large Rod': 16,
      'Tear of the Goddess': 21,
      'Chain Vest': 22,
      'Negatron Cloak': 23,
      "Giant's Belt": 24,
      Spatula: 25
    }
  },
  {
    // 5
    name: 'Chain Vest',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/5.png',
    description: '+20.0 Armor',
    buildsIntoMap: {
      'B. F. Sword': 4,
      'Recurve Bow': 11,
      'Needlessly Large Rod': 17,
      'Tear of the Goddess': 22,
      'Chain Vest': 26,
      'Negatron Cloak': 27,
      "Giant's Belt": 28,
      Spatula: 29
    }
  },
  {
    // 6
    name: 'Negatron Cloak',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/6.png',
    description: '+20.0 Magic Resist',
    buildsIntoMap: {
      'B. F. Sword': 5,
      'Recurve Bow': 12,
      'Needlessly Large Rod': 18,
      'Tear of the Goddess': 23,
      'Chain Vest': 27,
      'Negatron Cloak': 30,
      "Giant's Belt": 31,
      Spatula: 32
    }
  },
  {
    // 7
    name: "Giant's Belt",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/7.png',
    description: `+200.0 Health`,
    buildsIntoMap: {
      'B. F. Sword': 6,
      'Recurve Bow': 13,
      'Needlessly Large Rod': 19,
      'Tear of the Goddess': 24,
      'Chain Vest': 28,
      'Negatron Cloak': 31,
      "Giant's Belt": 33,
      Spatula: 34
    }
  },
  {
    // 8
    name: 'Spatula',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/8.png',
    description: 'upgrades into rule breaking items',
    buildsIntoMap: {
      'B. F. Sword': 7,
      'Recurve Bow': 14,
      'Needlessly Large Rod': 20,
      'Tear of the Goddess': 25,
      'Chain Vest': 29,
      'Negatron Cloak': 32,
      "Giant's Belt": 34,
      Spatula: 35
    }
  }
];

export const compoundItems: CompoundItem[] = [
  {
    // 0
    name: 'Infinity Edge',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/11.png',
    description: 'Critical Strikes deal +100.0% damage',
    builtFrom: ['', '']
  },
  {
    // 1
    name: 'Sword of the Divine',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/12.png',
    description:
      'Each second the wearer has a 5.0% chance to gain 100% Critical Strike',
    builtFrom: ['', '']
  },
  {
    // 2
    name: 'Hextech Gunblade',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/13.png',
    description: 'Heal for 25.0% of all damage dealt',
    builtFrom: ['', '']
  },
  {
    // 3
    name: 'Spear of Shojin',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/14.png',
    description: 'After casting wearer gains 20.0% of its max mana per attack',
    builtFrom: ['', '']
  },
  {
    // 4
    name: 'Guardian Angel',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/15.png',
    description: 'Wearer revives with 300.0 Health',
    builtFrom: ['', '']
  },
  {
    // 5
    name: 'The Bloodthirster',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/16.png',
    description: 'Attacks heal for % of damage',
    builtFrom: ['', '']
  },
  {
    // 6
    name: "Zeke's Herald",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/17.png',
    description: 'Adjacent allies gain +20.0% Attack Speed',
    builtFrom: ['', '']
  },
  {
    // 7
    name: "Youmuu's Ghostblade",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/18.png',
    description: 'Wearer is also an Assassin',
    builtFrom: ['', '']
  },
  {
    // 8
    name: 'Rapid Firecannon',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/22.png',
    description: "Wearer's attacks cannot be dodged. Attack Range is doubled",
    builtFrom: ['', '']
  },
  {
    // 9
    name: "Guinsoo's Rageblade",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/23.png',
    description: 'Attacks grant 3.0% Attack Speed.  Stacks infinitely',
    builtFrom: ['', '']
  },
  {
    // 10
    name: 'Statikk Shiv',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/24.png',
    description: 'Every 3rd attack deals 100.0 splash magical damage',
    builtFrom: ['', '']
  },
  {
    // 11
    name: 'Phantom Dancer',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/25.png',
    description: 'Wearer dodges all Critical Strikes',
    builtFrom: ['', '']
  },
  {
    // 12
    name: 'Cursed Blade',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/26.png',
    description:
      "Attacks have a low chance to Shrink (Reduce enemy's star level by 1)",
    builtFrom: ['', '']
  },
  {
    // 13
    name: 'Titanic Hydra',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/27.png',
    description:
      "Attacks deal 10.0% of the wearer's max Health as splash damage",
    builtFrom: ['', '']
  },
  {
    // 14
    name: 'Blade of the Ruined King',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/28.png',
    description: 'Wearer is also a Blademaster',
    builtFrom: ['', '']
  },
  {
    // 15
    name: "Rabadon's Deathcap",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/33.png',
    description: "Wearer's Spell Damage stat is amplified by 50.0%",
    builtFrom: ['', '']
  },
  {
    // 16
    name: "Luden's Echo",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/34.png',
    description: 'Spells deal 100.0 splash damage on hit',
    builtFrom: ['', '']
  },
  {
    // 17
    name: 'Locket of the Iron Solari',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/35.png',
    description:
      'On start of combat all adjacent allies gain a shield of 200.0',
    builtFrom: ['', '']
  },
  {
    // 18
    name: 'Ionic Spark',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/36.png',
    description: 'Whenever an enemy casts a spell they take 100.0 damage',
    builtFrom: ['', '']
  },
  {
    // 19
    name: 'Morellonomicon',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/37.png',
    description:
      "Spells deal burn damage equal to 5.0% of the enemy's maximum health per second",
    builtFrom: ['', '']
  },
  {
    // 20
    name: 'Yuumi',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/38.png',
    description: 'Wearer is also a Sorcerer',
    builtFrom: ['', '']
  },
  {
    // 21
    name: "Seraph's Embrace",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/44.png',
    description: 'Regain 20.0 mana each time a spell is cast',
    builtFrom: ['', '']
  },
  {
    // 22
    name: 'Frozen Heart',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/45.png',
    description: 'Adjacent enemies lose 20.0% Attack Speed',
    builtFrom: ['', '']
  },
  {
    // 23
    name: 'Hush',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/46.png',
    description: 'Attacks have a high chance to Silence',
    builtFrom: ['', '']
  },
  {
    // 24
    name: 'Redemption',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/47.png',
    description: 'On death heal all nearby allies for 1000.0 Health',
    builtFrom: ['', '']
  },
  {
    // 25
    name: 'Darkin',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/48.png',
    description: 'Wearer is also a Demon',
    builtFrom: ['', '']
  },
  {
    // 26
    name: 'Thornmail',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/55.png',
    description: 'Reflect 25.0% of damage taken from attacks',
    builtFrom: ['', '']
  },
  {
    // 27
    name: 'Sword Breaker',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/56.png',
    description: 'Attacks have a chance to disarm',
    builtFrom: ['', '']
  },
  {
    // 28
    name: 'Red Buff',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/57.png',
    description: 'Attacks deal 2.5% burn damage',
    builtFrom: ['', '']
  },
  {
    // 29
    name: "Knight's Vow",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/58.png',
    description: 'Wearer is also a Knight',
    builtFrom: ['', '']
  },
  {
    // 30
    name: "Dragon's Claw",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/66.png',
    description: 'Gain 83.0% resistance to magic damage',
    builtFrom: ['', '']
  },
  {
    // 31
    name: 'Zephyr',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/67.png',
    description: 'On start of combat banish an enemy for 5.0 seconds',
    builtFrom: ['', '']
  },
  {
    // 32
    name: "Runaan's Hurricane",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/68.png',
    description:
      'Attacks target 2.0 additional enemies. These additional attacks deal 50.0% damage',
    builtFrom: ['', '']
  },
  {
    // 33
    name: "Warmog's Armor",
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/77.png',
    description: 'Wearer regenerates 2.5% max Health per second',
    builtFrom: ['', '']
  },
  {
    // 34
    name: 'Frozen Mallet',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/78.png',
    description: 'Wearer is also a Glacial',
    builtFrom: ['', '']
  },
  {
    // 35
    name: 'Force of Nature',
    imageUrl: 'http://cdn.leagueofgraphs.com/img/tft/items/88.png',
    description: 'Gain +1.0 team size',
    builtFrom: ['', '']
  }
];
