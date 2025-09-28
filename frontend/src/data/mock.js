// Mock data for Minecraft enchantments
export const enchantments = [
  {
    id: 'sharpness',
    name: 'Sharpness',
    description: 'Increases the damage dealt by melee weapons',
    effects: 'Adds 1.25 × level extra damage per hit',
    applicableItems: ['Sword', 'Axe'],
    maxLevel: 5,
    experienceCost: '1-21 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: ['Smite', 'Bane of Arthropods']
  },
  {
    id: 'fortune',
    name: 'Fortune',
    description: 'Increases the number of items dropped when mining certain blocks',
    effects: 'Increases block drops by up to level × 100%',
    applicableItems: ['Pickaxe', 'Shovel', 'Axe', 'Hoe'],
    maxLevel: 3,
    experienceCost: '15-61 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: ['Silk Touch']
  },
  {
    id: 'unbreaking',
    name: 'Unbreaking',
    description: 'Increases the durability of items',
    effects: 'Reduces the chance of durability loss by (100/(level+1))%',
    applicableItems: ['All tools', 'All armor', 'Weapons', 'Bow', 'Crossbow', 'Trident', 'Shield'],
    maxLevel: 3,
    experienceCost: '5-55 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'universal',
    incompatible: []
  },
  {
    id: 'protection',
    name: 'Protection',
    description: 'Reduces most types of damage',
    effects: 'Reduces damage by 4% × level',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    maxLevel: 4,
    experienceCost: '1-41 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Fire Protection', 'Blast Protection', 'Projectile Protection']
  },
  {
    id: 'efficiency',
    name: 'Efficiency',
    description: 'Increases mining speed',
    effects: 'Increases mining speed by level² + level + 1',
    applicableItems: ['Pickaxe', 'Shovel', 'Axe', 'Hoe', 'Shears'],
    maxLevel: 5,
    experienceCost: '1-51 levels',
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
    maxLevel: 1,
    experienceCost: '15-65 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'tool',
    incompatible: ['Fortune']
  },
  {
    id: 'mending',
    name: 'Mending',
    description: 'Repairs the item using experience orbs',
    effects: 'Uses XP to repair durability instead of going to XP bar',
    applicableItems: ['All tools', 'All armor', 'Weapons', 'Bow', 'Crossbow', 'Trident', 'Shield'],
    maxLevel: 1,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Fishing, Loot chests, Trading',
    category: 'universal',
    incompatible: ['Infinity']
  },
  {
    id: 'power',
    name: 'Power',
    description: 'Increases arrow damage',
    effects: 'Increases arrow damage by (level × 25% + 25%)',
    applicableItems: ['Bow'],
    maxLevel: 5,
    experienceCost: '1-51 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'bow',
    incompatible: []
  },
  {
    id: 'flame',
    name: 'Flame',
    description: 'Sets targets on fire',
    effects: 'Arrows set targets on fire for 5 seconds',
    applicableItems: ['Bow'],
    maxLevel: 1,
    experienceCost: '20-70 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'bow',
    incompatible: []
  },
  {
    id: 'infinity',
    name: 'Infinity',
    description: 'Shooting consumes no arrows',
    effects: 'Bow can be used without consuming arrows (requires at least 1 arrow)',
    applicableItems: ['Bow'],
    maxLevel: 1,
    experienceCost: '20-70 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'bow',
    incompatible: ['Mending']
  },
  {
    id: 'looting',
    name: 'Looting',
    description: 'Increases mob loot drops',
    effects: 'Increases mob drops by level (max 3 extra drops)',
    applicableItems: ['Sword'],
    maxLevel: 3,
    experienceCost: '15-65 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: []
  },
  {
    id: 'fire-aspect',
    name: 'Fire Aspect',
    description: 'Sets targets on fire',
    effects: 'Sets mobs on fire for (level × 4) seconds',
    applicableItems: ['Sword'],
    maxLevel: 2,
    experienceCost: '10-60 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: []
  },
  {
    id: 'knockback',
    name: 'Knockback',
    description: 'Increases knockback dealt to enemies',
    effects: 'Increases knockback by level blocks',
    applicableItems: ['Sword'],
    maxLevel: 2,
    experienceCost: '5-55 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: []
  },
  {
    id: 'smite',
    name: 'Smite',
    description: 'Increases damage to undead mobs',
    effects: 'Adds 2.5 × level extra damage to undead mobs',
    applicableItems: ['Sword', 'Axe'],
    maxLevel: 5,
    experienceCost: '5-55 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: ['Sharpness', 'Bane of Arthropods']
  },
  {
    id: 'bane-of-arthropods',
    name: 'Bane of Arthropods',
    description: 'Increases damage to arthropod mobs',
    effects: 'Adds 2.5 × level extra damage to spiders, bees, silverfish, and endermites',
    applicableItems: ['Sword', 'Axe'],
    maxLevel: 5,
    experienceCost: '5-55 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'weapon',
    incompatible: ['Sharpness', 'Smite']
  },
  {
    id: 'thorns',
    name: 'Thorns',
    description: 'Damages attackers',
    effects: 'Reflects (level × 15)% of damage back to attackers',
    applicableItems: ['Helmet', 'Chestplate', 'Leggings', 'Boots'],
    maxLevel: 3,
    experienceCost: '10-60 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: []
  },
  {
    id: 'feather-falling',
    name: 'Feather Falling',
    description: 'Reduces fall damage',
    effects: 'Reduces fall damage by level × 12%',
    applicableItems: ['Boots'],
    maxLevel: 4,
    experienceCost: '5-55 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: []
  },
  {
    id: 'aqua-affinity',
    name: 'Aqua Affinity',
    description: 'Increases underwater mining speed',
    effects: 'Mining speed underwater becomes same as on land',
    applicableItems: ['Helmet'],
    maxLevel: 1,
    experienceCost: '1-41 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: []
  },
  {
    id: 'respiration',
    name: 'Respiration',
    description: 'Extends underwater breathing time',
    effects: 'Extends underwater breathing by level × 15 seconds',
    applicableItems: ['Helmet'],
    maxLevel: 3,
    experienceCost: '10-60 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: []
  },
  {
    id: 'depth-strider',
    name: 'Depth Strider',
    description: 'Increases underwater movement speed',
    effects: 'Increases underwater walking speed by level/3',
    applicableItems: ['Boots'],
    maxLevel: 3,
    experienceCost: '10-60 levels',
    requirements: 'Enchanting Table or Anvil',
    category: 'armor',
    incompatible: ['Frost Walker']
  },
  {
    id: 'frost-walker',
    name: 'Frost Walker',
    description: 'Freezes water into ice',
    effects: 'Creates frosted ice blocks when walking on water',
    applicableItems: ['Boots'],
    maxLevel: 2,
    experienceCost: 'Cannot be obtained from enchanting table',
    requirements: 'Treasure enchantment - Loot chests, Trading',
    category: 'armor',
    incompatible: ['Depth Strider']
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
  { id: 'weapon', name: 'Weapon' },
  { id: 'tool', name: 'Tool' },
  { id: 'armor', name: 'Armor' },
  { id: 'bow', name: 'Bow' },
  { id: 'universal', name: 'Universal' }
];

// Items that can be enchanted
export const enchantableItems = [
  'Sword', 'Axe', 'Pickaxe', 'Shovel', 'Hoe', 'Bow', 'Crossbow', 'Trident',
  'Helmet', 'Chestplate', 'Leggings', 'Boots', 'Shield', 'Shears'
];