const fs = require('fs');
const csv = `2022-06-15 14:29:09.5370, 2022-06-15, 14:29:09, 1, 1
2022-06-15 14:29:09.7680, 2022-06-15, 14:29:09, 2, 1
2022-06-15 14:29:10.0170, 2022-06-15, 14:29:10, 3, 1
2022-06-15 14:38:43.8390, 2022-06-15, 14:38:43, 4, 1
2022-06-15 14:38:44.1560, 2022-06-15, 14:38:44, 5, 1
2022-06-15 14:38:44.4230, 2022-06-15, 14:38:44, 6, 1
2022-06-15 14:38:44.7890, 2022-06-15, 14:38:44, 7, 1
2022-06-15 14:54:14.8380, 2022-06-15, 14:54:14, 8, 1
2022-06-15 14:54:15.1210, 2022-06-15, 14:54:15, 9, 1
2022-06-15 14:54:15.3380, 2022-06-15, 14:54:15, 10, 1
2022-06-15 14:54:15.5710, 2022-06-15, 14:54:15, 11, 1
2022-06-15 17:02:05.3310, 2022-06-15, 17:02:05, 12, 1
2022-06-15 17:02:05.5940, 2022-06-15, 17:02:05, 13, 1
2022-06-15 17:02:05.8260, 2022-06-15, 17:02:05, 14, 1
2022-06-15 17:02:06.1100, 2022-06-15, 17:02:06, 15, 1
2022-06-15 17:17:13.0400, 2022-06-15, 17:17:13, 16, 1
2022-06-15 17:17:13.3080, 2022-06-15, 17:17:13, 17, 1
2022-06-15 17:17:13.6580, 2022-06-15, 17:17:13, 18, 1`;

// Split the CSV data into rows
const rows = csv.split('\n');

// Transform the CSV rows into an array of ISO date strings
const isoDates = rows.map(row => {
  const parts = row.split(',');
  const datePart = parts[0].trim();
  return new Date(datePart).toISOString();
});

// Define the output folder and file path
const outputFolder = './_output';
const jsonFilePath = `${outputFolder}/output.json`;

// Ensure the output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Write the ISO date array to a JSON file
fs.writeFileSync(jsonFilePath, JSON.stringify(isoDates, null, 2));

console.log(`Data saved to ${jsonFilePath}`);