// Mock data for Minecraft enchantments
export const enchantments = [
  // Melee Weapon Enchantments
  {
    id: 'sharpness',
    name: 'Sharpness',
    description: 'Increases the damage dealt by melee weapons',
    effects: 'Adds 1.25 × level extra damage per hit',
    applicableItems: ['Sword', 'Axe'],
    itemIcons: ['⚔️', '🪓'],
    maxLevel: 5,
    experienceCost: '1-21 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: ['Smite', 'Bane of Arthropods']
  },
  {
    id: 'looting',
    name: 'Looting',
    description: 'Increases mob loot drops',
    effects: 'Increases mob drops by level (max 3 extra drops)',
    applicableItems: ['Sword'],
    itemIcons: ['⚔️'],
    maxLevel: 3,
    experienceCost: '15-65 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: []
  },
  {
    id: 'fire-aspect',
    name: 'Fire Aspect',
    description: 'Sets targets on fire',
    effects: 'Sets mobs on fire for (level × 4) seconds',
    applicableItems: ['Sword'],
    itemIcons: ['⚔️'],
    maxLevel: 2,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: []
  },
  {
    id: 'knockback',
    name: 'Knockback',
    description: 'Increases knockback dealt to enemies',
    effects: 'Increases knockback by level blocks',
    applicableItems: ['Sword'],
    itemIcons: ['⚔️'],
    maxLevel: 2,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: []
  },
  {
    id: 'smite',
    name: 'Smite',
    description: 'Increases damage to undead mobs',
    effects: 'Adds 2.5 × level extra damage to undead mobs',
    applicableItems: ['Sword', 'Axe'],
    itemIcons: ['⚔️', '🪓'],
    maxLevel: 5,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: ['Sharpness', 'Bane of Arthropods']
  },
  {
    id: 'bane-of-arthropods',
    name: 'Bane of Arthropods',
    description: 'Increases damage to arthropod mobs',
    effects: 'Adds 2.5 × level extra damage to spiders, bees, silverfish, and endermites',
    applicableItems: ['Sword', 'Axe'],
    itemIcons: ['⚔️', '🪓'],
    maxLevel: 5,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: ['Sharpness', 'Smite']
  },
  {
    id: 'sweeping-edge',
    name: 'Sweeping Edge',
    description: 'Increases sweeping attack damage',
    effects: 'Increases sweeping attack damage by level × 50%',
    applicableItems: ['Sword'],
    itemIcons: ['⚔️'],
    maxLevel: 3,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: []
  },
  {
    id: 'density',
    name: 'Density',
    description: 'Increases mace damage per block fallen',
    effects: 'Adds 0.5 × level damage per block fallen',
    applicableItems: ['Mace'],
    itemIcons: ['🔨'],
    maxLevel: 5,
    experienceCost: '1-21 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: ['Breach']
  },
  {
    id: 'breach',
    name: 'Breach',
    description: 'Reduces armor effectiveness of target',
    effects: 'Reduces armor by level × 15%',
    applicableItems: ['Mace'],
    itemIcons: ['🔨'],
    maxLevel: 4,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: ['Density']
  },
  {
    id: 'wind-burst',
    name: 'Wind Burst',
    description: 'Emits wind burst on critical hit',
    effects: 'Creates wind burst that launches enemies',
    applicableItems: ['Mace'],
    itemIcons: ['🔨'],
    maxLevel: 3,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'melee-weapon',
    incompatible: []
  },

  // Ranged Weapon Enchantments
  {
    id: 'power',
    name: 'Power',
    description: 'Increases arrow damage',
    effects: 'Increases arrow damage by (level × 25% + 25%)',
    applicableItems: ['Bow'],
    itemIcons: ['🏹'],
    maxLevel: 5,
    experienceCost: '1-51 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: []
  },
  {
    id: 'flame',
    name: 'Flame',
    description: 'Sets targets on fire',
    effects: 'Arrows set targets on fire for 5 seconds',
    applicableItems: ['Bow'],
    itemIcons: ['🏹'],
    maxLevel: 1,
    experienceCost: '20-70 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: []
  },
  {
    id: 'infinity',
    name: 'Infinity',
    description: 'Shooting consumes no arrows',
    effects: 'Bow can be used without consuming arrows (requires at least 1 arrow)',
    applicableItems: ['Bow'],
    itemIcons: ['🏹'],
    maxLevel: 1,
    experienceCost: '20-70 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: ['Mending']
  },
  {
    id: 'punch',
    name: 'Punch',
    description: 'Increases arrow knockback',
    effects: 'Increases knockback by level × 3 blocks',
    applicableItems: ['Bow'],
    itemIcons: ['🏹'],
    maxLevel: 2,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: []
  },
  {
    id: 'quick-charge',
    name: 'Quick Charge',
    description: 'Decreases crossbow charging time',
    effects: 'Reduces charging time by level × 0.25 seconds',
    applicableItems: ['Crossbow'],
    itemIcons: ['🏹'],
    maxLevel: 3,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: []
  },
  {
    id: 'multishot',
    name: 'Multishot',
    description: 'Shoots 3 arrows/fireworks at once',
    effects: 'Shoots 3 projectiles in a spread pattern',
    applicableItems: ['Crossbow'],
    itemIcons: ['🏹'],
    maxLevel: 1,
    experienceCost: '20-70 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: ['Piercing']
  },
  {
    id: 'piercing',
    name: 'Piercing',
    description: 'Arrows pierce through multiple enemies',
    effects: 'Arrows pierce through level + 1 entities',
    applicableItems: ['Crossbow'],
    itemIcons: ['🏹'],
    maxLevel: 4,
    experienceCost: '1-51 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: ['Multishot']
  },
  {
    id: 'impaling',
    name: 'Impaling',
    description: 'Increases trident damage to aquatic mobs',
    effects: 'Adds 2.5 × level extra damage to aquatic mobs',
    applicableItems: ['Trident'],
    itemIcons: ['🔱'],
    maxLevel: 5,
    experienceCost: '1-21 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: []
  },
  {
    id: 'channeling',
    name: 'Channeling',
    description: 'Summons lightning during thunderstorms',
    effects: 'Summons lightning bolt on hit during thunderstorms',
    applicableItems: ['Trident'],
    itemIcons: ['🔱'],
    maxLevel: 1,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Fishing, Loot chests, Trading',
    category: 'ranged-weapon',
    incompatible: ['Riptide']
  },
  {
    id: 'loyalty',
    name: 'Loyalty',
    description: 'Trident returns after being thrown',
    effects: 'Trident returns in level × 1 second',
    applicableItems: ['Trident'],
    itemIcons: ['🔱'],
    maxLevel: 3,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: ['Riptide']
  },
  {
    id: 'riptide',
    name: 'Riptide',
    description: 'Propels player when thrown in water/rain',
    effects: 'Launches player forward when thrown in water or rain',
    applicableItems: ['Trident'],
    itemIcons: ['🔱'],
    maxLevel: 3,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'ranged-weapon',
    incompatible: ['Loyalty', 'Channeling']
  },

  // Tool Enchantments
  {
    id: 'fortune',
    name: 'Fortune',
    description: 'Increases the number of items dropped when mining certain blocks',
    effects: 'Increases block drops by up to level × 100%',
    applicableItems: ['Pickaxe', 'Shovel', 'Axe', 'Hoe'],
    itemIcons: ['⛏️', '🪣', '🪓', '🚜'],
    maxLevel: 3,
    experienceCost: '15-61 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: ['Silk Touch']
  },
  {
    id: 'efficiency',
    name: 'Efficiency',
    description: 'Increases mining speed',
    effects: 'Increases mining speed by level² + level + 1',
    applicableItems: ['Pickaxe', 'Shovel', 'Axe', 'Hoe', 'Shears'],
    itemIcons: ['⛏️', '🪣', '🪓', '🚜', '✂️'],
    maxLevel: 5,
    experienceCost: '1-51 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: []
  },
  {
    id: 'silk-touch',
    name: 'Silk Touch',
    description: 'Allows blocks to drop themselves instead of their usual drops',
    effects: 'Mine blocks in their original form',
    applicableItems: ['Pickaxe', 'Shovel', 'Axe', 'Hoe'],
    itemIcons: ['⛏️', '🪣', '🪓', '🚜'],
    maxLevel: 1,
    experienceCost: '15-65 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: ['Fortune']
  },
  {
    id: 'lure',
    name: 'Lure',
    description: 'Decreases time for fish to bite',
    effects: 'Decreases fishing time by level × 5 seconds',
    applicableItems: ['Fishing Rod'],
    itemIcons: ['🎣'],
    maxLevel: 3,
    experienceCost: '15-65 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: []
  },
  {
    id: 'luck-of-the-sea',
    name: 'Luck of the Sea',
    description: 'Increases chances of catching treasure',
    effects: 'Increases treasure chances by level × 2%',
    applicableItems: ['Fishing Rod'],
    itemIcons: ['🎣'],
    maxLevel: 3,
    experienceCost: '15-65 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: []
  },

  // Armor Enchantments
  {
    id: 'protection',
    name: 'Protection',
    description: 'Reduces most types of damage',
    effects: 'Reduces damage by 4% × level',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    itemIcons: ['⛑️', '🦺', '👖', '🥾'],
    maxLevel: 4,
    experienceCost: '1-41 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Fire Protection', 'Blast Protection', 'Projectile Protection']
  },
  {
    id: 'fire-protection',
    name: 'Fire Protection',
    description: 'Reduces fire damage',
    effects: 'Reduces fire damage by level × 8%',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    itemIcons: ['⛑️', '🦺', '👖', '🥾'],
    maxLevel: 4,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Protection', 'Blast Protection', 'Projectile Protection']
  },
  {
    id: 'blast-protection',
    name: 'Blast Protection',
    description: 'Reduces explosion damage',
    effects: 'Reduces explosion damage by level × 8%',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    itemIcons: ['⛑️', '🦺', '👖', '🥾'],
    maxLevel: 4,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Protection', 'Fire Protection', 'Projectile Protection']
  },
  {
    id: 'projectile-protection',
    name: 'Projectile Protection',
    description: 'Reduces projectile damage',
    effects: 'Reduces projectile damage by level × 8%',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    itemIcons: ['⛑️', '🦺', '👖', '🥾'],
    maxLevel: 4,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Protection', 'Fire Protection', 'Blast Protection']
  },
  {
    id: 'thorns',
    name: 'Thorns',
    description: 'Damages attackers',
    effects: 'Reflects (level × 15)% of damage back to attackers',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    itemIcons: ['⛑️', '🦺', '👖', '🥾'],
    maxLevel: 3,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: []
  },

  // Helmet-specific
  {
    id: 'aqua-affinity',
    name: 'Aqua Affinity',
    description: 'Increases underwater mining speed',
    effects: 'Mining speed underwater becomes same as on land',
    applicableItems: ['Helmet'],
    itemIcons: ['⛑️'],
    maxLevel: 1,
    experienceCost: '1-41 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'helmet',
    incompatible: []
  },
  {
    id: 'respiration',
    name: 'Respiration',
    description: 'Extends underwater breathing time',
    effects: 'Extends underwater breathing by level × 15 seconds',
    applicableItems: ['Helmet'],
    itemIcons: ['⛑️'],
    maxLevel: 3,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'helmet',
    incompatible: []
  },

  // Boots-specific
  {
    id: 'feather-falling',
    name: 'Feather Falling',
    description: 'Reduces fall damage',
    effects: 'Reduces fall damage by level × 12%',
    applicableItems: ['Boots'],
    itemIcons: ['🥾'],
    maxLevel: 4,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'boots',
    incompatible: []
  },
  {
    id: 'depth-strider',
    name: 'Depth Strider',
    description: 'Increases underwater movement speed',
    effects: 'Increases underwater walking speed by level/3',
    applicableItems: ['Boots'],
    itemIcons: ['🥾'],
    maxLevel: 3,
    experienceCost: '10-60 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'boots',
    incompatible: ['Frost Walker']
  },
  {
    id: 'frost-walker',
    name: 'Frost Walker',
    description: 'Freezes water into ice',
    effects: 'Creates frosted ice blocks when walking on water',
    applicableItems: ['Boots'],
    itemIcons: ['🥾'],
    maxLevel: 2,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Loot chests, Trading',
    category: 'boots',
    incompatible: ['Depth Strider']
  },
  {
    id: 'soul-speed',
    name: 'Soul Speed',
    description: 'Increases walking speed on soul sand and soul soil',
    effects: 'Increases speed on soul blocks by level × 30%',
    applicableItems: ['Boots'],
    itemIcons: ['🥾'],
    maxLevel: 3,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Bastion remnants, Piglin bartering',
    category: 'boots',
    incompatible: []
  },

  // Leggings-specific
  {
    id: 'swift-sneak',
    name: 'Swift Sneak',
    description: 'Increases sneaking speed',
    effects: 'Increases sneaking speed by level × 15%',
    applicableItems: ['Leggings'],
    itemIcons: ['👖'],
    maxLevel: 3,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Ancient City loot chests',
    category: 'leggings',
    incompatible: []
  },

  // Universal Enchantments
  {
    id: 'unbreaking',
    name: 'Unbreaking',
    description: 'Increases the durability of items',
    effects: 'Reduces the chance of durability loss by (100/(level+1))%',
    applicableItems: ['All tools', 'All armor', 'Weapons', 'Bow', 'Crossbow', 'Trident', 'Shield'],
    itemIcons: ['🛡️'],
    maxLevel: 3,
    experienceCost: '5-55 XP',
    requirements: 'Enchanting Table or Anvil',
    category: 'universal',
    incompatible: []
  },
  {
    id: 'mending',
    name: 'Mending',
    description: 'Repairs the item using experience orbs',
    effects: 'Uses XP to repair durability instead of going to XP bar',
    applicableItems: ['All tools', 'All armor', 'Weapons', 'Bow', 'Crossbow', 'Trident', 'Shield'],
    itemIcons: ['🛡️'],
    maxLevel: 1,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Fishing, Loot chests, Trading',
    category: 'universal',
    incompatible: ['Infinity']
  },

  // Curse Enchantments
  {
    id: 'curse-of-binding',
    name: 'Curse of Binding',
    description: 'Prevents removal of cursed item',
    effects: 'Item cannot be removed except by dying or breaking',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots', 'Elytra', 'Carved Pumpkin'],
    itemIcons: ['💀'],
    maxLevel: 1,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Curse - Found in loot chests, fishing',
    category: 'curse',
    incompatible: []
  },
  {
    id: 'curse-of-vanishing',
    name: 'Curse of Vanishing',
    description: 'Item disappears on death',
    effects: 'Item is destroyed when player dies',
    applicableItems: ['All items that can be enchanted'],
    itemIcons: ['💀'],
    maxLevel: 1,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Curse - Found in loot chests, fishing, trading',
    category: 'curse',
    incompatible: []
  }
];

