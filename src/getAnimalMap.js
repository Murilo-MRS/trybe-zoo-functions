const data = require('../data/zoo_data');

const { species } = data;

const arrayNomes = (animal, options) => {
  const arrayResidentes = species.find((elemento) => elemento.name === animal).residents;

  if (options.sex !== undefined && options.sorted === true) {
    return arrayResidentes.filter((e) => e.sex === options.sex).map((elem) => elem.name).sort();
  }
  if (options.sex !== undefined) {
    return arrayResidentes.filter((e) => e.sex === options.sex).map((element) => element.name);
  }
  if (options.sorted === true) {
    return arrayResidentes.map((elem) => elem.name).sort();
  }
  return arrayResidentes.map((elem) => elem.name);
};
// console.log(arrayNomes('lions', { sex: 'male' }));
// console.log(arrayNomes('lions', { sorted: true }));
// console.log(arrayNomes('lions', { sex: 'male', sorted: true }));
// console.log(arrayNomes('lions', { includeNames: true }));
const animalRegionList = () => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  acc[curr.location].push(curr.name);
  return acc;
}, {});

// console.log(animalRegionList());
const animalListWithName = (options) => species.reduce((acc, curr) => {
  if (!acc[curr.location]) {
    acc[curr.location] = [];
  }
  const animalName = arrayNomes(curr.name, options);
  const obj = {};
  obj[curr.name] = animalName;
  acc[curr.location].push(obj);
  return acc;
}, {});
// console.log(animalListWithName({ sex: 'female' }));
function getAnimalMap(options) {
  // seu código aqui
  if (options === undefined || options.includeNames === undefined) {
    return animalRegionList();
  }

  const listaComparam = animalListWithName(options);
  return listaComparam;
}

console.log(getAnimalMap({ sorted: true }));
module.exports = getAnimalMap;
