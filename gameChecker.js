const fs = require('fs');

fs.readFile('object-data/games.json', 'utf8', (err, data2) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }
  try {
    const jsonData2 = JSON.parse(data2);

    jsonData2.forEach(element2 => {
      fs.readFile('object-data/pokedex.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading JSON file:', err);
          return;
        }

        try {
          // Parse the JSON data
          const jsonData = JSON.parse(data);
          var pokedexList = []
          var formsList = []

          // Get the array of objects from the JSON data
          jsonData.forEach(element => {
            pokedexList.push(element["name"])

            element["forms"].forEach(element3 => {
              formsList.push(element3["name"])
            });
          });

          var pokedexErrorList = []
          var formsErrorList = []

          element2["pokemons"].forEach(element4 => {
            if (!pokedexList.includes(element4)) {
              pokedexErrorList.push(element4)
            }
          });

          element2["forms"].forEach(element5 => {
            if (!formsList.includes(element5)) {
              formsErrorList.push(element5)
            }
          });

          console.log(element2["name"], pokedexErrorList, formsErrorList)

        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      });
    });
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
})

