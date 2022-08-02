const data = require('../data/zoo_data');

const { species } = data;

// const animalRegionList = () => {

// }

const animalRegionList = () => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}, {});

console.log(animalRegionList());
function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalRegionList();
  }
}

module.exports = getAnimalMap;
