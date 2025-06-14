const fs = require("fs");
const path = require("path");

// Path to input/output
const inputPath = path.join(__dirname, "_input", "pokedex.json");
const outputPath = path.join(__dirname, "_output", "pokedex.json");

// List of starter Pokémon
const fossils = [
  {
    name: "Omanyte",
    sprite: "omanyte",
  },
  {
    name: "Omastar",
    sprite: "omastar",
  },
  {
    name: "Kabuto",
    sprite: "kabuto",
  },
  {
    name: "Kabutops",
    sprite: "kabutops",
  },
  {
    name: "Aerodactyl",
    sprite: "aerodactyl",
  },
  {
    name: "Lileep",
    sprite: "lileep",
  },
  {
    name: "Cradily",
    sprite: "cradily",
  },
  {
    name: "Anorith",
    sprite: "anorith",
  },
  {
    name: "Cranidos",
    sprite: "cranidos",
  },
  {
    name: "Rampardos",
    sprite: "rampardos",
  },
  {
    name: "Shieldon",
    sprite: "shieldon",
  },
  {
    name: "Bastiodon",
    sprite: "bastiodon",
  },
  {
    name: "Tirtouga",
    sprite: "tirtouga",
  },
  {
    name: "Carracosta",
    sprite: "carracosta",
  },
  {
    name: "Archen",
    sprite: "archen",
  },
  {
    name: "Tyrunt",
    sprite: "tyrunt",
  },
  {
    name: "Tyrantrum",
    sprite: "tyrantrum",
  },
  {
    name: "Amaura",
    sprite: "amaura",
  },
  {
    name: "Aurorus",
    sprite: "aurorus",
  },
  {
    name: "Dracozolt",
    sprite: "dracozolt",
  },
  {
    name: "Arctozolt",
    sprite: "arctozolt",
  },
  {
    name: "Dracovish",
    sprite: "dracovish",
  },
  {
    name: "Arctovish",
    sprite: "arctovish",
  },
];

// Convert starters list to a Set for fast lookup
const checkList = new Set(fossils.map((p) => p.name));

// Read input file
fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) {
    console.error("❌ Error reading input file:", err);
    return;
  }

  try {
    const pokedex = JSON.parse(data);

    if (!Array.isArray(pokedex)) {
      throw new Error("Input JSON must be an array of objects");
    }

    // Modify each object
    const updatedPokedex = pokedex.map((pokemon) => {
      const check = checkList.has(pokemon.name);

      // Rebuild object with custom key order
      const {
        genderDifference,
        legendary,
        mythical,
        starter,
        ultraBeast,
        pastParadox,
        futureParadox,
        ...rest
      } = pokemon;

      return {
        ...rest, // All keys before "legendary"
        genderDifference,
        legendary,
        mythical,
        ultraBeast,
        starter,
        fossil: check, // Inserted just before legendary
        pastParadox,
        futureParadox,
      };
    });

    // Write to output file
    fs.writeFile(
      outputPath,
      JSON.stringify(updatedPokedex, null, 2),
      "utf8",
      (err) => {
        if (err) {
          console.error("❌ Error writing output file:", err);
        } else {
          console.log(
            `✅ Successfully updated ${updatedPokedex.length} entries and saved to ${outputPath}`
          );
        }
      }
    );
  } catch (e) {
    console.error("❌ Error processing JSON:", e.message);
  }
});