// Experience level costs for enchanting
export const experienceLevels = {
  1: 7, 2: 9, 3: 11, 4: 13, 5: 15, 6: 17, 7: 19, 8: 21, 9: 23, 10: 25,
  11: 27, 12: 29, 13: 31, 14: 33, 15: 35, 16: 37, 17: 39, 18: 41, 19: 43, 20: 45,
  21: 47, 22: 49, 23: 51, 24: 53, 25: 55, 26: 57, 27: 59, 28: 61, 29: 63, 30: 65
};

// Categories for filtering
export const categories = [
  { id: 'all', name: 'All Enchantments' },
  { id: 'melee-weapon', name: 'Melee Weapon' },
  { id: 'ranged-weapon', name: 'Ranged Weapon' },
  { id: 'tool', name: 'Tool' },
  { id: 'armor', name: 'Armor' },
  { id: 'helmet', name: 'Helmet' },
  { id: 'boots', name: 'Boots' },
  { id: 'leggings', name: 'Leggings' },
  { id: 'universal', name: 'Universal' },
  { id: 'curse', name: 'Curse' }
];

// Items that can be enchanted
export const enchantableItems = [
  'Sword', 'Axe', 'Mace', 'Pickaxe', 'Shovel', 'Hoe', 'Bow', 'Crossbow', 'Trident',
  'Fishing Rod', 'Helmet', 'Chestplate', 'Leggings', 'Boots', 'Shield', 'Shears'
];