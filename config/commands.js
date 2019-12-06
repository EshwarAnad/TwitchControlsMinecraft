module.exports = [
  {
    name: 'Weather',
    weight: 15,
    commandTemplate: 'weather <id>',
    description: 'Vote to change the weather.',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        id: 'rain',
        name: 'Rain',
      },
      {
        id: 'thunder',
        name: 'Thunder',
      },
      {
        id: 'clear',
        name: 'Clear',
      },
    ],
    defaultOption: {
      name: 'Do Nothing',
      pass: true,
    },
  },

/*
  {
    name: 'Disaster',
    weight: 8,
    description: 'Vote to start a destructive disaster',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        executableCommand: '',
        name: 'Wildfire',
      },
      {
        executableCommand: '',
        name: 'Thunderstorm',
      },
      {
        executableCommand: '',
        name: 'Earthquake',
      },
      {
        executableCommand: '',
        name: 'Flood',
      },
      {
        executableCommand: '',
        name: 'Meteors',
      },
    ],
    defaultOption: {
      name: 'Be Nice, Do Nothing',
      pass: true,
    },
  },
*/

  {
    name: 'Status',
    weight: 20,
    commandTemplate: 'effect give @a <id> <duration> <amplification>',
    description: 'Vote to give the player(s) a status effect.',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        id: 'minecraft:speed',
        name: 'Speed',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:slowness',
        name: 'Slowness',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:haste',
        name: 'Haste',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:jump_boost',
        name: 'Jump Boost',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:nausea',
        name: 'Nausea',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:regeneration',
        name: 'Regeneration',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:blindness',
        name: 'Blindness',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:poison',
        name: 'Poison',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:luck',
        name: 'Luck',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:slow_falling',
        name: 'Slow Falling',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:dolphins_grace',
        name: 'Increase Swim Speed',
        durationRange: [ 10, 300 ],
        amplificationRange: [ 1, 15 ],
      },
      {
        id: 'minecraft:bad_omen',
        name: 'Bad Omen',
        durationRange: [ 10, 60 ],
        amplificationRange: [ 1, 15 ],
      },
    ],
    defaultOption: {
      name: 'Give Nothing',
      pass: true,
    },
  },


  {
    name: 'Exile',
    weight: 4,
    description: 'Vote to teleport player(s) to a random location.',
    presentableOptionsExcludingDefault: 1,
    options: [
      {
        executableCommand: 'spreadplayers 0 0 500 5000 false @a',
        name: 'Exile Players',
      },
    ],
    defaultOption: {
      name: 'Do Not Exile',
      pass: true,
    },
  },


  {
    name: 'Difficulty',
    weight: 5,
    commandTemplate: 'difficulty <id>',
    description: 'Vote to change the game difficulty.',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        id: 'easy',
        name: 'Easy',
      },
      {
        id: 'normal',
        name: 'Normal',
      },
      {
        id: 'hard',
        name: 'Hard',
      },
      {
        id: 'peaceful',
        name: 'Peaceful',
      },
    ],
    defaultOption: {
      name: 'Do Not Change Difficulty',
      pass: true,
    },
  },


  {
    name: 'Experience',
    weight: 10,
    commandTemplate: 'experience add @a <experience>',
    description: 'Vote to give the player(s) experience points.',
    presentableOptionsExcludingDefault: 1,
    options: [
      {
        name: 'Give Experience',
        experienceRange: [ 0, 500 ],
      },
    ],
    defaultOption: {
      name: 'Give Nothing',
      pass: true,
    },
  },


  {
    name: 'Wrath',
    weight: 2,
    description: 'Vote to kill all player(s) instantly.',
    presentableOptionsExcludingDefault: 1,
    options: [
      {
        executableCommand: 'kill @a',
        name: 'Kill Player(s)',
      },
    ],
    defaultOption: {
      name: 'Spare Player(s)',
      pass: true,
    },
  },


  {
    name: 'Time',
    weight: 10,
    commandTemplate: 'time set <id>',
    description: 'Vote to change the time of day.',
    presentableOptionsExcludingDefault: 2,
    options: [
      {
        id: 'day',
        name: 'Day',
      },
      {
        id: 'night',
        name: 'Night',
      },
    ],
    defaultOption: {
      name: `Don't Change Time`,
      pass: true,
    },
  },


  {
    name: 'Summon',
    weight: 30,
    commandTemplate: 'execute as @a at @a run summon <id> ~<randomXOffset> ~<randomYOffset> ~<randomZOffset>',
    description: 'Vote to summon mob(s) near the player(s).',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        id: 'minecraft:stray',
        name: 'Stray',
        repeatCommandRange: [ 1, 10 ],
        offetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:husk',
        name: 'Husk',
        repeatCommandRange: [ 1, 10 ],
        offetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:zombie_villager',
        name: 'Zombie Villager',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:skeleton_horse',
        name: 'Skeleton Horse',
        repeatCommandRange: [ 1, 1 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:mule',
        name: 'Mule',
        repeatCommandRange: [ 1, 1 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:evocation_illager',
        name: 'Evoker',
        repeatCommandRange: [ 1, 5 ],
        offsetRange: [ 3, 20 ],
      },
      {
        id: 'minecraft:vex',
        name: 'Vex',
        repeatCommandRange: [ 1, 8 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:creeper',
        name: 'Creeper',
        repeatCommandRange: [ 1, 15 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:skeleton',
        name: 'Skeleton',
        repeatCommandRange: [ 1, 6 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:spider',
        name: 'Spider',
        repeatCommandRange: [ 1, 8 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:zombie',
        name: 'Zombie',
        repeatCommandRange: [ 1, 15 ],
        offsetRange: [ 3, 12 ],
      },
      {
        id: 'minecraft:slime',
        name: 'Slime',
        repeatCommandRange: [ 1, 7 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:ghast',
        name: 'Ghast',
        repeatCommandRange: [ 1, 2 ],
        offsetRange: [ 6, 25 ],
      },
      {
        id: 'minecraft:enderman',
        name: 'Enderman',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:blaze',
        name: 'Blaze',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 20 ],
      },
      {
        id: 'minecraft:ender_dragon',
        name: 'Ender Dragon',
        repeatCommandRange: [ 1, 1 ],
        offsetRange: [ 20, 60 ],
      },
      {
        id: 'minecraft:wither',
        name: 'Wither',
        repeatCommandRange: [ 1, 1 ],
        offsetRange: [ 20, 60 ],
      },
      {
        id: 'minecraft:bat',
        name: 'Bat',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:witch',
        name: 'Witch',
        repeatCommandRange: [ 1, 3 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:pig',
        name: 'Pig',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:sheep',
        name: 'Sheep',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:cow',
        name: 'Cow',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:chicken',
        name: 'Chicken',
        repeatCommandRange: [ 1, 25 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:wolf',
        name: 'Wolf',
        repeatCommandRange: [ 1, 8 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:mooshroom',
        name: 'Mooshroom',
        repeatCommandRange: [ 1, 8 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:snow_golem',
        name: 'Snow Golem',
        repeatCommandRange: [ 1, 6 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:ocelot',
        name: 'Ocelot',
        repeatCommandRange: [ 1, 10 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:villager_golem',
        name: 'Iron Golem',
        repeatCommandRange: [ 1, 6 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:horse',
        name: 'Horse',
        repeatCommandRange: [ 1, 3 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:rabbit',
        name: 'Rabbit',
        repeatCommandRange: [ 1, 25 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:polar_bear',
        name: 'Polar Bear',
        repeatCommandRange: [ 1, 4 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:llama',
        name: 'Llama',
        repeatCommandRange: [ 1, 3 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:trader_llama',
        name: 'Trader Llama',
        repeatCommandRange: [ 1, 2 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:parrot',
        name: 'Parrot',
        repeatCommandRange: [ 1, 7 ],
        offsetRange: [ 3, 15 ],
      },
      {
        id: 'minecraft:villager',
        name: 'Villager',
        repeatCommandRange: [ 1, 30 ],
        offsetRange: [ 3, 15 ],
      },
    ],
    defaultOption: {
      name: 'Summon Nothing',
      pass: true,
    },
  },


  {
    name: 'Give',
    weight: 30,
    commandTemplate: 'give @a <id> <quantity>',
    description: 'Vote to give item(s) to the player(s).',
    presentableOptionsExcludingDefault: 3,
    options: [
      {
        id: "minecraft:stone",
        name: "Stone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:grass",
        name: "Grass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dirt",
        name: "Dirt",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cobblestone",
        name: "Cobblestone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:oak_planks",
        name: "Oak Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_planks",
        name: "Spruce Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_planks",
        name: "Birch Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_planks",
        name: "Jungle Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_planks",
        name: "Acacia Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_planks",
        name: "Dark Oak Wood Plank",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:oak_sapling",
        name: "Oak Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_sapling",
        name: "Spruce Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_sapling",
        name: "Birch Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_sapling",
        name: "Jungle Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_sapling",
        name: "Acacia Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_sapling",
        name: "Dark Oak Sapling",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sand",
        name: "Sand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_sand",
        name: "Red Sand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gravel",
        name: "Gravel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gold_ore",
        name: "Gold Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_ore",
        name: "Iron Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:coal_ore",
        name: "Coal Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:oak_log",
        name: "Oak Wood",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_log",
        name: "Spruce Wood",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_log",
        name: "Birch Wood",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_log",
        name: "Jungle Wood",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sponge",
        name: "Sponge",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:glass",
        name: "Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lapis_ore",
        name: "Lapis Lazuli Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dispenser",
        name: "Dispenser",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sandstone",
        name: "Sandstone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chiseled_sandstone",
        name: "Chiseled Sandstone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:smooth_sandstone",
        name: "Smooth Sandstone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:noteblock",
        name: "Note Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_bed",
        name: "Bed",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_rail",
        name: "Powered Rail",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:detector_rail",
        name: "Detector Rail",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sticky_piston",
        name: "Sticky Piston",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:web",
        name: "Cobweb",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:piston",
        name: "Piston",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_wool",
        name: "White Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_wool",
        name: "Orange Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_wool",
        name: "Magenta Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_wool",
        name: "Light Blue Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_wool",
        name: "Yellow Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_wool",
        name: "Lime Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_wool",
        name: "Pink Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_wool",
        name: "Gray Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_wool",
        name: "Light Gray Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_wool",
        name: "Cyan Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_wool",
        name: "Purple Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_wool",
        name: "Blue Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_wool",
        name: "Brown Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_wool",
        name: "Green Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_wool",
        name: "Red Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_wool",
        name: "Black Wool",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_flower",
        name: "Dandelion",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_mushroom",
        name: "Brown Mushroom",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_mushroom",
        name: "Red Mushroom",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gold_block",
        name: "Gold Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_block",
        name: "Iron Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:double_stone_slab",
        name: "Double Stone Slab",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_slab",
        name: "Stone Slab",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brick_block",
        name: "Bricks",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:tnt",
        name: "TNT",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bookshelf",
        name: "Bookshelf",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:mossy_cobblestone",
        name: "Moss Stone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:obsidian",
        name: "Obsidian",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:torch",
        name: "Torch",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fire",
        name: "Fire",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:oak_stairs",
        name: "Oak Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chest",
        name: "Chest",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:redstone_wire",
        name: "Redstone Wire",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_ore",
        name: "Diamond Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:crafting_table",
        name: "Crafting Table",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wheat",
        name: "Wheat Crops",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:farmland",
        name: "Farmland",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:furnace",
        name: "Furnace",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:standing_sign",
        name: "Standing Sign Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_door",
        name: "Oak Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ladder",
        name: "Ladder",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rail",
        name: "Rail",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_stairs",
        name: "Cobblestone Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wall_sign",
        name: "Wall-mounted Sign Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lever",
        name: "Lever",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_pressure_plate",
        name: "Stone Pressure Plate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_door",
        name: "Iron Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_pressure_plate",
        name: "Wooden Pressure Plate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:redstone_ore",
        name: "Redstone Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lit_redstone_ore",
        name: "Glowing Redstone Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:unlit_redstone_torch",
        name: "Redstone Torch (off)",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:redstone_torch",
        name: "Redstone Torch (on)",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_button",
        name: "Stone Button",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ice",
        name: "Ice",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:snow",
        name: "Snow Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cactus",
        name: "Cactus",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:clay",
        name: "Clay",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:reeds",
        name: "Sugar Canes",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jukebox",
        name: "Jukebox",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fence",
        name: "Oak Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pumpkin",
        name: "Pumpkin",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:netherrack",
        name: "Netherrack",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:soul_sand",
        name: "Soul Sand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:glowstone",
        name: "Glowstone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lit_pumpkin",
        name: "Jack o'Lantern",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cake",
        name: "Cake Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:unpowered_repeater",
        name: "Redstone Repeater Block (off)",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_stained_glass",
        name: "White Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_stained_glass",
        name: "Orange Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_stained_glass",
        name: "Magenta Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_stained_glass",
        name: "Light Blue Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_stained_glass",
        name: "Yellow Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_stained_glass",
        name: "Lime Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_stained_glass",
        name: "Pink Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_stained_glass",
        name: "Gray Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_stained_glass",
        name: "Light Gray Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_stained_glass",
        name: "Cyan Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_stained_glass",
        name: "Purple Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_stained_glass",
        name: "Blue Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_stained_glass",
        name: "Brown Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_stained_glass",
        name: "Green Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_stained_glass",
        name: "Red Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_stained_glass",
        name: "Black Stained Glass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_mushroom_block",
        name: "Brown Mushroom Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_mushroom_block",
        name: "Red Mushroom Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_bars",
        name: "Iron Bars",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:glass_pane",
        name: "Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:melon_block",
        name: "Melon Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pumpkin_stem",
        name: "Pumpkin Stem",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:melon_stem",
        name: "Melon Stem",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:vine",
        name: "Vines",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fence_gate",
        name: "Oak Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brick_stairs",
        name: "Brick Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_brick_stairs",
        name: "Stone Brick Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:mycelium",
        name: "Mycelium",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_brick",
        name: "Nether Brick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_brick_fence",
        name: "Nether Brick Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_brick_stairs",
        name: "Nether Brick Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_wart",
        name: "Nether Wart",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:enchanting_table",
        name: "Enchantment Table",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brewing_stand",
        name: "Brewing Stand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cauldron",
        name: "Cauldron",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:end_stone",
        name: "End Stone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dragon_egg",
        name: "Dragon Egg",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sandstone_stairs",
        name: "Sandstone Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:emerald_ore",
        name: "Emerald Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ender_chest",
        name: "Ender Chest",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:tripwire_hook",
        name: "Tripwire Hook",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_stairs",
        name: "Spruce Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_stairs",
        name: "Birch Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_stairs",
        name: "Jungle Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beacon",
        name: "Beacon",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cobblestone_wall",
        name: "Cobblestone Wall",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:mossy_cobblestone_wall",
        name: "Mossy Cobblestone Wall",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:flower_pot",
        name: "Flower Pot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:carrot",
        name: "Carrot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:potato",
        name: "Potato",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_button",
        name: "Wooden Button",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:anvil",
        name: "Anvil",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:daylight_detector",
        name: "Daylight Sensor",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:redstone_block",
        name: "Redstone Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:quartz_ore",
        name: "Nether Quartz Ore",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:hopper",
        name: "Hopper",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:quartz_block",
        name: "Quartz Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:activator_rail",
        name: "Activator Rail",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dropper",
        name: "Dropper",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_stained_glass_pane",
        name: "White Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_stained_glass_pane",
        name: "Orange Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_stained_glass_pane",
        name: "Magenta Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_stained_glass_pane",
        name: "Light Blue Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_stained_glass_pane",
        name: "Yellow Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_stained_glass_pane",
        name: "Lime Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_stained_glass_pane",
        name: "Pink Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_stained_glass_pane",
        name: "Gray Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_stained_glass_pane",
        name: "Light Gray Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_stained_glass_pane",
        name: "Cyan Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_stained_glass_pane",
        name: "Purple Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_stained_glass_pane",
        name: "Blue Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_stained_glass_pane",
        name: "Brown Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_stained_glass_pane",
        name: "Green Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_stained_glass_pane",
        name: "Red Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_stained_glass_pane",
        name: "Black Stained Glass Pane",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_stairs",
        name: "Acacia Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_stairs",
        name: "Dark Oak Wood Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_trapdoor",
        name: "Iron Trapdoor",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:prismarine",
        name: "Prismarine",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sea_lantern",
        name: "Sea Lantern",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:hay_block",
        name: "Hay Bale",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_carpet",
        name: "White Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_carpet",
        name: "Orange Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_carpet",
        name: "Magenta Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_carpet",
        name: "Light Blue Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_carpet",
        name: "Yellow Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_carpet",
        name: "Lime Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_carpet",
        name: "Pink Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_carpet",
        name: "Gray Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_carpet",
        name: "Light Gray Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_carpet",
        name: "Cyan Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_carpet",
        name: "Purple Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_carpet",
        name: "Blue Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_carpet",
        name: "Brown Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_carpet",
        name: "Green Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_carpet",
        name: "Red Carpet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_carpet",
        name: "Black Carpet",
        quantityRange: [ 1, 64 ],
      },      {
        id: "minecraft:packed_ice",
        name: "Packed Ice",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_fence_gate",
        name: "Spruce Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_fence_gate",
        name: "Birch Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_fence_gate",
        name: "Jungle Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_fence_gate",
        name: "Dark Oak Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_fence_gate",
        name: "Acacia Fence Gate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_fence",
        name: "Spruce Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_fence",
        name: "Birch Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_fence",
        name: "Jungle Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_fence",
        name: "Dark Oak Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_fence",
        name: "Acacia Fence",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_door",
        name: "Spruce Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_door",
        name: "Birch Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_door",
        name: "Jungle Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_door",
        name: "Acacia Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_door",
        name: "Dark Oak Door Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:end_rod",
        name: "End Rod",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chorus_plant",
        name: "Chorus Plant",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chorus_flower",
        name: "Chorus Flower",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purpur_block",
        name: "Purpur Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purpur_pillar",
        name: "Purpur Pillar",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purpur_stairs",
        name: "Purpur Stairs",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purpur_double_slab",
        name: "Purpur Double Slab",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purpur_slab",
        name: "Purpur Slab",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:end_bricks",
        name: "End Stone Bricks",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beetroots",
        name: "Beetroot Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:grass_path",
        name: "Grass Path",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_wart_block",
        name: "Nether Wart Block",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_nether_brick",
        name: "Red Nether Brick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:observer",
        name: "Observer",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_shulker_box",
        name: "White Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_shulker_box",
        name: "Orange Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_shulker_box",
        name: "Magenta Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_shulker_box",
        name: "Light Blue Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_shulker_box",
        name: "Yellow Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_shulker_box",
        name: "Lime Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_shulker_box",
        name: "Pink Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_shulker_box",
        name: "Gray Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:silver_shulker_box",
        name: "Light Gray Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_shulker_box",
        name: "Cyan Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_shulker_box",
        name: "Purple Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_shulker_box",
        name: "Blue Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_shulker_box",
        name: "Brown Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_shulker_box",
        name: "Green Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_shulker_box",
        name: "Red Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_shulker_box",
        name: "Black Shulker Box",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_glazed_terracotta",
        name: "White Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_glazed_terracotta",
        name: "Orange Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_glazed_terracotta",
        name: "Magenta Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_glazed_terracotta",
        name: "Light Blue Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_glazed_terracotta",
        name: "Yellow Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_glazed_terracotta",
        name: "Lime Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_glazed_terracotta",
        name: "Pink Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_glazed_terracotta",
        name: "Gray Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_glazed_terracotta",
        name: "Light Gray Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_glazed_terracotta",
        name: "Cyan Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_glazed_terracotta",
        name: "Purple Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_glazed_terracotta",
        name: "Blue Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_glazed_terracotta",
        name: "Brown Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_glazed_terracotta",
        name: "Green Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_glazed_terracotta",
        name: "Red Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_glazed_terracotta",
        name: "Black Glazed Terracotta",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:white_concrete",
        name: "White Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:orange_concrete",
        name: "Orange Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magenta_concrete",
        name: "Magenta Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_blue_concrete",
        name: "Light Blue Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:yellow_concrete",
        name: "Yellow Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lime_concrete",
        name: "Lime Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pink_concrete",
        name: "Pink Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gray_concrete",
        name: "Gray Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:light_gray_concrete",
        name: "Light Gray Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cyan_concrete",
        name: "Cyan Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:purple_concrete",
        name: "Purple Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blue_concrete",
        name: "Blue Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brown_concrete",
        name: "Brown Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:green_concrete",
        name: "Green Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:red_concrete",
        name: "Red Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:black_concrete",
        name: "Black Concrete",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_shovel",
        name: "Iron Shovel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_pickaxe",
        name: "Iron Pickaxe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_axe",
        name: "Iron Axe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:flint_and_steel",
        name: "Flint and Steel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:apple",
        name: "Apple",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bow",
        name: "Bow",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:arrow",
        name: "Arrow",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:coal",
        name: "Coal",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:coal",
        name: "Charcoal",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond",
        name: "Diamond",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_ingot",
        name: "Iron Ingot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gold_ingot",
        name: "Gold Ingot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_sword",
        name: "Iron Sword",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_sword",
        name: "Wooden Sword",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_shovel",
        name: "Wooden Shovel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_pickaxe",
        name: "Wooden Pickaxe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_axe",
        name: "Wooden Axe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_sword",
        name: "Stone Sword",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_shovel",
        name: "Stone Shovel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_pickaxe",
        name: "Stone Pickaxe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_axe",
        name: "Stone Axe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_sword",
        name: "Diamond Sword",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_shovel",
        name: "Diamond Shovel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_pickaxe",
        name: "Diamond Pickaxe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_axe",
        name: "Diamond Axe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stick",
        name: "Stick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bowl",
        name: "Bowl",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:mushroom_stew",
        name: "Mushroom Stew",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_sword",
        name: "Golden Sword",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_shovel",
        name: "Golden Shovel",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_pickaxe",
        name: "Golden Pickaxe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_axe",
        name: "Golden Axe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:string",
        name: "String",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:feather",
        name: "Feather",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gunpowder",
        name: "Gunpowder",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_hoe",
        name: "Wooden Hoe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:stone_hoe",
        name: "Stone Hoe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_hoe",
        name: "Iron Hoe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_hoe",
        name: "Diamond Hoe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_hoe",
        name: "Golden Hoe",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wheat_seeds",
        name: "Wheat Seeds",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wheat",
        name: "Wheat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bread",
        name: "Bread",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:leather_helmet",
        name: "Leather Helmet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:leather_chestplate",
        name: "Leather Tunic",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:leather_leggings",
        name: "Leather Pants",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:leather_boots",
        name: "Leather Boots",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chainmail_helmet",
        name: "Chainmail Helmet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chainmail_chestplate",
        name: "Chainmail Chestplate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chainmail_leggings",
        name: "Chainmail Leggings",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chainmail_boots",
        name: "Chainmail Boots",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_helmet",
        name: "Iron Helmet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_chestplate",
        name: "Iron Chestplate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_leggings",
        name: "Iron Leggings",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_boots",
        name: "Iron Boots",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_helmet",
        name: "Diamond Helmet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_chestplate",
        name: "Diamond Chestplate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_leggings",
        name: "Diamond Leggings",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_boots",
        name: "Diamond Boots",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_helmet",
        name: "Golden Helmet",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_chestplate",
        name: "Golden Chestplate",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_leggings",
        name: "Golden Leggings",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_boots",
        name: "Golden Boots",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:flint",
        name: "Flint",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:porkchop",
        name: "Raw Porkchop",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cooked_porkchop",
        name: "Cooked Porkchop",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:painting",
        name: "Painting",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_apple",
        name: "Golden Apple",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_apple",
        name: "Enchanted Golden Apple",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:wooden_door",
        name: "Oak Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bucket",
        name: "Bucket",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:water_bucket",
        name: "Water Bucket",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lava_bucket",
        name: "Lava Bucket",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:minecart",
        name: "Minecart",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:saddle",
        name: "Saddle",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_door",
        name: "Iron Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:redstone",
        name: "Redstone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:snowball",
        name: "Snowball",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:boat",
        name: "Oak Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:leather",
        name: "Leather",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:milk_bucket",
        name: "Milk Bucket",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brick",
        name: "Brick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:clay_ball",
        name: "Clay",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:reeds",
        name: "Sugar Canes",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:paper",
        name: "Paper",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:book",
        name: "Book",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:slime_ball",
        name: "Slimeball",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chest_minecart",
        name: "Minecart with Chest",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:furnace_minecart",
        name: "Minecart with Furnace",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:egg",
        name: "Egg",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:compass",
        name: "Compass",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fishing_rod",
        name: "Fishing Rod",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:clock",
        name: "Clock",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:glowstone_dust",
        name: "Glowstone Dust",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fish",
        name: "Raw Fish",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bone",
        name: "Bone",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:sugar",
        name: "Sugar",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cake",
        name: "Cake",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:bed",
        name: "Bed",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:repeater",
        name: "Redstone Repeater",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cookie",
        name: "Cookie",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:shears",
        name: "Shears",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:melon",
        name: "Melon",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pumpkin_seeds",
        name: "Pumpkin Seeds",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:melon_seeds",
        name: "Melon Seeds",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beef",
        name: "Raw Beef",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cooked_beef",
        name: "Steak",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chicken",
        name: "Raw Chicken",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cooked_chicken",
        name: "Cooked Chicken",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rotten_flesh",
        name: "Rotten Flesh",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ender_pearl",
        name: "Ender Pearl",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blaze_rod",
        name: "Blaze Rod",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ghast_tear",
        name: "Ghast Tear",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:gold_nugget",
        name: "Gold Nugget",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_wart",
        name: "Nether Wart",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:potion",
        name: "Potion",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:glass_bottle",
        name: "Glass Bottle",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spider_eye",
        name: "Spider Eye",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fermented_spider_eye",
        name: "Fermented Spider Eye",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:blaze_powder",
        name: "Blaze Powder",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:magma_cream",
        name: "Magma Cream",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:brewing_stand",
        name: "Brewing Stand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cauldron",
        name: "Cauldron",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:ender_eye",
        name: "Eye of Ender",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:speckled_melon",
        name: "Glistering Melon",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:writable_book",
        name: "Book and Quill",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:emerald",
        name: "Emerald",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:item_frame",
        name: "Item Frame",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:flower_pot",
        name: "Flower Pot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:carrot",
        name: "Carrot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:potato",
        name: "Potato",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:baked_potato",
        name: "Baked Potato",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:poisonous_potato",
        name: "Poisonous Potato",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:map",
        name: "Empty Map",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_carrot",
        name: "Golden Carrot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:carrot_on_a_stick",
        name: "Carrot on a Stick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:nether_star",
        name: "Nether Star",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:pumpkin_pie",
        name: "Pumpkin Pie",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:fireworks",
        name: "Firework Rocket",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:firework_charge",
        name: "Firework Star",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:comparator",
        name: "Redstone Comparator",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:netherbrick",
        name: "Nether Brick",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:quartz",
        name: "Nether Quartz",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:prismarine_shard",
        name: "Prismarine Shard",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:prismarine_crystals",
        name: "Prismarine Crystals",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rabbit",
        name: "Raw Rabbit",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cooked_rabbit",
        name: "Cooked Rabbit",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rabbit_stew",
        name: "Rabbit Stew",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rabbit_foot",
        name: "Rabbit's Foot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:rabbit_hide",
        name: "Rabbit Hide",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:armor_stand",
        name: "Armor Stand",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_horse_armor",
        name: "Iron Horse Armor",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:golden_horse_armor",
        name: "Golden Horse Armor",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:diamond_horse_armor",
        name: "Diamond Horse Armor",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:lead",
        name: "Lead",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:name_tag",
        name: "Name Tag",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:mutton",
        name: "Raw Mutton",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:cooked_mutton",
        name: "Cooked Mutton",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:banner",
        name: "Banner",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:end_crystal",
        name: "End Crystal",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_door",
        name: "Spruce Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_door",
        name: "Birch Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_door",
        name: "Jungle Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_door",
        name: "Acacia Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_door",
        name: "Dark Oak Door",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:chorus_fruit",
        name: "Chorus Fruit",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:popped_chorus_fruit",
        name: "Popped Chorus Fruit",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beetroot",
        name: "Beetroot",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beetroot_seeds",
        name: "Beetroot Seeds",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:beetroot_soup",
        name: "Beetroot Soup",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spectral_arrow",
        name: "Spectral Arrow",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:tipped_arrow",
        name: "Tipped Arrow",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:shield",
        name: "Shield",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:elytra",
        name: "Elytra",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:spruce_boat",
        name: "Spruce Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:birch_boat",
        name: "Birch Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:jungle_boat",
        name: "Jungle Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:acacia_boat",
        name: "Acacia Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:dark_oak_boat",
        name: "Dark Oak Boat",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:totem_of_undying",
        name: "Totem of Undying",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:shulker_shell",
        name: "Shulker Shell",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:iron_nugget",
        name: "Iron Nugget",
        quantityRange: [ 1, 64 ],
      },
      {
        id: "minecraft:knowledge_book",
        name: "Knowledge Book",
        quantityRange: [ 1, 64 ],
      },
    ],
    defaultOption: {
      name: 'Give Nothing',
      pass: true,
    },
  }
];
