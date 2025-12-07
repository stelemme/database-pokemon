const fs = require('fs');
const path = require('path');

// Path to your JSON file
const filePath = path.join(__dirname, 'pokedex.json');

try {
  // Read the file
  const rawData = fs.readFileSync(filePath, 'utf8');

  // Parse JSON
  const data = JSON.parse(rawData);

  // Make sure it's an array
  if (!Array.isArray(data)) {
    throw new Error("JSON file must contain an array of objects.");
  }

  // Add baseForm: true to each object
  data.forEach(obj => {
    if (typeof obj === 'object' && obj !== null) {
      obj.baseForm = true;
    }
  });

  // Write back to the file (pretty formatted)
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  console.log('✅ JSON file updated successfully.');

} catch (err) {
  console.error('❌ Error updating JSON file:', err.message);
}
