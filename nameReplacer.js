const { readdir, rename } = require("fs").promises;
const { resolve } = require("path");

const outputDirPath = resolve(__dirname, "_output");

// Define your substitutions here: key is the number, value is the new name
const substitutions = {
  201: "unown",
  351: "castform",
  386: "deoxys",
  412: "burmy",
  413: "wormadam",
  421: "cherrim",
  422: "shellos",
  423: "gastrodon",
  479: "rotom",
  487: "giratina",
  492: "shaymin",
  493: "arceus",
  550: "basculin",
  555: "darmanitan",
  585: "deerling",
  586: "sawsbuck",
  641: "tornadus",
  642: "thundurus",
  645: "landorus",
  646: "kyurem",
  647: "keldeo",
  648: "meloetta",
  649: "genesect",
  "gif": "png"
};

async function renameFilesInOutput() {
  try {
    // Get all the files in the output directory
    const files = await readdir(outputDirPath);

    // Loop through each file
    for (const file of files) {
      let newFileName = file;

      // Apply all the substitutions
      for (const [key, value] of Object.entries(substitutions)) {
        if (newFileName.includes(key)) {
          // Replace the key (e.g., "201") with the value (e.g., "unown") in the filename
          newFileName = newFileName.replace(new RegExp(key, "g"), value);
        }
      }

      // If the file name was changed, rename the file
      if (newFileName !== file) {
        const oldFilePath = resolve(outputDirPath, file);
        const newFilePath = resolve(outputDirPath, newFileName);

        await rename(oldFilePath, newFilePath);
        console.log(`Renamed: ${file} -> ${newFileName}`);
      }
    }
  } catch (err) {
    console.error("Error renaming files:", err);
  }
}

// Run the function
renameFilesInOutput();
