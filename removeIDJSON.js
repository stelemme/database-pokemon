const fs = require('fs');

const inputFilePath = 'object-data/games.json'; // Replace with your input JSON file path
const outputFilePath = '_output/test.json'; // Replace with your output JSON file path

// Read the JSON file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading ${inputFilePath}: ${err}`);
    return;
  }

  try {
    const json = JSON.parse(data);

    // Remove "_id" keys from all objects in the JSON
    const modifiedJson = removeIdKeys(json);

    // Write the modified JSON back to the file
    fs.writeFile(outputFilePath, JSON.stringify(modifiedJson, null, 2), (err) => {
      if (err) {
        console.error(`Error writing ${outputFilePath}: ${err}`);
      } else {
        console.log(`${outputFilePath} has been updated.`);
      }
    });
  } catch (parseError) {
    console.error(`Error parsing JSON: ${parseError}`);
  }
});

function removeIdKeys(obj) {
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      for (let i = 0; i < obj.length; i++) {
        obj[i] = removeIdKeys(obj[i]);
      }
    } else {
      for (const key in obj) {
        if (key === '_id') {
          delete obj[key];
        } else {
          obj[key] = removeIdKeys(obj[key]);
        }
      }
    }
  }
  return obj;
}