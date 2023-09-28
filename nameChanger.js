var pokedex = [
  {
    "pokedexNo": 1,
    "name": "Bulbasaur",
    "types": ["Grass", "Poison"],
    "evolutions": ["Ivysaur"],
    "abilities": [
      ["Overgrow", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "bulbasaur",
    "forms": []
  },
  {
    "pokedexNo": 2,
    "name": "Ivysaur",
    "types": ["Grass", "Poison"],
    "evolutions": ["Venusaur"],
    "abilities": [
      ["Overgrow", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "ivysaur",
    "forms": []
  },
  {
    "pokedexNo": 3,
    "name": "Venusaur",
    "types": ["Grass", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "venusaur",
    "forms": [
      {
        "sprite": "venusaur-gmax",
        "types": ["Grass", "Poison"],
        "name": "Gigantamax Venusaur"
      },
      {
        "sprite": "venusaur-mega",
        "types": ["Grass", "Poison"],
        "name": "Mega Venusaur"
      }
    ]
  },
  {
    "pokedexNo": 4,
    "name": "Charmander",
    "types": ["Fire"],
    "evolutions": ["Charmeleon"],
    "abilities": [
      ["Blaze", "false"],
      ["Solar Power", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "charmander",
    "forms": []
  },
  {
    "pokedexNo": 5,
    "name": "Charmeleon",
    "types": ["Fire"],
    "evolutions": ["Charizard"],
    "abilities": [
      ["Blaze", "false"],
      ["Solar Power", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "charmeleon",
    "forms": []
  },
  {
    "pokedexNo": 6,
    "name": "Charizard",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Solar Power", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "charizard",
    "forms": [
      {
        "sprite": "charizard-gmax",
        "types": ["Fire", "Flying"],
        "name": "Gigantamax Charizard"
      },
      {
        "sprite": "charizard-mega-x",
        "types": ["Fire", "Dragon"],
        "name": "Mega Charizard X"
      },
      {
        "sprite": "charizard-mega-y",
        "types": ["Fire", "Flying"],
        "name": "Mega Charizard Y"
      }
    ]
  },
  {
    "pokedexNo": 7,
    "name": "Squirtle",
    "types": ["Water"],
    "evolutions": ["Wartortle"],
    "abilities": [
      ["Torrent", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "squirtle",
    "forms": []
  },
  {
    "pokedexNo": 8,
    "name": "Wartortle",
    "types": ["Water"],
    "evolutions": ["Blastoise"],
    "abilities": [
      ["Torrent", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "wartortle",
    "forms": []
  },
  {
    "pokedexNo": 9,
    "name": "Blastoise",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "blastoise",
    "forms": [
      {
        "sprite": "blastoise-gmax",
        "types": ["Water"],
        "name": "Gigantamax Blastoise"
      },
      {
        "sprite": "blastoise-mega",
        "types": ["Water"],
        "name": "Mega Blastoise"
      }
    ]
  },
  {
    "pokedexNo": 10,
    "name": "Caterpie",
    "types": ["Bug"],
    "evolutions": ["Metapod"],
    "abilities": [
      ["Shield Dust", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "caterpie",
    "forms": []
  },
  {
    "pokedexNo": 11,
    "name": "Metapod",
    "types": ["Bug"],
    "evolutions": ["Butterfree"],
    "abilities": [["Shed Skin", "false"]],
    "gender": "50:50",
    "sprite": "metapod",
    "forms": []
  },
  {
    "pokedexNo": 12,
    "name": "Butterfree",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "butterfree",
    "forms": [
      {
        "sprite": "butterfree-gmax",
        "types": ["Bug", "Flying"],
        "name": "Gigantamax Butterfree"
      }
    ]
  },
  {
    "pokedexNo": 13,
    "name": "Weedle",
    "types": ["Bug", "Poison"],
    "evolutions": ["Kakuna"],
    "abilities": [
      ["Shield Dust", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "weedle",
    "forms": []
  },
  {
    "pokedexNo": 14,
    "name": "Kakuna",
    "types": ["Bug", "Poison"],
    "evolutions": ["Beedrill"],
    "abilities": [["Shed Skin", "false"]],
    "gender": "50:50",
    "sprite": "kakuna",
    "forms": []
  },
  {
    "pokedexNo": 15,
    "name": "Beedrill",
    "types": ["Bug", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Sniper", "true"]
    ],
    "gender": "50:50",
    "sprite": "beedrill",
    "forms": [
      {
        "sprite": "beedrill-mega",
        "types": ["Bug", "Poison"],
        "name": "Mega Beedrill"
      }
    ]
  },
  {
    "pokedexNo": 16,
    "name": "Pidgey",
    "types": ["Normal", "Flying"],
    "evolutions": ["Pidgeotto"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Tangled Feet", "false"],
      ["Big Pecks", "true"]
    ],
    "gender": "50:50",
    "sprite": "pidgey",
    "forms": []
  },
  {
    "pokedexNo": 17,
    "name": "Pidgeotto",
    "types": ["Normal", "Flying"],
    "evolutions": ["Pidgeot"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Tangled Feet", "false"],
      ["Big Pecks", "true"]
    ],
    "gender": "50:50",
    "sprite": "pidgeotto",
    "forms": []
  },
  {
    "pokedexNo": 18,
    "name": "Pidgeot",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Tangled Feet", "false"],
      ["Big Pecks", "true"]
    ],
    "gender": "50:50",
    "sprite": "pidgeot",
    "forms": [
      {
        "sprite": "pidgeot-mega",
        "types": ["Normal", "Flying"],
        "name": "Mega Pidgeot"
      }
    ]
  },
  {
    "pokedexNo": 19,
    "name": "Rattata",
    "types": ["Normal"],
    "evolutions": ["Raticate"],
    "abilities": [
      ["Run Away", "false"],
      ["Guts", "false"],
      ["Hustle", "true"]
    ],
    "gender": "50:50",
    "sprite": "rattata",
    "forms": []
  },
  {
    "pokedexNo": 19,
    "name": "Alolan Rattata",
    "types": ["Dark", "Normal"],
    "evolutions": ["Alolan Raticate"],
    "abilities": [
      ["Gluttony", "false"],
      ["Hustle", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "rattata-alola",
    "forms": []
  },
  {
    "pokedexNo": 20,
    "name": "Raticate",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Guts", "false"],
      ["Hustle", "true"]
    ],
    "gender": "50:50",
    "sprite": "raticate",
    "forms": []
  },
  {
    "pokedexNo": 20,
    "name": "Alolan Raticate",
    "types": ["Dark", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Gluttony", "false"],
      ["Hustle", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "raticate-alola",
    "forms": []
  },
  {
    "pokedexNo": 21,
    "name": "Spearow",
    "types": ["Normal", "Flying"],
    "evolutions": ["Fearow"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sniper", "true"]
    ],
    "gender": "50:50",
    "sprite": "spearow",
    "forms": []
  },
  {
    "pokedexNo": 22,
    "name": "Fearow",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sniper", "true"]
    ],
    "gender": "50:50",
    "sprite": "fearow",
    "forms": []
  },
  {
    "pokedexNo": 23,
    "name": "Ekans",
    "types": ["Poison"],
    "evolutions": ["Arbok"],
    "abilities": [
      ["Intimidate", "false"],
      ["Shed Skin", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "ekans",
    "forms": []
  },
  {
    "pokedexNo": 24,
    "name": "Arbok",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Shed Skin", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "arbok",
    "forms": []
  },
  {
    "pokedexNo": 25,
    "name": "Pikachu",
    "types": ["Electric"],
    "evolutions": ["Raichu", "Alolan Raichu"],
    "abilities": [
      ["Static", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "pikachu",
    "forms": [
      {
        "sprite": "pikachu-gmax",
        "name": "Gigantamax Pikachu"
      }
    ]
  },
  {
    "pokedexNo": 26,
    "name": "Raichu",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Static", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "raichu",
    "forms": []
  },
  {
    "pokedexNo": 26,
    "name": "Alolan Raichu",
    "types": ["Electric", "Psychic"],
    "evolutions": [],
    "abilities": [["Surge Surfer", "false"]],
    "gender": "50:50",
    "sprite": "raichu-alola",
    "forms": []
  },
  {
    "pokedexNo": 27,
    "name": "Sandshrew",
    "types": ["Ground"],
    "evolutions": ["Sandslash"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Sand Rush", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandshrew",
    "forms": []
  },
  {
    "pokedexNo": 27,
    "name": "Alolan Sandshrew",
    "types": ["Ice", "Steel"],
    "evolutions": ["Alolan Sandslash"],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Slush Rush", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandshrew-alola",
    "forms": []
  },
  {
    "pokedexNo": 28,
    "name": "Sandslash",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Sand Veil", "false"],
      ["Sand Rush", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandslash",
    "forms": []
  },
  {
    "pokedexNo": 28,
    "name": "Alolan Sandslash",
    "types": ["Ice", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Slush Rush", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandslash-alola",
    "forms": []
  },
  {
    "pokedexNo": 29,
    "name": "Nidoran♀",
    "types": ["Poison"],
    "evolutions": ["Nidorina"],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Hustle", "true"]
    ],
    "gender": "0:100",
    "sprite": "nidoran-f",
    "forms": []
  },
  {
    "pokedexNo": 30,
    "name": "Nidorina",
    "types": ["Poison"],
    "evolutions": ["Nidoqueen"],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Hustle", "true"]
    ],
    "gender": "0:100",
    "sprite": "nidorina",
    "forms": []
  },
  {
    "pokedexNo": 31,
    "name": "Nidoqueen",
    "types": ["Poison", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "0:100",
    "sprite": "nidoqueen",
    "forms": []
  },
  {
    "pokedexNo": 32,
    "name": "Nidoran♂",
    "types": ["Poison"],
    "evolutions": ["Nidorino"],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Hustle", "true"]
    ],
    "gender": "100:0",
    "sprite": "nidoran-m",
    "forms": []
  },
  {
    "pokedexNo": 33,
    "name": "Nidorino",
    "types": ["Poison"],
    "evolutions": ["Nidoking"],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Hustle", "true"]
    ],
    "gender": "100:0",
    "sprite": "nidorino",
    "forms": []
  },
  {
    "pokedexNo": 34,
    "name": "Nidoking",
    "types": ["Poison", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Rivalry", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "100:0",
    "sprite": "nidoking",
    "forms": []
  },
  {
    "pokedexNo": 35,
    "name": "Clefairy",
    "types": ["Fairy"],
    "evolutions": ["Clefable"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Magic Guard", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "25:75",
    "sprite": "clefairy",
    "forms": []
  },
  {
    "pokedexNo": 36,
    "name": "Clefable",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Magic Guard", "false"],
      ["Unaware", "true"]
    ],
    "gender": "25:75",
    "sprite": "clefable",
    "forms": []
  },
  {
    "pokedexNo": 37,
    "name": "Vulpix",
    "types": ["Fire"],
    "evolutions": ["Ninetales"],
    "abilities": [
      ["Flash Fire", "false"],
      ["Drought", "true"]
    ],
    "gender": "25:75",
    "sprite": "vulpix",
    "forms": []
  },
  {
    "pokedexNo": 37,
    "name": "Alolan Vulpix",
    "types": ["Ice"],
    "evolutions": ["Alolan Ninetales"],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Snow Warning", "true"]
    ],
    "gender": "25:75",
    "sprite": "vulpix-alola",
    "forms": []
  },
  {
    "pokedexNo": 38,
    "name": "Ninetales",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Flash Fire", "false"],
      ["Drought", "true"]
    ],
    "gender": "25:75",
    "sprite": "ninetales",
    "forms": []
  },
  {
    "pokedexNo": 38,
    "name": "Alolan Ninetales",
    "types": ["Ice", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flash Fire", "false"],
      ["Drought", "true"]
    ],
    "gender": "25:75",
    "sprite": "ninetales-alola",
    "forms": []
  },
  {
    "pokedexNo": 39,
    "name": "Jigglypuff",
    "types": ["Normal", "Fairy"],
    "evolutions": ["Wigglytuff"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Competitive", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "25:75",
    "sprite": "jigglypuff",
    "forms": []
  },
  {
    "pokedexNo": 40,
    "name": "Wigglytuff",
    "types": ["Normal", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Competitive", "false"],
      ["Frisk", "true"]
    ],
    "gender": "25:75",
    "sprite": "wigglytuff",
    "forms": []
  },
  {
    "pokedexNo": 41,
    "name": "Zubat",
    "types": ["Poison", "Flying"],
    "evolutions": ["Golbat"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "zubat",
    "forms": []
  },
  {
    "pokedexNo": 42,
    "name": "Golbat",
    "types": ["Poison", "Flying"],
    "evolutions": ["Crobat"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "golbat",
    "forms": []
  },
  {
    "pokedexNo": 43,
    "name": "Oddish",
    "types": ["Grass", "Poison"],
    "evolutions": ["Gloom"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "oddish",
    "forms": []
  },
  {
    "pokedexNo": 44,
    "name": "Gloom",
    "types": ["Grass", "Poison"],
    "evolutions": ["Vileplume", "Bellossom"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Stench", "true"]
    ],
    "gender": "50:50",
    "sprite": "gloom",
    "forms": []
  },
  {
    "pokedexNo": 45,
    "name": "Vileplume",
    "types": ["Grass", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Effect Spore", "true"]
    ],
    "gender": "50:50",
    "sprite": "vileplume",
    "forms": []
  },
  {
    "pokedexNo": 46,
    "name": "Paras",
    "types": ["Bug", "Grass"],
    "evolutions": ["Parasect"],
    "abilities": [
      ["Effect Spore", "false"],
      ["Dry Skin", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "paras",
    "forms": []
  },
  {
    "pokedexNo": 47,
    "name": "Parasect",
    "types": ["Bug", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Effect Spore", "false"],
      ["Dry Skin", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "parasect",
    "forms": []
  },
  {
    "pokedexNo": 48,
    "name": "Venonat",
    "types": ["Bug", "Poison"],
    "evolutions": ["Venomoth"],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Tinted Lens", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "venonat",
    "forms": []
  },
  {
    "pokedexNo": 49,
    "name": "Venomoth",
    "types": ["Bug", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Tinted Lens", "false"],
      ["Wonder Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "venomoth",
    "forms": []
  },
  {
    "pokedexNo": 50,
    "name": "Diglett",
    "types": ["Ground"],
    "evolutions": ["Dugtrio"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Arena Trap", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "diglett",
    "forms": []
  },
  {
    "pokedexNo": 50,
    "name": "Alolan Diglett",
    "types": ["Ground", "Steel"],
    "evolutions": ["Alolan Dugtrio"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Tangling Hair", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "diglett-alola",
    "forms": []
  },
  {
    "pokedexNo": 51,
    "name": "Dugtrio",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Sand Veil", "false"],
      ["Arena Trap", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "dugtrio",
    "forms": []
  },
  {
    "pokedexNo": 51,
    "name": "Alolan Dugtrio",
    "types": ["Ground", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sand Veil", "false"],
      ["Tangling Hair", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "dugtrio-alola",
    "forms": []
  },
  {
    "pokedexNo": 52,
    "name": "Meowth",
    "types": ["Normal"],
    "evolutions": ["Persian"],
    "abilities": [
      ["Pickup", "false"],
      ["Technician", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "meowth",
    "forms": [
      {
        "sprite": "meowth-gmax",
        "types": ["Normal"],
        "name": "Gigantamax Meowth"
      }
    ]
  },
  {
    "pokedexNo": 52,
    "name": "Alolan Meowth",
    "types": ["Dark"],
    "evolutions": ["Alolan Persian"],
    "abilities": [
      ["Pickup", "false"],
      ["Technician", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "meowth-alola",
    "forms": []
  },
  {
    "pokedexNo": 52,
    "name": "Galarian Meowth",
    "types": ["Steel"],
    "evolutions": ["Perrserker"],
    "abilities": [
      ["Pickup", "false"],
      ["Tough Claws", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "meowth-galar",
    "forms": []
  },
  {
    "pokedexNo": 53,
    "name": "Persian",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Technician", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "persian",
    "forms": []
  },
  {
    "pokedexNo": 53,
    "name": "Alolan Persian",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Fur Coat", "false"],
      ["Technician", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "persian-alola",
    "forms": []
  },
  {
    "pokedexNo": 54,
    "name": "Psyduck",
    "types": ["Water"],
    "evolutions": ["Golduck"],
    "abilities": [
      ["Damp", "false"],
      ["Cloud Nine", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "psyduck",
    "forms": []
  },
  {
    "pokedexNo": 55,
    "name": "Golduck",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Damp", "false"],
      ["Cloud Nine", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "golduck",
    "forms": []
  },
  {
    "pokedexNo": 56,
    "name": "Mankey",
    "types": ["Fighting"],
    "evolutions": ["Primeape"],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Anger Point", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "mankey",
    "forms": []
  },
  {
    "pokedexNo": 57,
    "name": "Primeape",
    "types": ["Fighting"],
    "evolutions": ["Annihilape"],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Anger Point", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "primeape",
    "forms": []
  },
  {
    "pokedexNo": 58,
    "name": "Growlithe",
    "types": ["Fire"],
    "evolutions": ["Arcanine"],
    "abilities": [
      ["Intimidate", "false"],
      ["Flash Fire", "false"],
      ["Justified", "true"]
    ],
    "gender": "75:25",
    "sprite": "growlithe",
    "forms": []
  },
  {
    "pokedexNo": 58,
    "name": "Hisuian Growlithe",
    "types": ["Fire", "Rock"],
    "evolutions": ["Hisuian Arcanine"],
    "abilities": [
      ["Intimidate", "false"],
      ["Flash Fire", "false"],
      ["Justified", "true"]
    ],
    "gender": "75:25",
    "sprite": "growlithe-hisui",
    "forms": []
  },
  {
    "pokedexNo": 59,
    "name": "Arcanine",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Flash Fire", "false"],
      ["Justified", "true"]
    ],
    "gender": "75:25",
    "sprite": "arcanine",
    "forms": []
  },
  {
    "pokedexNo": 59,
    "name": "Hisuian Arcanine",
    "types": ["Fire", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Flash Fire", "false"],
      ["Justified", "true"]
    ],
    "gender": "75:25",
    "sprite": "arcanine-hisui",
    "forms": []
  },
  {
    "pokedexNo": 60,
    "name": "Poliwag",
    "types": ["Water"],
    "evolutions": ["Poliwhirl"],
    "abilities": [
      ["Water Absorb", "false"],
      ["Damp", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "poliwag",
    "forms": []
  },
  {
    "pokedexNo": 61,
    "name": "Poliwhirl",
    "types": ["Water"],
    "evolutions": ["Poliwrath", "Politoed"],
    "abilities": [
      ["Water Absorb", "false"],
      ["Damp", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "poliwhirl",
    "forms": []
  },
  {
    "pokedexNo": 62,
    "name": "Poliwrath",
    "types": ["Water", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Damp", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "poliwrath",
    "forms": []
  },
  {
    "pokedexNo": 63,
    "name": "Abra",
    "types": ["Psychic"],
    "evolutions": ["Kadabra"],
    "abilities": [
      ["Synchronize", "false"],
      ["Inner Focus", "false"],
      ["Magic Guard", "true"]
    ],
    "gender": "75:25",
    "sprite": "abra",
    "forms": []
  },
  {
    "pokedexNo": 64,
    "name": "Kadabra",
    "types": ["Psychic"],
    "evolutions": ["Alakazam"],
    "abilities": [
      ["Synchronize", "false"],
      ["Inner Focus", "false"],
      ["Magic Guard", "true"]
    ],
    "gender": "75:25",
    "sprite": "kadabra",
    "forms": []
  },
  {
    "pokedexNo": 65,
    "name": "Alakazam",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Inner Focus", "false"],
      ["Magic Guard", "true"]
    ],
    "gender": "75:25",
    "sprite": "alakazam",
    "forms": [
      {
        "sprite": "alakazam-mega",
        "types": ["Psychic"],
        "name": "Mega Alakazam"
      }
    ]
  },
  {
    "pokedexNo": 66,
    "name": "Machop",
    "types": ["Fighting"],
    "evolutions": ["Machoke"],
    "abilities": [
      ["Guts", "false"],
      ["No Guard", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "75:25",
    "sprite": "machop",
    "forms": []
  },
  {
    "pokedexNo": 67,
    "name": "Machoke",
    "types": ["Fighting"],
    "evolutions": ["Machamp"],
    "abilities": [
      ["Guts", "false"],
      ["No Guard", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "75:25",
    "sprite": "machoke",
    "forms": []
  },
  {
    "pokedexNo": 68,
    "name": "Machamp",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Guts", "false"],
      ["No Guard", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "75:25",
    "sprite": "machamp",
    "forms": [
      {
        "sprite": "machamp-gmax",
        "types": ["Fighting"],
        "name": "Gigantamax Machamp"
      }
    ]
  },
  {
    "pokedexNo": 69,
    "name": "Bellsprout",
    "types": ["Grass", "Poison"],
    "evolutions": ["Weepinbell"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "bellsprout",
    "forms": []
  },
  {
    "pokedexNo": 70,
    "name": "Weepinbell",
    "types": ["Grass", "Poison"],
    "evolutions": ["Victreebel"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "weepinbell",
    "forms": []
  },
  {
    "pokedexNo": 71,
    "name": "Victreebel",
    "types": ["Grass", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "victreebel",
    "forms": []
  },
  {
    "pokedexNo": 72,
    "name": "Tentacool",
    "types": ["Water", "Poison"],
    "evolutions": ["Tentacruel"],
    "abilities": [
      ["Clear Body", "false"],
      ["Liquid Ooze", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "tentacool",
    "forms": []
  },
  {
    "pokedexNo": 73,
    "name": "Tentacruel",
    "types": ["Water", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Liquid Ooze", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "tentacruel",
    "forms": []
  },
  {
    "pokedexNo": 74,
    "name": "Geodude",
    "types": ["Rock", "Ground"],
    "evolutions": ["Geodude"],
    "abilities": [
      ["Rock Head", "false"],
      ["Sturdy", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "geodude",
    "forms": []
  },
  {
    "pokedexNo": 74,
    "name": "Alolan Geodude",
    "types": ["Rock", "Electric"],
    "evolutions": ["Alolan Graveler"],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Galvanize", "true"]
    ],
    "gender": "50:50",
    "sprite": "geodude-alola",
    "forms": []
  },
  {
    "pokedexNo": 75,
    "name": "Graveler",
    "types": ["Rock", "Ground"],
    "evolutions": ["Golem"],
    "abilities": [
      ["Rock Head", "false"],
      ["Sturdy", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "graveler",
    "forms": []
  },
  {
    "pokedexNo": 75,
    "name": "Alolan Graveler",
    "types": ["Rock", "Electric"],
    "evolutions": ["Alolan Golem"],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Galvanize", "true"]
    ],
    "gender": "50:50",
    "sprite": "graveler-alola",
    "forms": []
  },
  {
    "pokedexNo": 76,
    "name": "Golem",
    "types": ["Rock", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Rock Head", "false"],
      ["Sturdy", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "golem",
    "forms": []
  },
  {
    "pokedexNo": 76,
    "name": "Alolan Golem",
    "types": ["Rock", "Electric"],
    "evolutions": [],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Galvanize", "true"]
    ],
    "gender": "50:50",
    "sprite": "golem-alola",
    "forms": []
  },
  {
    "pokedexNo": 77,
    "name": "Ponyta",
    "types": ["Fire"],
    "evolutions": ["Rapidash"],
    "abilities": [
      ["Run Away", "false"],
      ["Flash Fire", "false"],
      ["Flame Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "ponyta",
    "forms": []
  },
  {
    "pokedexNo": 77,
    "name": "Galarian Ponyta",
    "types": ["Psychic"],
    "evolutions": ["Galarian Rapidash"],
    "abilities": [
      ["Run Away", "false"],
      ["Pastel Veil", "false"],
      ["Anticipation", "true"]
    ],
    "gender": "50:50",
    "sprite": "ponyta-galar",
    "forms": []
  },
  {
    "pokedexNo": 78,
    "name": "Rapidash",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Flash Fire", "false"],
      ["Flame Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "rapidash",
    "forms": []
  },
  {
    "pokedexNo": 78,
    "name": "Galarian Rapidash",
    "types": ["Psychic", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Pastel Veil", "false"],
      ["Anticipation", "true"]
    ],
    "gender": "50:50",
    "sprite": "rapidash-galar",
    "forms": []
  },
  {
    "pokedexNo": 79,
    "name": "Slowpoke",
    "types": ["Water", "Psychic"],
    "evolutions": ["Slowbro", "Slowking"],
    "abilities": [
      ["Oblivious", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowpoke",
    "forms": []
  },
  {
    "pokedexNo": 79,
    "name": "Galarian Slowpoke",
    "types": ["Psychic"],
    "evolutions": ["Galarian Slowbro", "Galarian Slowking"],
    "abilities": [
      ["Gluttony", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowpoke-galar",
    "forms": []
  },
  {
    "pokedexNo": 80,
    "name": "Slowbro",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowbro",
    "forms": [
      {
        "sprite": "slowbro-mega",
        "types": ["Water", "Psychic"],
        "name": "Mega Slowbro"
      }
    ]
  },
  {
    "pokedexNo": 80,
    "name": "Galarian Slowbro",
    "types": ["Poison", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowbro-galar",
    "forms": []
  },
  {
    "pokedexNo": 81,
    "name": "Magnemite",
    "types": ["Electric", "Steel"],
    "evolutions": ["Magneton"],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "magnemite",
    "forms": []
  },
  {
    "pokedexNo": 82,
    "name": "Magneton",
    "types": ["Electric", "Steel"],
    "evolutions": ["Magnezone"],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "magneton",
    "forms": []
  },
  {
    "pokedexNo": 83,
    "name": "Farfetch'd",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Inner Focus", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "farfetchd",
    "forms": []
  },
  {
    "pokedexNo": 83,
    "name": "Galarian Farfetch'd",
    "types": ["Normal", "Flying"],
    "evolutions": ["Sirfetch'd"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Inner Focus", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "farfetchd-galar",
    "forms": []
  },
  {
    "pokedexNo": 84,
    "name": "Doduo",
    "types": ["Normal", "Flying"],
    "evolutions": ["Dodrio"],
    "abilities": [
      ["Run Away", "false"],
      ["Early Bird", "false"],
      ["Tangled Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "doduo",
    "forms": []
  },
  {
    "pokedexNo": 85,
    "name": "Dodrio",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Early Bird", "false"],
      ["Tangled Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "dodrio",
    "forms": []
  },
  {
    "pokedexNo": 86,
    "name": "Seel",
    "types": ["Water"],
    "evolutions": ["Dewgong"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Hydration", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "seel",
    "forms": []
  },
  {
    "pokedexNo": 87,
    "name": "Dewgong",
    "types": ["Water", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Hydration", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "dewgong",
    "forms": []
  },
  {
    "pokedexNo": 88,
    "name": "Grimer",
    "types": ["Poison"],
    "evolutions": ["Muk"],
    "abilities": [
      ["Stench", "false"],
      ["Sticky Hold", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50:50",
    "sprite": "grimer",
    "forms": []
  },
  {
    "pokedexNo": 88,
    "name": "Alolan Grimer",
    "types": ["Poison", "Dark"],
    "evolutions": ["Alolan Muk"],
    "abilities": [
      ["Poison Touch", "false"],
      ["Gluttony", "false"],
      ["Power of Alchemy", "true"]
    ],
    "gender": "50:50",
    "sprite": "grimer-alola",
    "forms": []
  },
  {
    "pokedexNo": 89,
    "name": "Muk",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [
      ["Stench", "false"],
      ["Sticky Hold", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50:50",
    "sprite": "muk",
    "forms": []
  },
  {
    "pokedexNo": 89,
    "name": "Alolan Muk",
    "types": ["Poison", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Poison Touch", "false"],
      ["Gluttony", "false"],
      ["Power of Alchemy", "true"]
    ],
    "gender": "50:50",
    "sprite": "muk-alola",
    "forms": []
  },
  {
    "pokedexNo": 90,
    "name": "Shellder",
    "types": ["Water"],
    "evolutions": ["Cloyster"],
    "abilities": [
      ["Shell Armor", "false"],
      ["Skill Link", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "shellder",
    "forms": []
  },
  {
    "pokedexNo": 91,
    "name": "Cloyster",
    "types": ["Water", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Shell Armor", "false"],
      ["Skill Link", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "cloyster",
    "forms": []
  },
  {
    "pokedexNo": 92,
    "name": "Gastly",
    "types": ["Ghost", "Poison"],
    "evolutions": ["Haunter"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "gastly",
    "forms": []
  },
  {
    "pokedexNo": 93,
    "name": "Haunter",
    "types": ["Ghost", "Poison"],
    "evolutions": ["Gengar"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "haunter",
    "forms": []
  },
  {
    "pokedexNo": 94,
    "name": "Gengar",
    "types": ["Ghost", "Poison"],
    "evolutions": [],
    "abilities": [["Cursed Body", "false"]],
    "gender": "50:50",
    "sprite": "gengar",
    "forms": [
      {
        "sprite": "gengar-gmax",
        "types": ["Ghost", "Poison"],
        "name": "Gigantamax Gengar"
      },
      {
        "sprite": "gengar-mega",
        "types": ["Ghost", "Poison"],
        "name": "Mega Gengar"
      }
    ]
  },
  {
    "pokedexNo": 95,
    "name": "Onix",
    "types": ["Rock", "Ground"],
    "evolutions": ["Steelix"],
    "abilities": [
      ["Rock Head", "false"],
      ["Sturdy", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "onix",
    "forms": []
  },
  {
    "pokedexNo": 96,
    "name": "Drowzee",
    "types": ["Psychic"],
    "evolutions": ["Hypno"],
    "abilities": [
      ["Insomnia", "false"],
      ["Forewarn", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "drowzee",
    "forms": []
  },
  {
    "pokedexNo": 97,
    "name": "Hypno",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Insomnia", "false"],
      ["Forewarn", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "hypno",
    "forms": []
  },
  {
    "pokedexNo": 98,
    "name": "Krabby",
    "types": ["Water"],
    "evolutions": ["Kingler"],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Shell Armor", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "krabby",
    "forms": []
  },
  {
    "pokedexNo": 99,
    "name": "Kingler",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Shell Armor", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "kingler",
    "forms": [
      {
        "sprite": "kingler-gmax",
        "types": ["Water"],
        "name": "Gigantamax Kingler"
      }
    ]
  },
  {
    "pokedexNo": 100,
    "name": "Voltorb",
    "types": ["Electric"],
    "evolutions": ["Electrode"],
    "abilities": [
      ["Soundproof", "false"],
      ["Static", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "Genderless",
    "sprite": "voltorb",
    "forms": []
  },
  {
    "pokedexNo": 100,
    "name": "Hisuian Voltorb",
    "types": ["Electric", "Grass"],
    "evolutions": ["Hisuian Electrode"],
    "abilities": [
      ["Soundproof", "false"],
      ["Static", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "Genderless",
    "sprite": "voltorb-hisui",
    "forms": []
  },
  {
    "pokedexNo": 101,
    "name": "Electrode",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Soundproof", "false"],
      ["Static", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "Genderless",
    "sprite": "electrode",
    "forms": []
  },
  {
    "pokedexNo": 101,
    "name": "Hisuian Electrode",
    "types": ["Electric", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Soundproof", "false"],
      ["Static", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "Genderless",
    "sprite": "electrode-hisui",
    "forms": []
  },
  {
    "pokedexNo": 102,
    "name": "Exeggcute",
    "types": ["Grass", "Psychic"],
    "evolutions": ["Exeggutor", "Alolan Exeggutor"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "exeggcute",
    "forms": []
  },
  {
    "pokedexNo": 103,
    "name": "Exeggutor",
    "types": ["Grass", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "exeggutor",
    "forms": []
  },
  {
    "pokedexNo": 103,
    "name": "Alolan Exeggutor",
    "types": ["Grass", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Frisk", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "exeggutor-alola",
    "forms": []
  },
  {
    "pokedexNo": 104,
    "name": "Cubone",
    "types": ["Ground"],
    "evolutions": ["Marowak", "Alolan Marowak"],
    "abilities": [
      ["Rock Head", "false"],
      ["Lightning Rod", "false"],
      ["Battle Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "cubone",
    "forms": []
  },
  {
    "pokedexNo": 105,
    "name": "Marowak",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Rock Head", "false"],
      ["Lightning Rod", "false"],
      ["Battle Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "marowak",
    "forms": []
  },
  {
    "pokedexNo": 105,
    "name": "Alolan Marowak",
    "types": ["Fire", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Cursed Body", "false"],
      ["Lightning Rod", "false"],
      ["Rock Head", "true"]
    ],
    "gender": "50:50",
    "sprite": "marowak-alola",
    "forms": []
  },
  {
    "pokedexNo": 106,
    "name": "Hitmonlee",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Reckless", "false"],
      ["Unburden", "true"]
    ],
    "gender": "100:0",
    "sprite": "hitmonlee",
    "forms": []
  },
  {
    "pokedexNo": 107,
    "name": "Hitmonchan",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Iron Fist", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "100:0",
    "sprite": "hitmonchan",
    "forms": []
  },
  {
    "pokedexNo": 108,
    "name": "Lickitung",
    "types": ["Normal"],
    "evolutions": ["Lickilicky"],
    "abilities": [
      ["Own Tempo", "false"],
      ["Oblivious", "false"],
      ["Cloud Nine", "true"]
    ],
    "gender": "50:50",
    "sprite": "lickitung",
    "forms": []
  },
  {
    "pokedexNo": 109,
    "name": "Koffing",
    "types": ["Poison"],
    "evolutions": ["Weezing", "Galarian Weezing"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "koffing",
    "forms": []
  },
  {
    "pokedexNo": 110,
    "name": "Weezing",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "weezing",
    "forms": []
  },
  {
    "pokedexNo": 110,
    "name": "Galarian Weezing",
    "types": ["Poison", "Fairy"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "weezing-galar",
    "forms": []
  },
  {
    "pokedexNo": 111,
    "name": "Rhyhorn",
    "types": ["Ground", "Rock"],
    "evolutions": ["Rhydon"],
    "abilities": [
      ["Lightning Rod", "false"],
      ["Rock Head", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "rhyhorn",
    "forms": []
  },
  {
    "pokedexNo": 112,
    "name": "Rhydon",
    "types": ["Ground", "Rock"],
    "evolutions": ["Rhyperior"],
    "abilities": [
      ["Lightning Rod", "false"],
      ["Rock Head", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "rhydon",
    "forms": []
  },
  {
    "pokedexNo": 113,
    "name": "Chansey",
    "types": ["Normal"],
    "evolutions": ["Blissey"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Serene Grace", "false"],
      ["Healer", "true"]
    ],
    "gender": "0:100",
    "sprite": "chansey",
    "forms": []
  },
  {
    "pokedexNo": 114,
    "name": "Tangela",
    "types": ["Grass"],
    "evolutions": ["Tangrowth"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Leaf Guard", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "tangela",
    "forms": []
  },
  {
    "pokedexNo": 115,
    "name": "Kangaskhan",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Early Bird", "false"],
      ["Scrappy", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "0:100",
    "sprite": "kangaskhan",
    "forms": [
      {
        "sprite": "kangaskhan-mega",
        "types": ["Normal"],
        "name": "Mega Kangaskhan"
      }
    ]
  },
  {
    "pokedexNo": 116,
    "name": "Horsea",
    "types": ["Water"],
    "evolutions": ["Seadra"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Sniper", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "horsea",
    "forms": []
  },
  {
    "pokedexNo": 117,
    "name": "Seadra",
    "types": ["Water"],
    "evolutions": ["Kingdra"],
    "abilities": [
      ["Poison Point", "false"],
      ["Sniper", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "seadra",
    "forms": []
  },
  {
    "pokedexNo": 118,
    "name": "Goldeen",
    "types": ["Water"],
    "evolutions": ["Seaking"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Veil", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "goldeen",
    "forms": []
  },
  {
    "pokedexNo": 119,
    "name": "Seaking",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Veil", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "seaking",
    "forms": []
  },
  {
    "pokedexNo": 120,
    "name": "Staryu",
    "types": ["Water"],
    "evolutions": ["Starmie"],
    "abilities": [
      ["Illuminate", "false"],
      ["Natural Cure", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "staryu",
    "forms": []
  },
  {
    "pokedexNo": 121,
    "name": "Starmie",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Illuminate", "false"],
      ["Natural Cure", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "starmie",
    "forms": []
  },
  {
    "pokedexNo": 122,
    "name": "Mr. Mime",
    "types": ["Psychic", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Soundproof", "false"],
      ["Filter", "false"],
      ["Technician", "true"]
    ],
    "gender": "50:50",
    "sprite": "mr-mime",
    "forms": []
  },
  {
    "pokedexNo": 122,
    "name": "Galarian Mr. Mime",
    "types": ["Ice", "Psychic"],
    "evolutions": ["Mr. Rime"],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Screen Cleaner", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "mr-mime-galar",
    "forms": []
  },
  {
    "pokedexNo": 123,
    "name": "Scyther",
    "types": ["Bug", "Flying"],
    "evolutions": ["Scizor", "Kleavor"],
    "abilities": [
      ["Swarm", "false"],
      ["Technician", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50:50",
    "sprite": "scyther",
    "forms": []
  },
  {
    "pokedexNo": 124,
    "name": "Jynx",
    "types": ["Ice", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Forewarn", "false"],
      ["Dry Skin", "true"]
    ],
    "gender": "0:100",
    "sprite": "jynx",
    "forms": []
  },
  {
    "pokedexNo": 125,
    "name": "Electabuzz",
    "types": ["Electric"],
    "evolutions": ["Electivire"],
    "abilities": [
      ["Static", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "electabuzz",
    "forms": []
  },
  {
    "pokedexNo": 126,
    "name": "Magmar",
    "types": ["Fire"],
    "evolutions": ["Magmortar"],
    "abilities": [
      ["Flame Body", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "magmar",
    "forms": []
  },
  {
    "pokedexNo": 127,
    "name": "Pinsir",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Mold Breaker", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "pinsir",
    "forms": [
      {
        "sprite": "pinsir-mega",
        "types": ["Bug", "Flying"],
        "name": "Mega Pinsir"
      }
    ]
  },
  {
    "pokedexNo": 128,
    "name": "Tauros",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Anger Point", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "100:0",
    "sprite": "tauros",
    "forms": []
  },
  {
    "pokedexNo": 128,
    "name": "Paldean Tauros",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Anger Point", "false"],
      ["Cud Chew", "true"]
    ],
    "gender": "100:0",
    "sprite": "tauros-paldea",
    "forms": []
  },
  {
    "pokedexNo": 128,
    "name": "Paldean Tauros Blaze Breed",
    "types": ["Fighting", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Anger Point", "false"],
      ["Cud Chew", "true"]
    ],
    "gender": "100:0",
    "sprite": "tauros-paldea-blaze",
    "forms": []
  },
  {
    "pokedexNo": 128,
    "name": "Paldean Tauros Aqua Breed",
    "types": ["Fighting", "Water"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Anger Point", "false"],
      ["Cud Chew", "true"]
    ],
    "gender": "100:0",
    "sprite": "tauros-paldea-aqua",
    "forms": []
  },
  {
    "pokedexNo": 129,
    "name": "Magikarp",
    "types": ["Water"],
    "evolutions": ["Gyarados"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "magikarp",
    "forms": []
  },
  {
    "pokedexNo": 130,
    "name": "Gyarados",
    "types": ["Water", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "gyarados",
    "forms": [
      {
        "sprite": "gyarados-mega",
        "types": ["Water", "Dark"],
        "name": "Mega Gyarados"
      }
    ]
  },
  {
    "pokedexNo": 131,
    "name": "Lapras",
    "types": ["Water", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Shell Armor", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "lapras",
    "forms": [
      {
        "sprite": "lapras-gmax",
        "types": ["Water", "Ice"],
        "name": "Gigantamax Lapras"
      }
    ]
  },
  {
    "pokedexNo": 132,
    "name": "Ditto",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Imposter", "true"]
    ],
    "gender": "Genderless",
    "sprite": "ditto",
    "forms": []
  },
  {
    "pokedexNo": 133,
    "name": "Eevee",
    "types": ["Normal"],
    "evolutions": [
      "Vaporeon",
      "Jolteon",
      "Flareon",
      "Espeon",
      "Umbreon",
      "Leafeon",
      "Glaceon",
      "Sylveon"
    ],
    "abilities": [
      ["Run Away", "false"],
      ["Adaptability", "false"],
      ["Anticipation", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "eevee",
    "forms": [
      {
        "sprite": "eevee-gmax",
        "types": ["Normal"],
        "name": "Gigantamax Eevee"
      }
    ]
  },
  {
    "pokedexNo": 134,
    "name": "Vaporeon",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Hydration", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "vaporeon",
    "forms": []
  },
  {
    "pokedexNo": 135,
    "name": "Jolteon",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Volt Absorb", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "jolteon",
    "forms": []
  },
  {
    "pokedexNo": 136,
    "name": "Flareon",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Flash Fire", "false"],
      ["Guts", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "flareon",
    "forms": []
  },
  {
    "pokedexNo": 137,
    "name": "Porygon",
    "types": ["Normal"],
    "evolutions": ["Porygon2"],
    "abilities": [
      ["Trace", "false"],
      ["Download", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "porygon",
    "forms": []
  },
  {
    "pokedexNo": 138,
    "name": "Omanyte",
    "types": ["Rock", "Water"],
    "evolutions": ["Omastar"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Shell Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "omanyte",
    "forms": []
  },
  {
    "pokedexNo": 139,
    "name": "Omastar",
    "types": ["Rock", "Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Shell Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "omastar",
    "forms": []
  },
  {
    "pokedexNo": 140,
    "name": "Kabuto",
    "types": ["Rock", "Water"],
    "evolutions": ["Kabutops"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Battle Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "kabuto",
    "forms": []
  },
  {
    "pokedexNo": 141,
    "name": "Kabutops",
    "types": ["Rock", "Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Battle Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "kabutops",
    "forms": []
  },
  {
    "pokedexNo": 142,
    "name": "Aerodactyl",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Rock Head", "false"],
      ["Pressure", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "aerodactyl",
    "forms": [
      {
        "sprite": "aerodactyl-mega",
        "types": ["Rock", "Flying"],
        "name": "Mega Aerodactyl"
      }
    ]
  },
  {
    "pokedexNo": 143,
    "name": "Snorlax",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Immunity", "false"],
      ["Thick Fat", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "snorlax",
    "forms": [
      {
        "sprite": "snorlax-gmax",
        "types": ["Normal"],
        "name": "Gigantamax Snorlax"
      }
    ]
  },
  {
    "pokedexNo": 144,
    "name": "Articuno",
    "types": ["Ice", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Snow Cloak", "true"]
    ],
    "gender": "Genderless",
    "sprite": "articuno",
    "forms": []
  },
  {
    "pokedexNo": 144,
    "name": "Galarian Articuno",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [["Competitive", "false"]],
    "gender": "Genderless",
    "sprite": "articuno-galar",
    "forms": []
  },
  {
    "pokedexNo": 145,
    "name": "Zapdos",
    "types": ["Electric", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Static", "true"]
    ],
    "gender": "Genderless",
    "sprite": "zapdos",
    "forms": []
  },
  {
    "pokedexNo": 145,
    "name": "Galarian Zapdos",
    "types": ["Fighting", "Flying"],
    "evolutions": [],
    "abilities": [["Defiant", "false"]],
    "gender": "Genderless",
    "sprite": "zapdos-galar",
    "forms": []
  },
  {
    "pokedexNo": 146,
    "name": "Moltres",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Flame Body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "moltres",
    "forms": []
  },
  {
    "pokedexNo": 146,
    "name": "Galarian Moltres",
    "types": ["Dark", "Flying"],
    "evolutions": [],
    "abilities": [["Berserk", "false"]],
    "gender": "Genderless",
    "sprite": "moltres-galar",
    "forms": []
  },
  {
    "pokedexNo": 147,
    "name": "Dratini",
    "types": ["Dragon"],
    "evolutions": ["Dragonair"],
    "abilities": [
      ["Shed Skin", "false"],
      ["Marvel Scale", "true"]
    ],
    "gender": "50:50",
    "sprite": "dratini",
    "forms": []
  },
  {
    "pokedexNo": 148,
    "name": "Dragonair",
    "types": ["Dragon"],
    "evolutions": ["Dragonite"],
    "abilities": [
      ["Shed Skin", "false"],
      ["Marvel Scale", "true"]
    ],
    "gender": "50:50",
    "sprite": "dragonair",
    "forms": []
  },
  {
    "pokedexNo": 149,
    "name": "Dragonite",
    "types": ["Dragon", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Inner Focus", "false"],
      ["Multiscale", "true"]
    ],
    "gender": "50:50",
    "sprite": "dragonite",
    "forms": []
  },
  {
    "pokedexNo": 150,
    "name": "Mewtwo",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "Genderless",
    "sprite": "mewtwo",
    "forms": [
      {
        "sprite": "mewtwo-mega-x",
        "types": ["Psychic", "Fighting"],
        "name": "Mega Mewtwo X"
      },
      {
        "sprite": "mewtwo-mega-y",
        "types": ["Psychic"],
        "name": "Mega Mewtwo Y"
      }
    ]
  },
  {
    "pokedexNo": 151,
    "name": "Mew",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Synchronize", "false"]],
    "gender": "Genderless",
    "sprite": "mew",
    "forms": []
  },
  {
    "pokedexNo": 152,
    "name": "Chikorita",
    "types": ["Grass"],
    "evolutions": ["Bayleef"],
    "abilities": [
      ["Overgrow", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "chikorita",
    "forms": []
  },
  {
    "pokedexNo": 153,
    "name": "Bayleef",
    "types": ["Grass"],
    "evolutions": ["Meganium"],
    "abilities": [
      ["Overgrow", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "bayleef",
    "forms": []
  },
  {
    "pokedexNo": 154,
    "name": "Meganium",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "meganium",
    "forms": []
  },
  {
    "pokedexNo": 155,
    "name": "Cyndaquil",
    "types": ["Fire"],
    "evolutions": ["Quilava"],
    "abilities": [
      ["Blaze", "false"],
      ["Flash Fire", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "cyndaquil",
    "forms": []
  },
  {
    "pokedexNo": 156,
    "name": "Quilava",
    "types": ["Fire"],
    "evolutions": ["Typhlosion", "Hisuian Typhlosion"],
    "abilities": [
      ["Blaze", "false"],
      ["Flash Fire", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "quilava",
    "forms": []
  },
  {
    "pokedexNo": 157,
    "name": "Typhlosion",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Flash Fire", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "typhlosion",
    "forms": []
  },
  {
    "pokedexNo": 157,
    "name": "Hisuian Typhlosion",
    "types": ["Fire", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Flash Fire", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "typhlosion-hisui",
    "forms": []
  },
  {
    "pokedexNo": 158,
    "name": "Totodile",
    "types": ["Water"],
    "evolutions": ["Croconaw"],
    "abilities": [
      ["Torrent", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "totodile",
    "forms": []
  },
  {
    "pokedexNo": 159,
    "name": "Croconaw",
    "types": ["Water"],
    "evolutions": ["Feraligatr"],
    "abilities": [
      ["Torrent", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "croconaw",
    "forms": []
  },
  {
    "pokedexNo": 160,
    "name": "Feraligatr",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "feraligatr",
    "forms": []
  },
  {
    "pokedexNo": 161,
    "name": "Sentret",
    "types": ["Normal"],
    "evolutions": ["Furret"],
    "abilities": [
      ["Run Away", "false"],
      ["Keen Eye", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "sentret",
    "forms": []
  },
  {
    "pokedexNo": 162,
    "name": "Furret",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Keen Eye", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "furret",
    "forms": []
  },
  {
    "pokedexNo": 163,
    "name": "Hoothoot",
    "types": ["Normal", "Flying"],
    "evolutions": ["Noctowl"],
    "abilities": [
      ["Insomnia", "false"],
      ["Keen Eye", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "hoothoot",
    "forms": []
  },
  {
    "pokedexNo": 164,
    "name": "Noctowl",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Insomnia", "false"],
      ["Keen Eye", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "noctowl",
    "forms": []
  },
  {
    "pokedexNo": 165,
    "name": "Ledyba",
    "types": ["Bug", "Flying"],
    "evolutions": ["Ledian"],
    "abilities": [
      ["Swarm", "false"],
      ["Early Bird", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "ledyba",
    "forms": []
  },
  {
    "pokedexNo": 166,
    "name": "Ledian",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Early Bird", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "50:50",
    "sprite": "ledian",
    "forms": []
  },
  {
    "pokedexNo": 167,
    "name": "Spinarak",
    "types": ["Bug", "Poison"],
    "evolutions": ["Ariados"],
    "abilities": [
      ["Swarm", "false"],
      ["Insomnia", "false"],
      ["Sniper", "true"]
    ],
    "gender": "50:50",
    "sprite": "spinarak",
    "forms": []
  },
  {
    "pokedexNo": 168,
    "name": "Ariados",
    "types": ["Bug", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Insomnia", "false"],
      ["Sniper", "true"]
    ],
    "gender": "50:50",
    "sprite": "ariados",
    "forms": []
  },
  {
    "pokedexNo": 169,
    "name": "Crobat",
    "types": ["Poison", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Inner Focus", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "crobat",
    "forms": []
  },
  {
    "pokedexNo": 170,
    "name": "Chinchou",
    "types": ["Water", "Electric"],
    "evolutions": ["Lanturn"],
    "abilities": [
      ["Volt Absorb", "false"],
      ["Illuminate", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "chinchou",
    "forms": []
  },
  {
    "pokedexNo": 171,
    "name": "Lanturn",
    "types": ["Water", "Electric"],
    "evolutions": [],
    "abilities": [
      ["Volt Absorb", "false"],
      ["Illuminate", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "lanturn",
    "forms": []
  },
  {
    "pokedexNo": 172,
    "name": "Pichu",
    "types": ["Electric"],
    "evolutions": ["Pikachu"],
    "abilities": [
      ["Static", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "pichu",
    "forms": []
  },
  {
    "pokedexNo": 173,
    "name": "Cleffa",
    "types": ["Fairy"],
    "evolutions": ["Clefairy"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Magic Guard", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "25:75",
    "sprite": "cleffa",
    "forms": []
  },
  {
    "pokedexNo": 174,
    "name": "Igglybuff",
    "types": ["Normal", "Fairy"],
    "evolutions": ["Jigglypuff"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Competitive", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "25:75",
    "sprite": "igglybuff",
    "forms": []
  },
  {
    "pokedexNo": 175,
    "name": "Togepi",
    "types": ["Fairy"],
    "evolutions": ["Togetic"],
    "abilities": [
      ["Hustle", "false"],
      ["Serene Grace", "false"],
      ["Super Luck", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "togepi",
    "forms": []
  },
  {
    "pokedexNo": 176,
    "name": "Togetic",
    "types": ["Fairy", "Flying"],
    "evolutions": ["Togekiss"],
    "abilities": [
      ["Hustle", "false"],
      ["Serene Grace", "false"],
      ["Super Luck", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "togetic",
    "forms": []
  },
  {
    "pokedexNo": 177,
    "name": "Natu",
    "types": ["Psychic", "Flying"],
    "evolutions": ["Xatu"],
    "abilities": [
      ["Synchronize", "false"],
      ["Early Bird", "false"],
      ["Magic Bounce", "true"]
    ],
    "gender": "50:50",
    "sprite": "natu",
    "forms": []
  },
  {
    "pokedexNo": 178,
    "name": "Xatu",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Early Bird", "false"],
      ["Magic Bounce", "true"]
    ],
    "gender": "50:50",
    "sprite": "xatu",
    "forms": []
  },
  {
    "pokedexNo": 179,
    "name": "Mareep",
    "types": ["Electric"],
    "evolutions": ["Flaaffy"],
    "abilities": [
      ["Static", "false"],
      ["Plus", "true"]
    ],
    "gender": "50:50",
    "sprite": "mareep",
    "forms": []
  },
  {
    "pokedexNo": 180,
    "name": "Flaaffy",
    "types": ["Electric"],
    "evolutions": ["Ampharos"],
    "abilities": [
      ["Static", "false"],
      ["Plus", "true"]
    ],
    "gender": "50:50",
    "sprite": "flaaffy",
    "forms": []
  },
  {
    "pokedexNo": 181,
    "name": "Ampharos",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Static", "false"],
      ["Plus", "true"]
    ],
    "gender": "50:50",
    "sprite": "ampharos",
    "forms": [
      {
        "sprite": "ampharos-mega",
        "types": ["Electric", "Dragon"],
        "name": "Mega Ampharos"
      }
    ]
  },
  {
    "pokedexNo": 182,
    "name": "Bellossom",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Healer", "true"]
    ],
    "gender": "50:50",
    "sprite": "bellossom",
    "forms": []
  },
  {
    "pokedexNo": 183,
    "name": "Marill",
    "types": ["Water", "Fairy"],
    "evolutions": ["Azumarill"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Huge Power", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "marill",
    "forms": []
  },
  {
    "pokedexNo": 184,
    "name": "Azumarill",
    "types": ["Water", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Huge Power", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "azumarill",
    "forms": []
  },
  {
    "pokedexNo": 185,
    "name": "Sudowoodo",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Rock Head", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "sudowoodo",
    "forms": []
  },
  {
    "pokedexNo": 186,
    "name": "Politoed",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Damp", "false"],
      ["Drizzle", "true"]
    ],
    "gender": "50:50",
    "sprite": "politoed",
    "forms": []
  },
  {
    "pokedexNo": 187,
    "name": "Hoppip",
    "types": ["Grass", "Flying"],
    "evolutions": ["Skiploom"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Leaf Guard", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "hoppip",
    "forms": []
  },
  {
    "pokedexNo": 188,
    "name": "Skiploom",
    "types": ["Grass", "Flying"],
    "evolutions": ["Jumpluff"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Leaf Guard", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "skiploom",
    "forms": []
  },
  {
    "pokedexNo": 189,
    "name": "Jumpluff",
    "types": ["Grass", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Leaf Guard", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "jumpluff",
    "forms": []
  },
  {
    "pokedexNo": 190,
    "name": "Aipom",
    "types": ["Normal"],
    "evolutions": ["Ambipom"],
    "abilities": [
      ["Run Away", "false"],
      ["Pickup", "false"],
      ["Skill Link", "true"]
    ],
    "gender": "50:50",
    "sprite": "aipom",
    "forms": []
  },
  {
    "pokedexNo": 191,
    "name": "Sunkern",
    "types": ["Grass"],
    "evolutions": ["Sunflora"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Solar Power", "false"],
      ["Early Bird", "true"]
    ],
    "gender": "50:50",
    "sprite": "sunkern",
    "forms": []
  },
  {
    "pokedexNo": 192,
    "name": "Sunflora",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Solar Power", "false"],
      ["Early Bird", "true"]
    ],
    "gender": "50:50",
    "sprite": "sunflora",
    "forms": []
  },
  {
    "pokedexNo": 193,
    "name": "Yanma",
    "types": ["Bug", "Flying"],
    "evolutions": ["Yanmega"],
    "abilities": [
      ["Speed Boost", "false"],
      ["Compound Eyes", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "yanma",
    "forms": []
  },
  {
    "pokedexNo": 194,
    "name": "Wooper",
    "types": ["Water", "Ground"],
    "evolutions": ["Quagsire"],
    "abilities": [
      ["Damp", "false"],
      ["Water Absorb", "false"],
      ["Unaware", "true"]
    ],
    "gender": "50:50",
    "sprite": "wooper",
    "forms": []
  },
  {
    "pokedexNo": 194,
    "name": "Paldean Wooper",
    "types": ["Poison", "Ground"],
    "evolutions": ["Clodsire"],
    "abilities": [
      ["Poison Point", "false"],
      ["Water Absorb", "false"],
      ["Unaware", "true"]
    ],
    "gender": "50:50",
    "sprite": "wooper-paldea",
    "forms": []
  },
  {
    "pokedexNo": 195,
    "name": "Quagsire",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Damp", "false"],
      ["Water Absorb", "false"],
      ["Unaware", "true"]
    ],
    "gender": "50:50",
    "sprite": "quagsire",
    "forms": []
  },
  {
    "pokedexNo": 196,
    "name": "Espeon",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Magic Bounce", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "espeon",
    "forms": []
  },
  {
    "pokedexNo": 197,
    "name": "Umbreon",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "umbreon",
    "forms": []
  },
  {
    "pokedexNo": 198,
    "name": "Murkrow",
    "types": ["Dark", "Flying"],
    "evolutions": ["Honchkrow"],
    "abilities": [
      ["Insomnia", "false"],
      ["Super Luck", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "murkrow",
    "forms": []
  },
  {
    "pokedexNo": 199,
    "name": "Slowking",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowking",
    "forms": []
  },
  {
    "pokedexNo": 199,
    "name": "Galarian Slowking",
    "types": ["Poison", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Curious Medicine", "false"],
      ["Own Tempo", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "slowking-galar",
    "forms": []
  },
  {
    "pokedexNo": 200,
    "name": "Misdreavus",
    "types": ["Ghost"],
    "evolutions": ["Mismagius"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "misdreavus",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown A",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown B",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-b",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown C",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-c",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown D",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-d",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown E",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-e",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown F",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-f",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown G",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-g",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown H",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-h",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown I",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-i",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown J",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-j",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown K",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-k",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown L",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-l",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown M",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-m",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown N",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-n",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown O",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-o",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown P",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-p",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown Q",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-q",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown R",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-r",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown S",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-s",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown T",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-t",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown U",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-u",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown V",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-v",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown W",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-w",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown X",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-x",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown Y",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-y",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown Z",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-z",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown !",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-exclamation",
    "forms": []
  },
  {
    "pokedexNo": 201,
    "name": "Unown ?",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "unown-question",
    "forms": []
  },
  {
    "pokedexNo": 202,
    "name": "Wobbuffet",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Shadow Tag", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "wobbuffet",
    "forms": []
  },
  {
    "pokedexNo": 203,
    "name": "Girafarig",
    "types": ["Normal", "Psychic"],
    "evolutions": ["Farigiraf"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Early Bird", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "girafarig",
    "forms": []
  },
  {
    "pokedexNo": 204,
    "name": "Pineco",
    "types": ["Bug"],
    "evolutions": ["Forretress"],
    "abilities": [
      ["Sturdy", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "pineco",
    "forms": []
  },
  {
    "pokedexNo": 205,
    "name": "Forretress",
    "types": ["Bug", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "forretress",
    "forms": []
  },
  {
    "pokedexNo": 206,
    "name": "Dunsparce",
    "types": ["Normal"],
    "evolutions": [
      "Two-Segment Form Dudunsparce",
      "Three-Segment Form Dudunsparce"
    ],
    "abilities": [
      ["Serene Grace", "false"],
      ["Run Away", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "dunsparce",
    "forms": []
  },
  {
    "pokedexNo": 207,
    "name": "Gligar",
    "types": ["Ground", "Flying"],
    "evolutions": ["Gliscor"],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Sand Veil", "false"],
      ["Immunity", "true"]
    ],
    "gender": "50:50",
    "sprite": "gligar",
    "forms": []
  },
  {
    "pokedexNo": 208,
    "name": "Steelix",
    "types": ["Steel", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Rock Head", "false"],
      ["Sturdy", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "steelix",
    "forms": [
      {
        "sprite": "steelix-mega",
        "types": ["Steel", "Ground"],
        "name": "Mega Steelix"
      }
    ]
  },
  {
    "pokedexNo": 209,
    "name": "Snubbull",
    "types": ["Fairy"],
    "evolutions": ["Granbull"],
    "abilities": [
      ["Intimidate", "false"],
      ["Run Away", "false"],
      ["Rattled", "true"]
    ],
    "gender": "25:75",
    "sprite": "snubbull",
    "forms": []
  },
  {
    "pokedexNo": 210,
    "name": "Granbull",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Quick Feet", "false"],
      ["Rattled", "true"]
    ],
    "gender": "25:75",
    "sprite": "granbull",
    "forms": []
  },
  {
    "pokedexNo": 211,
    "name": "Qwilfish",
    "types": ["Water", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Swift Swim", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "50:50",
    "sprite": "qwilfish",
    "forms": []
  },
  {
    "pokedexNo": 211,
    "name": "Hisuian Qwilfish",
    "types": ["Dark", "Poison"],
    "evolutions": ["Overqwil"],
    "abilities": [
      ["Poison Point", "false"],
      ["Swift Swim", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "50:50",
    "sprite": "qwilfish-hisui",
    "forms": []
  },
  {
    "pokedexNo": 212,
    "name": "Scizor",
    "types": ["Bug", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Technician", "false"],
      ["Light Metal", "true"]
    ],
    "gender": "50:50",
    "sprite": "scizor",
    "forms": [
      {
        "sprite": "scizor-mega",
        "types": ["Bug", "Steel"],
        "name": "Mega Scizor"
      }
    ]
  },
  {
    "pokedexNo": 213,
    "name": "Shuckle",
    "types": ["Bug", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Gluttony", "false"],
      ["Contrary", "true"]
    ],
    "gender": "50:50",
    "sprite": "shuckle",
    "forms": []
  },
  {
    "pokedexNo": 214,
    "name": "Heracross",
    "types": ["Bug", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Guts", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "heracross",
    "forms": [
      {
        "sprite": "heracross-mega",
        "types": ["Bug", "Fighting"],
        "name": "Mega Heracross"
      }
    ]
  },
  {
    "pokedexNo": 215,
    "name": "Sneasel",
    "types": ["Dark", "Ice"],
    "evolutions": ["Weavile"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Keen Eye", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "sneasel",
    "forms": []
  },
  {
    "pokedexNo": 215,
    "name": "Hisuian Sneasel",
    "types": ["Poison", "Fighting"],
    "evolutions": ["Sneasler"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Keen Eye", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50:50",
    "sprite": "sneasel-hisui",
    "forms": []
  },
  {
    "pokedexNo": 216,
    "name": "Teddiursa",
    "types": ["Normal"],
    "evolutions": ["Ursaring"],
    "abilities": [
      ["Pickup", "false"],
      ["Quick Feet", "false"],
      ["Honey Gather", "true"]
    ],
    "gender": "50:50",
    "sprite": "teddiursa",
    "forms": []
  },
  {
    "pokedexNo": 217,
    "name": "Ursaring",
    "types": ["Normal"],
    "evolutions": ["Ursaluna"],
    "abilities": [
      ["Guts", "false"],
      ["Quick Feet", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "ursaring",
    "forms": []
  },
  {
    "pokedexNo": 218,
    "name": "Slugma",
    "types": ["Fire"],
    "evolutions": ["Magcargo"],
    "abilities": [
      ["Magma Armor", "false"],
      ["Flame Body", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "slugma",
    "forms": []
  },
  {
    "pokedexNo": 219,
    "name": "Magcargo",
    "types": ["Fire", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Magma Armor", "false"],
      ["Flame Body", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "magcargo",
    "forms": []
  },
  {
    "pokedexNo": 220,
    "name": "Swinub",
    "types": ["Ice", "Ground"],
    "evolutions": ["Piloswine"],
    "abilities": [
      ["Oblivious", "false"],
      ["Snow Cloak", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "swinub",
    "forms": []
  },
  {
    "pokedexNo": 221,
    "name": "Piloswine",
    "types": ["Ice", "Ground"],
    "evolutions": ["Mamoswine"],
    "abilities": [
      ["Oblivious", "false"],
      ["Snow Cloak", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "piloswine",
    "forms": []
  },
  {
    "pokedexNo": 222,
    "name": "Corsola",
    "types": ["Water", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Hustle", "false"],
      ["Natural Cure", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "25:75",
    "sprite": "corsola",
    "forms": []
  },
  {
    "pokedexNo": 222,
    "name": "Galarian Corsola",
    "types": ["Ghost"],
    "evolutions": ["Cursola"],
    "abilities": [
      ["Weak Armor", "false"],
      ["Cursed Body", "true"]
    ],
    "gender": "25:75",
    "sprite": "corsola-galar",
    "forms": []
  },
  {
    "pokedexNo": 223,
    "name": "Remoraid",
    "types": ["Water"],
    "evolutions": ["Octillery"],
    "abilities": [
      ["Hustle", "false"],
      ["Sniper", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "remoraid",
    "forms": []
  },
  {
    "pokedexNo": 224,
    "name": "Octillery",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Suction Cups", "false"],
      ["Sniper", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "octillery",
    "forms": []
  },
  {
    "pokedexNo": 225,
    "name": "Delibird",
    "types": ["Ice", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Hustle", "false"],
      ["Insomnia", "true"]
    ],
    "gender": "50:50",
    "sprite": "delibird",
    "forms": []
  },
  {
    "pokedexNo": 226,
    "name": "Mantine",
    "types": ["Water", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Absorb", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "mantine",
    "forms": []
  },
  {
    "pokedexNo": 227,
    "name": "Skarmory",
    "types": ["Steel", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sturdy", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "skarmory",
    "forms": []
  },
  {
    "pokedexNo": 228,
    "name": "Houndour",
    "types": ["Dark", "Fire"],
    "evolutions": ["Houndoom"],
    "abilities": [
      ["Early Bird", "false"],
      ["Flash Fire", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "houndour",
    "forms": []
  },
  {
    "pokedexNo": 229,
    "name": "Houndoom",
    "types": ["Dark", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Early Bird", "false"],
      ["Flash Fire", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "houndoom",
    "forms": [
      {
        "sprite": "houndoom-mega",
        "types": ["Dark", "Fire"],
        "name": "Mega Houndoom"
      }
    ]
  },
  {
    "pokedexNo": 230,
    "name": "Kingdra",
    "types": ["Water", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Sniper", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "kingdra",
    "forms": []
  },
  {
    "pokedexNo": 231,
    "name": "Phanpy",
    "types": ["Ground"],
    "evolutions": ["Donphan"],
    "abilities": [
      ["Pickup", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "phanpy",
    "forms": []
  },
  {
    "pokedexNo": 232,
    "name": "Donphan",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "donphan",
    "forms": []
  },
  {
    "pokedexNo": 233,
    "name": "Porygon2",
    "types": ["Normal"],
    "evolutions": ["Porygon-Z"],
    "abilities": [
      ["Trace", "false"],
      ["Download", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "porygon2",
    "forms": []
  },
  {
    "pokedexNo": 234,
    "name": "Stantler",
    "types": ["Normal"],
    "evolutions": ["Wyrdeer"],
    "abilities": [
      ["Intimidate", "false"],
      ["Frisk", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "stantler",
    "forms": []
  },
  {
    "pokedexNo": 235,
    "name": "Smeargle",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Technician", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "smeargle",
    "forms": []
  },
  {
    "pokedexNo": 236,
    "name": "Tyrogue",
    "types": ["Fighting"],
    "evolutions": ["Hitmonlee", "Hitmonchan", "Hitmontop"],
    "abilities": [
      ["Guts", "false"],
      ["Steadfast", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "100:0",
    "sprite": "tyrogue",
    "forms": []
  },
  {
    "pokedexNo": 237,
    "name": "Hitmontop",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Technician", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "100:0",
    "sprite": "hitmontop",
    "forms": []
  },
  {
    "pokedexNo": 238,
    "name": "Smoochum",
    "types": ["Ice", "Psychic"],
    "evolutions": ["Jynx"],
    "abilities": [
      ["Oblivious", "false"],
      ["Forewarn", "false"],
      ["Hydration", "true"]
    ],
    "gender": "0:100",
    "sprite": "smoochum",
    "forms": []
  },
  {
    "pokedexNo": 239,
    "name": "Elekid",
    "types": ["Electric"],
    "evolutions": ["Electabuzz"],
    "abilities": [
      ["Static", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "elekid",
    "forms": []
  },
  {
    "pokedexNo": 240,
    "name": "Magby",
    "types": ["Fire"],
    "evolutions": ["Magmar"],
    "abilities": [
      ["Flame Body", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "magby",
    "forms": []
  },
  {
    "pokedexNo": 241,
    "name": "Miltank",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Scrappy", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "0:100",
    "sprite": "miltank",
    "forms": []
  },
  {
    "pokedexNo": 242,
    "name": "Blissey",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Natural Cure", "false"],
      ["Serene Grace", "false"],
      ["Healer", "true"]
    ],
    "gender": "0:100",
    "sprite": "blissey",
    "forms": []
  },
  {
    "pokedexNo": 243,
    "name": "Raikou",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "Genderless",
    "sprite": "raikou",
    "forms": []
  },
  {
    "pokedexNo": 244,
    "name": "Entei",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "Genderless",
    "sprite": "entei",
    "forms": []
  },
  {
    "pokedexNo": 245,
    "name": "Suicune",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "Genderless",
    "sprite": "suicune",
    "forms": []
  },
  {
    "pokedexNo": 246,
    "name": "Larvitar",
    "types": ["Rock", "Ground"],
    "evolutions": ["Pupitar"],
    "abilities": [
      ["Guts", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "larvitar",
    "forms": []
  },
  {
    "pokedexNo": 247,
    "name": "Pupitar",
    "types": ["Rock", "Ground"],
    "evolutions": ["Tyranitar"],
    "abilities": [["Shed Skin", "false"]],
    "gender": "50:50",
    "sprite": "pupitar",
    "forms": []
  },
  {
    "pokedexNo": 248,
    "name": "Tyranitar",
    "types": ["Rock", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Sand Stream", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "tyranitar",
    "forms": [
      {
        "sprite": "tyranitar-mega",
        "types": ["Rock", "Dark"],
        "name": "Mega Tyranitar"
      }
    ]
  },
  {
    "pokedexNo": 249,
    "name": "Lugia",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Multiscale", "true"]
    ],
    "gender": "Genderless",
    "sprite": "lugia",
    "forms": []
  },
  {
    "pokedexNo": 250,
    "name": "Ho-Oh",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "Genderless",
    "sprite": "ho-oh",
    "forms": []
  },
  {
    "pokedexNo": 251,
    "name": "Celebi",
    "types": ["Psychic", "Grass"],
    "evolutions": [],
    "abilities": [["Natural Cure", "false"]],
    "gender": "Genderless",
    "sprite": "celebi",
    "forms": []
  },
  {
    "pokedexNo": 252,
    "name": "Treecko",
    "types": ["Grass"],
    "evolutions": ["Grovyle"],
    "abilities": [
      ["Overgrow", "false"],
      ["Unburden", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "treecko",
    "forms": []
  },
  {
    "pokedexNo": 253,
    "name": "Grovyle",
    "types": ["Grass"],
    "evolutions": ["Sceptile"],
    "abilities": [
      ["Overgrow", "false"],
      ["Unburden", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "grovyle",
    "forms": []
  },
  {
    "pokedexNo": 254,
    "name": "Sceptile",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Unburden", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "sceptile",
    "forms": [
      {
        "sprite": "sceptile-mega",
        "types": ["Grass", "Dragon"],
        "name": "Mega Sceptile"
      }
    ]
  },
  {
    "pokedexNo": 255,
    "name": "Torchic",
    "types": ["Fire"],
    "evolutions": ["Combusken"],
    "abilities": [
      ["Blaze", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "torchic",
    "forms": []
  },
  {
    "pokedexNo": 256,
    "name": "Combusken",
    "types": ["Fire", "Fighting"],
    "evolutions": ["Blaziken"],
    "abilities": [
      ["Blaze", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "combusken",
    "forms": []
  },
  {
    "pokedexNo": 257,
    "name": "Blaziken",
    "types": ["Fire", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "blaziken",
    "forms": [
      {
        "sprite": "blaziken-mega",
        "types": ["Fire", "Fighting"],
        "name": "Mega Blaziken"
      }
    ]
  },
  {
    "pokedexNo": 258,
    "name": "Mudkip",
    "types": ["Water"],
    "evolutions": ["Marshtomp"],
    "abilities": [
      ["Torrent", "false"],
      ["Damp", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "mudkip",
    "forms": []
  },
  {
    "pokedexNo": 259,
    "name": "Marshtomp",
    "types": ["Water", "Ground"],
    "evolutions": ["Swampert"],
    "abilities": [
      ["Torrent", "false"],
      ["Damp", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "marshtomp",
    "forms": []
  },
  {
    "pokedexNo": 260,
    "name": "Swampert",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Damp", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "swampert",
    "forms": [
      {
        "sprite": "swampert-mega",
        "types": ["Water", "Ground"],
        "name": "Mega Swampert"
      }
    ]
  },
  {
    "pokedexNo": 261,
    "name": "Poochyena",
    "types": ["Dark"],
    "evolutions": ["Mightyena"],
    "abilities": [
      ["Run Away", "false"],
      ["Quick Feet", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "poochyena",
    "forms": []
  },
  {
    "pokedexNo": 262,
    "name": "Mightyena",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Quick Feet", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "mightyena",
    "forms": []
  },
  {
    "pokedexNo": 263,
    "name": "Zigzagoon",
    "types": ["Normal"],
    "evolutions": ["Linoone"],
    "abilities": [
      ["Pickup", "false"],
      ["Gluttony", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "zigzagoon",
    "forms": []
  },
  {
    "pokedexNo": 263,
    "name": "Galarian Zigzagoon",
    "types": ["Dark", "Normal"],
    "evolutions": ["Galarian Linoone"],
    "abilities": [
      ["Pickup", "false"],
      ["Gluttony", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "zigzagoon-galar",
    "forms": []
  },
  {
    "pokedexNo": 264,
    "name": "Linoone",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Pickup", "false"],
      ["Gluttony", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "linoone",
    "forms": []
  },
  {
    "pokedexNo": 264,
    "name": "Galarian Linoone",
    "types": ["Dark", "Normal"],
    "evolutions": ["Obstagoon"],
    "abilities": [
      ["Pickup", "false"],
      ["Gluttony", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "linoone-galar",
    "forms": []
  },
  {
    "pokedexNo": 265,
    "name": "Wurmple",
    "types": ["Bug"],
    "evolutions": ["Silcoon", "Cascoon"],
    "abilities": [
      ["Shield Dust", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "wurmple",
    "forms": []
  },
  {
    "pokedexNo": 266,
    "name": "Silcoon",
    "types": ["Bug"],
    "evolutions": ["Beautifly"],
    "abilities": [["Shed Skin", "false"]],
    "gender": "50:50",
    "sprite": "silcoon",
    "forms": []
  },
  {
    "pokedexNo": 267,
    "name": "Beautifly",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Rivalry", "true"]
    ],
    "gender": "50:50",
    "sprite": "beautifly",
    "forms": []
  },
  {
    "pokedexNo": 268,
    "name": "Cascoon",
    "types": ["Bug"],
    "evolutions": ["Dustox"],
    "abilities": [["Shed Skin", "false"]],
    "gender": "50:50",
    "sprite": "cascoon",
    "forms": []
  },
  {
    "pokedexNo": 269,
    "name": "Dustox",
    "types": ["Bug", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "true"]
    ],
    "gender": "50:50",
    "sprite": "dustox",
    "forms": []
  },
  {
    "pokedexNo": 270,
    "name": "Lotad",
    "types": ["Water", "Grass"],
    "evolutions": ["Lombre"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rain Dish", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "50:50",
    "sprite": "lotad",
    "forms": []
  },
  {
    "pokedexNo": 271,
    "name": "Lombre",
    "types": ["Water", "Grass"],
    "evolutions": ["Ludicolo"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rain Dish", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "50:50",
    "sprite": "lombre",
    "forms": []
  },
  {
    "pokedexNo": 272,
    "name": "Ludicolo",
    "types": ["Water", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rain Dish", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "50:50",
    "sprite": "ludicolo",
    "forms": []
  },
  {
    "pokedexNo": 273,
    "name": "Seedot",
    "types": ["Grass"],
    "evolutions": ["Nuzleaf"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Early Bird", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "seedot",
    "forms": []
  },
  {
    "pokedexNo": 274,
    "name": "Nuzleaf",
    "types": ["Grass", "Dark"],
    "evolutions": ["Shiftry"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Early Bird", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "nuzleaf",
    "forms": []
  },
  {
    "pokedexNo": 275,
    "name": "Shiftry",
    "types": ["Grass", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Early Bird", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "shiftry",
    "forms": []
  },
  {
    "pokedexNo": 276,
    "name": "Taillow",
    "types": ["Normal", "Flying"],
    "evolutions": ["Swellow"],
    "abilities": [
      ["Guts", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "taillow",
    "forms": []
  },
  {
    "pokedexNo": 277,
    "name": "Swellow",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Guts", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "swellow",
    "forms": []
  },
  {
    "pokedexNo": 278,
    "name": "Wingull",
    "types": ["Water", "Flying"],
    "evolutions": ["Pelipper"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Hydration", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "wingull",
    "forms": []
  },
  {
    "pokedexNo": 279,
    "name": "Pelipper",
    "types": ["Water", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Drizzle", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "pelipper",
    "forms": []
  },
  {
    "pokedexNo": 280,
    "name": "Ralts",
    "types": ["Psychic", "Fairy"],
    "evolutions": ["Kirlia"],
    "abilities": [
      ["Synchronize", "false"],
      ["Trace", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "ralts",
    "forms": []
  },
  {
    "pokedexNo": 281,
    "name": "Kirlia",
    "types": ["Psychic", "Fairy"],
    "evolutions": ["Gardevoir", "Gallade"],
    "abilities": [
      ["Synchronize", "false"],
      ["Trace", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "kirlia",
    "forms": []
  },
  {
    "pokedexNo": 282,
    "name": "Gardevoir",
    "types": ["Psychic", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Trace", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "gardevoir",
    "forms": [
      {
        "sprite": "gardevoir-mega",
        "types": ["Psychic", "Fairy"],
        "name": "Mega Gardevoir"
      }
    ]
  },
  {
    "pokedexNo": 283,
    "name": "Surskit",
    "types": ["Bug", "Water"],
    "evolutions": ["Masquerain"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "surskit",
    "forms": []
  },
  {
    "pokedexNo": 284,
    "name": "Masquerain",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "masquerain",
    "forms": []
  },
  {
    "pokedexNo": 285,
    "name": "Shroomish",
    "types": ["Grass"],
    "evolutions": ["Breloom"],
    "abilities": [
      ["Effect Spore", "false"],
      ["Poison Heal", "false"],
      ["Quick Feet", "true"]
    ],
    "gender": "50:50",
    "sprite": "shroomish",
    "forms": []
  },
  {
    "pokedexNo": 286,
    "name": "Breloom",
    "types": ["Grass", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Effect Spore", "false"],
      ["Poison Heal", "false"],
      ["Technician", "true"]
    ],
    "gender": "50:50",
    "sprite": "breloom",
    "forms": []
  },
  {
    "pokedexNo": 287,
    "name": "Slakoth",
    "types": ["Normal"],
    "evolutions": ["Vigoroth"],
    "abilities": [["Truant", "false"]],
    "gender": "50:50",
    "sprite": "slakoth",
    "forms": []
  },
  {
    "pokedexNo": 288,
    "name": "Vigoroth",
    "types": ["Normal"],
    "evolutions": ["Slaking"],
    "abilities": [["Vital Spirit", "false"]],
    "gender": "50:50",
    "sprite": "vigoroth",
    "forms": []
  },
  {
    "pokedexNo": 289,
    "name": "Slaking",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Truant", "false"]],
    "gender": "50:50",
    "sprite": "slaking",
    "forms": []
  },
  {
    "pokedexNo": 290,
    "name": "Nincada",
    "types": ["Bug", "Ground"],
    "evolutions": ["Ninjask", "Shedinja"],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "nincada",
    "forms": []
  },
  {
    "pokedexNo": 291,
    "name": "Ninjask",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Speed Boost", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "ninjask",
    "forms": []
  },
  {
    "pokedexNo": 292,
    "name": "Shedinja",
    "types": ["Bug", "Ghost"],
    "evolutions": [],
    "abilities": [["Wonder Guard", "false"]],
    "gender": "Genderless",
    "sprite": "shedinja",
    "forms": []
  },
  {
    "pokedexNo": 293,
    "name": "Whismur",
    "types": ["Normal"],
    "evolutions": ["Loudred"],
    "abilities": [
      ["Soundproof", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "whismur",
    "forms": []
  },
  {
    "pokedexNo": 294,
    "name": "Loudred",
    "types": ["Normal"],
    "evolutions": ["Exploud"],
    "abilities": [
      ["Soundproof", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "loudred",
    "forms": []
  },
  {
    "pokedexNo": 295,
    "name": "Exploud",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Soundproof", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "exploud",
    "forms": []
  },
  {
    "pokedexNo": 296,
    "name": "Makuhita",
    "types": ["Fighting"],
    "evolutions": ["Hariyama"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Guts", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "75:25",
    "sprite": "makuhita",
    "forms": []
  },
  {
    "pokedexNo": 297,
    "name": "Hariyama",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Guts", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "75:25",
    "sprite": "hariyama",
    "forms": []
  },
  {
    "pokedexNo": 298,
    "name": "Azurill",
    "types": ["Normal", "Fairy"],
    "evolutions": ["Marill"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Huge Power", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "25:75",
    "sprite": "azurill",
    "forms": []
  },
  {
    "pokedexNo": 299,
    "name": "Nosepass",
    "types": ["Rock"],
    "evolutions": ["Probopass"],
    "abilities": [
      ["Sturdy", "false"],
      ["Magnet Pull", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "nosepass",
    "forms": []
  },
  {
    "pokedexNo": 300,
    "name": "Skitty",
    "types": ["Normal"],
    "evolutions": ["Delcatty"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Normalize", "false"],
      ["Wonder Skin", "true"]
    ],
    "gender": "25:75",
    "sprite": "skitty",
    "forms": []
  },
  {
    "pokedexNo": 301,
    "name": "Delcatty",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Normalize", "false"],
      ["Wonder Skin", "true"]
    ],
    "gender": "25:75",
    "sprite": "delcatty",
    "forms": []
  },
  {
    "pokedexNo": 302,
    "name": "Sableye",
    "types": ["Dark", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Stall", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "sableye",
    "forms": [
      {
        "sprite": "sableye-mega",
        "types": ["Dark", "Ghost"],
        "name": "Mega Sableye"
      }
    ]
  },
  {
    "pokedexNo": 303,
    "name": "Mawile",
    "types": ["Steel", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Intimidate", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "mawile",
    "forms": [
      {
        "sprite": "mawile-mega",
        "types": ["Steel", "Fairy"],
        "name": "Mega Mawile"
      }
    ]
  },
  {
    "pokedexNo": 304,
    "name": "Aron",
    "types": ["Steel", "Rock"],
    "evolutions": ["Lairon"],
    "abilities": [
      ["Sturdy", "false"],
      ["Rock Head", "false"],
      ["Heavy Metal", "true"]
    ],
    "gender": "50:50",
    "sprite": "aron",
    "forms": []
  },
  {
    "pokedexNo": 305,
    "name": "Lairon",
    "types": ["Steel", "Rock"],
    "evolutions": ["Aggron"],
    "abilities": [
      ["Sturdy", "false"],
      ["Rock Head", "false"],
      ["Heavy Metal", "true"]
    ],
    "gender": "50:50",
    "sprite": "lairon",
    "forms": []
  },
  {
    "pokedexNo": 306,
    "name": "Aggron",
    "types": ["Steel", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Rock Head", "false"],
      ["Heavy Metal", "true"]
    ],
    "gender": "50:50",
    "sprite": "aggron",
    "forms": [
      {
        "sprite": "aggron-mega",
        "types": ["Steel"],
        "name": "Mega Aggron"
      }
    ]
  },
  {
    "pokedexNo": 307,
    "name": "Meditite",
    "types": ["Fighting", "Psychic"],
    "evolutions": ["Medicham"],
    "abilities": [
      ["Pure Power", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "meditite",
    "forms": []
  },
  {
    "pokedexNo": 308,
    "name": "Medicham",
    "types": ["Fighting", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Pure Power", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "medicham",
    "forms": [
      {
        "sprite": "medicham-mega",
        "types": ["Fighting", "Psychic"],
        "name": "Mega Medicham"
      }
    ]
  },
  {
    "pokedexNo": 309,
    "name": "Electrike",
    "types": ["Electric"],
    "evolutions": ["Manectric"],
    "abilities": [
      ["Static", "false"],
      ["Lightning Rod", "false"],
      ["Minus", "true"]
    ],
    "gender": "50:50",
    "sprite": "electrike",
    "forms": []
  },
  {
    "pokedexNo": 310,
    "name": "Manectric",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Static", "false"],
      ["Lightning Rod", "false"],
      ["Minus", "true"]
    ],
    "gender": "50:50",
    "sprite": "manectric",
    "forms": [
      {
        "sprite": "manectric-mega",
        "types": ["Electric"],
        "name": "Mega Manectric"
      }
    ]
  },
  {
    "pokedexNo": 311,
    "name": "Plusle",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Plus", "false"],
      ["Lightning Rod", "true"]
    ],
    "gender": "50:50",
    "sprite": "plusle",
    "forms": []
  },
  {
    "pokedexNo": 312,
    "name": "Minun",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Minus", "false"],
      ["Volt Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "minun",
    "forms": []
  },
  {
    "pokedexNo": 313,
    "name": "Volbeat",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Illuminate", "false"],
      ["Swarm", "false"],
      ["Prankster", "true"]
    ],
    "gender": "100:0",
    "sprite": "volbeat",
    "forms": []
  },
  {
    "pokedexNo": 314,
    "name": "Illumise",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Tinted Lens", "false"],
      ["Prankster", "true"]
    ],
    "gender": "0:100",
    "sprite": "illumise",
    "forms": []
  },
  {
    "pokedexNo": 315,
    "name": "Roselia",
    "types": ["Grass", "Poison"],
    "evolutions": ["Roserade"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Poison Point", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "roselia",
    "forms": []
  },
  {
    "pokedexNo": 316,
    "name": "Gulpin",
    "types": ["Poison"],
    "evolutions": ["Swalot"],
    "abilities": [
      ["Liquid Ooze", "false"],
      ["Sticky Hold", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "gulpin",
    "forms": []
  },
  {
    "pokedexNo": 317,
    "name": "Swalot",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [
      ["Liquid Ooze", "false"],
      ["Sticky Hold", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "swalot",
    "forms": []
  },
  {
    "pokedexNo": 318,
    "name": "Carvanha",
    "types": ["Water", "Dark"],
    "evolutions": ["Sharpedo"],
    "abilities": [
      ["Rough Skin", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "carvanha",
    "forms": []
  },
  {
    "pokedexNo": 319,
    "name": "Sharpedo",
    "types": ["Water", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Rough Skin", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "sharpedo",
    "forms": [
      {
        "sprite": "sharpedo-mega",
        "types": ["Water", "Dark"],
        "name": "Mega Sharpedo"
      }
    ]
  },
  {
    "pokedexNo": 320,
    "name": "Wailmer",
    "types": ["Water"],
    "evolutions": ["Wailord"],
    "abilities": [
      ["Water Veil", "false"],
      ["Oblivious", "false"],
      ["Pressure", "true"]
    ],
    "gender": "50:50",
    "sprite": "wailmer",
    "forms": []
  },
  {
    "pokedexNo": 321,
    "name": "Wailord",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Water Veil", "false"],
      ["Oblivious", "false"],
      ["Pressure", "true"]
    ],
    "gender": "50:50",
    "sprite": "wailord",
    "forms": []
  },
  {
    "pokedexNo": 322,
    "name": "Numel",
    "types": ["Fire", "Ground"],
    "evolutions": ["Camerupt"],
    "abilities": [
      ["Oblivious", "false"],
      ["Simple", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "50:50",
    "sprite": "numel",
    "forms": []
  },
  {
    "pokedexNo": 323,
    "name": "Camerupt",
    "types": ["Fire", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Magma Armor", "false"],
      ["Solid Rock", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "camerupt",
    "forms": [
      {
        "sprite": "camerupt-mega",
        "types": ["Fire", "Ground"],
        "name": "Mega Camerupt"
      }
    ]
  },
  {
    "pokedexNo": 324,
    "name": "Torkoal",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["White Smoke", "false"],
      ["Drought", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "torkoal",
    "forms": []
  },
  {
    "pokedexNo": 325,
    "name": "Spoink",
    "types": ["Psychic"],
    "evolutions": ["Grumpig"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Own Tempo", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "spoink",
    "forms": []
  },
  {
    "pokedexNo": 326,
    "name": "Grumpig",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Own Tempo", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50:50",
    "sprite": "grumpig",
    "forms": []
  },
  {
    "pokedexNo": 327,
    "name": "Spinda",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Tangled Feet", "false"],
      ["Contrary", "true"]
    ],
    "gender": "50:50",
    "sprite": "spinda",
    "forms": []
  },
  {
    "pokedexNo": 328,
    "name": "Trapinch",
    "types": ["Ground"],
    "evolutions": ["Vibrava"],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Arena Trap", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "trapinch",
    "forms": []
  },
  {
    "pokedexNo": 329,
    "name": "Vibrava",
    "types": ["Ground", "Dragon"],
    "evolutions": ["Flygon"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "vibrava",
    "forms": []
  },
  {
    "pokedexNo": 330,
    "name": "Flygon",
    "types": ["Ground", "Dragon"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "flygon",
    "forms": []
  },
  {
    "pokedexNo": 331,
    "name": "Cacnea",
    "types": ["Grass"],
    "evolutions": ["Cacturne"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "cacnea",
    "forms": []
  },
  {
    "pokedexNo": 332,
    "name": "Cacturne",
    "types": ["Grass", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Sand Veil", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "cacturne",
    "forms": []
  },
  {
    "pokedexNo": 333,
    "name": "Swablu",
    "types": ["Normal", "Flying"],
    "evolutions": ["Altaria"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Cloud Nine", "true"]
    ],
    "gender": "50:50",
    "sprite": "swablu",
    "forms": []
  },
  {
    "pokedexNo": 334,
    "name": "Altaria",
    "types": ["Dragon", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Natural Cure", "false"],
      ["Cloud Nine", "true"]
    ],
    "gender": "50:50",
    "sprite": "altaria",
    "forms": [
      {
        "sprite": "altaria-mega",
        "types": ["Dragon", "Fairy"],
        "name": "Mega Altaria"
      }
    ]
  },
  {
    "pokedexNo": 335,
    "name": "Zangoose",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Immunity", "false"],
      ["Toxic Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "zangoose",
    "forms": []
  },
  {
    "pokedexNo": 336,
    "name": "Seviper",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [
      ["Shed Skin", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "seviper",
    "forms": []
  },
  {
    "pokedexNo": 337,
    "name": "Lunatone",
    "types": ["Rock", "Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "lunatone",
    "forms": []
  },
  {
    "pokedexNo": 338,
    "name": "Solrock",
    "types": ["Rock", "Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "solrock",
    "forms": []
  },
  {
    "pokedexNo": 339,
    "name": "Barboach",
    "types": ["Water", "Ground"],
    "evolutions": ["Whiscash"],
    "abilities": [
      ["Oblivious", "false"],
      ["Anticipation", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "barboach",
    "forms": []
  },
  {
    "pokedexNo": 340,
    "name": "Whiscash",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Anticipation", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "whiscash",
    "forms": []
  },
  {
    "pokedexNo": 341,
    "name": "Corphish",
    "types": ["Water"],
    "evolutions": ["Crawdaunt"],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Shell Armor", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "corphish",
    "forms": []
  },
  {
    "pokedexNo": 342,
    "name": "Crawdaunt",
    "types": ["Water", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Shell Armor", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "crawdaunt",
    "forms": []
  },
  {
    "pokedexNo": 343,
    "name": "Baltoy",
    "types": ["Ground", "Psychic"],
    "evolutions": ["Claydol"],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "baltoy",
    "forms": []
  },
  {
    "pokedexNo": 344,
    "name": "Claydol",
    "types": ["Ground", "Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "claydol",
    "forms": []
  },
  {
    "pokedexNo": 345,
    "name": "Lileep",
    "types": ["Rock", "Grass"],
    "evolutions": ["Cradily"],
    "abilities": [
      ["Suction Cups", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "lileep",
    "forms": []
  },
  {
    "pokedexNo": 346,
    "name": "Cradily",
    "types": ["Rock", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Suction Cups", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "cradily",
    "forms": []
  },
  {
    "pokedexNo": 347,
    "name": "Anorith",
    "types": ["Rock", "Bug"],
    "evolutions": ["Armaldo"],
    "abilities": [
      ["Battle Armor", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "anorith",
    "forms": []
  },
  {
    "pokedexNo": 348,
    "name": "Armaldo",
    "types": ["Rock", "Bug"],
    "evolutions": [],
    "abilities": [
      ["Battle Armor", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "armaldo",
    "forms": []
  },
  {
    "pokedexNo": 349,
    "name": "Feebas",
    "types": ["Water"],
    "evolutions": ["Milotic"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Oblivious", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "feebas",
    "forms": []
  },
  {
    "pokedexNo": 350,
    "name": "Milotic",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Marvel Scale", "false"],
      ["Competitive", "false"],
      ["Cute Charm", "true"]
    ],
    "gender": "50:50",
    "sprite": "milotic",
    "forms": []
  },
  {
    "pokedexNo": 351,
    "name": "Castform",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Forecast", "false"]],
    "gender": "50:50",
    "sprite": "castform",
    "forms": [
      {
        "sprite": "castform-rainy",
        "types": ["Normal"],
        "name": "Rainy Form Castform"
      },
      {
        "sprite": "castform-snowy",
        "types": ["Normal"],
        "name": "Snowy Form Castform"
      },
      {
        "sprite": "castform-sunny",
        "types": ["Normal"],
        "name": "Sunny Form Castform"
      }
    ]
  },
  {
    "pokedexNo": 352,
    "name": "Kecleon",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Color Change", "false"],
      ["Protean", "true"]
    ],
    "gender": "50:50",
    "sprite": "kecleon",
    "forms": []
  },
  {
    "pokedexNo": 353,
    "name": "Shuppet",
    "types": ["Ghost"],
    "evolutions": ["Banette"],
    "abilities": [
      ["Insomnia", "false"],
      ["Frisk", "false"],
      ["Cursed Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "shuppet",
    "forms": []
  },
  {
    "pokedexNo": 354,
    "name": "Banette",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [
      ["Insomnia", "false"],
      ["Frisk", "false"],
      ["Cursed Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "banette",
    "forms": [
      {
        "sprite": "banette-mega",
        "types": ["Ghost"],
        "name": "Mega Banette"
      }
    ]
  },
  {
    "pokedexNo": 355,
    "name": "Duskull",
    "types": ["Ghost"],
    "evolutions": ["Dusclops"],
    "abilities": [
      ["Levitate", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "duskull",
    "forms": []
  },
  {
    "pokedexNo": 356,
    "name": "Dusclops",
    "types": ["Ghost"],
    "evolutions": ["Dusknoir"],
    "abilities": [
      ["Pressure", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "dusclops",
    "forms": []
  },
  {
    "pokedexNo": 357,
    "name": "Tropius",
    "types": ["Grass", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Solar Power", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "tropius",
    "forms": []
  },
  {
    "pokedexNo": 358,
    "name": "Chimecho",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "chimecho",
    "forms": []
  },
  {
    "pokedexNo": 359,
    "name": "Absol",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Super Luck", "false"],
      ["Justified", "true"]
    ],
    "gender": "50:50",
    "sprite": "absol",
    "forms": [
      {
        "sprite": "absol-mega",
        "types": ["Dark"],
        "name": "Mega Absol"
      }
    ]
  },
  {
    "pokedexNo": 360,
    "name": "Wynaut",
    "types": ["Psychic"],
    "evolutions": ["Wobbuffet"],
    "abilities": [
      ["Shadow Tag", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "wynaut",
    "forms": []
  },
  {
    "pokedexNo": 361,
    "name": "Snorunt",
    "types": ["Ice"],
    "evolutions": ["Glalie", "Froslass"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Ice Body", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "snorunt",
    "forms": []
  },
  {
    "pokedexNo": 362,
    "name": "Glalie",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Inner Focus", "false"],
      ["Ice Body", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "glalie",
    "forms": [
      {
        "sprite": "glalie-mega",
        "types": ["Ice"],
        "name": "Mega Glalie"
      }
    ]
  },
  {
    "pokedexNo": 363,
    "name": "Spheal",
    "types": ["Ice", "Water"],
    "evolutions": ["Sealeo"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Ice Body", "false"],
      ["Oblivious", "true"]
    ],
    "gender": "50:50",
    "sprite": "spheal",
    "forms": []
  },
  {
    "pokedexNo": 364,
    "name": "Sealeo",
    "types": ["Ice", "Water"],
    "evolutions": ["Walrein"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Ice Body", "false"],
      ["Oblivious", "true"]
    ],
    "gender": "50:50",
    "sprite": "sealeo",
    "forms": []
  },
  {
    "pokedexNo": 365,
    "name": "Walrein",
    "types": ["Ice", "Water"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Ice Body", "false"],
      ["Oblivious", "true"]
    ],
    "gender": "50:50",
    "sprite": "walrein",
    "forms": []
  },
  {
    "pokedexNo": 366,
    "name": "Clamperl",
    "types": ["Water"],
    "evolutions": ["Huntail", "Gorebyss"],
    "abilities": [
      ["Shell Armor", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "clamperl",
    "forms": []
  },
  {
    "pokedexNo": 367,
    "name": "Huntail",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "huntail",
    "forms": []
  },
  {
    "pokedexNo": 368,
    "name": "Gorebyss",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "gorebyss",
    "forms": []
  },
  {
    "pokedexNo": 369,
    "name": "Relicanth",
    "types": ["Water", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Rock Head", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "relicanth",
    "forms": []
  },
  {
    "pokedexNo": 370,
    "name": "Luvdisc",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Hydration", "true"]
    ],
    "gender": "25:75",
    "sprite": "luvdisc",
    "forms": []
  },
  {
    "pokedexNo": 371,
    "name": "Bagon",
    "types": ["Dragon"],
    "evolutions": ["Shelgon"],
    "abilities": [
      ["Rock Head", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "bagon",
    "forms": []
  },
  {
    "pokedexNo": 372,
    "name": "Shelgon",
    "types": ["Dragon"],
    "evolutions": ["Salamence"],
    "abilities": [
      ["Rock Head", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "shelgon",
    "forms": []
  },
  {
    "pokedexNo": 373,
    "name": "Salamence",
    "types": ["Dragon", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "salamence",
    "forms": [
      {
        "sprite": "salamence-mega",
        "types": ["Dragon", "Flying"],
        "name": "Mega Salamence"
      }
    ]
  },
  {
    "pokedexNo": 374,
    "name": "Beldum",
    "types": ["Steel", "Psychic"],
    "evolutions": ["Metang"],
    "abilities": [
      ["Clear Body", "false"],
      ["Light Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "beldum",
    "forms": []
  },
  {
    "pokedexNo": 375,
    "name": "Metang",
    "types": ["Steel", "Psychic"],
    "evolutions": ["Metagross"],
    "abilities": [
      ["Clear Body", "false"],
      ["Light Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "metang",
    "forms": []
  },
  {
    "pokedexNo": 376,
    "name": "Metagross",
    "types": ["Steel", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Light Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "metagross",
    "forms": [
      {
        "sprite": "metagross-mega",
        "types": ["Steel", "Psychic"],
        "name": "Mega Metagross"
      }
    ]
  },
  {
    "pokedexNo": 377,
    "name": "Regirock",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "regirock",
    "forms": []
  },
  {
    "pokedexNo": 378,
    "name": "Regice",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "regice",
    "forms": []
  },
  {
    "pokedexNo": 379,
    "name": "Registeel",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Light Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "registeel",
    "forms": []
  },
  {
    "pokedexNo": 380,
    "name": "Latias",
    "types": ["Dragon", "Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "0:100",
    "sprite": "latias",
    "forms": [
      {
        "sprite": "latias-mega",
        "types": ["Dragon", "Psychic"],
        "name": "Mega Latias"
      }
    ]
  },
  {
    "pokedexNo": 381,
    "name": "Latios",
    "types": ["Dragon", "Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "100:0",
    "sprite": "latios",
    "forms": [
      {
        "sprite": "latios-mega",
        "types": ["Dragon", "Psychic"],
        "name": "Mega Latios"
      }
    ]
  },
  {
    "pokedexNo": 382,
    "name": "Kyogre",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Drizzle", "false"]],
    "gender": "Genderless",
    "sprite": "kyogre",
    "forms": [
      {
        "sprite": "kyogre-primal",
        "types": ["Water"],
        "name": "Primal Kyogre"
      }
    ]
  },
  {
    "pokedexNo": 383,
    "name": "Groudon",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [["Drought", "false"]],
    "gender": "Genderless",
    "sprite": "groudon",
    "forms": [
      {
        "sprite": "groudon-primal",
        "types": ["Ground", "Fire"],
        "name": "Primal Groudon"
      }
    ]
  },
  {
    "pokedexNo": 384,
    "name": "Rayquaza",
    "types": ["Dragon", "Flying"],
    "evolutions": [],
    "abilities": [["Air Lock", "false"]],
    "gender": "Genderless",
    "sprite": "rayquaza",
    "forms": [
      {
        "sprite": "rayquaza-mega",
        "types": ["Dragon", "Flying"],
        "name": "Mega Rayquaza"
      }
    ]
  },
  {
    "pokedexNo": 385,
    "name": "Jirachi",
    "types": ["Steel", "Psychic"],
    "evolutions": [],
    "abilities": [["Serene Grace", "false"]],
    "gender": "Genderless",
    "sprite": "jirachi",
    "forms": []
  },
  {
    "pokedexNo": 386,
    "name": "Deoxys",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "deoxys",
    "forms": [
      {
        "sprite": "deoxys-attack",
        "types": ["Psychic"],
        "name": "Attack Form Deoxys"
      },
      {
        "sprite": "deoxys-defense",
        "types": ["Psychic"],
        "name": "Defense Form Deoxys"
      },
      {
        "sprite": "deoxys-normal",
        "types": ["Psychic"],
        "name": "Normal Form Deoxys"
      },
      {
        "sprite": "deoxys-speed",
        "types": ["Psychic"],
        "name": "Speed Form Deoxys"
      }
    ]
  },
  {
    "pokedexNo": 386,
    "name": "Attack Form Deoxys",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "deoxys-attack",
    "forms": []
  },
  {
    "pokedexNo": 386,
    "name": "Defense Form Deoxys",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "deoxys-defense",
    "forms": []
  },
  {
    "pokedexNo": 386,
    "name": "Normal Form Deoxys",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "deoxys-normal",
    "forms": []
  },
  {
    "pokedexNo": 386,
    "name": "Speed Form Deoxys",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "deoxys-speed",
    "forms": []
  },
  {
    "pokedexNo": 387,
    "name": "Turtwig",
    "types": ["Grass"],
    "evolutions": ["Grotle"],
    "abilities": [
      ["Overgrow", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "turtwig",
    "forms": []
  },
  {
    "pokedexNo": 388,
    "name": "Grotle",
    "types": ["Grass"],
    "evolutions": ["Torterra"],
    "abilities": [
      ["Overgrow", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "grotle",
    "forms": []
  },
  {
    "pokedexNo": 389,
    "name": "Torterra",
    "types": ["Grass", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "torterra",
    "forms": []
  },
  {
    "pokedexNo": 390,
    "name": "Chimchar",
    "types": ["Fire"],
    "evolutions": ["Monferno"],
    "abilities": [
      ["Blaze", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "chimchar",
    "forms": []
  },
  {
    "pokedexNo": 391,
    "name": "Monferno",
    "types": ["Fire", "Fighting"],
    "evolutions": ["Infernape"],
    "abilities": [
      ["Blaze", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "monferno",
    "forms": []
  },
  {
    "pokedexNo": 392,
    "name": "Infernape",
    "types": ["Fire", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "infernape",
    "forms": []
  },
  {
    "pokedexNo": 393,
    "name": "Piplup",
    "types": ["Water"],
    "evolutions": ["Prinplup"],
    "abilities": [
      ["Torrent", "false"],
      ["Defiant", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "piplup",
    "forms": []
  },
  {
    "pokedexNo": 394,
    "name": "Prinplup",
    "types": ["Water"],
    "evolutions": ["Empoleon"],
    "abilities": [
      ["Torrent", "false"],
      ["Defiant", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "prinplup",
    "forms": []
  },
  {
    "pokedexNo": 395,
    "name": "Empoleon",
    "types": ["Water", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Defiant", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "empoleon",
    "forms": []
  },
  {
    "pokedexNo": 396,
    "name": "Starly",
    "types": ["Normal", "Flying"],
    "evolutions": ["Staravia"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "starly",
    "forms": []
  },
  {
    "pokedexNo": 397,
    "name": "Staravia",
    "types": ["Normal", "Flying"],
    "evolutions": ["Staraptor"],
    "abilities": [
      ["Intimidate", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "staravia",
    "forms": []
  },
  {
    "pokedexNo": 398,
    "name": "Staraptor",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "staraptor",
    "forms": []
  },
  {
    "pokedexNo": 399,
    "name": "Bidoof",
    "types": ["Normal"],
    "evolutions": ["Bibarel"],
    "abilities": [
      ["Simple", "false"],
      ["Unaware", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "bidoof",
    "forms": []
  },
  {
    "pokedexNo": 400,
    "name": "Bibarel",
    "types": ["Normal", "Water"],
    "evolutions": [],
    "abilities": [
      ["Simple", "false"],
      ["Unaware", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "bibarel",
    "forms": []
  },
  {
    "pokedexNo": 401,
    "name": "Kricketot",
    "types": ["Bug"],
    "evolutions": ["Kricketune"],
    "abilities": [
      ["Shed Skin", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "kricketot",
    "forms": []
  },
  {
    "pokedexNo": 402,
    "name": "Kricketune",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Technician", "true"]
    ],
    "gender": "50:50",
    "sprite": "kricketune",
    "forms": []
  },
  {
    "pokedexNo": 403,
    "name": "Shinx",
    "types": ["Electric"],
    "evolutions": ["Luxio"],
    "abilities": [
      ["Rivalry", "false"],
      ["Intimidate", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "shinx",
    "forms": []
  },
  {
    "pokedexNo": 404,
    "name": "Luxio",
    "types": ["Electric"],
    "evolutions": ["Luxray"],
    "abilities": [
      ["Rivalry", "false"],
      ["Intimidate", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "luxio",
    "forms": []
  },
  {
    "pokedexNo": 405,
    "name": "Luxray",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Rivalry", "false"],
      ["Intimidate", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "luxray",
    "forms": []
  },
  {
    "pokedexNo": 406,
    "name": "Budew",
    "types": ["Grass", "Poison"],
    "evolutions": ["Roselia"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Poison Point", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "budew",
    "forms": []
  },
  {
    "pokedexNo": 407,
    "name": "Roserade",
    "types": ["Grass", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Natural Cure", "false"],
      ["Poison Point", "false"],
      ["Technician", "true"]
    ],
    "gender": "50:50",
    "sprite": "roserade",
    "forms": []
  },
  {
    "pokedexNo": 408,
    "name": "Cranidos",
    "types": ["Rock"],
    "evolutions": ["Rampardos"],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "cranidos",
    "forms": []
  },
  {
    "pokedexNo": 409,
    "name": "Rampardos",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "rampardos",
    "forms": []
  },
  {
    "pokedexNo": 410,
    "name": "Shieldon",
    "types": ["Rock", "Steel"],
    "evolutions": ["Bastiodon"],
    "abilities": [
      ["Sturdy", "false"],
      ["Soundproof", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "shieldon",
    "forms": []
  },
  {
    "pokedexNo": 411,
    "name": "Bastiodon",
    "types": ["Rock", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Soundproof", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "bastiodon",
    "forms": []
  },
  {
    "pokedexNo": 412,
    "name": "Burmy",
    "types": ["Bug"],
    "evolutions": ["Mothim"],
    "abilities": [
      ["Shed Skin", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "burmy",
    "forms": [
      {
        "sprite": "burmy-plant",
        "types": ["Bug"],
        "name": "Plant Cloak Burmy"
      },
      {
        "sprite": "burmy-sandy",
        "types": ["Bug"],
        "name": "Sandy Cloak Burmy"
      },
      {
        "sprite": "burmy-trash",
        "types": ["Bug"],
        "name": "Trash Cloak Burmy"
      }
    ]
  },
  {
    "pokedexNo": 413,
    "name": "Wormadam",
    "types": ["Bug", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Anticipation", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "0:100",
    "sprite": "wormadam",
    "forms": [
      {
        "sprite": "wormadam-plant",
        "types": ["Bug", "Grass"],
        "name": "Plant Cloak Wormadam"
      },
      {
        "sprite": "wormadam-sandy",
        "types": ["Bug", "Grass"],
        "name": "Sandy Cloak Wormadam"
      },
      {
        "sprite": "wormadam-trash",
        "types": ["Bug", "Grass"],
        "name": "Trash Cloak Wormadam"
      }
    ]
  },
  {
    "pokedexNo": 414,
    "name": "Mothim",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "100:0",
    "sprite": "mothim",
    "forms": []
  },
  {
    "pokedexNo": 415,
    "name": "Combee",
    "types": ["Bug", "Flying"],
    "evolutions": ["Vespiquen"],
    "abilities": [
      ["Honey Gather", "false"],
      ["Hustle", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "combee",
    "forms": []
  },
  {
    "pokedexNo": 416,
    "name": "Vespiquen",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "0:100",
    "sprite": "vespiquen",
    "forms": []
  },
  {
    "pokedexNo": 417,
    "name": "Pachirisu",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Run Away", "false"],
      ["Pickup", "false"],
      ["Volt Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "pachirisu",
    "forms": []
  },
  {
    "pokedexNo": 418,
    "name": "Buizel",
    "types": ["Water"],
    "evolutions": ["Floatzel"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "buizel",
    "forms": []
  },
  {
    "pokedexNo": 419,
    "name": "Floatzel",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "floatzel",
    "forms": []
  },
  {
    "pokedexNo": 420,
    "name": "Cherubi",
    "types": ["Grass"],
    "evolutions": ["Cherrim"],
    "abilities": [["Chlorophyll", "false"]],
    "gender": "50:50",
    "sprite": "cherubi",
    "forms": []
  },
  {
    "pokedexNo": 421,
    "name": "Cherrim",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [["Flower Gift", "false"]],
    "gender": "50:50",
    "sprite": "cherrim",
    "forms": [
      {
        "sprite": "cherrim-sunshine",
        "types": ["Grass"],
        "name": "Sunshine Form Cherrim"
      }
    ]
  },
  {
    "pokedexNo": 422,
    "name": "West Sea Shellos",
    "types": ["Water"],
    "evolutions": ["West Sea Gastrodon"],
    "abilities": [
      ["Sticky Hold", "false"],
      ["Storm Drain", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "shellos",
    "forms": []
  },
  {
    "pokedexNo": 422,
    "name": "East Sea Shellos",
    "types": ["Water"],
    "evolutions": ["East Sea Gastrodon"],
    "abilities": [
      ["Sticky Hold", "false"],
      ["Storm Drain", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "shellos-east",
    "forms": []
  },
  {
    "pokedexNo": 423,
    "name": "West Sea Gastrodon",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Sticky Hold", "false"],
      ["Storm Drain", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "gastrodon",
    "forms": []
  },
  {
    "pokedexNo": 423,
    "name": "East Sea Gastrodon",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Sticky Hold", "false"],
      ["Storm Drain", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "gastrodon-east",
    "forms": []
  },
  {
    "pokedexNo": 424,
    "name": "Ambipom",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Technician", "false"],
      ["Pickup", "false"],
      ["Skill Link", "true"]
    ],
    "gender": "50:50",
    "sprite": "ambipom",
    "forms": []
  },
  {
    "pokedexNo": 425,
    "name": "Drifloon",
    "types": ["Ghost", "Flying"],
    "evolutions": ["Drifblim"],
    "abilities": [
      ["Aftermath", "false"],
      ["Unburden", "false"],
      ["Flare Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "drifloon",
    "forms": []
  },
  {
    "pokedexNo": 426,
    "name": "Drifblim",
    "types": ["Ghost", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Aftermath", "false"],
      ["Unburden", "false"],
      ["Flare Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "drifblim",
    "forms": []
  },
  {
    "pokedexNo": 427,
    "name": "Buneary",
    "types": ["Normal"],
    "evolutions": ["Lopunny"],
    "abilities": [
      ["Run Away", "false"],
      ["Klutz", "false"],
      ["Limber", "true"]
    ],
    "gender": "50:50",
    "sprite": "buneary",
    "forms": []
  },
  {
    "pokedexNo": 428,
    "name": "Lopunny",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Klutz", "false"],
      ["Limber", "true"]
    ],
    "gender": "50:50",
    "sprite": "lopunny",
    "forms": [
      {
        "sprite": "lopunny-mega",
        "types": ["Normal", "Fighting"],
        "name": "Mega Lopunny"
      }
    ]
  },
  {
    "pokedexNo": 429,
    "name": "Mismagius",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "mismagius",
    "forms": []
  },
  {
    "pokedexNo": 430,
    "name": "Honchkrow",
    "types": ["Dark", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Insomnia", "false"],
      ["Super Luck", "false"],
      ["Moxie", "true"]
    ],
    "gender": "50:50",
    "sprite": "honchkrow",
    "forms": []
  },
  {
    "pokedexNo": 431,
    "name": "Glameow",
    "types": ["Normal"],
    "evolutions": ["Purugly"],
    "abilities": [
      ["Limber", "false"],
      ["Own Tempo", "false"],
      ["Keen Eye", "true"]
    ],
    "gender": "25:75",
    "sprite": "glameow",
    "forms": []
  },
  {
    "pokedexNo": 432,
    "name": "Purugly",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Own Tempo", "false"],
      ["Defiant", "true"]
    ],
    "gender": "25:75",
    "sprite": "purugly",
    "forms": []
  },
  {
    "pokedexNo": 433,
    "name": "Chingling",
    "types": ["Psychic"],
    "evolutions": ["Chimecho"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "chingling",
    "forms": []
  },
  {
    "pokedexNo": 434,
    "name": "Stunky",
    "types": ["Poison", "Dark"],
    "evolutions": ["Skuntank"],
    "abilities": [
      ["Stench", "false"],
      ["Aftermath", "false"],
      ["Keen Eye", "true"]
    ],
    "gender": "50:50",
    "sprite": "stunky",
    "forms": []
  },
  {
    "pokedexNo": 435,
    "name": "Skuntank",
    "types": ["Poison", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Stench", "false"],
      ["Aftermath", "false"],
      ["Keen Eye", "true"]
    ],
    "gender": "50:50",
    "sprite": "skuntank",
    "forms": []
  },
  {
    "pokedexNo": 436,
    "name": "Bronzor",
    "types": ["Steel", "Psychic"],
    "evolutions": ["Bronzong"],
    "abilities": [
      ["Levitate", "false"],
      ["Heatproof", "false"],
      ["Heavy Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "bronzor",
    "forms": []
  },
  {
    "pokedexNo": 437,
    "name": "Bronzong",
    "types": ["Steel", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Levitate", "false"],
      ["Heatproof", "false"],
      ["Heavy Metal", "true"]
    ],
    "gender": "Genderless",
    "sprite": "bronzong",
    "forms": []
  },
  {
    "pokedexNo": 438,
    "name": "Bonsly",
    "types": ["Rock"],
    "evolutions": ["Sudowoodo"],
    "abilities": [
      ["Sturdy", "false"],
      ["Rock Head", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "bonsly",
    "forms": []
  },
  {
    "pokedexNo": 439,
    "name": "Mime Jr.",
    "types": ["Psychic", "Fairy"],
    "evolutions": ["Mr. Mime", "Galarian Mr. Mime"],
    "abilities": [
      ["Soundproof", "false"],
      ["Filter", "false"],
      ["Technician", "true"]
    ],
    "gender": "50:50",
    "sprite": "mime-jr",
    "forms": []
  },
  {
    "pokedexNo": 440,
    "name": "Happiny",
    "types": ["Normal"],
    "evolutions": ["Chansey"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Serene Grace", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "0:100",
    "sprite": "happiny",
    "forms": []
  },
  {
    "pokedexNo": 441,
    "name": "Chatot",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Tangled Feet", "false"],
      ["Big Pecks", "true"]
    ],
    "gender": "50:50",
    "sprite": "chatot",
    "forms": []
  },
  {
    "pokedexNo": 442,
    "name": "Spiritomb",
    "types": ["Ghost", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "spiritomb",
    "forms": []
  },
  {
    "pokedexNo": 443,
    "name": "Gible",
    "types": ["Dragon", "Ground"],
    "evolutions": ["Gabite"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Rough Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "gible",
    "forms": []
  },
  {
    "pokedexNo": 444,
    "name": "Gabite",
    "types": ["Dragon", "Ground"],
    "evolutions": ["Garchomp"],
    "abilities": [
      ["Sand Veil", "false"],
      ["Rough Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "gabite",
    "forms": []
  },
  {
    "pokedexNo": 445,
    "name": "Garchomp",
    "types": ["Dragon", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Sand Veil", "false"],
      ["Rough Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "garchomp",
    "forms": [
      {
        "sprite": "garchomp-mega",
        "types": ["Dragon", "Ground"],
        "name": "Mega Garchomp"
      }
    ]
  },
  {
    "pokedexNo": 446,
    "name": "Munchlax",
    "types": ["Normal"],
    "evolutions": ["Snorlax"],
    "abilities": [
      ["Pickup", "false"],
      ["Thick Fat", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "munchlax",
    "forms": []
  },
  {
    "pokedexNo": 447,
    "name": "Riolu",
    "types": ["Fighting"],
    "evolutions": ["Lucario"],
    "abilities": [
      ["Steadfast", "false"],
      ["Inner Focus", "false"],
      ["Prankster", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "riolu",
    "forms": []
  },
  {
    "pokedexNo": 448,
    "name": "Lucario",
    "types": ["Fighting", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Steadfast", "false"],
      ["Inner Focus", "false"],
      ["Justified", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "lucario",
    "forms": [
      {
        "sprite": "lucario-mega",
        "types": ["Fighting", "Steel"],
        "name": "Mega Lucario"
      }
    ]
  },
  {
    "pokedexNo": 449,
    "name": "Hippopotas",
    "types": ["Ground"],
    "evolutions": ["Hippowdon"],
    "abilities": [
      ["Sand Stream", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "hippopotas",
    "forms": []
  },
  {
    "pokedexNo": 450,
    "name": "Hippowdon",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Sand Stream", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "hippowdon",
    "forms": []
  },
  {
    "pokedexNo": 451,
    "name": "Skorupi",
    "types": ["Poison", "Bug"],
    "evolutions": ["Drapion"],
    "abilities": [
      ["Battle Armor", "false"],
      ["Sniper", "false"],
      ["Keen Eye", "true"]
    ],
    "gender": "50:50",
    "sprite": "skorupi",
    "forms": []
  },
  {
    "pokedexNo": 452,
    "name": "Drapion",
    "types": ["Poison", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Battle Armor", "false"],
      ["Sniper", "false"],
      ["Keen Eye", "true"]
    ],
    "gender": "50:50",
    "sprite": "drapion",
    "forms": []
  },
  {
    "pokedexNo": 453,
    "name": "Croagunk",
    "types": ["Poison", "Fighting"],
    "evolutions": ["Toxicroak"],
    "abilities": [
      ["Anticipation", "false"],
      ["Dry Skin", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50:50",
    "sprite": "croagunk",
    "forms": []
  },
  {
    "pokedexNo": 454,
    "name": "Toxicroak",
    "types": ["Poison", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Anticipation", "false"],
      ["Dry Skin", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50:50",
    "sprite": "toxicroak",
    "forms": []
  },
  {
    "pokedexNo": 455,
    "name": "Carnivine",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "carnivine",
    "forms": []
  },
  {
    "pokedexNo": 456,
    "name": "Finneon",
    "types": ["Water"],
    "evolutions": ["Lumineon"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Storm Drain", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "finneon",
    "forms": []
  },
  {
    "pokedexNo": 457,
    "name": "Lumineon",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Storm Drain", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "lumineon",
    "forms": []
  },
  {
    "pokedexNo": 458,
    "name": "Mantyke",
    "types": ["Water", "Flying"],
    "evolutions": ["Mantine"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Water Absorb", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "mantyke",
    "forms": []
  },
  {
    "pokedexNo": 459,
    "name": "Snover",
    "types": ["Grass", "Ice"],
    "evolutions": ["Abomasnow"],
    "abilities": [
      ["Snow Warning", "false"],
      ["Soundproof", "true"]
    ],
    "gender": "50:50",
    "sprite": "snover",
    "forms": []
  },
  {
    "pokedexNo": 460,
    "name": "Abomasnow",
    "types": ["Grass", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Snow Warning", "false"],
      ["Soundproof", "true"]
    ],
    "gender": "50:50",
    "sprite": "abomasnow",
    "forms": [
      {
        "sprite": "abomasnow-mega",
        "types": ["Grass", "Ice"],
        "name": "Mega Abomasnow"
      }
    ]
  },
  {
    "pokedexNo": 461,
    "name": "Weavile",
    "types": ["Dark", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "weavile",
    "forms": []
  },
  {
    "pokedexNo": 462,
    "name": "Magnezone",
    "types": ["Electric", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Magnet Pull", "false"],
      ["Sturdy", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "magnezone",
    "forms": []
  },
  {
    "pokedexNo": 463,
    "name": "Lickilicky",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Oblivious", "false"],
      ["Cloud Nine", "true"]
    ],
    "gender": "50:50",
    "sprite": "lickilicky",
    "forms": []
  },
  {
    "pokedexNo": 464,
    "name": "Rhyperior",
    "types": ["Ground", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Lightning Rod", "false"],
      ["Solid Rock", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "rhyperior",
    "forms": []
  },
  {
    "pokedexNo": 465,
    "name": "Tangrowth",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Leaf Guard", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "tangrowth",
    "forms": []
  },
  {
    "pokedexNo": 466,
    "name": "Electivire",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Motor Drive", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "electivire",
    "forms": []
  },
  {
    "pokedexNo": 467,
    "name": "Magmortar",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Flame Body", "false"],
      ["Vital Spirit", "true"]
    ],
    "gender": "75:25",
    "sprite": "magmortar",
    "forms": []
  },
  {
    "pokedexNo": 468,
    "name": "Togekiss",
    "types": ["Fairy", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Hustle", "false"],
      ["Serene Grace", "false"],
      ["Super Luck", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "togekiss",
    "forms": []
  },
  {
    "pokedexNo": 469,
    "name": "Yanmega",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Speed Boost", "false"],
      ["Tinted Lens", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "yanmega",
    "forms": []
  },
  {
    "pokedexNo": 470,
    "name": "Leafeon",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "leafeon",
    "forms": []
  },
  {
    "pokedexNo": 471,
    "name": "Glaceon",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "glaceon",
    "forms": []
  },
  {
    "pokedexNo": 472,
    "name": "Gliscor",
    "types": ["Ground", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Sand Veil", "false"],
      ["Poison Heal", "true"]
    ],
    "gender": "50:50",
    "sprite": "gliscor",
    "forms": []
  },
  {
    "pokedexNo": 473,
    "name": "Mamoswine",
    "types": ["Ice", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Oblivious", "false"],
      ["Snow Cloak", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "mamoswine",
    "forms": []
  },
  {
    "pokedexNo": 474,
    "name": "Porygon-Z",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Adaptability", "false"],
      ["Download", "false"],
      ["Analytic", "true"]
    ],
    "gender": "Genderless",
    "sprite": "porygon-z",
    "forms": []
  },
  {
    "pokedexNo": 475,
    "name": "Gallade",
    "types": ["Psychic", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Steadfast", "false"],
      ["Justified", "true"]
    ],
    "gender": "100:0",
    "sprite": "gallade",
    "forms": [
      {
        "sprite": "gallade-mega",
        "types": ["Psychic", "Fighting"],
        "name": "Mega Gallade"
      }
    ]
  },
  {
    "pokedexNo": 476,
    "name": "Probopass",
    "types": ["Rock", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Magnet Pull", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "probopass",
    "forms": []
  },
  {
    "pokedexNo": 477,
    "name": "Dusknoir",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Frisk", "true"]
    ],
    "gender": "50:50",
    "sprite": "dusknoir",
    "forms": []
  },
  {
    "pokedexNo": 478,
    "name": "Froslass",
    "types": ["Ice", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Cursed Body", "true"]
    ],
    "gender": "0:100",
    "sprite": "froslass",
    "forms": []
  },
  {
    "pokedexNo": 479,
    "name": "Rotom",
    "types": ["Electric", "Ghost"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "rotom",
    "forms": [
      {
        "sprite": "rotom-fan",
        "types": ["Electric", "Flying"],
        "name": "Rotom Fan"
      },
      {
        "sprite": "rotom-frost",
        "types": ["Electric", "Ice"],
        "name": "Rotom Frost"
      },
      {
        "sprite": "rotom-heat",
        "types": ["Electric", "Fire"],
        "name": "Rotom Heat"
      },
      {
        "sprite": "rotom-mow",
        "types": ["Electric", "Grass"],
        "name": "Rotom Mow"
      },
      {
        "sprite": "rotom-wash",
        "types": ["Electric", "Water"],
        "name": "Rotom Wash"
      }
    ]
  },
  {
    "pokedexNo": 480,
    "name": "Uxie",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "uxie",
    "forms": []
  },
  {
    "pokedexNo": 481,
    "name": "Mesprit",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "mesprit",
    "forms": []
  },
  {
    "pokedexNo": 482,
    "name": "Azelf",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "azelf",
    "forms": []
  },
  {
    "pokedexNo": 483,
    "name": "Dialga",
    "types": ["Steel", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "dialga",
    "forms": [
      {
        "sprite": "dialga-origin",
        "types": ["Steel", "Dragon"],
        "name": "Origin Form Dialga"
      }
    ]
  },
  {
    "pokedexNo": 484,
    "name": "Palkia",
    "types": ["Water", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "palkia",
    "forms": [
      {
        "sprite": "palkia-origin",
        "types": ["Water", "Dragon"],
        "name": "Origin Form Palkia"
      }
    ]
  },
  {
    "pokedexNo": 485,
    "name": "Heatran",
    "types": ["Fire", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Flash Fire", "false"],
      ["Flame Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "heatran",
    "forms": []
  },
  {
    "pokedexNo": 486,
    "name": "Regigigas",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Slow Start", "false"]],
    "gender": "Genderless",
    "sprite": "regigigas",
    "forms": []
  },
  {
    "pokedexNo": 487,
    "name": "Giratina",
    "types": ["Ghost", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "giratina",
    "forms": [
      {
        "sprite": "giratina-origin",
        "types": ["Ghost", "Dragon"],
        "name": "Origin Form Giratina"
      }
    ]
  },
  {
    "pokedexNo": 488,
    "name": "Cresselia",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "0:100",
    "sprite": "cresselia",
    "forms": []
  },
  {
    "pokedexNo": 489,
    "name": "Phione",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Hydration", "false"]],
    "gender": "Genderless",
    "sprite": "phione",
    "forms": []
  },
  {
    "pokedexNo": 490,
    "name": "Manaphy",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Hydration", "false"]],
    "gender": "Genderless",
    "sprite": "manaphy",
    "forms": []
  },
  {
    "pokedexNo": 491,
    "name": "Darkrai",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [["Bad Dreams", "false"]],
    "gender": "Genderless",
    "sprite": "darkrai",
    "forms": []
  },
  {
    "pokedexNo": 492,
    "name": "Shaymin",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [["Natural Cure", "false"]],
    "gender": "Genderless",
    "sprite": "shaymin",
    "forms": [
      {
        "sprite": "shaymin-sky",
        "types": ["Grass", "Flying"],
        "name": "Sky Form Shaymin"
      }
    ]
  },
  {
    "pokedexNo": 493,
    "name": "Arceus",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Multitype", "false"]],
    "gender": "Genderless",
    "sprite": "arceus",
    "forms": [
      {
        "sprite": "arceus-bug",
        "types": ["Bug"],
        "name": "Bug Type Arceus"
      },
      {
        "sprite": "arceus-dark",
        "types": ["Dark"],
        "name": "Dark Type Arceus"
      },
      {
        "sprite": "arceus-dragon",
        "types": ["Dragon"],
        "name": "Dragon Type Arceus"
      },
      {
        "sprite": "arceus-electric",
        "types": ["Electric"],
        "name": "Electric Type Arceus"
      },
      {
        "sprite": "arceus-fairy",
        "types": ["Fairy"],
        "name": "Fairy Type Arceus"
      },
      {
        "sprite": "arceus-fighting",
        "types": ["Fighting"],
        "name": "Fighting Type Arceus"
      },
      {
        "sprite": "arceus-fire",
        "types": ["Fire"],
        "name": "Fire Type Arceus"
      },
      {
        "sprite": "arceus-flying",
        "types": ["Flying"],
        "name": "Flying Type Arceus"
      },
      {
        "sprite": "arceus-ghost",
        "types": ["Ghost"],
        "name": "Ghost Type Arceus"
      },
      {
        "sprite": "arceus-grass",
        "types": ["Grass"],
        "name": "Grass Type Arceus"
      },
      {
        "sprite": "arceus-ground",
        "types": ["Ground"],
        "name": "Ground Type Arceus"
      },
      {
        "sprite": "arceus-ice",
        "types": ["Ice"],
        "name": "Ice Type Arceus"
      },
      {
        "sprite": "arceus-poison",
        "types": ["Poison"],
        "name": "Poison Type Arceus"
      },
      {
        "sprite": "arceus-psychic",
        "types": ["Psychic"],
        "name": "Psychic Type Arceus"
      },
      {
        "sprite": "arceus-rock",
        "types": ["Rock"],
        "name": "Rock Type Arceus"
      },
      {
        "sprite": "arceus-steel",
        "types": ["Steel"],
        "name": "Steel Type Arceus"
      },
      {
        "sprite": "arceus-water",
        "types": ["Water"],
        "name": "Water Type Arceus"
      }
    ]
  },
  {
    "pokedexNo": 494,
    "name": "Victini",
    "types": ["Psychic", "Fire"],
    "evolutions": [],
    "abilities": [["Victory Star", "false"]],
    "gender": "Genderless",
    "sprite": "victini",
    "forms": []
  },
  {
    "pokedexNo": 495,
    "name": "Snivy",
    "types": ["Grass"],
    "evolutions": ["Servine"],
    "abilities": [
      ["Overgrow", "false"],
      ["Contrary", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "snivy",
    "forms": []
  },
  {
    "pokedexNo": 496,
    "name": "Servine",
    "types": ["Grass"],
    "evolutions": ["Serperior"],
    "abilities": [
      ["Overgrow", "false"],
      ["Contrary", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "servine",
    "forms": []
  },
  {
    "pokedexNo": 497,
    "name": "Serperior",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Contrary", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "serperior",
    "forms": []
  },
  {
    "pokedexNo": 498,
    "name": "Tepig",
    "types": ["Fire"],
    "evolutions": ["Pignite"],
    "abilities": [
      ["Blaze", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "tepig",
    "forms": []
  },
  {
    "pokedexNo": 499,
    "name": "Pignite",
    "types": ["Fire", "Fighting"],
    "evolutions": ["Emboar"],
    "abilities": [
      ["Blaze", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "pignite",
    "forms": []
  },
  {
    "pokedexNo": 500,
    "name": "Emboar",
    "types": ["Fire", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Reckless", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "emboar",
    "forms": []
  },
  {
    "pokedexNo": 501,
    "name": "Oshawott",
    "types": ["Water"],
    "evolutions": ["Dewott"],
    "abilities": [
      ["Torrent", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "oshawott",
    "forms": []
  },
  {
    "pokedexNo": 502,
    "name": "Dewott",
    "types": ["Water"],
    "evolutions": ["Samurott", "Hisuian Samurott"],
    "abilities": [
      ["Torrent", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "dewott",
    "forms": []
  },
  {
    "pokedexNo": 503,
    "name": "Samurott",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "samurott",
    "forms": []
  },
  {
    "pokedexNo": 503,
    "name": "Hisuian Samurott",
    "types": ["Water", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Shell Armor", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "samurott-hisui",
    "forms": []
  },
  {
    "pokedexNo": 504,
    "name": "Patrat",
    "types": ["Normal"],
    "evolutions": ["Watchog"],
    "abilities": [
      ["Run Away", "false"],
      ["Keen Eye", "false"],
      ["Analytic", "true"]
    ],
    "gender": "50:50",
    "sprite": "patrat",
    "forms": []
  },
  {
    "pokedexNo": 505,
    "name": "Watchog",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Illuminate", "false"],
      ["Keen Eye", "false"],
      ["Analytic", "true"]
    ],
    "gender": "50:50",
    "sprite": "watchog",
    "forms": []
  },
  {
    "pokedexNo": 506,
    "name": "Lillipup",
    "types": ["Normal"],
    "evolutions": ["Herdier"],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Pickup", "false"],
      ["Run Away", "true"]
    ],
    "gender": "50:50",
    "sprite": "lillipup",
    "forms": []
  },
  {
    "pokedexNo": 507,
    "name": "Herdier",
    "types": ["Normal"],
    "evolutions": ["Stoutland"],
    "abilities": [
      ["Intimidate", "false"],
      ["Sand Rush", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "herdier",
    "forms": []
  },
  {
    "pokedexNo": 508,
    "name": "Stoutland",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Sand Rush", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "stoutland",
    "forms": []
  },
  {
    "pokedexNo": 509,
    "name": "Purrloin",
    "types": ["Dark"],
    "evolutions": ["Liepard"],
    "abilities": [
      ["Limber", "false"],
      ["Unburden", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "purrloin",
    "forms": []
  },
  {
    "pokedexNo": 510,
    "name": "Liepard",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Unburden", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "liepard",
    "forms": []
  },
  {
    "pokedexNo": 511,
    "name": "Pansage",
    "types": ["Grass"],
    "evolutions": ["Simisage"],
    "abilities": [
      ["Gluttony", "false"],
      ["Overgrow", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "pansage",
    "forms": []
  },
  {
    "pokedexNo": 512,
    "name": "Simisage",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Gluttony", "false"],
      ["Overgrow", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "simisage",
    "forms": []
  },
  {
    "pokedexNo": 513,
    "name": "Pansear",
    "types": ["Fire"],
    "evolutions": ["Simisear"],
    "abilities": [
      ["Gluttony", "false"],
      ["Blaze", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "pansear",
    "forms": []
  },
  {
    "pokedexNo": 514,
    "name": "Simisear",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Gluttony", "false"],
      ["Blaze", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "simisear",
    "forms": []
  },
  {
    "pokedexNo": 515,
    "name": "Panpour",
    "types": ["Water"],
    "evolutions": ["Simipour"],
    "abilities": [
      ["Gluttony", "false"],
      ["Torrent", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "panpour",
    "forms": []
  },
  {
    "pokedexNo": 516,
    "name": "Simipour",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Gluttony", "false"],
      ["Torrent", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "simipour",
    "forms": []
  },
  {
    "pokedexNo": 517,
    "name": "Munna",
    "types": ["Psychic"],
    "evolutions": ["Musharna"],
    "abilities": [
      ["Forewarn", "false"],
      ["Synchronize", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "munna",
    "forms": []
  },
  {
    "pokedexNo": 518,
    "name": "Musharna",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Forewarn", "false"],
      ["Synchronize", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "musharna",
    "forms": []
  },
  {
    "pokedexNo": 519,
    "name": "Pidove",
    "types": ["Normal", "Flying"],
    "evolutions": ["Tranquill"],
    "abilities": [
      ["Big Pecks", "false"],
      ["Super Luck", "false"],
      ["Rivalry", "true"]
    ],
    "gender": "50:50",
    "sprite": "pidove",
    "forms": []
  },
  {
    "pokedexNo": 520,
    "name": "Tranquill",
    "types": ["Normal", "Flying"],
    "evolutions": ["Unfezant"],
    "abilities": [
      ["Big Pecks", "false"],
      ["Super Luck", "false"],
      ["Rivalry", "true"]
    ],
    "gender": "50:50",
    "sprite": "tranquill",
    "forms": []
  },
  {
    "pokedexNo": 521,
    "name": "Unfezant",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Big Pecks", "false"],
      ["Super Luck", "false"],
      ["Rivalry", "true"]
    ],
    "gender": "50:50",
    "sprite": "unfezant",
    "forms": []
  },
  {
    "pokedexNo": 522,
    "name": "Blitzle",
    "types": ["Electric"],
    "evolutions": ["Zebstrika"],
    "abilities": [
      ["Lightning Rod", "false"],
      ["Motor Drive", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "blitzle",
    "forms": []
  },
  {
    "pokedexNo": 523,
    "name": "Zebstrika",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Lightning Rod", "false"],
      ["Motor Drive", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "zebstrika",
    "forms": []
  },
  {
    "pokedexNo": 524,
    "name": "Roggenrola",
    "types": ["Rock"],
    "evolutions": ["Boldore"],
    "abilities": [
      ["Sturdy", "false"],
      ["Weak Armor", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "roggenrola",
    "forms": []
  },
  {
    "pokedexNo": 525,
    "name": "Boldore",
    "types": ["Rock"],
    "evolutions": ["Gigalith"],
    "abilities": [
      ["Sturdy", "false"],
      ["Weak Armor", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "boldore",
    "forms": []
  },
  {
    "pokedexNo": 526,
    "name": "Gigalith",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Sand Stream", "false"],
      ["Sand Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "gigalith",
    "forms": []
  },
  {
    "pokedexNo": 527,
    "name": "Woobat",
    "types": ["Psychic", "Flying"],
    "evolutions": ["Swoobat"],
    "abilities": [
      ["Unaware", "false"],
      ["Klutz", "false"],
      ["Simple", "true"]
    ],
    "gender": "50:50",
    "sprite": "woobat",
    "forms": []
  },
  {
    "pokedexNo": 528,
    "name": "Swoobat",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Unaware", "false"],
      ["Klutz", "false"],
      ["Simple", "true"]
    ],
    "gender": "50:50",
    "sprite": "swoobat",
    "forms": []
  },
  {
    "pokedexNo": 529,
    "name": "Drilbur",
    "types": ["Ground"],
    "evolutions": ["Excadrill"],
    "abilities": [
      ["Sand Rush", "false"],
      ["Sand Force", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "drilbur",
    "forms": []
  },
  {
    "pokedexNo": 530,
    "name": "Excadrill",
    "types": ["Ground", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sand Rush", "false"],
      ["Sand Force", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "excadrill",
    "forms": []
  },
  {
    "pokedexNo": 531,
    "name": "Audino",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Healer", "false"],
      ["Regenerator", "false"],
      ["Klutz", "true"]
    ],
    "gender": "50:50",
    "sprite": "audino",
    "forms": [
      {
        "sprite": "audino-mega",
        "types": ["Normal", "Fairy"],
        "name": "Mega Audino"
      }
    ]
  },
  {
    "pokedexNo": 532,
    "name": "Timburr",
    "types": ["Fighting"],
    "evolutions": ["Gurdurr"],
    "abilities": [
      ["Guts", "false"],
      ["Sheer Force", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "75:25",
    "sprite": "timburr",
    "forms": []
  },
  {
    "pokedexNo": 533,
    "name": "Gurdurr",
    "types": ["Fighting"],
    "evolutions": ["Conkeldurr"],
    "abilities": [
      ["Guts", "false"],
      ["Sheer Force", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "75:25",
    "sprite": "gurdurr",
    "forms": []
  },
  {
    "pokedexNo": 534,
    "name": "Conkeldurr",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Guts", "false"],
      ["Sheer Force", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "75:25",
    "sprite": "conkeldurr",
    "forms": []
  },
  {
    "pokedexNo": 535,
    "name": "Tympole",
    "types": ["Water"],
    "evolutions": ["Palpitoad"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Hydration", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "tympole",
    "forms": []
  },
  {
    "pokedexNo": 536,
    "name": "Palpitoad",
    "types": ["Water", "Ground"],
    "evolutions": ["Seismitoad"],
    "abilities": [
      ["Swift Swim", "false"],
      ["Hydration", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "palpitoad",
    "forms": []
  },
  {
    "pokedexNo": 537,
    "name": "Seismitoad",
    "types": ["Water", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Poison Touch", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "seismitoad",
    "forms": []
  },
  {
    "pokedexNo": 538,
    "name": "Throh",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Guts", "false"],
      ["Inner Focus", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "100:0",
    "sprite": "throh",
    "forms": []
  },
  {
    "pokedexNo": 539,
    "name": "Sawk",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Inner Focus", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "100:0",
    "sprite": "sawk",
    "forms": []
  },
  {
    "pokedexNo": 540,
    "name": "Sewaddle",
    "types": ["Bug", "Grass"],
    "evolutions": ["Swadloon"],
    "abilities": [
      ["Swarm", "false"],
      ["Chlorophyll", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "sewaddle",
    "forms": []
  },
  {
    "pokedexNo": 541,
    "name": "Swadloon",
    "types": ["Bug", "Grass"],
    "evolutions": ["Leavanny"],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Chlorophyll", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "swadloon",
    "forms": []
  },
  {
    "pokedexNo": 542,
    "name": "Leavanny",
    "types": ["Bug", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Chlorophyll", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "leavanny",
    "forms": []
  },
  {
    "pokedexNo": 543,
    "name": "Venipede",
    "types": ["Bug", "Poison"],
    "evolutions": ["Whirlipede"],
    "abilities": [
      ["Poison Point", "false"],
      ["Swarm", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "venipede",
    "forms": []
  },
  {
    "pokedexNo": 544,
    "name": "Whirlipede",
    "types": ["Bug", "Poison"],
    "evolutions": ["Scolipede"],
    "abilities": [
      ["Poison Point", "false"],
      ["Swarm", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "whirlipede",
    "forms": []
  },
  {
    "pokedexNo": 545,
    "name": "Scolipede",
    "types": ["Bug", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Swarm", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "scolipede",
    "forms": []
  },
  {
    "pokedexNo": 546,
    "name": "Cottonee",
    "types": ["Grass", "Fairy"],
    "evolutions": ["Whimsicott"],
    "abilities": [
      ["Prankster", "false"],
      ["Infiltrator", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "50:50",
    "sprite": "cottonee",
    "forms": []
  },
  {
    "pokedexNo": 547,
    "name": "Whimsicott",
    "types": ["Grass", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Prankster", "false"],
      ["Infiltrator", "false"],
      ["Chlorophyll", "true"]
    ],
    "gender": "50:50",
    "sprite": "whimsicott",
    "forms": []
  },
  {
    "pokedexNo": 548,
    "name": "Petilil",
    "types": ["Grass"],
    "evolutions": ["Lilligant", "Hisuian Lilligant"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Own Tempo", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "0:100",
    "sprite": "petilil",
    "forms": []
  },
  {
    "pokedexNo": 549,
    "name": "Lilligant",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Own Tempo", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "0:100",
    "sprite": "lilligant",
    "forms": []
  },
  {
    "pokedexNo": 549,
    "name": "Hisuian Lilligant",
    "types": ["Grass", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Hustle", "false"],
      ["Leaf Guard", "true"]
    ],
    "gender": "0:100",
    "sprite": "lilligant-hisui",
    "forms": []
  },
  {
    "pokedexNo": 550,
    "name": "Red Striped Basculin",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Reckless", "false"],
      ["Adaptability", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "basculin",
    "forms": []
  },
  {
    "pokedexNo": 550,
    "name": "Blue Striped Basculin",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Rock Head", "false"],
      ["Adaptability", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "basculin-blue-striped",
    "forms": []
  },
  {
    "pokedexNo": 550,
    "name": "White Striped Basculin",
    "types": ["Water"],
    "evolutions": ["Basculegion"],
    "abilities": [
      ["Reckless", "false"],
      ["Adaptability", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "basculin-white-striped",
    "forms": []
  },
  {
    "pokedexNo": 551,
    "name": "Sandile",
    "types": ["Ground", "Dark"],
    "evolutions": ["Krokorok"],
    "abilities": [
      ["Intimidate", "false"],
      ["Moxie", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandile",
    "forms": []
  },
  {
    "pokedexNo": 552,
    "name": "Krokorok",
    "types": ["Ground", "Dark"],
    "evolutions": ["Krookodile"],
    "abilities": [
      ["Intimidate", "false"],
      ["Moxie", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "krokorok",
    "forms": []
  },
  {
    "pokedexNo": 553,
    "name": "Krookodile",
    "types": ["Ground", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Moxie", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "krookodile",
    "forms": []
  },
  {
    "pokedexNo": 554,
    "name": "Darumaka",
    "types": ["Fire"],
    "evolutions": ["Darmanitan"],
    "abilities": [
      ["Hustle", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "darumaka",
    "forms": []
  },
  {
    "pokedexNo": 554,
    "name": "Galarian Darumaka",
    "types": ["Ice"],
    "evolutions": ["Galarian Darmanitan"],
    "abilities": [
      ["Hustle", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "darumaka-galar",
    "forms": []
  },
  {
    "pokedexNo": 555,
    "name": "Darmanitan",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Sheer Force", "false"],
      ["Zen Mode", "true"]
    ],
    "gender": "50:50",
    "sprite": "darmanitan",
    "forms": [
      {
        "sprite": "darmanitan-zen",
        "types": ["Fire", "Fighting"],
        "name": "Zen Mode Darmanitan"
      }
    ]
  },
  {
    "pokedexNo": 555,
    "name": "Galarian Darmanitan",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Sheer Force", "false"],
      ["Zen Mode", "true"]
    ],
    "gender": "50:50",
    "sprite": "darmanitan-galar",
    "forms": [
      {
        "sprite": "darmanitan-galar-zen",
        "types": ["Ice", "Fire"],
        "name": "Galarian Zen Mode Darmanitan"
      }
    ]
  },
  {
    "pokedexNo": 556,
    "name": "Maractus",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Chlorophyll", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "50:50",
    "sprite": "maractus",
    "forms": []
  },
  {
    "pokedexNo": 557,
    "name": "Dwebble",
    "types": ["Bug", "Rock"],
    "evolutions": ["Crustle"],
    "abilities": [
      ["Sturdy", "false"],
      ["Shell Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "dwebble",
    "forms": []
  },
  {
    "pokedexNo": 558,
    "name": "Crustle",
    "types": ["Bug", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Sturdy", "false"],
      ["Shell Armor", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "crustle",
    "forms": []
  },
  {
    "pokedexNo": 559,
    "name": "Scraggy",
    "types": ["Dark", "Fighting"],
    "evolutions": ["Scrafty"],
    "abilities": [
      ["Shed Skin", "false"],
      ["Moxie", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "50:50",
    "sprite": "scraggy",
    "forms": []
  },
  {
    "pokedexNo": 560,
    "name": "Scrafty",
    "types": ["Dark", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Shed Skin", "false"],
      ["Moxie", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "50:50",
    "sprite": "scrafty",
    "forms": []
  },
  {
    "pokedexNo": 561,
    "name": "Sigilyph",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Wonder Skin", "false"],
      ["Magic Guard", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "sigilyph",
    "forms": []
  },
  {
    "pokedexNo": 562,
    "name": "Yamask",
    "types": ["Ghost"],
    "evolutions": ["Cofagrigus"],
    "abilities": [["Mummy", "false"]],
    "gender": "50:50",
    "sprite": "yamask",
    "forms": []
  },
  {
    "pokedexNo": 562,
    "name": "Galarian Yamask",
    "types": ["Ground", "Ghost"],
    "evolutions": ["Runerigus"],
    "abilities": [["Wandering Spirit", "false"]],
    "gender": "50:50",
    "sprite": "yamask-galar",
    "forms": []
  },
  {
    "pokedexNo": 563,
    "name": "Cofagrigus",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [["Mummy", "false"]],
    "gender": "50:50",
    "sprite": "cofagrigus",
    "forms": []
  },
  {
    "pokedexNo": 564,
    "name": "Tirtouga",
    "types": ["Water", "Rock"],
    "evolutions": ["Carracosta"],
    "abilities": [
      ["Solid Rock", "false"],
      ["Sturdy", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "tirtouga",
    "forms": []
  },
  {
    "pokedexNo": 565,
    "name": "Carracosta",
    "types": ["Water", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Solid Rock", "false"],
      ["Sturdy", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "carracosta",
    "forms": []
  },
  {
    "pokedexNo": 566,
    "name": "Archen",
    "types": ["Rock", "Flying"],
    "evolutions": ["Archeops"],
    "abilities": [["Defeatist", "false"]],
    "gender": "87.5:12.5",
    "sprite": "archen",
    "forms": []
  },
  {
    "pokedexNo": 567,
    "name": "Archeops",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Defeatist", "false"]],
    "gender": "87.5:12.5",
    "sprite": "archeops",
    "forms": []
  },
  {
    "pokedexNo": 568,
    "name": "Trubbish",
    "types": ["Poison"],
    "evolutions": ["Garbodor"],
    "abilities": [
      ["Stench", "false"],
      ["Sticky Hold", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "50:50",
    "sprite": "trubbish",
    "forms": []
  },
  {
    "pokedexNo": 569,
    "name": "Garbodor",
    "types": ["Poison"],
    "evolutions": [],
    "abilities": [
      ["Stench", "false"],
      ["Weak Armor", "false"],
      ["Aftermath", "true"]
    ],
    "gender": "50:50",
    "sprite": "garbodor",
    "forms": [
      {
        "sprite": "garbodor-gmax",
        "types": ["Poison"],
        "name": "Gigantamax Garbodor"
      }
    ]
  },
  {
    "pokedexNo": 570,
    "name": "Zorua",
    "types": ["Dark"],
    "evolutions": ["Zoroark"],
    "abilities": [["Illusion", "false"]],
    "gender": "87.5:12.5",
    "sprite": "zorua",
    "forms": []
  },
  {
    "pokedexNo": 570,
    "name": "Hisuian Zorua",
    "types": ["Normal", "Ghost"],
    "evolutions": ["Hisuian Zoroark"],
    "abilities": [["Illusion", "false"]],
    "gender": "87.5:12.5",
    "sprite": "zorua-hisui",
    "forms": []
  },
  {
    "pokedexNo": 571,
    "name": "Zoroark",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [["Illusion", "false"]],
    "gender": "87.5:12.5",
    "sprite": "zoroark",
    "forms": []
  },
  {
    "pokedexNo": 571,
    "name": "Hisuian Zoroark",
    "types": ["Normal", "Ghost"],
    "evolutions": [],
    "abilities": [["Illusion", "false"]],
    "gender": "87.5:12.5",
    "sprite": "zoroark-hisui",
    "forms": []
  },
  {
    "pokedexNo": 572,
    "name": "Minccino",
    "types": ["Normal"],
    "evolutions": ["Cinccino"],
    "abilities": [
      ["Cute Charm", "false"],
      ["Technician", "false"],
      ["Skill Link", "true"]
    ],
    "gender": "25:75",
    "sprite": "minccino",
    "forms": []
  },
  {
    "pokedexNo": 573,
    "name": "Cinccino",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Technician", "false"],
      ["Skill Link", "true"]
    ],
    "gender": "25:75",
    "sprite": "cinccino",
    "forms": []
  },
  {
    "pokedexNo": 574,
    "name": "Gothita",
    "types": ["Psychic"],
    "evolutions": ["Gothorita"],
    "abilities": [
      ["Frisk", "false"],
      ["Competitive", "false"],
      ["Shadow Tag", "true"]
    ],
    "gender": "25:75",
    "sprite": "gothita",
    "forms": []
  },
  {
    "pokedexNo": 575,
    "name": "Gothorita",
    "types": ["Psychic"],
    "evolutions": ["Gothitelle"],
    "abilities": [
      ["Frisk", "false"],
      ["Competitive", "false"],
      ["Shadow Tag", "true"]
    ],
    "gender": "25:75",
    "sprite": "gothorita",
    "forms": []
  },
  {
    "pokedexNo": 576,
    "name": "Gothitelle",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Frisk", "false"],
      ["Competitive", "false"],
      ["Shadow Tag", "true"]
    ],
    "gender": "25:75",
    "sprite": "gothitelle",
    "forms": []
  },
  {
    "pokedexNo": 577,
    "name": "Solosis",
    "types": ["Psychic"],
    "evolutions": ["Duosion"],
    "abilities": [
      ["Overcoat", "false"],
      ["Magic Guard", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "solosis",
    "forms": []
  },
  {
    "pokedexNo": 578,
    "name": "Duosion",
    "types": ["Psychic"],
    "evolutions": ["Reuniclus"],
    "abilities": [
      ["Overcoat", "false"],
      ["Magic Guard", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "duosion",
    "forms": []
  },
  {
    "pokedexNo": 579,
    "name": "Reuniclus",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Overcoat", "false"],
      ["Magic Guard", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "reuniclus",
    "forms": []
  },
  {
    "pokedexNo": 580,
    "name": "Ducklett",
    "types": ["Water", "Flying"],
    "evolutions": ["Swanna"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Big Pecks", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "ducklett",
    "forms": []
  },
  {
    "pokedexNo": 581,
    "name": "Swanna",
    "types": ["Water", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Big Pecks", "false"],
      ["Hydration", "true"]
    ],
    "gender": "50:50",
    "sprite": "swanna",
    "forms": []
  },
  {
    "pokedexNo": 582,
    "name": "Vanillite",
    "types": ["Ice"],
    "evolutions": ["Vanillish"],
    "abilities": [
      ["Ice Body", "false"],
      ["Snow Cloak", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "vanillite",
    "forms": []
  },
  {
    "pokedexNo": 583,
    "name": "Vanillish",
    "types": ["Ice"],
    "evolutions": ["Vanilluxe"],
    "abilities": [
      ["Ice Body", "false"],
      ["Snow Cloak", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "vanillish",
    "forms": []
  },
  {
    "pokedexNo": 584,
    "name": "Vanilluxe",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Ice Body", "false"],
      ["Snow Warning", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "vanilluxe",
    "forms": []
  },
  {
    "pokedexNo": 585,
    "name": "Deerling",
    "types": ["Normal", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Sap Sipper", "false"],
      ["Serene Grace", "true"]
    ],
    "gender": "50:50",
    "sprite": "deerling",
    "forms": [
      {
        "sprite": "deerling-autumn",
        "types": ["Normal", "Grass"],
        "name": "Autumn Form Deerling"
      },
      {
        "sprite": "deerling-winter",
        "types": ["Normal", "Grass"],
        "name": "Winter Form Deerling"
      },
      {
        "sprite": "deerling-spring",
        "types": ["Normal", "Grass"],
        "name": "Spring Form Deerling"
      },
      {
        "sprite": "deerling-summer",
        "types": ["Normal", "Grass"],
        "name": "Summer Form Deerling"
      }
    ]
  },
  {
    "pokedexNo": 586,
    "name": "Sawsbuck",
    "types": ["Normal", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Sap Sipper", "false"],
      ["Serene Grace", "true"]
    ],
    "gender": "50:50",
    "sprite": "sawsbuck",
    "forms": [
      {
        "sprite": "sawsbuck-autumn",
        "types": ["Normal", "Grass"],
        "name": "Autumn Form Sawsbuck"
      },
      {
        "sprite": "sawsbuck-winter",
        "types": ["Normal", "Grass"],
        "name": "Winter Form Sawsbuck"
      },
      {
        "sprite": "sawsbuck-spring",
        "types": ["Normal", "Grass"],
        "name": "Spring Form Sawsbuck"
      },
      {
        "sprite": "sawsbuck-summer",
        "types": ["Normal", "Grass"],
        "name": "Summer Form Sawsbuck"
      }
    ]
  },
  {
    "pokedexNo": 587,
    "name": "Emolga",
    "types": ["Electric", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Static", "false"],
      ["Motor Drive", "true"]
    ],
    "gender": "50:50",
    "sprite": "emolga",
    "forms": []
  },
  {
    "pokedexNo": 588,
    "name": "Karrablast",
    "types": ["Bug"],
    "evolutions": ["Escavalier"],
    "abilities": [
      ["Swarm", "false"],
      ["Shed Skin", "false"],
      ["No Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "karrablast",
    "forms": []
  },
  {
    "pokedexNo": 589,
    "name": "Escavalier",
    "types": ["Bug", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Shell Armor", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "escavalier",
    "forms": []
  },
  {
    "pokedexNo": 590,
    "name": "Foongus",
    "types": ["Grass", "Poison"],
    "evolutions": ["Amoonguss"],
    "abilities": [
      ["Effect Spore", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "foongus",
    "forms": []
  },
  {
    "pokedexNo": 591,
    "name": "Amoonguss",
    "types": ["Grass", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Effect Spore", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "amoonguss",
    "forms": []
  },
  {
    "pokedexNo": 592,
    "name": "Frillish",
    "types": ["Water", "Ghost"],
    "evolutions": ["Jellicent"],
    "abilities": [
      ["Water Absorb", "false"],
      ["Cursed Body", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "frillish",
    "forms": []
  },
  {
    "pokedexNo": 593,
    "name": "Jellicent",
    "types": ["Water", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Water Absorb", "false"],
      ["Cursed Body", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "jellicent",
    "forms": []
  },
  {
    "pokedexNo": 594,
    "name": "Alomomola",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Healer", "false"],
      ["Hydration", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "alomomola",
    "forms": []
  },
  {
    "pokedexNo": 595,
    "name": "Joltik",
    "types": ["Bug", "Electric"],
    "evolutions": ["Galvantula"],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Unnerve", "false"],
      ["Swarm", "true"]
    ],
    "gender": "50:50",
    "sprite": "joltik",
    "forms": []
  },
  {
    "pokedexNo": 596,
    "name": "Galvantula",
    "types": ["Bug", "Electric"],
    "evolutions": [],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Unnerve", "false"],
      ["Swarm", "true"]
    ],
    "gender": "50:50",
    "sprite": "galvantula",
    "forms": []
  },
  {
    "pokedexNo": 597,
    "name": "Ferroseed",
    "types": ["Grass", "Steel"],
    "evolutions": ["Ferrothorn"],
    "abilities": [["Iron Barbs", "false"]],
    "gender": "50:50",
    "sprite": "ferroseed",
    "forms": []
  },
  {
    "pokedexNo": 598,
    "name": "Ferrothorn",
    "types": ["Grass", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Iron Barbs", "false"],
      ["Anticipation", "true"]
    ],
    "gender": "50:50",
    "sprite": "ferrothorn",
    "forms": []
  },
  {
    "pokedexNo": 599,
    "name": "Klink",
    "types": ["Steel"],
    "evolutions": ["Klang"],
    "abilities": [
      ["Plus", "false"],
      ["Minus", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "klink",
    "forms": []
  },
  {
    "pokedexNo": 600,
    "name": "Klang",
    "types": ["Steel"],
    "evolutions": ["Klinklang"],
    "abilities": [
      ["Plus", "false"],
      ["Minus", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "klang",
    "forms": []
  },
  {
    "pokedexNo": 601,
    "name": "Klinklang",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [
      ["Plus", "false"],
      ["Minus", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "klinklang",
    "forms": []
  },
  {
    "pokedexNo": 602,
    "name": "Tynamo",
    "types": ["Electric"],
    "evolutions": ["Eelektrik"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "tynamo",
    "forms": []
  },
  {
    "pokedexNo": 603,
    "name": "Eelektrik",
    "types": ["Electric"],
    "evolutions": ["Eelektross"],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "eelektrik",
    "forms": []
  },
  {
    "pokedexNo": 604,
    "name": "Eelektross",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "eelektross",
    "forms": []
  },
  {
    "pokedexNo": 605,
    "name": "Elgyem",
    "types": ["Psychic"],
    "evolutions": ["Beheeyem"],
    "abilities": [
      ["Telepathy", "false"],
      ["Synchronize", "false"],
      ["Analytic", "true"]
    ],
    "gender": "50:50",
    "sprite": "elgyem",
    "forms": []
  },
  {
    "pokedexNo": 606,
    "name": "Beheeyem",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Telepathy", "false"],
      ["Synchronize", "false"],
      ["Analytic", "true"]
    ],
    "gender": "50:50",
    "sprite": "beheeyem",
    "forms": []
  },
  {
    "pokedexNo": 607,
    "name": "Litwick",
    "types": ["Ghost", "Fire"],
    "evolutions": ["Lampent"],
    "abilities": [
      ["Flash Fire", "false"],
      ["Flame Body", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "litwick",
    "forms": []
  },
  {
    "pokedexNo": 608,
    "name": "Lampent",
    "types": ["Ghost", "Fire"],
    "evolutions": ["Chandelure"],
    "abilities": [
      ["Flash Fire", "false"],
      ["Flame Body", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "lampent",
    "forms": []
  },
  {
    "pokedexNo": 609,
    "name": "Chandelure",
    "types": ["Ghost", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Flash Fire", "false"],
      ["Flame Body", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "chandelure",
    "forms": []
  },
  {
    "pokedexNo": 610,
    "name": "Axew",
    "types": ["Dragon"],
    "evolutions": ["Fraxure"],
    "abilities": [
      ["Rivalry", "false"],
      ["Mold Breaker", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "axew",
    "forms": []
  },
  {
    "pokedexNo": 611,
    "name": "Fraxure",
    "types": ["Dragon"],
    "evolutions": ["Haxorus"],
    "abilities": [
      ["Rivalry", "false"],
      ["Mold Breaker", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "fraxure",
    "forms": []
  },
  {
    "pokedexNo": 612,
    "name": "Haxorus",
    "types": ["Dragon"],
    "evolutions": [],
    "abilities": [
      ["Rivalry", "false"],
      ["Mold Breaker", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "haxorus",
    "forms": []
  },
  {
    "pokedexNo": 613,
    "name": "Cubchoo",
    "types": ["Ice"],
    "evolutions": ["Beartic"],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Slush Rush", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "cubchoo",
    "forms": []
  },
  {
    "pokedexNo": 614,
    "name": "Beartic",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Snow Cloak", "false"],
      ["Slush Rush", "false"],
      ["Swift Swim", "true"]
    ],
    "gender": "50:50",
    "sprite": "beartic",
    "forms": []
  },
  {
    "pokedexNo": 615,
    "name": "Cryogonal",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "Genderless",
    "sprite": "cryogonal",
    "forms": []
  },
  {
    "pokedexNo": 616,
    "name": "Shelmet",
    "types": ["Bug"],
    "evolutions": ["Accelgor"],
    "abilities": [
      ["Hydration", "false"],
      ["Shell Armor", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "shelmet",
    "forms": []
  },
  {
    "pokedexNo": 617,
    "name": "Accelgor",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Hydration", "false"],
      ["Sticky Hold", "false"],
      ["Unburden", "true"]
    ],
    "gender": "50:50",
    "sprite": "accelgor",
    "forms": []
  },
  {
    "pokedexNo": 618,
    "name": "Stunfisk",
    "types": ["Ground", "Electric"],
    "evolutions": [],
    "abilities": [
      ["Static", "false"],
      ["Limber", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "stunfisk",
    "forms": []
  },
  {
    "pokedexNo": 618,
    "name": "Galarian Stunfisk",
    "types": ["Ground", "Steel"],
    "evolutions": [],
    "abilities": [["Mimicry", "false"]],
    "gender": "50:50",
    "sprite": "stunfisk-galar",
    "forms": []
  },
  {
    "pokedexNo": 619,
    "name": "Mienfoo",
    "types": ["Fighting"],
    "evolutions": ["Mienshao"],
    "abilities": [
      ["Inner Focus", "false"],
      ["Regenerator", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "mienfoo",
    "forms": []
  },
  {
    "pokedexNo": 620,
    "name": "Mienshao",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Inner Focus", "false"],
      ["Regenerator", "false"],
      ["Reckless", "true"]
    ],
    "gender": "50:50",
    "sprite": "mienshao",
    "forms": []
  },
  {
    "pokedexNo": 621,
    "name": "Druddigon",
    "types": ["Dragon"],
    "evolutions": [],
    "abilities": [
      ["Rough Skin", "false"],
      ["Sheer Force", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "druddigon",
    "forms": []
  },
  {
    "pokedexNo": 622,
    "name": "Golett",
    "types": ["Ground", "Ghost"],
    "evolutions": ["Golurk"],
    "abilities": [
      ["Iron Fist", "false"],
      ["Klutz", "false"],
      ["No Guard", "true"]
    ],
    "gender": "Genderless",
    "sprite": "golett",
    "forms": []
  },
  {
    "pokedexNo": 623,
    "name": "Golurk",
    "types": ["Ground", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Iron Fist", "false"],
      ["Klutz", "false"],
      ["No Guard", "true"]
    ],
    "gender": "Genderless",
    "sprite": "golurk",
    "forms": []
  },
  {
    "pokedexNo": 624,
    "name": "Pawniard",
    "types": ["Dark", "Steel"],
    "evolutions": ["Bisharp"],
    "abilities": [
      ["Defiant", "false"],
      ["Inner Focus", "false"],
      ["Pressure", "true"]
    ],
    "gender": "50:50",
    "sprite": "pawniard",
    "forms": []
  },
  {
    "pokedexNo": 625,
    "name": "Bisharp",
    "types": ["Dark", "Steel"],
    "evolutions": ["Kingambit"],
    "abilities": [
      ["Defiant", "false"],
      ["Inner Focus", "false"],
      ["Pressure", "true"]
    ],
    "gender": "50:50",
    "sprite": "bisharp",
    "forms": []
  },
  {
    "pokedexNo": 626,
    "name": "Bouffalant",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Reckless", "false"],
      ["Sap Sipper", "false"],
      ["Soundproof", "true"]
    ],
    "gender": "50:50",
    "sprite": "bouffalant",
    "forms": []
  },
  {
    "pokedexNo": 627,
    "name": "Rufflet",
    "types": ["Normal", "Flying"],
    "evolutions": ["Braviary", "Hisuian Braviary"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sheer Force", "false"],
      ["Hustle", "true"]
    ],
    "gender": "100:0",
    "sprite": "rufflet",
    "forms": []
  },
  {
    "pokedexNo": 628,
    "name": "Braviary",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sheer Force", "false"],
      ["Defiant", "true"]
    ],
    "gender": "100:0",
    "sprite": "braviary",
    "forms": []
  },
  {
    "pokedexNo": 628,
    "name": "Hisuian Braviary",
    "types": ["Psychic", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sheer Force", "false"],
      ["Defiant", "true"]
    ],
    "gender": "100:0",
    "sprite": "braviary-hisui",
    "forms": []
  },
  {
    "pokedexNo": 629,
    "name": "Vullaby",
    "types": ["Dark", "Flying"],
    "evolutions": ["Mandibuzz"],
    "abilities": [
      ["Big Pecks", "false"],
      ["Overcoat", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "0:100",
    "sprite": "vullaby",
    "forms": []
  },
  {
    "pokedexNo": 630,
    "name": "Mandibuzz",
    "types": ["Dark", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Big Pecks", "false"],
      ["Overcoat", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "0:100",
    "sprite": "mandibuzz",
    "forms": []
  },
  {
    "pokedexNo": 631,
    "name": "Heatmor",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Gluttony", "false"],
      ["Flash Fire", "false"],
      ["White Smoke", "true"]
    ],
    "gender": "50:50",
    "sprite": "heatmor",
    "forms": []
  },
  {
    "pokedexNo": 632,
    "name": "Durant",
    "types": ["Bug", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Hustle", "false"],
      ["Truant", "true"]
    ],
    "gender": "50:50",
    "sprite": "durant",
    "forms": []
  },
  {
    "pokedexNo": 633,
    "name": "Deino",
    "types": ["Dark", "Dragon"],
    "evolutions": ["Zweilous"],
    "abilities": [["Hustle", "false"]],
    "gender": "50:50",
    "sprite": "deino",
    "forms": []
  },
  {
    "pokedexNo": 634,
    "name": "Zweilous",
    "types": ["Dark", "Dragon"],
    "evolutions": ["Hydreigon"],
    "abilities": [["Hustle", "false"]],
    "gender": "50:50",
    "sprite": "zweilous",
    "forms": []
  },
  {
    "pokedexNo": 635,
    "name": "Hydreigon",
    "types": ["Dark", "Dragon"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "hydreigon",
    "forms": []
  },
  {
    "pokedexNo": 636,
    "name": "Larvesta",
    "types": ["Bug", "Fire"],
    "evolutions": ["Volcarona"],
    "abilities": [
      ["Flame Body", "false"],
      ["Swarm", "true"]
    ],
    "gender": "50:50",
    "sprite": "larvesta",
    "forms": []
  },
  {
    "pokedexNo": 637,
    "name": "Volcarona",
    "types": ["Bug", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Flame Body", "false"],
      ["Swarm", "true"]
    ],
    "gender": "50:50",
    "sprite": "volcarona",
    "forms": []
  },
  {
    "pokedexNo": 638,
    "name": "Cobalion",
    "types": ["Steel", "Fighting"],
    "evolutions": [],
    "abilities": [["Justified", "false"]],
    "gender": "Genderless",
    "sprite": "cobalion",
    "forms": []
  },
  {
    "pokedexNo": 639,
    "name": "Terrakion",
    "types": ["Rock", "Fighting"],
    "evolutions": [],
    "abilities": [["Justified", "false"]],
    "gender": "Genderless",
    "sprite": "terrakion",
    "forms": []
  },
  {
    "pokedexNo": 640,
    "name": "Virizion",
    "types": ["Grass", "Fighting"],
    "evolutions": [],
    "abilities": [["Justified", "false"]],
    "gender": "Genderless",
    "sprite": "virizion",
    "forms": []
  },
  {
    "pokedexNo": 641,
    "name": "Tornadus",
    "types": ["Flying"],
    "evolutions": [],
    "abilities": [
      ["Prankster", "false"],
      ["Defiant", "true"]
    ],
    "gender": "100:0",
    "sprite": "tornadus",
    "forms": [
      {
        "sprite": "tornadus-therian",
        "types": ["Flying"],
        "name": "Therian Form Tornadus"
      }
    ]
  },
  {
    "pokedexNo": 642,
    "name": "Thundurus",
    "types": ["Electric", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Prankster", "false"],
      ["Defiant", "true"]
    ],
    "gender": "100:0",
    "sprite": "thundurus",
    "forms": [
      {
        "sprite": "thundurus-therian",
        "types": ["Electric", "Flying"],
        "name": "Therian Form Thundurus"
      }
    ]
  },
  {
    "pokedexNo": 643,
    "name": "Reshiram",
    "types": ["Dragon", "Fire"],
    "evolutions": [],
    "abilities": [["Turboblaze", "false"]],
    "gender": "Genderless",
    "sprite": "reshiram",
    "forms": []
  },
  {
    "pokedexNo": 644,
    "name": "Zekrom",
    "types": ["Dragon", "Electric"],
    "evolutions": [],
    "abilities": [["Teravolt", "false"]],
    "gender": "Genderless",
    "sprite": "zekrom",
    "forms": []
  },
  {
    "pokedexNo": 645,
    "name": "Landorus",
    "types": ["Ground", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Sand Force", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "100:0",
    "sprite": "landorus",
    "forms": [
      {
        "sprite": "landorus-therian",
        "types": ["Ground", "Flying"],
        "name": "Therian Form Landorus"
      }
    ]
  },
  {
    "pokedexNo": 646,
    "name": "Kyurem",
    "types": ["Dragon", "Ice"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "kyurem",
    "forms": [
      {
        "sprite": "kyurem-black",
        "types": ["Dragon", "Ice"],
        "name": "Kyurem Black"
      },
      {
        "sprite": "kyurem-white",
        "types": ["Dragon", "Ice"],
        "name": "Kyurem White"
      }
    ]
  },
  {
    "pokedexNo": 647,
    "name": "Keldeo",
    "types": ["Water", "Fighting"],
    "evolutions": [],
    "abilities": [["Justified", "false"]],
    "gender": "Genderless",
    "sprite": "keldeo",
    "forms": [
      {
        "sprite": "keldeo-resolute",
        "types": ["Water", "Fighting"],
        "name": "Resolute Form Keldeo"
      }
    ]
  },
  {
    "pokedexNo": 648,
    "name": "Meloetta",
    "types": ["Normal", "Psychic"],
    "evolutions": [],
    "abilities": [["Serene Grace", "false"]],
    "gender": "Genderless",
    "sprite": "meloetta",
    "forms": [
      {
        "sprite": "meloetta-pirouette",
        "types": ["Normal", "Fighting"],
        "name": "Piroette Form Meloetta"
      }
    ]
  },
  {
    "pokedexNo": 649,
    "name": "Genesect",
    "types": ["Bug", "Steel"],
    "evolutions": [],
    "abilities": [["Download", "false"]],
    "gender": "Genderless",
    "sprite": "genesect",
    "forms": [
      {
        "sprite": "genesect-burn",
        "types": ["Normal", "Fighting"],
        "name": "Burn Drive Genesect"
      },
      {
        "sprite": "genesect-chill",
        "types": ["Normal", "Fighting"],
        "name": "Chill Drive Genesect"
      },
      {
        "sprite": "genesect-douse",
        "types": ["Normal", "Fighting"],
        "name": "Douse Drive Genesect"
      },
      {
        "sprite": "genesect-shock",
        "types": ["Normal", "Fighting"],
        "name": "Shock Drive Genesect"
      }
    ]
  },
  {
    "pokedexNo": 650,
    "name": "Chespin",
    "types": ["Grass"],
    "evolutions": ["Quilladin"],
    "abilities": [
      ["Overgrow", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "chespin",
    "forms": []
  },
  {
    "pokedexNo": 651,
    "name": "Quilladin",
    "types": ["Grass"],
    "evolutions": ["Chesnaught"],
    "abilities": [
      ["Overgrow", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "quilladin",
    "forms": []
  },
  {
    "pokedexNo": 652,
    "name": "Chesnaught",
    "types": ["Grass", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "chesnaught",
    "forms": []
  },
  {
    "pokedexNo": 653,
    "name": "Fennekin",
    "types": ["Fire"],
    "evolutions": ["Braixen"],
    "abilities": [
      ["Blaze", "false"],
      ["Magician", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "fennekin",
    "forms": []
  },
  {
    "pokedexNo": 654,
    "name": "Braixen",
    "types": ["Fire"],
    "evolutions": ["Delphox"],
    "abilities": [
      ["Blaze", "false"],
      ["Magician", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "braixen",
    "forms": []
  },
  {
    "pokedexNo": 655,
    "name": "Delphox",
    "types": ["Fire", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Magician", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "delphox",
    "forms": []
  },
  {
    "pokedexNo": 656,
    "name": "Froakie",
    "types": ["Water"],
    "evolutions": ["Frogadier"],
    "abilities": [
      ["Torrent", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "froakie",
    "forms": []
  },
  {
    "pokedexNo": 657,
    "name": "Frogadier",
    "types": ["Water"],
    "evolutions": ["Greninja"],
    "abilities": [
      ["Torrent", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "frogadier",
    "forms": []
  },
  {
    "pokedexNo": 658,
    "name": "Greninja",
    "types": ["Water", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "greninja",
    "forms": []
  },
  {
    "pokedexNo": 659,
    "name": "Bunnelby",
    "types": ["Normal"],
    "evolutions": ["Diggersby"],
    "abilities": [
      ["Pickup", "false"],
      ["Cheek Pouch", "false"],
      ["Huge Power", "true"]
    ],
    "gender": "50:50",
    "sprite": "bunnelby",
    "forms": []
  },
  {
    "pokedexNo": 660,
    "name": "Diggersby",
    "types": ["Normal", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Pickup", "false"],
      ["Cheek Pouch", "false"],
      ["Huge Power", "true"]
    ],
    "gender": "50:50",
    "sprite": "diggersby",
    "forms": []
  },
  {
    "pokedexNo": 661,
    "name": "Fletchling",
    "types": ["Normal", "Flying"],
    "evolutions": ["Fletchinder"],
    "abilities": [
      ["Big Pecks", "false"],
      ["Gale Wings", "true"]
    ],
    "gender": "50:50",
    "sprite": "fletchling",
    "forms": []
  },
  {
    "pokedexNo": 662,
    "name": "Fletchinder",
    "types": ["Fire", "Flying"],
    "evolutions": ["Talonflame"],
    "abilities": [
      ["Flame Body", "false"],
      ["Gale Wings", "true"]
    ],
    "gender": "50:50",
    "sprite": "fletchinder",
    "forms": []
  },
  {
    "pokedexNo": 663,
    "name": "Talonflame",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Flame Body", "false"],
      ["Gale Wings", "true"]
    ],
    "gender": "50:50",
    "sprite": "talonflame",
    "forms": []
  },
  {
    "pokedexNo": 664,
    "name": "Scatterbug",
    "types": ["Bug"],
    "evolutions": ["Spewpa"],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "scatterbug",
    "forms": []
  },
  {
    "pokedexNo": 665,
    "name": "Spewpa",
    "types": ["Bug"],
    "evolutions": [
      "Archipelago Pattern Vivillon",
      "Continental Pattern Vivillon",
      "Elegant Pattern Vivillon",
      "Fancy Pattern Vivillon",
      "Garden Pattern Vivillon",
      "High Plains Pattern Vivillon",
      "Ice Snow Pattern Vivillon",
      "Jungle Pattern Vivillon",
      "Marine Pattern Vivillon",
      "Meadow Pattern Vivillon",
      "Modern Pattern Vivillon",
      "Monsoon Pattern Vivillon",
      "Ocean Pattern Vivillon",
      "Poké Ball Pattern Vivillon",
      "Polar Pattern Vivillon",
      "River Pattern Vivillon",
      "Sandstorm Pattern Vivillon",
      "Savanna Pattern Vivillon",
      "Sun Pattern Vivillon",
      "Tundra Pattern Vivillon"
    ],
    "abilities": [
      ["Shed Skin", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "spewpa",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Archipelago Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-archipelago",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Continental Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-continental",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Elegant Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-elegant",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Fancy Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-fancy",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Garden Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-garden",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "High Plains Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-high-plains",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Icy Snow Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-icy-snow",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Jungle Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-jungle",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Marine Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-marine",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Meadow Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Modern Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-modern",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Monsoon Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-monsoon",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Ocean Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-ocean",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Poké Ball Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-poke-ball",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Polar Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-polar",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "River Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-river",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Sandstorm Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-sandstorm",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Savanna Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-savanna",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Sun Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-sun",
    "forms": []
  },
  {
    "pokedexNo": 666,
    "name": "Tundra Pattern Vivillon",
    "types": ["Bug", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Shield Dust", "false"],
      ["Compound Eyes", "false"],
      ["Friend Guard", "true"]
    ],
    "gender": "50:50",
    "sprite": "vivillon-tundra",
    "forms": []
  },
  {
    "pokedexNo": 667,
    "name": "Litleo",
    "types": ["Fire", "Normal"],
    "evolutions": ["Pyroar"],
    "abilities": [
      ["Rivalry", "false"],
      ["Unnerve", "false"],
      ["Moxie", "true"]
    ],
    "gender": "12.5:87.5",
    "sprite": "litleo",
    "forms": []
  },
  {
    "pokedexNo": 668,
    "name": "Pyroar",
    "types": ["Fire", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Rivalry", "false"],
      ["Unnerve", "false"],
      ["Moxie", "true"]
    ],
    "gender": "12.5:87.5",
    "sprite": "pyroar",
    "forms": []
  },
  {
    "pokedexNo": 669,
    "name": "Blue Flower Flabébé",
    "types": ["Fairy"],
    "evolutions": ["Blue Flower Floette"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "flabebe-blue",
    "forms": []
  },
  {
    "pokedexNo": 669,
    "name": "Orange Flower Flabébé",
    "types": ["Fairy"],
    "evolutions": ["Orange Flower Floette"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "flabebe-orange",
    "forms": []
  },
  {
    "pokedexNo": 669,
    "name": "Red Flower Flabébé",
    "types": ["Fairy"],
    "evolutions": ["Red Flower Floette"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "flabebe",
    "forms": []
  },
  {
    "pokedexNo": 669,
    "name": "White Flower Flabébé",
    "types": ["Fairy"],
    "evolutions": ["White Flower Floette"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "flabebe-white",
    "forms": []
  },
  {
    "pokedexNo": 669,
    "name": "Yellow Flower Flabébé",
    "types": ["Fairy"],
    "evolutions": ["Yellow Flower Floette"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "flabebe-yellow",
    "forms": []
  },
  {
    "pokedexNo": 670,
    "name": "Blue Flower Floette",
    "types": ["Fairy"],
    "evolutions": ["Blue Flower Florges"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "floette-blue",
    "forms": []
  },
  {
    "pokedexNo": 670,
    "name": "Orange Flower Floette",
    "types": ["Fairy"],
    "evolutions": ["Orange Flower Florges"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "floette-orange",
    "forms": []
  },
  {
    "pokedexNo": 670,
    "name": "Red Flower Floette",
    "types": ["Fairy"],
    "evolutions": ["Red Flower Florges"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "floette",
    "forms": []
  },
  {
    "pokedexNo": 670,
    "name": "White Flower Floette",
    "types": ["Fairy"],
    "evolutions": ["White Flower Florges"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "floette-white",
    "forms": []
  },
  {
    "pokedexNo": 670,
    "name": "Yellow Flower Floette",
    "types": ["Fairy"],
    "evolutions": ["Yellow Flower Florges"],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "floette-yellow",
    "forms": []
  },
  {
    "pokedexNo": 671,
    "name": "Blue Flower Florges",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "florges-blue",
    "forms": []
  },
  {
    "pokedexNo": 671,
    "name": "Orange Flower Florges",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "florges-orange",
    "forms": []
  },
  {
    "pokedexNo": 671,
    "name": "Red Flower Florges",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "florges",
    "forms": []
  },
  {
    "pokedexNo": 671,
    "name": "White Flower Florges",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "florges-white",
    "forms": []
  },
  {
    "pokedexNo": 671,
    "name": "Yellow Flower Florges",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "0:100",
    "sprite": "florges-yellow",
    "forms": []
  },
  {
    "pokedexNo": 672,
    "name": "Skiddo",
    "types": ["Grass"],
    "evolutions": ["Gogoat"],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Grass Pelt", "true"]
    ],
    "gender": "50:50",
    "sprite": "skiddo",
    "forms": []
  },
  {
    "pokedexNo": 673,
    "name": "Gogoat",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Grass Pelt", "true"]
    ],
    "gender": "50:50",
    "sprite": "gogoat",
    "forms": []
  },
  {
    "pokedexNo": 674,
    "name": "Pancham",
    "types": ["Fighting"],
    "evolutions": ["Pangoro"],
    "abilities": [
      ["Iron Fist", "false"],
      ["Mold Breaker", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "pancham",
    "forms": []
  },
  {
    "pokedexNo": 675,
    "name": "Pangoro",
    "types": ["Fighting", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Iron Fist", "false"],
      ["Mold Breaker", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50:50",
    "sprite": "pangoro",
    "forms": []
  },
  {
    "pokedexNo": 676,
    "name": "Furfrou",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Fur Coat", "false"]],
    "gender": "50:50",
    "sprite": "furfrou",
    "forms": []
  },
  {
    "pokedexNo": 677,
    "name": "Espurr",
    "types": ["Psychic"],
    "evolutions": ["Male Meowstic", "Female Meowstic"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Infiltrator", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "50:50",
    "sprite": "espurr",
    "forms": []
  },
  {
    "pokedexNo": 678,
    "name": "Male Meowstic",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Infiltrator", "false"],
      ["Prankster", "true"]
    ],
    "gender": "100:0",
    "sprite": "meowstic",
    "forms": []
  },
  {
    "pokedexNo": 678,
    "name": "Female Meowstic",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Infiltrator", "false"],
      ["Competitive", "true"]
    ],
    "gender": "0:100",
    "sprite": "meowstic-f",
    "forms": []
  },
  {
    "pokedexNo": 679,
    "name": "Honedge",
    "types": ["Steel", "Ghost"],
    "evolutions": ["Doublade"],
    "abilities": [["No Guard", "false"]],
    "gender": "50:50",
    "sprite": "honedge",
    "forms": []
  },
  {
    "pokedexNo": 680,
    "name": "Doublade",
    "types": ["Steel", "Ghost"],
    "evolutions": ["Aegislash"],
    "abilities": [["No Guard", "false"]],
    "gender": "50:50",
    "sprite": "doublade",
    "forms": []
  },
  {
    "pokedexNo": 681,
    "name": "Shield Form Aegislash",
    "types": ["Steel", "Ghost"],
    "evolutions": [],
    "abilities": [["Stance Change", "false"]],
    "gender": "50:50",
    "sprite": "aegislash",
    "forms": [
      {
        "sprite": "aegislash-blade",
        "types": ["Steel", "Ghost"],
        "name": "Blade Form Aegislash"
      }
    ]
  },
  {
    "pokedexNo": 682,
    "name": "Spritzee",
    "types": ["Fairy"],
    "evolutions": ["Aromatisse"],
    "abilities": [
      ["Healer", "false"],
      ["Aroma Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "spritzee",
    "forms": []
  },
  {
    "pokedexNo": 683,
    "name": "Aromatisse",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Healer", "false"],
      ["Aroma Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "aromatisse",
    "forms": []
  },
  {
    "pokedexNo": 684,
    "name": "Swirlix",
    "types": ["Fairy"],
    "evolutions": ["Slurpuff"],
    "abilities": [
      ["Sweet Veil", "false"],
      ["Unburden", "true"]
    ],
    "gender": "50:50",
    "sprite": "swirlix",
    "forms": []
  },
  {
    "pokedexNo": 685,
    "name": "Slurpuff",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet Veil", "false"],
      ["Unburden", "true"]
    ],
    "gender": "50:50",
    "sprite": "slurpuff",
    "forms": []
  },
  {
    "pokedexNo": 686,
    "name": "Inkay",
    "types": ["Dark", "Psychic"],
    "evolutions": ["Malamar"],
    "abilities": [
      ["Contrary", "false"],
      ["Suction Cups", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "inkay",
    "forms": []
  },
  {
    "pokedexNo": 687,
    "name": "Malamar",
    "types": ["Dark", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Contrary", "false"],
      ["Suction Cups", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "malamar",
    "forms": []
  },
  {
    "pokedexNo": 688,
    "name": "Binacle",
    "types": ["Rock", "Water"],
    "evolutions": ["Barbaracle"],
    "abilities": [
      ["Tough Claws", "false"],
      ["Sniper", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "binacle",
    "forms": []
  },
  {
    "pokedexNo": 689,
    "name": "Barbaracle",
    "types": ["Rock", "Water"],
    "evolutions": [],
    "abilities": [
      ["Tough Claws", "false"],
      ["Sniper", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "50:50",
    "sprite": "barbaracle",
    "forms": []
  },
  {
    "pokedexNo": 690,
    "name": "Skrelp",
    "types": ["Poison", "Water"],
    "evolutions": ["Dragalge"],
    "abilities": [
      ["Poison Point", "false"],
      ["Poison Touch", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "skrelp",
    "forms": []
  },
  {
    "pokedexNo": 691,
    "name": "Dragalge",
    "types": ["Poison", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Poison Touch", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "dragalge",
    "forms": []
  },
  {
    "pokedexNo": 692,
    "name": "Clauncher",
    "types": ["Water"],
    "evolutions": ["Clawitzer"],
    "abilities": [["Mega Launcher", "false"]],
    "gender": "50:50",
    "sprite": "clauncher",
    "forms": []
  },
  {
    "pokedexNo": 693,
    "name": "Clawitzer",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Mega Launcher", "false"]],
    "gender": "50:50",
    "sprite": "clawitzer",
    "forms": []
  },
  {
    "pokedexNo": 694,
    "name": "Helioptile",
    "types": ["Electric", "Normal"],
    "evolutions": ["Heliolisk"],
    "abilities": [
      ["Dry Skin", "false"],
      ["Sand Veil", "false"],
      ["Solar Power", "true"]
    ],
    "gender": "50:50",
    "sprite": "helioptile",
    "forms": []
  },
  {
    "pokedexNo": 695,
    "name": "Heliolisk",
    "types": ["Electric", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Dry Skin", "false"],
      ["Sand Veil", "false"],
      ["Solar Power", "true"]
    ],
    "gender": "50:50",
    "sprite": "heliolisk",
    "forms": []
  },
  {
    "pokedexNo": 696,
    "name": "Tyrunt",
    "types": ["Rock", "Dragon"],
    "evolutions": ["Tyrantrum"],
    "abilities": [
      ["Strong Jaw", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "tyrunt",
    "forms": []
  },
  {
    "pokedexNo": 697,
    "name": "Tyrantrum",
    "types": ["Rock", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Strong Jaw", "false"],
      ["Rock Head", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "tyrantrum",
    "forms": []
  },
  {
    "pokedexNo": 698,
    "name": "Amaura",
    "types": ["Rock", "Ice"],
    "evolutions": ["Aurorus"],
    "abilities": [
      ["Refrigerate", "false"],
      ["Snow Warning", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "amaura",
    "forms": []
  },
  {
    "pokedexNo": 699,
    "name": "Aurorus",
    "types": ["Rock", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Refrigerate", "false"],
      ["Snow Warning", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "aurorus",
    "forms": []
  },
  {
    "pokedexNo": 700,
    "name": "Sylveon",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Cute Charm", "false"],
      ["Pixilate", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "sylveon",
    "forms": []
  },
  {
    "pokedexNo": 701,
    "name": "Hawlucha",
    "types": ["Fighting", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Unburden", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "50:50",
    "sprite": "hawlucha",
    "forms": []
  },
  {
    "pokedexNo": 702,
    "name": "Dedenne",
    "types": ["Electric", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Cheek Pouch", "false"],
      ["Pickup", "false"],
      ["Plus", "true"]
    ],
    "gender": "50:50",
    "sprite": "dedenne",
    "forms": []
  },
  {
    "pokedexNo": 703,
    "name": "Carbink",
    "types": ["Rock", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Clear Body", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "carbink",
    "forms": []
  },
  {
    "pokedexNo": 704,
    "name": "Goomy",
    "types": ["Dragon"],
    "evolutions": ["Sliggoo", "Hisuian Sliggoo"],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Hydration", "false"],
      ["Gooey", "true"]
    ],
    "gender": "50:50",
    "sprite": "goomy",
    "forms": []
  },
  {
    "pokedexNo": 705,
    "name": "Sliggoo",
    "types": ["Dragon"],
    "evolutions": ["Goodra"],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Hydration", "false"],
      ["Gooey", "true"]
    ],
    "gender": "50:50",
    "sprite": "sliggoo",
    "forms": []
  },
  {
    "pokedexNo": 705,
    "name": "Hisuian Sliggoo",
    "types": ["Dragon", "Steel"],
    "evolutions": ["Hisuian Goodra"],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Overcoat", "false"],
      ["Gooey", "true"]
    ],
    "gender": "50:50",
    "sprite": "sliggoo-hisui",
    "forms": []
  },
  {
    "pokedexNo": 706,
    "name": "Goodra",
    "types": ["Dragon"],
    "evolutions": [],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Hydration", "false"],
      ["Gooey", "true"]
    ],
    "gender": "50:50",
    "sprite": "goodra",
    "forms": []
  },
  {
    "pokedexNo": 706,
    "name": "Hisuian Goodra",
    "types": ["Dragon", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Sap Sipper", "false"],
      ["Overcoat", "false"],
      ["Gooey", "true"]
    ],
    "gender": "50:50",
    "sprite": "goodra-hisui",
    "forms": []
  },
  {
    "pokedexNo": 707,
    "name": "Klefki",
    "types": ["Steel", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Prankster", "false"],
      ["Magician", "true"]
    ],
    "gender": "50:50",
    "sprite": "klefki",
    "forms": []
  },
  {
    "pokedexNo": 708,
    "name": "Phantump",
    "types": ["Ghost", "Grass"],
    "evolutions": ["Trevenant"],
    "abilities": [
      ["Natural Cure", "false"],
      ["Frisk", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "phantump",
    "forms": []
  },
  {
    "pokedexNo": 709,
    "name": "Trevenant",
    "types": ["Ghost", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Natural Cure", "false"],
      ["Frisk", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "trevenant",
    "forms": []
  },
  {
    "pokedexNo": 710,
    "name": "Pumpkaboo",
    "types": ["Ghost", "Grass"],
    "evolutions": ["Gourgeist"],
    "abilities": [
      ["Pickup", "false"],
      ["Frisk", "false"],
      ["Insomnia", "true"]
    ],
    "gender": "50:50",
    "sprite": "pumpkaboo",
    "forms": []
  },
  {
    "pokedexNo": 711,
    "name": "Gourgeist",
    "types": ["Ghost", "Grass"],
    "evolutions": [],
    "abilities": [
      ["Pickup", "false"],
      ["Frisk", "false"],
      ["Insomnia", "true"]
    ],
    "gender": "50:50",
    "sprite": "gourgeist",
    "forms": []
  },
  {
    "pokedexNo": 712,
    "name": "Bergmite",
    "types": ["Ice"],
    "evolutions": ["Avalugg", "Hisuian Avalugg"],
    "abilities": [
      ["Own Tempo", "false"],
      ["Ice Body", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "50:50",
    "sprite": "bergmite",
    "forms": []
  },
  {
    "pokedexNo": 713,
    "name": "Avalugg",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Ice Body", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "50:50",
    "sprite": "avalugg",
    "forms": []
  },
  {
    "pokedexNo": 713,
    "name": "Hisuian Avalugg",
    "types": ["Ice", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Strong Jaw", "false"],
      ["Ice Body", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "50:50",
    "sprite": "avalugg-hisui",
    "forms": []
  },
  {
    "pokedexNo": 714,
    "name": "Noibat",
    "types": ["Flying", "Dragon"],
    "evolutions": ["Noivern"],
    "abilities": [
      ["Frisk", "false"],
      ["Infiltrator", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "noibat",
    "forms": []
  },
  {
    "pokedexNo": 715,
    "name": "Noivern",
    "types": ["Flying", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Frisk", "false"],
      ["Infiltrator", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "noivern",
    "forms": []
  },
  {
    "pokedexNo": 716,
    "name": "Xerneas",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [["Fairy Aura", "false"]],
    "gender": "Genderless",
    "sprite": "xerneas",
    "forms": []
  },
  {
    "pokedexNo": 717,
    "name": "Yveltal",
    "types": ["Dark", "Flying"],
    "evolutions": [],
    "abilities": [["Dark Aura", "false"]],
    "gender": "Genderless",
    "sprite": "yveltal",
    "forms": []
  },
  {
    "pokedexNo": 718,
    "name": "Zygarde",
    "types": ["Dragon", "Ground"],
    "evolutions": [],
    "abilities": [["Aura Break", "false"]],
    "gender": "Genderless",
    "sprite": "zygarde",
    "forms": [
      {
        "sprite": "zygarde-10",
        "types": ["Dragon", "Ground"],
        "name": "10% Form Zygarde"
      },
      {
        "sprite": "zygarde-50",
        "types": ["Dragon", "Ground"],
        "name": "50% Form Zygarde"
      },
      {
        "sprite": "zygarde-complete",
        "types": ["Dragon", "Ground"],
        "name": "Complete Form Zygarde"
      }
    ]
  },
  {
    "pokedexNo": 719,
    "name": "Diancie",
    "types": ["Rock", "Fairy"],
    "evolutions": [],
    "abilities": [["Clear Body", "false"]],
    "gender": "Genderless",
    "sprite": "diancie",
    "forms": [
      {
        "sprite": "diancie-mega",
        "types": ["Rock", "Fairy"],
        "name": "Mega Diancie"
      }
    ]
  },
  {
    "pokedexNo": 720,
    "name": "Hoopa",
    "types": ["Psychic", "Ghost"],
    "evolutions": [],
    "abilities": [["Magician", "false"]],
    "gender": "Genderless",
    "sprite": "hoopa",
    "forms": [
      {
        "sprite": "hoopa-unbound",
        "types": ["Psychic", "Dark"],
        "name": "Hoopa Unbound"
      }
    ]
  },
  {
    "pokedexNo": 721,
    "name": "Volcanion",
    "types": ["Fire", "Water"],
    "evolutions": [],
    "abilities": [["Water Absorb", "false"]],
    "gender": "Genderless",
    "sprite": "volcanion",
    "forms": []
  },
  {
    "pokedexNo": 722,
    "name": "Rowlet",
    "types": ["Grass", "Flying"],
    "evolutions": ["Dartrix"],
    "abilities": [
      ["Overgrow", "false"],
      ["Long Reach", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "rowlet",
    "forms": []
  },
  {
    "pokedexNo": 723,
    "name": "Dartrix",
    "types": ["Grass", "Flying"],
    "evolutions": ["Decidueye", "Hisuian Decidueye"],
    "abilities": [
      ["Overgrow", "false"],
      ["Long Reach", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "dartrix",
    "forms": []
  },
  {
    "pokedexNo": 724,
    "name": "Decidueye",
    "types": ["Grass", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Long Reach", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "decidueye",
    "forms": []
  },
  {
    "pokedexNo": 724,
    "name": "Hisuian Decidueye",
    "types": ["Grass", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Long Reach", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "decidueye-hisui",
    "forms": []
  },
  {
    "pokedexNo": 725,
    "name": "Litten",
    "types": ["Fire"],
    "evolutions": ["Torracat"],
    "abilities": [
      ["Blaze", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "litten",
    "forms": []
  },
  {
    "pokedexNo": 726,
    "name": "Torracat",
    "types": ["Fire"],
    "evolutions": ["Incineroar"],
    "abilities": [
      ["Blaze", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "torracat",
    "forms": []
  },
  {
    "pokedexNo": 727,
    "name": "Incineroar",
    "types": ["Fire", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "incineroar",
    "forms": []
  },
  {
    "pokedexNo": 728,
    "name": "Popplio",
    "types": ["Water"],
    "evolutions": ["Brionne"],
    "abilities": [
      ["Torrent", "false"],
      ["Liquid Voice", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "popplio",
    "forms": []
  },
  {
    "pokedexNo": 729,
    "name": "Brionne",
    "types": ["Water"],
    "evolutions": ["Primarina"],
    "abilities": [
      ["Torrent", "false"],
      ["Liquid Voice", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "brionne",
    "forms": []
  },
  {
    "pokedexNo": 730,
    "name": "Primarina",
    "types": ["Water", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Liquid Voice", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "primarina",
    "forms": []
  },
  {
    "pokedexNo": 731,
    "name": "Pikipek",
    "types": ["Normal", "Flying"],
    "evolutions": ["Trumbeak"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Skill Link", "false"],
      ["Pickup", "true"]
    ],
    "gender": "50:50",
    "sprite": "pikipek",
    "forms": []
  },
  {
    "pokedexNo": 732,
    "name": "Trumbeak",
    "types": ["Normal", "Flying"],
    "evolutions": ["Toucannon"],
    "abilities": [
      ["Keen Eye", "false"],
      ["Skill Link", "false"],
      ["Pickup", "true"]
    ],
    "gender": "50:50",
    "sprite": "trumbeak",
    "forms": []
  },
  {
    "pokedexNo": 733,
    "name": "Toucannon",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Skill Link", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "toucannon",
    "forms": []
  },
  {
    "pokedexNo": 734,
    "name": "Yungoos",
    "types": ["Normal"],
    "evolutions": ["Gumshoos"],
    "abilities": [
      ["Stakeout", "false"],
      ["Strong Jaw", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "yungoos",
    "forms": []
  },
  {
    "pokedexNo": 735,
    "name": "Gumshoos",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Stakeout", "false"],
      ["Strong Jaw", "false"],
      ["Adaptability", "true"]
    ],
    "gender": "50:50",
    "sprite": "gumshoos",
    "forms": []
  },
  {
    "pokedexNo": 736,
    "name": "Grubbin",
    "types": ["Bug"],
    "evolutions": ["Charjabug"],
    "abilities": [["Swarm", "false"]],
    "gender": "50:50",
    "sprite": "grubbin",
    "forms": []
  },
  {
    "pokedexNo": 737,
    "name": "Charjabug",
    "types": ["Bug", "Electric"],
    "evolutions": ["Vikavolt"],
    "abilities": [["Battery", "false"]],
    "gender": "50:50",
    "sprite": "charjabug",
    "forms": []
  },
  {
    "pokedexNo": 738,
    "name": "Vikavolt",
    "types": ["Bug", "Electric"],
    "evolutions": [],
    "abilities": [["Levitate", "false"]],
    "gender": "50:50",
    "sprite": "vikavolt",
    "forms": []
  },
  {
    "pokedexNo": 739,
    "name": "Crabrawler",
    "types": ["Fighting"],
    "evolutions": ["Crabominable"],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Iron Fist", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "crabrawler",
    "forms": []
  },
  {
    "pokedexNo": 740,
    "name": "Crabominable",
    "types": ["Fighting", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Hyper Cutter", "false"],
      ["Iron Fist", "false"],
      ["Anger Point", "true"]
    ],
    "gender": "50:50",
    "sprite": "crabominable",
    "forms": []
  },
  {
    "pokedexNo": 741,
    "name": "Baile Style Oricorio",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [["Dancer", "false"]],
    "gender": "25:75",
    "sprite": "oricorio",
    "forms": []
  },
  {
    "pokedexNo": 741,
    "name": "Pa'u Style Oricorio",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [["Dancer", "false"]],
    "gender": "25:75",
    "sprite": "oricorio-pau",
    "forms": []
  },
  {
    "pokedexNo": 741,
    "name": "Pom-Pom Style Oricorio",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [["Dancer", "false"]],
    "gender": "25:75",
    "sprite": "oricorio-pom-pom",
    "forms": []
  },
  {
    "pokedexNo": 741,
    "name": "Sensu Style Oricorio",
    "types": ["Fire", "Flying"],
    "evolutions": [],
    "abilities": [["Dancer", "false"]],
    "gender": "25:75",
    "sprite": "oricorio-sensu",
    "forms": []
  },
  {
    "pokedexNo": 742,
    "name": "Cutiefly",
    "types": ["Bug", "Fairy"],
    "evolutions": ["Ribombee"],
    "abilities": [
      ["Honey Gather", "false"],
      ["Shield Dust", "false"],
      ["Sweet Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "cutiefly",
    "forms": []
  },
  {
    "pokedexNo": 743,
    "name": "Ribombee",
    "types": ["Bug", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Honey Gather", "false"],
      ["Shield Dust", "false"],
      ["Sweet Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "ribombee",
    "forms": []
  },
  {
    "pokedexNo": 744,
    "name": "Rockruff",
    "types": ["Rock"],
    "evolutions": [
      "Midday Form Lycanroc",
      "Midnight Form Lycanroc",
      "Dusk Form Lycanroc"
    ],
    "abilities": [
      ["Keen Eye", "false"],
      ["Vital Spirit", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50:50",
    "sprite": "rockruff",
    "forms": []
  },
  {
    "pokedexNo": 745,
    "name": "Midday Form Lycanroc",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sand Rush", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50:50",
    "sprite": "lycanroc",
    "forms": []
  },
  {
    "pokedexNo": 745,
    "name": "Midnight Form Lycanroc",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sand Rush", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50:50",
    "sprite": "lycanroc-midnight",
    "forms": []
  },
  {
    "pokedexNo": 745,
    "name": "Dusk Form Lycanroc",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Keen Eye", "false"],
      ["Sand Rush", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50:50",
    "sprite": "lycanroc-dusk",
    "forms": []
  },
  {
    "pokedexNo": 746,
    "name": "Wishiwashi",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Schooling", "false"]],
    "gender": "50:50",
    "sprite": "wishiwashi",
    "forms": [
      {
        "sprite": "wishiwashi-school",
        "types": ["Water"],
        "name": "School Form Wishiwashi"
      }
    ]
  },
  {
    "pokedexNo": 747,
    "name": "Mareanie",
    "types": ["Poison", "Water"],
    "evolutions": ["Toxapex"],
    "abilities": [
      ["Merciless", "false"],
      ["Limber", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "mareanie",
    "forms": []
  },
  {
    "pokedexNo": 748,
    "name": "Toxapex",
    "types": ["Poison", "Water"],
    "evolutions": [],
    "abilities": [
      ["Merciless", "false"],
      ["Limber", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "toxapex",
    "forms": []
  },
  {
    "pokedexNo": 749,
    "name": "Mudbray",
    "types": ["Ground"],
    "evolutions": ["Mudsdale"],
    "abilities": [
      ["Own Tempo", "false"],
      ["Stamina", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "mudbray",
    "forms": []
  },
  {
    "pokedexNo": 750,
    "name": "Mudsdale",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Stamina", "false"],
      ["Inner Focus", "true"]
    ],
    "gender": "50:50",
    "sprite": "mudsdale",
    "forms": []
  },
  {
    "pokedexNo": 751,
    "name": "Dewpider",
    "types": ["Water", "Bug"],
    "evolutions": ["Araquanid"],
    "abilities": [
      ["Water Bubble", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "dewpider",
    "forms": []
  },
  {
    "pokedexNo": 752,
    "name": "Araquanid",
    "types": ["Water", "Bug"],
    "evolutions": [],
    "abilities": [
      ["Water Bubble", "false"],
      ["Water Absorb", "true"]
    ],
    "gender": "50:50",
    "sprite": "araquanid",
    "forms": []
  },
  {
    "pokedexNo": 753,
    "name": "Fomantis",
    "types": ["Grass"],
    "evolutions": ["Lurantis"],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Contrary", "true"]
    ],
    "gender": "50:50",
    "sprite": "fomantis",
    "forms": []
  },
  {
    "pokedexNo": 754,
    "name": "Lurantis",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Contrary", "true"]
    ],
    "gender": "50:50",
    "sprite": "lurantis",
    "forms": []
  },
  {
    "pokedexNo": 755,
    "name": "Morelull",
    "types": ["Grass", "Fairy"],
    "evolutions": ["Shiinotic"],
    "abilities": [
      ["Illuminate", "false"],
      ["Effect Spore", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "morelull",
    "forms": []
  },
  {
    "pokedexNo": 756,
    "name": "Shiinotic",
    "types": ["Grass", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Illuminate", "false"],
      ["Effect Spore", "false"],
      ["Rain Dish", "true"]
    ],
    "gender": "50:50",
    "sprite": "shiinotic",
    "forms": []
  },
  {
    "pokedexNo": 757,
    "name": "Salandit",
    "types": ["Poison", "Fire"],
    "evolutions": ["Salazzle"],
    "abilities": [
      ["Corrosion", "false"],
      ["Oblivious", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "salandit",
    "forms": []
  },
  {
    "pokedexNo": 758,
    "name": "Salazzle",
    "types": ["Poison", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Corrosion", "false"],
      ["Oblivious", "true"]
    ],
    "gender": "0:100",
    "sprite": "salazzle",
    "forms": []
  },
  {
    "pokedexNo": 759,
    "name": "Stufful",
    "types": ["Normal", "Fighting"],
    "evolutions": ["Bewear"],
    "abilities": [
      ["Fluffy", "false"],
      ["Klutz", "false"],
      ["Cute Charm", "true"]
    ],
    "gender": "50:50",
    "sprite": "stufful",
    "forms": []
  },
  {
    "pokedexNo": 760,
    "name": "Bewear",
    "types": ["Normal", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Fluffy", "false"],
      ["Klutz", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50:50",
    "sprite": "bewear",
    "forms": []
  },
  {
    "pokedexNo": 761,
    "name": "Bounsweet",
    "types": ["Grass"],
    "evolutions": ["Steenee"],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Oblivious", "false"],
      ["Sweet Veil", "true"]
    ],
    "gender": "0:100",
    "sprite": "bounsweet",
    "forms": []
  },
  {
    "pokedexNo": 762,
    "name": "Steenee",
    "types": ["Grass"],
    "evolutions": ["Tsareena"],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Oblivious", "false"],
      ["Sweet Veil", "true"]
    ],
    "gender": "0:100",
    "sprite": "steenee",
    "forms": []
  },
  {
    "pokedexNo": 763,
    "name": "Tsareena",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Leaf Guard", "false"],
      ["Queenly Majesty", "false"],
      ["Sweet Veil", "true"]
    ],
    "gender": "0:100",
    "sprite": "tsareena",
    "forms": []
  },
  {
    "pokedexNo": 764,
    "name": "Comfey",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Flower Veil", "false"],
      ["Triage", "false"],
      ["Natural Cure", "true"]
    ],
    "gender": "25:75",
    "sprite": "comfey",
    "forms": []
  },
  {
    "pokedexNo": 765,
    "name": "Oranguru",
    "types": ["Normal", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Inner Focus", "false"],
      ["Telepathy", "false"],
      ["Symbiosis", "true"]
    ],
    "gender": "50:50",
    "sprite": "oranguru",
    "forms": []
  },
  {
    "pokedexNo": 766,
    "name": "Passimian",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Receiver", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "passimian",
    "forms": []
  },
  {
    "pokedexNo": 767,
    "name": "Wimpod",
    "types": ["Bug", "Water"],
    "evolutions": ["Golisopod"],
    "abilities": [["Wimp Out", "false"]],
    "gender": "50:50",
    "sprite": "wimpod",
    "forms": []
  },
  {
    "pokedexNo": 768,
    "name": "Golisopod",
    "types": ["Bug", "Water"],
    "evolutions": [],
    "abilities": [["Emergency Exit", "false"]],
    "gender": "50:50",
    "sprite": "golisopod",
    "forms": []
  },
  {
    "pokedexNo": 769,
    "name": "Sandygast",
    "types": ["Ghost", "Ground"],
    "evolutions": ["Palossand"],
    "abilities": [
      ["Water Compaction", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "sandygast",
    "forms": []
  },
  {
    "pokedexNo": 770,
    "name": "Palossand",
    "types": ["Ghost", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Water Compaction", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "palossand",
    "forms": []
  },
  {
    "pokedexNo": 771,
    "name": "Pyukumuku",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Innards Out", "false"],
      ["Unaware", "true"]
    ],
    "gender": "50:50",
    "sprite": "pyukumuku",
    "forms": []
  },
  {
    "pokedexNo": 772,
    "name": "Type: Null",
    "types": ["Normal"],
    "evolutions": ["Silvally"],
    "abilities": [["Battle Armor", "false"]],
    "gender": "Genderless",
    "sprite": "type-null",
    "forms": []
  },
  {
    "pokedexNo": 773,
    "name": "Silvally",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Rks System", "false"]],
    "gender": "Genderless",
    "sprite": "silvally",
    "forms": [
      {
        "sprite": "silvally-bug",
        "types": ["Bug"],
        "name": "Bug Type Silvally"
      },
      {
        "sprite": "silvally-dark",
        "types": ["Dark"],
        "name": "Dark Type Silvally"
      },
      {
        "sprite": "silvally-dragon",
        "types": ["Dragon"],
        "name": "Dragon Type Silvally"
      },
      {
        "sprite": "silvally-electric",
        "types": ["Electric"],
        "name": "Electric Type Silvally"
      },
      {
        "sprite": "silvally-fairy",
        "types": ["Fairy"],
        "name": "Fairy Type Silvally"
      },
      {
        "sprite": "silvally-fighting",
        "types": ["Fighting"],
        "name": "Fighting Type Silvally"
      },
      {
        "sprite": "silvally-fire",
        "types": ["Fire"],
        "name": "Fire Type Silvally"
      },
      {
        "sprite": "silvally-flying",
        "types": ["Flying"],
        "name": "Flying Type Silvally"
      },
      {
        "sprite": "silvally-ghost",
        "types": ["Ghost"],
        "name": "Ghost Type Silvally"
      },
      {
        "sprite": "silvally-grass",
        "types": ["Grass"],
        "name": "Grass Type Silvally"
      },
      {
        "sprite": "silvally-ground",
        "types": ["Ground"],
        "name": "Ground Type Silvally"
      },
      {
        "sprite": "silvally-ice",
        "types": ["Ice"],
        "name": "Ice Type Silvally"
      },
      {
        "sprite": "silvally-poison",
        "types": ["Poison"],
        "name": "Poison Type Silvally"
      },
      {
        "sprite": "silvally-psychic",
        "types": ["Psychic"],
        "name": "Psychic Type Silvally"
      },
      {
        "sprite": "silvally-rock",
        "types": ["Rock"],
        "name": "Rock Type Silvally"
      },
      {
        "sprite": "silvally-steel",
        "types": ["Steel"],
        "name": "Steel Type Silvally"
      },
      {
        "sprite": "silvally-water",
        "types": ["Water"],
        "name": "Water Type Silvally"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Blue Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-blue",
    "forms": [
      {
        "sprite": "minior-blue-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Green Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-green",
    "forms": [
      {
        "sprite": "minior-green-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Indigo Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-indigo",
    "forms": [
      {
        "sprite": "minior-indigo-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Orange Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-orange",
    "forms": [
      {
        "sprite": "minior-orange-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Red Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-red",
    "forms": [
      {
        "sprite": "minior-red-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Violet Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-violet",
    "forms": [
      {
        "sprite": "minior-violet-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 774,
    "name": "Minior Yellow Core",
    "types": ["Rock", "Flying"],
    "evolutions": [],
    "abilities": [["Shields Down", "false"]],
    "gender": "Genderless",
    "sprite": "minior-yellow",
    "forms": [
      {
        "sprite": "minior-yellow-meteor",
        "types": ["Rock", "Flying"],
        "name": "Minior Meteor Form"
      }
    ]
  },
  {
    "pokedexNo": 775,
    "name": "Komala",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [["Comatose", "false"]],
    "gender": "50:50",
    "sprite": "komala",
    "forms": []
  },
  {
    "pokedexNo": 776,
    "name": "Turtonator",
    "types": ["Fire", "Dragon"],
    "evolutions": [],
    "abilities": [["Shell Armor", "false"]],
    "gender": "50:50",
    "sprite": "turtonator",
    "forms": []
  },
  {
    "pokedexNo": 777,
    "name": "Togedemaru",
    "types": ["Electric", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Iron Barbs", "false"],
      ["Lightning Rod", "false"],
      ["Sturdy", "true"]
    ],
    "gender": "50:50",
    "sprite": "togedemaru",
    "forms": []
  },
  {
    "pokedexNo": 778,
    "name": "Mimikyu",
    "types": ["Ghost", "Fairy"],
    "evolutions": [],
    "abilities": [["Disguise", "false"]],
    "gender": "50:50",
    "sprite": "mimikyu",
    "forms": []
  },
  {
    "pokedexNo": 779,
    "name": "Bruxish",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Dazzling", "false"],
      ["Strong Jaw", "false"],
      ["Wonder Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "bruxish",
    "forms": []
  },
  {
    "pokedexNo": 780,
    "name": "Drampa",
    "types": ["Normal", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Berserk", "false"],
      ["Sap Sipper", "false"],
      ["Cloud Nine", "true"]
    ],
    "gender": "50:50",
    "sprite": "drampa",
    "forms": []
  },
  {
    "pokedexNo": 781,
    "name": "Dhelmise",
    "types": ["Ghost", "Grass"],
    "evolutions": [],
    "abilities": [["Steelworker", "false"]],
    "gender": "Genderless",
    "sprite": "dhelmise",
    "forms": []
  },
  {
    "pokedexNo": 782,
    "name": "Jangmo-o",
    "types": ["Dragon"],
    "evolutions": ["Hakamo-o"],
    "abilities": [
      ["Bulletproof", "false"],
      ["Soundproof", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "jangmo-o",
    "forms": []
  },
  {
    "pokedexNo": 783,
    "name": "Hakamo-o",
    "types": ["Dragon", "Fighting"],
    "evolutions": ["Kommo-o"],
    "abilities": [
      ["Bulletproof", "false"],
      ["Soundproof", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "hakamo-o",
    "forms": []
  },
  {
    "pokedexNo": 784,
    "name": "Kommo-o",
    "types": ["Dragon", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Bulletproof", "false"],
      ["Soundproof", "false"],
      ["Overcoat", "true"]
    ],
    "gender": "50:50",
    "sprite": "kommo-o",
    "forms": []
  },
  {
    "pokedexNo": 785,
    "name": "Tapu Koko",
    "types": ["Electric", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Electric Surge", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "tapu-koko",
    "forms": []
  },
  {
    "pokedexNo": 786,
    "name": "Tapu Lele",
    "types": ["Psychic", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Psychic Surge", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "tapu-lele",
    "forms": []
  },
  {
    "pokedexNo": 787,
    "name": "Tapu Bulu",
    "types": ["Grass", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Grassy Surge", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "tapu-bulu",
    "forms": []
  },
  {
    "pokedexNo": 788,
    "name": "Tapu Fini",
    "types": ["Water", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Misty Surge", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "Genderless",
    "sprite": "tapu-fini",
    "forms": []
  },
  {
    "pokedexNo": 789,
    "name": "Cosmog",
    "types": ["Psychic"],
    "evolutions": ["Cosmoem"],
    "abilities": [["Unaware", "false"]],
    "gender": "Genderless",
    "sprite": "cosmog",
    "forms": []
  },
  {
    "pokedexNo": 790,
    "name": "Cosmoem",
    "types": ["Psychic"],
    "evolutions": ["Solgaleo", "Lunala"],
    "abilities": [["Sturdy", "false"]],
    "gender": "Genderless",
    "sprite": "cosmoem",
    "forms": []
  },
  {
    "pokedexNo": 791,
    "name": "Solgaleo",
    "types": ["Psychic", "Steel"],
    "evolutions": [],
    "abilities": [["Full Metal Body", "false"]],
    "gender": "Genderless",
    "sprite": "solgaleo",
    "forms": []
  },
  {
    "pokedexNo": 792,
    "name": "Lunala",
    "types": ["Psychic", "Ghost"],
    "evolutions": [],
    "abilities": [["Shadow Shield", "false"]],
    "gender": "Genderless",
    "sprite": "lunala",
    "forms": []
  },
  {
    "pokedexNo": 793,
    "name": "Nihilego",
    "types": ["Rock", "Poison"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "nihilego",
    "forms": []
  },
  {
    "pokedexNo": 794,
    "name": "Buzzwole",
    "types": ["Bug", "Fighting"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "buzzwole",
    "forms": []
  },
  {
    "pokedexNo": 795,
    "name": "Pheromosa",
    "types": ["Bug", "Fighting"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "pheromosa",
    "forms": []
  },
  {
    "pokedexNo": 796,
    "name": "Xurkitree",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "xurkitree",
    "forms": []
  },
  {
    "pokedexNo": 797,
    "name": "Celesteela",
    "types": ["Steel", "Flying"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "celesteela",
    "forms": []
  },
  {
    "pokedexNo": 798,
    "name": "Kartana",
    "types": ["Grass", "Steel"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "kartana",
    "forms": []
  },
  {
    "pokedexNo": 799,
    "name": "Guzzlord",
    "types": ["Dark", "Dragon"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "guzzlord",
    "forms": []
  },
  {
    "pokedexNo": 800,
    "name": "Necrozma",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [["Prism Armor", "false"]],
    "gender": "Genderless",
    "sprite": "necrozma",
    "forms": [
      {
        "sprite": "necrozma-dawn",
        "types": ["Psychic", "Ghost"],
        "name": "Dawn Wings Necrozma"
      },
      {
        "sprite": "necrozma-dusk",
        "types": ["Psychic", "Steel"],
        "name": "Dusk Mane Necrozma"
      },
      {
        "sprite": "necrozma-ultra",
        "types": ["Psychic", "Dragon"],
        "name": "Ultra Necrozma"
      }
    ]
  },
  {
    "pokedexNo": 801,
    "name": "Magearna",
    "types": ["Steel", "Fairy"],
    "evolutions": [],
    "abilities": [["Soul Heart", "false"]],
    "gender": "Genderless",
    "sprite": "magearna",
    "forms": [
      {
        "sprite": "magearna-original",
        "types": ["Steel", "Fairy"],
        "name": "Original Form Magearna"
      }
    ]
  },
  {
    "pokedexNo": 802,
    "name": "Marshadow",
    "types": ["Fighting", "Ghost"],
    "evolutions": [],
    "abilities": [["Technician", "false"]],
    "gender": "Genderless",
    "sprite": "marshadow",
    "forms": []
  },
  {
    "pokedexNo": 803,
    "name": "Poipole",
    "types": ["Poison"],
    "evolutions": ["Naganadel"],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "poipole",
    "forms": []
  },
  {
    "pokedexNo": 804,
    "name": "Naganadel",
    "types": ["Poison", "Dragon"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "naganadel",
    "forms": []
  },
  {
    "pokedexNo": 805,
    "name": "Stakataka",
    "types": ["Rock", "Steel"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "stakataka",
    "forms": []
  },
  {
    "pokedexNo": 806,
    "name": "Blacephalon",
    "types": ["Fire", "Ghost"],
    "evolutions": [],
    "abilities": [["Beast Boost", "false"]],
    "gender": "Genderless",
    "sprite": "blacephalon",
    "forms": []
  },
  {
    "pokedexNo": 807,
    "name": "Zeraora",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [["Volt Absorb", "false"]],
    "gender": "Genderless",
    "sprite": "zeraora",
    "forms": []
  },
  {
    "pokedexNo": 808,
    "name": "Meltan",
    "types": ["Steel"],
    "evolutions": ["Melmetal"],
    "abilities": [["Magnet Pull", "false"]],
    "gender": "Genderless",
    "sprite": "meltan",
    "forms": []
  },
  {
    "pokedexNo": 809,
    "name": "Melmetal",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [["Iron Fist", "false"]],
    "gender": "Genderless",
    "sprite": "melmetal",
    "forms": [
      {
        "sprite": "melmetal-gmax",
        "types": ["Steel"],
        "name": "Gigantamax Melmetal"
      }
    ]
  },
  {
    "pokedexNo": 810,
    "name": "Grookey",
    "types": ["Grass"],
    "evolutions": ["Thwackey"],
    "abilities": [
      ["Overgrow", "false"],
      ["Grassy-surge", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "grookey",
    "forms": []
  },
  {
    "pokedexNo": 811,
    "name": "Thwackey",
    "types": ["Grass"],
    "evolutions": ["Rillaboom"],
    "abilities": [
      ["Overgrow", "false"],
      ["Grassy-surge", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "thwackey",
    "forms": []
  },
  {
    "pokedexNo": 812,
    "name": "Rillaboom",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Grassy-surge", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "rillaboom",
    "forms": [
      {
        "sprite": "rillaboom-gmax",
        "types": ["Grass"],
        "name": "Gigantamax Rillaboom"
      }
    ]
  },
  {
    "pokedexNo": 813,
    "name": "Scorbunny",
    "types": ["Fire"],
    "evolutions": ["Raboot"],
    "abilities": [
      ["Blaze", "false"],
      ["Libero", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "scorbunny",
    "forms": []
  },
  {
    "pokedexNo": 814,
    "name": "Raboot",
    "types": ["Fire"],
    "evolutions": ["Cinderace"],
    "abilities": [
      ["Blaze", "false"],
      ["Libero", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "raboot",
    "forms": []
  },
  {
    "pokedexNo": 815,
    "name": "Cinderace",
    "types": ["Fire"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Libero", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "cinderace",
    "forms": [
      {
        "sprite": "cinderace-gmax",
        "types": ["Fire"],
        "name": "Gigantamax Cinderace"
      }
    ]
  },
  {
    "pokedexNo": 816,
    "name": "Sobble",
    "types": ["Water"],
    "evolutions": ["Drizzile"],
    "abilities": [
      ["Torrent", "false"],
      ["Sniper", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "sobble",
    "forms": []
  },
  {
    "pokedexNo": 817,
    "name": "Drizzile",
    "types": ["Water"],
    "evolutions": ["Inteleon"],
    "abilities": [
      ["Torrent", "false"],
      ["Sniper", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "drizzile",
    "forms": []
  },
  {
    "pokedexNo": 818,
    "name": "Inteleon",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Sniper", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "inteleon",
    "forms": [
      {
        "sprite": "inteleon-gmax",
        "types": ["Water"],
        "name": "Gigantamax Inteleon"
      }
    ]
  },
  {
    "pokedexNo": 819,
    "name": "Skwovet",
    "types": ["Normal"],
    "evolutions": ["Greedent"],
    "abilities": [
      ["Cheek-pouch", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "skwovet",
    "forms": []
  },
  {
    "pokedexNo": 820,
    "name": "Greedent",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Cheek-pouch", "false"],
      ["Gluttony", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "greedent",
    "forms": []
  },
  {
    "pokedexNo": 821,
    "name": "Rookidee",
    "types": ["Flying"],
    "evolutions": ["Corvisquire"],
    "abilities": [
      ["Keen-eye", "false"],
      ["Unnerve", "false"],
      ["Big-pecks", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "rookidee",
    "forms": []
  },
  {
    "pokedexNo": 822,
    "name": "Corvisquire",
    "types": ["Flying"],
    "evolutions": ["Corviknight"],
    "abilities": [
      ["Keen-eye", "false"],
      ["Unnerve", "false"],
      ["Big-pecks", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "corvisquire",
    "forms": []
  },
  {
    "pokedexNo": 823,
    "name": "Corviknight",
    "types": ["Flying", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Unnerve", "false"],
      ["Mirror-armor", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "corviknight",
    "forms": [
      {
        "sprite": "corviknight-gmax",
        "types": ["Flying", "Steel"],
        "name": "Gigantamax Corviknight"
      }
    ]
  },
  {
    "pokedexNo": 824,
    "name": "Blipbug",
    "types": ["Bug"],
    "evolutions": ["Dottler"],
    "abilities": [
      ["Swarm", "false"],
      ["Compound-eyes", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "blipbug",
    "forms": []
  },
  {
    "pokedexNo": 825,
    "name": "Dottler",
    "types": ["Bug", "Psychic"],
    "evolutions": ["Orbeetle"],
    "abilities": [
      ["Swarm", "false"],
      ["Compound-eyes", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "dottler",
    "forms": []
  },
  {
    "pokedexNo": 826,
    "name": "Orbeetle",
    "types": ["Bug", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Frisk", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "orbeetle",
    "forms": [
      {
        "sprite": "orbeetle-gmax",
        "types": ["Bug", "Psychic"],
        "name": "Gigantamax Orbeetle"
      }
    ]
  },
  {
    "pokedexNo": 827,
    "name": "Nickit",
    "types": ["Dark"],
    "evolutions": ["Thievul"],
    "abilities": [
      ["Run-away", "false"],
      ["Unburden", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "nickit",
    "forms": []
  },
  {
    "pokedexNo": 828,
    "name": "Thievul",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Run-away", "false"],
      ["Unburden", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "thievul",
    "forms": []
  },
  {
    "pokedexNo": 829,
    "name": "Gossifleur",
    "types": ["Grass"],
    "evolutions": ["Eldegoss"],
    "abilities": [
      ["Cotton-down", "false"],
      ["Regenerator", "false"],
      ["Effect-spore", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "gossifleur",
    "forms": []
  },
  {
    "pokedexNo": 830,
    "name": "Eldegoss",
    "types": ["Grass"],
    "evolutions": [],
    "abilities": [
      ["Cotton-down", "false"],
      ["Regenerator", "false"],
      ["Effect-spore", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "eldegoss",
    "forms": []
  },
  {
    "pokedexNo": 831,
    "name": "Wooloo",
    "types": ["Normal"],
    "evolutions": ["Dubwool"],
    "abilities": [
      ["Fluffy", "false"],
      ["Run-away", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "wooloo",
    "forms": []
  },
  {
    "pokedexNo": 832,
    "name": "Dubwool",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Fluffy", "false"],
      ["Run-away", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "dubwool",
    "forms": []
  },
  {
    "pokedexNo": 833,
    "name": "Chewtle",
    "types": ["Water"],
    "evolutions": ["Drednaw"],
    "abilities": [
      ["Strong-jaw", "false"],
      ["Shell-armor", "false"],
      ["Swift-swim", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "chewtle",
    "forms": []
  },
  {
    "pokedexNo": 834,
    "name": "Drednaw",
    "types": ["Water", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Strong-jaw", "false"],
      ["Shell-armor", "false"],
      ["Swift-swim", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "drednaw",
    "forms": [
      {
        "sprite": "drednaw-gmax",
        "types": ["Water", "Rock"],
        "name": "Gigantamax Drednaw"
      }
    ]
  },
  {
    "pokedexNo": 835,
    "name": "Yamper",
    "types": ["Electric"],
    "evolutions": ["Boltund"],
    "abilities": [
      ["Ball-fetch", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "yamper",
    "forms": []
  },
  {
    "pokedexNo": 836,
    "name": "Boltund",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Strong-jaw", "false"],
      ["Competitive", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "boltund",
    "forms": []
  },
  {
    "pokedexNo": 837,
    "name": "Rolycoly",
    "types": ["Rock"],
    "evolutions": ["Carkol"],
    "abilities": [
      ["Steam-engine", "false"],
      ["Heatproof", "false"],
      ["Flash-fire", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "rolycoly",
    "forms": []
  },
  {
    "pokedexNo": 838,
    "name": "Carkol",
    "types": ["Rock", "Fire"],
    "evolutions": ["Coalossal"],
    "abilities": [
      ["Steam-engine", "false"],
      ["Flame-body", "false"],
      ["Flash-fire", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "carkol",
    "forms": []
  },
  {
    "pokedexNo": 839,
    "name": "Coalossal",
    "types": ["Rock", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Steam-engine", "false"],
      ["Flame-body", "false"],
      ["Flash-fire", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "coalossal",
    "forms": [
      {
        "sprite": "coalossal-gmax",
        "types": ["Rock", "Fire"],
        "name": "Gigantamax Coalossal"
      }
    ]
  },
  {
    "pokedexNo": 840,
    "name": "Applin",
    "types": ["Grass", "Dragon"],
    "evolutions": ["Flapple", "Appletun"],
    "abilities": [
      ["Ripen", "false"],
      ["Gluttony", "false"],
      ["Bulletproof", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "applin",
    "forms": []
  },
  {
    "pokedexNo": 841,
    "name": "Flapple",
    "types": ["Grass", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Ripen", "false"],
      ["Gluttony", "false"],
      ["Hustle", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "flapple",
    "forms": [
      {
        "sprite": "flapple-gmax",
        "types": ["Grass", "Dragon"],
        "name": "Gigantamax Flapple"
      }
    ]
  },
  {
    "pokedexNo": 842,
    "name": "Appletun",
    "types": ["Grass", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Ripen", "false"],
      ["Gluttony", "false"],
      ["Thick-fat", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "appletun",
    "forms": [
      {
        "sprite": "appletun-gmax",
        "types": ["Grass", "Dragon"],
        "name": "Gigantamax Appletun"
      }
    ]
  },
  {
    "pokedexNo": 843,
    "name": "Silicobra",
    "types": ["Ground"],
    "evolutions": ["Sandaconda"],
    "abilities": [
      ["Sand-spit", "false"],
      ["Shed-skin", "false"],
      ["Sand-veil", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "silicobra",
    "forms": []
  },
  {
    "pokedexNo": 844,
    "name": "Sandaconda",
    "types": ["Ground"],
    "evolutions": [],
    "abilities": [
      ["Sand-spit", "false"],
      ["Shed-skin", "false"],
      ["Sand-veil", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "sandaconda",
    "forms": [
      {
        "sprite": "sandaconda-gmax",
        "types": ["Ground"],
        "name": "Gigantamax Sandaconda"
      }
    ]
  },
  {
    "pokedexNo": 845,
    "name": "Cramorant",
    "types": ["Flying", "Water"],
    "evolutions": [],
    "abilities": [["Gulp-missile", "false"]],
    "gender": "50.0:50.0",
    "sprite": "cramorant",
    "forms": []
  },
  {
    "pokedexNo": 846,
    "name": "Arrokuda",
    "types": ["Water"],
    "evolutions": ["Barraskewda"],
    "abilities": [
      ["Swift-swim", "false"],
      ["Propeller-tail", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "arrokuda",
    "forms": []
  },
  {
    "pokedexNo": 847,
    "name": "Barraskewda",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Swift-swim", "false"],
      ["Propeller-tail", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "barraskewda",
    "forms": []
  },
  {
    "pokedexNo": 848,
    "name": "Toxel",
    "types": ["Electric", "Poison"],
    "evolutions": ["Amped Form Toxtricity", "Low Key Form Toxtricity"],
    "abilities": [
      ["Rattled", "false"],
      ["Static", "false"],
      ["Klutz", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "toxel",
    "forms": []
  },
  {
    "pokedexNo": 849,
    "name": "Amped Form Toxtricity",
    "types": ["Electric", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Punk-rock", "false"],
      ["Plus", "false"],
      ["Technician", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "toxtricity",
    "forms": [
      {
        "sprite": "toxtricity-gmax",
        "types": ["Electric", "Poison"],
        "name": "Gigantamax Toxtricity"
      }
    ]
  },
  {
    "pokedexNo": 849,
    "name": "Low Key Form Toxtricity",
    "types": ["Electric", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Punk-rock", "false"],
      ["Plus", "false"],
      ["Technician", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "toxtricity-low-key",
    "forms": [
      {
        "sprite": "toxtricity-gmax",
        "types": ["Electric", "Poison"],
        "name": "Gigantamax Toxtricity"
      }
    ]
  },
  {
    "pokedexNo": 850,
    "name": "Sizzlipede",
    "types": ["Fire", "Bug"],
    "evolutions": ["Centiskorch"],
    "abilities": [
      ["Flash-fire", "false"],
      ["White-smoke", "false"],
      ["Flame-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "sizzlipede",
    "forms": []
  },
  {
    "pokedexNo": 851,
    "name": "Centiskorch",
    "types": ["Fire", "Bug"],
    "evolutions": [],
    "abilities": [
      ["Flash-fire", "false"],
      ["White-smoke", "false"],
      ["Flame-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "centiskorch",
    "forms": [
      {
        "sprite": "centiskorch-gmax",
        "types": ["Fire", "Bug"],
        "name": "Gigantamax Centiskorch"
      }
    ]
  },
  {
    "pokedexNo": 852,
    "name": "Clobbopus",
    "types": ["Fighting"],
    "evolutions": ["Grapploct"],
    "abilities": [
      ["Limber", "false"],
      ["Technician", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "clobbopus",
    "forms": []
  },
  {
    "pokedexNo": 853,
    "name": "Grapploct",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Limber", "false"],
      ["Technician", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "grapploct",
    "forms": []
  },
  {
    "pokedexNo": 854,
    "name": "Sinistea",
    "types": ["Ghost"],
    "evolutions": ["Polteageist"],
    "abilities": [
      ["Weak-armor", "false"],
      ["Cursed-body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "sinistea",
    "forms": []
  },
  {
    "pokedexNo": 855,
    "name": "Polteageist",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [
      ["Weak-armor", "false"],
      ["Cursed-body", "true"]
    ],
    "gender": "Genderless",
    "sprite": "polteageist",
    "forms": []
  },
  {
    "pokedexNo": 856,
    "name": "Hatenna",
    "types": ["Psychic"],
    "evolutions": ["Hattrem"],
    "abilities": [
      ["Healer", "false"],
      ["Anticipation", "false"],
      ["Magic-bounce", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "hatenna",
    "forms": []
  },
  {
    "pokedexNo": 857,
    "name": "Hattrem",
    "types": ["Psychic"],
    "evolutions": ["Hatterene"],
    "abilities": [
      ["Healer", "false"],
      ["Anticipation", "false"],
      ["Magic-bounce", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "hattrem",
    "forms": []
  },
  {
    "pokedexNo": 858,
    "name": "Hatterene",
    "types": ["Psychic", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Healer", "false"],
      ["Anticipation", "false"],
      ["Magic-bounce", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "hatterene",
    "forms": [
      {
        "sprite": "hatterene-gmax",
        "types": ["Psychic", "Fairy"],
        "name": "Gigantamax Hatterene"
      }
    ]
  },
  {
    "pokedexNo": 859,
    "name": "Impidimp",
    "types": ["Dark", "Fairy"],
    "evolutions": ["Morgrem"],
    "abilities": [
      ["Prankster", "false"],
      ["Frisk", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "100.0:0.0",
    "sprite": "impidimp",
    "forms": []
  },
  {
    "pokedexNo": 860,
    "name": "Morgrem",
    "types": ["Dark", "Fairy"],
    "evolutions": ["Grimmsnarl"],
    "abilities": [
      ["Prankster", "false"],
      ["Frisk", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "100.0:0.0",
    "sprite": "morgrem",
    "forms": []
  },
  {
    "pokedexNo": 861,
    "name": "Grimmsnarl",
    "types": ["Dark", "Fairy"],
    "evolutions": [],
    "abilities": [
      ["Prankster", "false"],
      ["Frisk", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "100.0:0.0",
    "sprite": "grimmsnarl",
    "forms": [
      {
        "sprite": "grimmsnarl-gmax",
        "types": ["Dark", "Fairy"],
        "name": "Gigantamax Grimmsnarl"
      }
    ]
  },
  {
    "pokedexNo": 862,
    "name": "Obstagoon",
    "types": ["Dark", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Reckless", "false"],
      ["Guts", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "obstagoon",
    "forms": []
  },
  {
    "pokedexNo": 863,
    "name": "Perrserker",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [
      ["Battle-armor", "false"],
      ["Tough-claws", "false"],
      ["Steely-spirit", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "perrserker",
    "forms": []
  },
  {
    "pokedexNo": 864,
    "name": "Cursola",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [
      ["Weak-armor", "false"],
      ["Perish-body", "true"]
    ],
    "gender": "25.0:75.0",
    "sprite": "cursola",
    "forms": []
  },
  {
    "pokedexNo": 865,
    "name": "Sirfetch'd",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Steadfast", "false"],
      ["Scrappy", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "sirfetchd",
    "forms": []
  },
  {
    "pokedexNo": 866,
    "name": "Mr. Rime",
    "types": ["Ice", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Tangled-feet", "false"],
      ["Screen-cleaner", "false"],
      ["Ice-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "mr-rime",
    "forms": []
  },
  {
    "pokedexNo": 867,
    "name": "Runerigus",
    "types": ["Ground", "Ghost"],
    "evolutions": [],
    "abilities": [["Wandering-spirit", "false"]],
    "gender": "50.0:50.0",
    "sprite": "runerigus",
    "forms": []
  },
  {
    "pokedexNo": 868,
    "name": "Milcery",
    "types": ["Fairy"],
    "evolutions": [
      "Caramel Swirl Berry Alcremie",
      "Caramel Swirl Clover Alcremie",
      "Caramel Swirl Flower Alcremie",
      "Caramel Swirl Love Alcremie",
      "Caramel Swirl Plain Alcremie",
      "Caramel Swirl Ribbon Alcremie",
      "Caramel Swirl Star Alcremie",
      "Caramel Swirl Strawberry Alcremie",
      "Lemon Cream Berry Alcremie",
      "Lemon Cream Clover Alcremie",
      "Lemon Cream Flower Alcremie",
      "Lemon Cream Love Alcremie",
      "Lemon Cream Plain Alcremie",
      "Lemon Cream Ribbon Alcremie",
      "Lemon Cream Star Alcremie",
      "Lemon Cream Strawberry Alcremie",
      "Matcha Cream Berry Alcremie",
      "Matcha Cream Clover Alcremie",
      "Matcha Cream Flower Alcremie",
      "Matcha Cream Love Alcremie",
      "Matcha Cream Plain Alcremie",
      "Matcha Cream Ribbon Alcremie",
      "Matcha Cream Star Alcremie",
      "Matcha Cream Strawberry Alcremie",
      "Mint Cream Berry Alcremie",
      "Mint Cream Clover Alcremie",
      "Mint Cream Flower Alcremie",
      "Mint Cream Love Alcremie",
      "Mint Cream Plain Alcremie",
      "Mint Cream Ribbon Alcremie",
      "Mint Cream Star Alcremie",
      "Mint Cream Strawberry Alcremie",
      "Rainbow Swirl Berry Alcremie",
      "Rainbow Swirl Clover Alcremie",
      "Rainbow Swirl Flower Alcremie",
      "Rainbow Swirl Love Alcremie",
      "Rainbow Swirl Plain Alcremie",
      "Rainbow Swirl Ribbon Alcremie",
      "Rainbow Swirl Star Alcremie",
      "Rainbow Swirl Strawberry Alcremie",
      "Ruby Cream Berry Alcremie",
      "Ruby Cream Clover Alcremie",
      "Ruby Cream Flower Alcremie",
      "Ruby Cream Love Alcremie",
      "Ruby Cream Plain Alcremie",
      "Ruby Cream Ribbon Alcremie",
      "Ruby Cream Star Alcremie",
      "Ruby Cream Strawberry Alcremie",
      "Ruby Swirl Berry Alcremie",
      "Ruby Swirl Clover Alcremie",
      "Ruby Swirl Flower Alcremie",
      "Ruby Swirl Love Alcremie",
      "Ruby Swirl Plain Alcremie",
      "Ruby Swirl Ribbon Alcremie",
      "Ruby Swirl Star Alcremie",
      "Ruby Swirl Strawberry Alcremie",
      "Salted Cream Berry Alcremie",
      "Salted Cream Clover Alcremie",
      "Salted Cream Flower Alcremie",
      "Salted Cream Love Alcremie",
      "Salted Cream Plain Alcremie",
      "Salted Cream Ribbon Alcremie",
      "Salted Cream Star Alcremie",
      "Salted Cream Strawberry Alcremie",
      "Vanilla Cream Berry Alcremie",
      "Vanilla Cream Clover Alcremie",
      "Vanilla Cream Flower Alcremie",
      "Vanilla Cream Love Alcremie",
      "Vanilla Cream Plain Alcremie",
      "Vanilla Cream Ribbon Alcremie",
      "Vanilla Cream Star Alcremie",
      "Vanilla Cream Strawberry Alcremie"
    ],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "milcery",
    "forms": []
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Caramel Swirl Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-caramel-swirl-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Lemon Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-lemon-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Matcha Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-matcha-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Mint Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-mint-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Rainbow Swirl Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-rainbow-swirl-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Ruby Swirl Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-ruby-swirl-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Salted Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-salted-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Berry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-berry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Clover Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-clover",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Flower Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-flower",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Love Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-love",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Plain Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-plain",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Ribbon Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-ribbon",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Star Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-star",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 869,
    "name": "Vanilla Cream Strawberry Alcremie",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Sweet-veil", "false"],
      ["Aroma-veil", "true"]
    ],
    "gender": "0.0:100.0",
    "sprite": "alcremie-vanilla-cream-strawberry",
    "forms": [
      {
        "sprite": "alcremie-gmax",
        "types": ["Fairy"],
        "name": "Gigantamax Alcremie"
      }
    ]
  },
  {
    "pokedexNo": 870,
    "name": "Falinks",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [
      ["Battle-armor", "false"],
      ["Defiant", "true"]
    ],
    "gender": "Genderless",
    "sprite": "falinks",
    "forms": []
  },
  {
    "pokedexNo": 871,
    "name": "Pincurchin",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Lightning-rod", "false"],
      ["Electric-surge", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "pincurchin",
    "forms": []
  },
  {
    "pokedexNo": 872,
    "name": "Snom",
    "types": ["Ice", "Bug"],
    "evolutions": ["Frosmoth"],
    "abilities": [
      ["Shield-dust", "false"],
      ["Ice-scales", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "snom",
    "forms": []
  },
  {
    "pokedexNo": 873,
    "name": "Frosmoth",
    "types": ["Ice", "Bug"],
    "evolutions": [],
    "abilities": [
      ["Shield-dust", "false"],
      ["Ice-scales", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "frosmoth",
    "forms": []
  },
  {
    "pokedexNo": 874,
    "name": "Stonjourner",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [["Power-spot", "false"]],
    "gender": "50.0:50.0",
    "sprite": "stonjourner",
    "forms": []
  },
  {
    "pokedexNo": 875,
    "name": "Eiscue",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [["Ice-face", "false"]],
    "gender": "50.0:50.0",
    "sprite": "eiscue",
    "forms": [
      {
        "sprite": "eiscue-noice",
        "types": ["Ice"],
        "name": "Noice Face Eiscue"
      }
    ]
  },
  {
    "pokedexNo": 876,
    "name": "Male Indeedee",
    "types": ["Psychic", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Inner focus", "false"],
      ["Synchronize", "false"],
      ["Psychic surge", "true"]
    ],
    "gender": "100:0",
    "sprite": "indeedee",
    "forms": []
  },
  {
    "pokedexNo": 876,
    "name": "Female Indeedee",
    "types": ["Psychic", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Own Tempo", "false"],
      ["Synchronize", "false"],
      ["Psychic surge", "true"]
    ],
    "gender": "0:100",
    "sprite": "indeedee-f",
    "forms": []
  },
  {
    "pokedexNo": 877,
    "name": "Full Belly Mode Morpeko",
    "types": ["Electric", "Dark"],
    "evolutions": [],
    "abilities": [["Hunger-switch", "false"]],
    "gender": "50.0:50.0",
    "sprite": "morpeko",
    "forms": [
      {
        "sprite": "morpeko-hangry",
        "types": ["Electric", "Dark"],
        "name": "Hangry Mode Morpeko"
      }
    ]
  },
  {
    "pokedexNo": 878,
    "name": "Cufant",
    "types": ["Steel"],
    "evolutions": ["Copperajah"],
    "abilities": [
      ["Sheer force", "false"],
      ["Heavy metal", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "cufant",
    "forms": []
  },
  {
    "pokedexNo": 879,
    "name": "Copperajah",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [
      ["Sheer-force", "false"],
      ["Heavy-metal", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "copperajah",
    "forms": [
      {
        "sprite": "copperajah-gmax",
        "types": ["Steel"],
        "name": "Gigantamax Copperajah"
      }
    ]
  },
  {
    "pokedexNo": 880,
    "name": "Dracozolt",
    "types": ["Electric", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Volt-absorb", "false"],
      ["Hustle", "false"],
      ["Sand-rush", "true"]
    ],
    "gender": "Genderless",
    "sprite": "dracozolt",
    "forms": []
  },
  {
    "pokedexNo": 881,
    "name": "Arctozolt",
    "types": ["Electric", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Volt-absorb", "false"],
      ["Static", "false"],
      ["Slush-rush", "true"]
    ],
    "gender": "Genderless",
    "sprite": "arctozolt",
    "forms": []
  },
  {
    "pokedexNo": 882,
    "name": "Dracovish",
    "types": ["Water", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Water-absorb", "false"],
      ["Strong-jaw", "false"],
      ["Sand-rush", "true"]
    ],
    "gender": "Genderless",
    "sprite": "dracovish",
    "forms": []
  },
  {
    "pokedexNo": 883,
    "name": "Arctovish",
    "types": ["Water", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Water-absorb", "false"],
      ["Ice-body", "false"],
      ["Slush-rush", "true"]
    ],
    "gender": "Genderless",
    "sprite": "arctovish",
    "forms": []
  },
  {
    "pokedexNo": 884,
    "name": "Duraludon",
    "types": ["Steel", "Dragon"],
    "evolutions": [],
    "abilities": [
      ["Light-metal", "false"],
      ["Heavy-metal", "false"],
      ["Stalwart", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "duraludon",
    "forms": [
      {
        "sprite": "duraludon-gmax",
        "types": ["Steel", "Dragon"],
        "name": "Gigantamax Duraludon"
      }
    ]
  },
  {
    "pokedexNo": 885,
    "name": "Dreepy",
    "types": ["Dragon", "Ghost"],
    "evolutions": ["Drakloak"],
    "abilities": [
      ["Clear-body", "false"],
      ["Infiltrator", "false"],
      ["Cursed-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "dreepy",
    "forms": []
  },
  {
    "pokedexNo": 886,
    "name": "Drakloak",
    "types": ["Dragon", "Ghost"],
    "evolutions": ["Dragapult"],
    "abilities": [
      ["Clear-body", "false"],
      ["Infiltrator", "false"],
      ["Cursed-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "drakloak",
    "forms": []
  },
  {
    "pokedexNo": 887,
    "name": "Dragapult",
    "types": ["Dragon", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Clear-body", "false"],
      ["Infiltrator", "false"],
      ["Cursed-body", "true"]
    ],
    "gender": "50.0:50.0",
    "sprite": "dragapult",
    "forms": []
  },
  {
    "pokedexNo": 888,
    "name": "Zacian",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [["Intrepid-sword", "false"]],
    "gender": "Genderless",
    "sprite": "zacian",
    "forms": [
      {
        "sprite": "zacian-crowned",
        "types": ["Fairy", "Steel"],
        "name": "Crowned Sword Zacian"
      }
    ]
  },
  {
    "pokedexNo": 889,
    "name": "Zamazenta",
    "types": ["Fighting"],
    "evolutions": [],
    "abilities": [["Dauntless-shield", "false"]],
    "gender": "Genderless",
    "sprite": "zamazenta",
    "forms": [
      {
        "sprite": "zamazenta-crowned",
        "types": ["Fighting", "Steel"],
        "name": "Crowned Shield Zamazenta"
      }
    ]
  },
  {
    "pokedexNo": 890,
    "name": "Eternatus",
    "types": ["Poison", "Dragon"],
    "evolutions": [],
    "abilities": [["Pressure", "false"]],
    "gender": "Genderless",
    "sprite": "eternatus",
    "forms": []
  },
  {
    "pokedexNo": 891,
    "name": "Kubfu",
    "types": ["Fighting"],
    "evolutions": ["Single Strike Urshifu", "Rapid Strike Urshifu"],
    "abilities": [["Inner-focus", "false"]],
    "gender": "87.5:12.5",
    "sprite": "kubfu",
    "forms": []
  },
  {
    "pokedexNo": 892,
    "name": "Single Strike Urshifu",
    "types": ["Fighting", "Dark"],
    "evolutions": [],
    "abilities": [["Unseen-fist", "false"]],
    "gender": "87.5:12.5",
    "sprite": "urshifu-single-strike",
    "forms": [
      {
        "sprite": "urshifu-single-strike-gmax",
        "types": ["Fighting", "Dark"],
        "name": "Gigantamax Single Strike Urshifu"
      }
    ]
  },
  {
    "pokedexNo": 892,
    "name": "Rapid Strike Urshifu",
    "types": ["Fighting", "Water"],
    "evolutions": [],
    "abilities": [["Unseen-fist", "false"]],
    "gender": "87.5:12.5",
    "sprite": "urshifu-rapid-strike",
    "forms": [
      {
        "sprite": "urshifu-rapid-strike-gmax",
        "types": ["Fighting", "Water"],
        "name": "Gigantamax Rapid Strike Urshifu"
      }
    ]
  },
  {
    "pokedexNo": 893,
    "name": "Zarude",
    "types": ["Dark", "Grass"],
    "evolutions": [],
    "abilities": [["Leaf-guard", "false"]],
    "gender": "Genderless",
    "sprite": "zarude",
    "forms": [
      {
        "sprite": "zarude-dada",
        "types": ["Dark", "Grass"],
        "name": "Dada Form Zarude"
      }
    ]
  },
  {
    "pokedexNo": 894,
    "name": "Regieleki",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [["Transistor", "false"]],
    "gender": "Genderless",
    "sprite": "regieleki",
    "forms": []
  },
  {
    "pokedexNo": 895,
    "name": "Regidrago",
    "types": ["Dragon"],
    "evolutions": [],
    "abilities": [["Dragons-maw", "false"]],
    "gender": "Genderless",
    "sprite": "regidrago",
    "forms": []
  },
  {
    "pokedexNo": 896,
    "name": "Glastrier",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [["Chilling-neigh", "false"]],
    "gender": "Genderless",
    "sprite": "glastrier",
    "forms": []
  },
  {
    "pokedexNo": 897,
    "name": "Spectrier",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [["Grim-neigh", "false"]],
    "gender": "Genderless",
    "sprite": "spectrier",
    "forms": []
  },
  {
    "pokedexNo": 898,
    "name": "Calyrex",
    "types": ["Psychic", "Grass"],
    "evolutions": [],
    "abilities": [["Unnerve", "false"]],
    "gender": "Genderless",
    "sprite": "calyrex",
    "forms": [
      {
        "sprite": "calyrex-ice-rider",
        "types": ["Psychic", "Ice"],
        "name": "Ice Ride Calyrex"
      },
      {
        "sprite": "calyrex-shadow-rider",
        "types": ["Psychic", "Ghost"],
        "name": "Shadow Ride Calyrex"
      }
    ]
  },
  {
    "pokedexNo": 899,
    "name": "Wyrdeer",
    "types": ["Normal", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Frisk", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50.2:49.2",
    "sprite": "wyrdeer",
    "forms": []
  },
  {
    "pokedexNo": 900,
    "name": "Kleavor",
    "types": ["Bug", "Rock"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Sheer Force", "false"],
      ["Steadfast", "true"]
    ],
    "gender": "50.2:49.2",
    "sprite": "kleavor",
    "forms": []
  },
  {
    "pokedexNo": 901,
    "name": "Ursaluna",
    "types": ["Ground", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Guts", "false"],
      ["Bulletproof", "false"],
      ["Unnerve", "true"]
    ],
    "gender": "50.2:49.2",
    "sprite": "ursaluna",
    "forms": []
  },
  {
    "pokedexNo": 902,
    "name": "Male Basculegion",
    "types": ["Water", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Adaptability", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "100:0",
    "sprite": "basculegion",
    "forms": []
  },
  {
    "pokedexNo": 902,
    "name": "Female Basculegion",
    "types": ["Water", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Swift Swim", "false"],
      ["Adaptability", "false"],
      ["Mold Breaker", "true"]
    ],
    "gender": "0:100",
    "sprite": "basculegion-f",
    "forms": []
  },
  {
    "pokedexNo": 903,
    "name": "Sneasler",
    "types": ["Fighting", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Pressure", "false"],
      ["Poison Touch", "true"]
    ],
    "gender": "50.2:49.8",
    "sprite": "sneasler",
    "forms": []
  },
  {
    "pokedexNo": 904,
    "name": "Overqwil",
    "types": ["Dark", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Swift Swim", "false"],
      ["Intimidate", "true"]
    ],
    "gender": "50.2:49.8",
    "sprite": "overqwil",
    "forms": []
  },
  {
    "pokedexNo": 905,
    "name": "Enamorus",
    "types": ["Fairy", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Healer", "false"],
      ["Contrary", "true"]
    ],
    "gender": "0:100",
    "sprite": "enamorus",
    "forms": [
      {
        "sprite": "enamorus-therian",
        "types": ["Fairy", "Flying"],
        "name": "Therian Form Enamorus"
      }
    ]
  },
  {
    "pokedexNo": 906,
    "name": "Sprigatito",
    "types": ["Grass"],
    "evolutions": ["Floragato"],
    "abilities": [
      ["Overgrow", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "sprigatito",
    "forms": []
  },
  {
    "pokedexNo": 907,
    "name": "Floragato",
    "types": ["Grass"],
    "evolutions": ["Meowscarada"],
    "abilities": [
      ["Overgrow", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "floragato",
    "forms": []
  },
  {
    "pokedexNo": 908,
    "name": "Meowscarada",
    "types": ["Grass", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Overgrow", "false"],
      ["Protean", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "meowscarada",
    "forms": []
  },
  {
    "pokedexNo": 909,
    "name": "Fuecoco",
    "types": ["Fire"],
    "evolutions": ["Crocalor"],
    "abilities": [
      ["Blaze", "false"],
      ["Unaware", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "fuecoco",
    "forms": []
  },
  {
    "pokedexNo": 910,
    "name": "Crocalor",
    "types": ["Fire"],
    "evolutions": ["Skeledirge"],
    "abilities": [
      ["Blaze", "false"],
      ["Unaware", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "crocalor",
    "forms": []
  },
  {
    "pokedexNo": 911,
    "name": "Skeledirge",
    "types": ["Fire", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Blaze", "false"],
      ["Unaware", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "skeledirge",
    "forms": []
  },
  {
    "pokedexNo": 912,
    "name": "Quaxly",
    "types": ["Water"],
    "evolutions": ["Quaxwell"],
    "abilities": [
      ["Torrent", "false"],
      ["Moxie", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "quaxly",
    "forms": []
  },
  {
    "pokedexNo": 913,
    "name": "Quaxwell",
    "types": ["Water"],
    "evolutions": ["Quaquaval"],
    "abilities": [
      ["Torrent", "false"],
      ["Moxie", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "quaxwell",
    "forms": []
  },
  {
    "pokedexNo": 914,
    "name": "Quaquaval",
    "types": ["Water", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Torrent", "false"],
      ["Moxie", "true"]
    ],
    "gender": "87.5:12.5",
    "sprite": "quaquaval",
    "forms": []
  },
  {
    "pokedexNo": 915,
    "name": "Lechonk",
    "types": ["Normal"],
    "evolutions": ["Male Oinkologne", "Female Oinkologne"],
    "abilities": [
      ["Aroma Veil", "false"],
      ["Gluttony", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "50:50",
    "sprite": "lechonk",
    "forms": []
  },
  {
    "pokedexNo": 916,
    "name": "Male Oinkologne",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Lingering Aroma", "false"],
      ["Gluttony", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "100:0",
    "sprite": "oinkologne",
    "forms": []
  },
  {
    "pokedexNo": 916,
    "name": "Female Oinkologne",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Aroma Veil", "false"],
      ["Gluttony", "false"],
      ["Thick Fat", "true"]
    ],
    "gender": "0:100",
    "sprite": "oinkologne-f",
    "forms": []
  },
  {
    "pokedexNo": 917,
    "name": "Tarountula",
    "types": ["Bug"],
    "evolutions": ["Spidops"],
    "abilities": [
      ["Insomnia", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50:50",
    "sprite": "tarountula",
    "forms": []
  },
  {
    "pokedexNo": 918,
    "name": "Spidops",
    "types": ["Bug"],
    "evolutions": [],
    "abilities": [
      ["Insomnia", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50:50",
    "sprite": "spidops",
    "forms": []
  },
  {
    "pokedexNo": 919,
    "name": "Nymble",
    "types": ["Bug"],
    "evolutions": ["Lokix"],
    "abilities": [
      ["Swarm", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "nymble",
    "forms": []
  },
  {
    "pokedexNo": 920,
    "name": "Lokix",
    "types": ["Bug", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Swarm", "false"],
      ["Tinted Lens", "true"]
    ],
    "gender": "50:50",
    "sprite": "lokix",
    "forms": []
  },
  {
    "pokedexNo": 921,
    "name": "Pawmi",
    "types": ["Electric"],
    "evolutions": ["Pawmo"],
    "abilities": [
      ["Static", "false"],
      ["Natural Cure", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "50:50",
    "sprite": "pawmi",
    "forms": []
  },
  {
    "pokedexNo": 922,
    "name": "Pawmo",
    "types": ["Electric"],
    "evolutions": ["Pawmot"],
    "abilities": [
      ["Volt Absorb", "false"],
      ["Natural Cure", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "50:50",
    "sprite": "pawmo",
    "forms": []
  },
  {
    "pokedexNo": 923,
    "name": "Pawmot",
    "types": ["Electric", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Volt Absorb", "false"],
      ["Natural Cure", "false"],
      ["Iron Fist", "true"]
    ],
    "gender": "50:50",
    "sprite": "pawmot",
    "forms": []
  },
  {
    "pokedexNo": 924,
    "name": "Tandemaus",
    "types": ["Normal"],
    "evolutions": ["Moushold Family of Three", "Moushold Family of Four"],
    "abilities": [
      ["Run Away", "false"],
      ["Pickup", "false"],
      ["Own Tempo", "true"]
    ],
    "gender": "Genderless",
    "sprite": "tandemaus",
    "forms": []
  },
  {
    "pokedexNo": 925,
    "name": "Moushold Family of Three",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Friend Guard", "false"],
      ["Cheek Pouch", "false"],
      ["Technician", "true"]
    ],
    "gender": "Genderless",
    "sprite": "moushold",
    "forms": []
  },
  {
    "pokedexNo": 925,
    "name": "Moushold Family of Four",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Friend Guard", "false"],
      ["Cheek Pouch", "false"],
      ["Technician", "true"]
    ],
    "gender": "Genderless",
    "sprite": "moushold-four",
    "forms": []
  },
  {
    "pokedexNo": 926,
    "name": "Fidough",
    "types": ["Fairy"],
    "evolutions": ["Dachsbun"],
    "abilities": [
      ["Own Tempo", "false"],
      ["Klutz", "true"]
    ],
    "gender": "50:50",
    "sprite": "fidough",
    "forms": []
  },
  {
    "pokedexNo": 927,
    "name": "Dachsbun",
    "types": ["Fairy"],
    "evolutions": [],
    "abilities": [
      ["Well-Baked Body", "false"],
      ["Aroma Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "dachsbun",
    "forms": []
  },
  {
    "pokedexNo": 928,
    "name": "Smoliv",
    "types": ["Grass", "Normal"],
    "evolutions": ["Dolliv"],
    "abilities": [
      ["Early Bird", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "smoliv",
    "forms": []
  },
  {
    "pokedexNo": 929,
    "name": "Dolliv",
    "types": ["Grass", "Normal"],
    "evolutions": ["Arboliva"],
    "abilities": [
      ["Early Bird", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "dolliv",
    "forms": []
  },
  {
    "pokedexNo": 930,
    "name": "Arboliva",
    "types": ["Grass", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Seed Sower", "false"],
      ["Harvest", "true"]
    ],
    "gender": "50:50",
    "sprite": "arboliva",
    "forms": []
  },
  {
    "pokedexNo": 931,
    "name": "Green Plumage Squawkabilly",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Hustle", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "squawkabilly-green",
    "forms": []
  },
  {
    "pokedexNo": 931,
    "name": "Blue Plumage Squawkabilly",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Hustle", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "squawkabilly-blue",
    "forms": []
  },
  {
    "pokedexNo": 931,
    "name": "Yellow Plumage Squawkabilly",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Hustle", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "squawkabilly-yellow",
    "forms": []
  },
  {
    "pokedexNo": 931,
    "name": "White Plumage Squawkabilly",
    "types": ["Normal", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Hustle", "false"],
      ["Guts", "true"]
    ],
    "gender": "50:50",
    "sprite": "squawkabilly-white",
    "forms": []
  },
  {
    "pokedexNo": 932,
    "name": "Nacli",
    "types": ["Rock"],
    "evolutions": ["Naclstack"],
    "abilities": [
      ["Purifying Salt", "false"],
      ["Sturdy", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "nacli",
    "forms": []
  },
  {
    "pokedexNo": 933,
    "name": "Naclstack",
    "types": ["Rock"],
    "evolutions": ["Garganacl"],
    "abilities": [
      ["Purifying Salt", "false"],
      ["Sturdy", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "naclstack",
    "forms": []
  },
  {
    "pokedexNo": 934,
    "name": "Garganacl",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Purifying Salt", "false"],
      ["Sturdy", "false"],
      ["Clear Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "garganacl",
    "forms": []
  },
  {
    "pokedexNo": 935,
    "name": "Charcadet",
    "types": ["Fire"],
    "evolutions": ["Armarouge", "Ceruledge"],
    "abilities": [
      ["Falsh Fire", "false"],
      ["Falme Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "charcadet",
    "forms": []
  },
  {
    "pokedexNo": 936,
    "name": "Armarouge",
    "types": ["Fire", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Falsh Fire", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "armarouge",
    "forms": []
  },
  {
    "pokedexNo": 937,
    "name": "Ceruledge",
    "types": ["Fire", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Falsh Fire", "false"],
      ["Weak Armor", "true"]
    ],
    "gender": "50:50",
    "sprite": "ceruledge",
    "forms": []
  },
  {
    "pokedexNo": 938,
    "name": "Tadbulb",
    "types": ["Electric"],
    "evolutions": ["Bellibolt"],
    "abilities": [
      ["Own Tempo", "false"],
      ["Static", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "tadbulb",
    "forms": []
  },
  {
    "pokedexNo": 939,
    "name": "Bellibolt",
    "types": ["Electric"],
    "evolutions": [],
    "abilities": [
      ["Electromorphosis", "false"],
      ["Static", "false"],
      ["Damp", "true"]
    ],
    "gender": "50:50",
    "sprite": "bellibolt",
    "forms": []
  },
  {
    "pokedexNo": 940,
    "name": "Wattrel",
    "types": ["Electric", "Flying"],
    "evolutions": ["Kilowattrel"],
    "abilities": [
      ["Wind Power", "false"],
      ["Volt Absorb", "false"],
      ["Competitive", "true"]
    ],
    "gender": "50:50",
    "sprite": "wattrel",
    "forms": []
  },
  {
    "pokedexNo": 941,
    "name": "Kilowattrel",
    "types": ["Electric", "Flying"],
    "evolutions": [],
    "abilities": [
      ["Wind Power", "false"],
      ["Volt Absorb", "false"],
      ["Competitive", "true"]
    ],
    "gender": "50:50",
    "sprite": "kilowattrel",
    "forms": []
  },
  {
    "pokedexNo": 942,
    "name": "Maschiff",
    "types": ["Dark"],
    "evolutions": ["Mabosstiff"],
    "abilities": [
      ["Intimidate", "false"],
      ["Run Away", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50:50",
    "sprite": "maschiff",
    "forms": []
  },
  {
    "pokedexNo": 943,
    "name": "Mabosstiff",
    "types": ["Dark"],
    "evolutions": [],
    "abilities": [
      ["Intimidate", "false"],
      ["Guard Dog", "false"],
      ["Stakeout", "true"]
    ],
    "gender": "50:50",
    "sprite": "mabosstiff",
    "forms": []
  },
  {
    "pokedexNo": 944,
    "name": "Shroodle",
    "types": ["Poison", "Normal"],
    "evolutions": ["Grafaiai"],
    "abilities": [
      ["Unburden", "false"],
      ["Pickpocket", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "shroodle",
    "forms": []
  },
  {
    "pokedexNo": 945,
    "name": "Grafaiai",
    "types": ["Poison", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Unburden", "false"],
      ["Poison Touch", "false"],
      ["Prankster", "true"]
    ],
    "gender": "50:50",
    "sprite": "grafaiai",
    "forms": []
  },
  {
    "pokedexNo": 946,
    "name": "Bramblin",
    "types": ["Grass", "Ghost"],
    "evolutions": ["Brambleghast"],
    "abilities": [
      ["Wind Rider", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "bramblin",
    "forms": []
  },
  {
    "pokedexNo": 947,
    "name": "Brambleghast",
    "types": ["Grass", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Wind Rider", "false"],
      ["Infiltrator", "true"]
    ],
    "gender": "50:50",
    "sprite": "brambleghast",
    "forms": []
  },
  {
    "pokedexNo": 948,
    "name": "Toedscool",
    "types": ["Ground", "Grass"],
    "evolutions": ["Toedscruel"],
    "abilities": [["Mycelium Might", "false"]],
    "gender": "50:50",
    "sprite": "toedscool",
    "forms": []
  },
  {
    "pokedexNo": 949,
    "name": "Toedscruel",
    "types": ["Ground", "Grass"],
    "evolutions": [],
    "abilities": [["Mycelium Might", "false"]],
    "gender": "50:50",
    "sprite": "toedscruel",
    "forms": []
  },
  {
    "pokedexNo": 950,
    "name": "Klawf",
    "types": ["Rock"],
    "evolutions": [],
    "abilities": [
      ["Anger Shell", "false"],
      ["Shell Armor", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "klawf",
    "forms": []
  },
  {
    "pokedexNo": 951,
    "name": "Capsakid",
    "types": ["Grass"],
    "evolutions": ["Scovillain"],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Insomnia", "false"],
      ["Klutz", "true"]
    ],
    "gender": "50:50",
    "sprite": "capsakid",
    "forms": []
  },
  {
    "pokedexNo": 952,
    "name": "Scovillain",
    "types": ["Grass", "Fire"],
    "evolutions": [],
    "abilities": [
      ["Chlorophyll", "false"],
      ["Insomnia", "false"],
      ["Moody", "true"]
    ],
    "gender": "50:50",
    "sprite": "scovillain",
    "forms": []
  },
  {
    "pokedexNo": 953,
    "name": "Rellor",
    "types": ["Bug"],
    "evolutions": ["Rabsca"],
    "abilities": [
      ["Compound Eyes", "false"],
      ["Shed Skin", "true"]
    ],
    "gender": "50:50",
    "sprite": "rellor",
    "forms": []
  },
  {
    "pokedexNo": 954,
    "name": "Rabsca",
    "types": ["Bug", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Synchronize", "false"],
      ["Telepathy", "true"]
    ],
    "gender": "50:50",
    "sprite": "rabsca",
    "forms": []
  },
  {
    "pokedexNo": 955,
    "name": "Flittle",
    "types": ["Psychic"],
    "evolutions": ["Espathra"],
    "abilities": [
      ["Anticipation", "false"],
      ["Frisk", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "flittle",
    "forms": []
  },
  {
    "pokedexNo": 956,
    "name": "Espathra",
    "types": ["Psychic"],
    "evolutions": [],
    "abilities": [
      ["Opportunist", "false"],
      ["Frisk", "false"],
      ["Speed Boost", "true"]
    ],
    "gender": "50:50",
    "sprite": "espathra",
    "forms": []
  },
  {
    "pokedexNo": 957,
    "name": "Tinkatink",
    "types": ["Fairy", "Steel"],
    "evolutions": ["Tinkatuff"],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Own Tempo", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "0:100",
    "sprite": "tinkatink",
    "forms": []
  },
  {
    "pokedexNo": 958,
    "name": "Tinkatuff",
    "types": ["Fairy", "Steel"],
    "evolutions": ["Tinkaton"],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Own Tempo", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "0:100",
    "sprite": "tinkatuff",
    "forms": []
  },
  {
    "pokedexNo": 959,
    "name": "Tinkaton",
    "types": ["Fairy", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Own Tempo", "false"],
      ["Pickpocket", "true"]
    ],
    "gender": "0:100",
    "sprite": "tinkaton",
    "forms": []
  },
  {
    "pokedexNo": 960,
    "name": "Wiglett",
    "types": ["Water"],
    "evolutions": ["Wugtrio"],
    "abilities": [
      ["Gooey", "false"],
      ["Rattled", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "wiglett",
    "forms": []
  },
  {
    "pokedexNo": 961,
    "name": "Wugtrio",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [
      ["Gooey", "false"],
      ["Rattled", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "wugtrio",
    "forms": []
  },
  {
    "pokedexNo": 962,
    "name": "Bombirdier",
    "types": ["Flying", "Dark"],
    "evolutions": [],
    "abilities": [
      ["Big Pecks", "false"],
      ["Keen Eye", "false"],
      ["Rocky Payload", "true"]
    ],
    "gender": "50:50",
    "sprite": "bombirdier",
    "forms": []
  },
  {
    "pokedexNo": 963,
    "name": "Finizen",
    "types": ["Water"],
    "evolutions": ["Palafin"],
    "abilities": [["Water Veil", "false"]],
    "gender": "50:50",
    "sprite": "finizen",
    "forms": []
  },
  {
    "pokedexNo": 964,
    "name": "Palafin",
    "types": ["Water"],
    "evolutions": [],
    "abilities": [["Zero to Hero", "false"]],
    "gender": "50:50",
    "sprite": "palafin",
    "forms": [
      {
        "sprite": "palafin-hero",
        "types": ["Water"],
        "name": "Hero Form Palafin"
      }
    ]
  },
  {
    "pokedexNo": 965,
    "name": "Varoom",
    "types": ["Steel", "Poison"],
    "evolutions": ["Revavroom"],
    "abilities": [
      ["Overcoat", "false"],
      ["Filter", "true"]
    ],
    "gender": "50:50",
    "sprite": "varoom",
    "forms": []
  },
  {
    "pokedexNo": 966,
    "name": "Revavroom",
    "types": ["Steel", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Overcoat", "false"],
      ["Filter", "true"]
    ],
    "gender": "50:50",
    "sprite": "revavroom",
    "forms": []
  },
  {
    "pokedexNo": 967,
    "name": "Cyclizar",
    "types": ["Dragon", "Normal"],
    "evolutions": [],
    "abilities": [
      ["Shed Skin", "false"],
      ["Regenerator", "true"]
    ],
    "gender": "50:50",
    "sprite": "cyclizar",
    "forms": []
  },
  {
    "pokedexNo": 968,
    "name": "Orthworm",
    "types": ["Steel"],
    "evolutions": [],
    "abilities": [
      ["Earth Eater", "false"],
      ["Sand Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "orthworm",
    "forms": []
  },
  {
    "pokedexNo": 969,
    "name": "Glimmet",
    "types": ["Rock", "Poison"],
    "evolutions": ["Glimmora"],
    "abilities": [
      ["Toxic Debris", "false"],
      ["Corrosion", "true"]
    ],
    "gender": "50:50",
    "sprite": "glimmet",
    "forms": []
  },
  {
    "pokedexNo": 970,
    "name": "Glimmora",
    "types": ["Rock", "Poison"],
    "evolutions": [],
    "abilities": [
      ["Toxic Debris", "false"],
      ["Corrosion", "true"]
    ],
    "gender": "50:50",
    "sprite": "glimmora",
    "forms": []
  },
  {
    "pokedexNo": 971,
    "name": "Greavard",
    "types": ["Ghost"],
    "evolutions": ["Houndstone"],
    "abilities": [
      ["Pickup", "false"],
      ["Fluffy", "true"]
    ],
    "gender": "50:50",
    "sprite": "greavard",
    "forms": []
  },
  {
    "pokedexNo": 972,
    "name": "Houndstone",
    "types": ["Ghost"],
    "evolutions": [],
    "abilities": [
      ["Sand Rush", "false"],
      ["Fluffy", "true"]
    ],
    "gender": "50:50",
    "sprite": "houndstone",
    "forms": []
  },
  {
    "pokedexNo": 973,
    "name": "Flamigo",
    "types": ["Flying", "Fighting"],
    "evolutions": [],
    "abilities": [
      ["Scrappy", "false"],
      ["Tangled Feet", "false"],
      ["Costar", "true"]
    ],
    "gender": "50:50",
    "sprite": "flamigo",
    "forms": []
  },
  {
    "pokedexNo": 974,
    "name": "Cetoddle",
    "types": ["Ice"],
    "evolutions": ["Cetitan"],
    "abilities": [
      ["Thick Fat", "false"],
      ["Snow Cloak", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "cetoddle",
    "forms": []
  },
  {
    "pokedexNo": 975,
    "name": "Cetitan",
    "types": ["Ice"],
    "evolutions": [],
    "abilities": [
      ["Thick Fat", "false"],
      ["Slush Rush", "false"],
      ["Sheer Force", "true"]
    ],
    "gender": "50:50",
    "sprite": "cetitan",
    "forms": []
  },
  {
    "pokedexNo": 976,
    "name": "Veluza",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Mold Breaker", "false"],
      ["Sharpness", "true"]
    ],
    "gender": "50:50",
    "sprite": "veluza",
    "forms": []
  },
  {
    "pokedexNo": 977,
    "name": "Dodonzo",
    "types": ["Water", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Unaware", "false"],
      ["Oblivious", "false"],
      ["Water Veil", "true"]
    ],
    "gender": "50:50",
    "sprite": "dodonzo",
    "forms": []
  },
  {
    "pokedexNo": 978,
    "name": "Curly Form Tatsugiri",
    "types": ["Dragon", "Water"],
    "evolutions": [],
    "abilities": [
      ["Commander", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "50:50",
    "sprite": "tatsugiri-curly",
    "forms": []
  },
  {
    "pokedexNo": 978,
    "name": "Droopy Form Tatsugiri",
    "types": ["Dragon", "Water"],
    "evolutions": [],
    "abilities": [
      ["Commander", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "50:50",
    "sprite": "tatsugiri-droopy",
    "forms": []
  },
  {
    "pokedexNo": 978,
    "name": "Stretchy Form Tatsugiri",
    "types": ["Dragon", "Water"],
    "evolutions": [],
    "abilities": [
      ["Commander", "false"],
      ["Storm Drain", "true"]
    ],
    "gender": "50:50",
    "sprite": "tatsugiri-stretchy",
    "forms": []
  },
  {
    "pokedexNo": 979,
    "name": "Annihilape",
    "types": ["Fighting", "Ghost"],
    "evolutions": [],
    "abilities": [
      ["Vital Spirit", "false"],
      ["Inner Focus", "false"],
      ["Defiant", "true"]
    ],
    "gender": "50:50",
    "sprite": "annihilape",
    "forms": []
  },
  {
    "pokedexNo": 980,
    "name": "Clodsire",
    "types": ["Poison", "Ground"],
    "evolutions": [],
    "abilities": [
      ["Poison Point", "false"],
      ["Water Absorb", "false"],
      ["Unaware", "true"]
    ],
    "gender": "50:50",
    "sprite": "clodsire",
    "forms": []
  },
  {
    "pokedexNo": 981,
    "name": "Farigiraf",
    "types": ["Normal", "Psychic"],
    "evolutions": [],
    "abilities": [
      ["Cud Chew", "false"],
      ["Armor Tail", "false"],
      ["Sap Sipper", "true"]
    ],
    "gender": "50:50",
    "sprite": "farigiraf",
    "forms": []
  },
  {
    "pokedexNo": 982,
    "name": "Two-Segment Form Dudunsparce",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Serene Grace", "false"],
      ["Run Away", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "dudunsparce-two",
    "forms": []
  },
  {
    "pokedexNo": 982,
    "name": "Three-Segment Form Dudunsparce",
    "types": ["Normal"],
    "evolutions": [],
    "abilities": [
      ["Serene Grace", "false"],
      ["Run Away", "false"],
      ["Rattled", "true"]
    ],
    "gender": "50:50",
    "sprite": "dudunsparce-three",
    "forms": []
  },
  {
    "pokedexNo": 983,
    "name": "Kingambit",
    "types": ["Dark", "Steel"],
    "evolutions": [],
    "abilities": [
      ["Defiant", "false"],
      ["Supreme Overlord", "false"],
      ["Pressure", "true"]
    ],
    "gender": "50:50",
    "sprite": "kingambit",
    "forms": []
  },
  {
    "pokedexNo": 984,
    "name": "Great Tusk",
    "types": ["Ground", "Fighting"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "great-tusk",
    "forms": []
  },
  {
    "pokedexNo": 985,
    "name": "Scream Tail",
    "types": ["Fairy", "Psychic"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "scream-tail",
    "forms": []
  },
  {
    "pokedexNo": 986,
    "name": "Brute Bonnet",
    "types": ["Grass", "Dark"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "brute-bonnet",
    "forms": []
  },
  {
    "pokedexNo": 987,
    "name": "Flutter Mane",
    "types": ["Ghost", "Fairy"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "flutter-mane",
    "forms": []
  },
  {
    "pokedexNo": 988,
    "name": "Slither Wing",
    "types": ["Bug", "Fighting"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "slither-wing",
    "forms": []
  },
  {
    "pokedexNo": 989,
    "name": "Sandy Shocks",
    "types": ["Electric", "Ground"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "sandy-shocks",
    "forms": []
  },
  {
    "pokedexNo": 990,
    "name": "Iron Treads",
    "types": ["Ground", "Steel"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-treads",
    "forms": []
  },
  {
    "pokedexNo": 991,
    "name": "Iron Bundle",
    "types": ["Ice", "Water"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-bundle",
    "forms": []
  },
  {
    "pokedexNo": 992,
    "name": "Iron Hands",
    "types": ["Fighting", "Electric"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-hands",
    "forms": []
  },
  {
    "pokedexNo": 993,
    "name": "Iron Jugulis",
    "types": ["Dark", "Flying"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-jugulis",
    "forms": []
  },
  {
    "pokedexNo": 994,
    "name": "Iron Moth",
    "types": ["Fire", "Poison"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-moth",
    "forms": []
  },
  {
    "pokedexNo": 995,
    "name": "Iron Thorns",
    "types": ["Rock", "Electric"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-thorns",
    "forms": []
  },
  {
    "pokedexNo": 996,
    "name": "Frigibax",
    "types": ["Dragon", "Ice"],
    "evolutions": ["Arctibax"],
    "abilities": [
      ["Thermal Exchange", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "frigibax",
    "forms": []
  },
  {
    "pokedexNo": 997,
    "name": "Arctibax",
    "types": ["Dragon", "Ice"],
    "evolutions": ["Baxcalibur"],
    "abilities": [
      ["Thermal Exchange", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "arctibax",
    "forms": []
  },
  {
    "pokedexNo": 998,
    "name": "Baxcalibur",
    "types": ["Dragon", "Ice"],
    "evolutions": [],
    "abilities": [
      ["Thermal Exchange", "false"],
      ["Ice Body", "true"]
    ],
    "gender": "50:50",
    "sprite": "baxcalibur",
    "forms": []
  },
  {
    "pokedexNo": 999,
    "name": "Chest Form Gimmighoul",
    "types": ["Ghost"],
    "evolutions": ["Gholdengo"],
    "abilities": [["Rattled", "false"]],
    "gender": "Genderless",
    "sprite": "gimmighoul-chest",
    "forms": []
  },
  {
    "pokedexNo": 999,
    "name": "Roaming Form Gimmighoul",
    "types": ["Ghost"],
    "evolutions": ["Gholdengo"],
    "abilities": [["Run Away", "false"]],
    "gender": "Genderless",
    "sprite": "gimmighoul-roaming",
    "forms": []
  },
  {
    "pokedexNo": 1000,
    "name": "Gholdengo",
    "types": ["Steel", "Ghost"],
    "evolutions": [],
    "abilities": [["Good as Gold", "false"]],
    "gender": "Genderless",
    "sprite": "gholdengo",
    "forms": []
  },
  {
    "pokedexNo": 1001,
    "name": "Wo-Chien",
    "types": ["Dark", "Grass"],
    "evolutions": [],
    "abilities": [["Tablets of Ruin", "false"]],
    "gender": "Genderless",
    "sprite": "wo-chien",
    "forms": []
  },
  {
    "pokedexNo": 1002,
    "name": "Chien-Pao",
    "types": ["Dark", "Ice"],
    "evolutions": [],
    "abilities": [["Sword of Ruin", "false"]],
    "gender": "Genderless",
    "sprite": "chien-pao",
    "forms": []
  },
  {
    "pokedexNo": 1003,
    "name": "Ting-Lu",
    "types": ["Dark", "Ground"],
    "evolutions": [],
    "abilities": [["Vessel of Ruin", "false"]],
    "gender": "Genderless",
    "sprite": "ting-lu",
    "forms": []
  },
  {
    "pokedexNo": 1004,
    "name": "Chi-Yu",
    "types": ["Dark", "Fire"],
    "evolutions": [],
    "abilities": [["Beads of Ruin", "false"]],
    "gender": "Genderless",
    "sprite": "chi-yu",
    "forms": []
  },
  {
    "pokedexNo": 1005,
    "name": "Roaring Moon",
    "types": ["Dragon", "Dark"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "roaring-moon",
    "forms": []
  },
  {
    "pokedexNo": 1006,
    "name": "Iron Valiant",
    "types": ["Fairy", "Fighting"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-valiant",
    "forms": []
  },
  {
    "pokedexNo": 1007,
    "name": "Koraidon",
    "types": ["Fighting", "Dragon"],
    "evolutions": [],
    "abilities": [["Orichalcum Pulse", "false"]],
    "gender": "Genderless",
    "sprite": "koraidon",
    "forms": []
  },
  {
    "pokedexNo": 1008,
    "name": "Miraidon",
    "types": ["Electric", "Dragon"],
    "evolutions": [],
    "abilities": [["Hadron Engine", "false"]],
    "gender": "Genderless",
    "sprite": "miraidon",
    "forms": []
  },
  {
    "pokedexNo": 1009,
    "name": "Walking Wake",
    "types": ["Water", "Dragon"],
    "evolutions": [],
    "abilities": [["Protosynthesis", "false"]],
    "gender": "Genderless",
    "sprite": "walking-wake",
    "forms": []
  },
  {
    "pokedexNo": 1010,
    "name": "Iron Leaves",
    "types": ["Grass", "Psychic"],
    "evolutions": [],
    "abilities": [["Quark Drive", "false"]],
    "gender": "Genderless",
    "sprite": "iron-leaves",
    "forms": []
  }
]

const { copyFile } = require("fs").promises; // Use promises version for asynchronous file operations
const { resolve } = require("path");

const inputDirPath = resolve(__dirname, "_input");
const outputDirPath = resolve(__dirname, "_output");

console.log(inputDirPath);

async function renameImage(key) {
  const inputFilePath = `${inputDirPath}/poke_capture_0${key["pokedexNo"]}_000_fo_n_00000000_f_n.png`;
  const outputFilePath = `${outputDirPath}/${key["sprite"]}.png`;

  try {
    // Copy the file from _input to _output
    if (!key["sprite"].includes("galar") && !key["sprite"].includes("alola") && !key["sprite"].includes("hisui")  && !key["sprite"].includes("paldea")) {
      await copyFile(inputFilePath, outputFilePath);
    }
    
    console.log(`Renamed ${key["pokedexNo"]}.png to ${key["sprite"]}.png`);
  } catch (err) {
    console.error(err);
  }
}

pokedex.forEach(renameImage);

