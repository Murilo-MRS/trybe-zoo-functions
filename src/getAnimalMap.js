const data = require('../data/zoo_data');

const { species } = data;

const animalRegionList = () => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}, {});

// console.log(animalRegionList());
const animalListWithName = () => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  const animalName = curr.residents.map((element) => element.name);
  const obj = {};
  obj[curr.name] = animalName;
  acc[curr.location].push(obj);
  return acc;
}, animalRegionList);

// console.log(animalListWithName());
function getAnimalMap(options) {
  // seu código aqui
  if (!options) {
    return animalRegionList();
  }
  if (!options.includeNames && options.sex) return animalRegionList();
  return animalListWithName();
}

console.log(getAnimalMap({ sex: 'female' }));
module.exports = getAnimalMap;
