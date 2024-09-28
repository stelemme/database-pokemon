const { readdir } = require("fs").promises;
const { resolve } = require("path");

const folder2Path = resolve(__dirname, "pokemon-shiny/gen-5");  // First folder path
const folder1Path = resolve(__dirname, "_output");  // Second folder path

async function compareFolders() {
  try {
    // Read files from both folders
    const filesInFolder1 = await readdir(folder1Path);
    const filesInFolder2 = await readdir(folder2Path);

    // Find files that are in folder1 but not in folder2
    const filesOnlyInFolder1 = filesInFolder1.filter(file => !filesInFolder2.includes(file));

    // Output the result
    if (filesOnlyInFolder1.length > 0) {
      console.log("Files present in folder1 but not in folder2:");
      filesOnlyInFolder1.forEach(file => console.log(file));
    } else {
      console.log("All files in folder1 are also present in folder2.");
    }
  } catch (err) {
    console.error("Error comparing folders:", err);
  }
}

// Run the comparison
compareFolders();
