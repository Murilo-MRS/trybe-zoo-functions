const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((acc, { name, residents }) => {
      acc[name] = residents.length;
      return acc;
    }, {});
  }
  const { specie, sex } = animal;

  const sameSpecie = ({ name }) => name === specie;
  const sameSex = ({ sex: specieSex }) => specieSex === sex;
  if (specie && sex) {
    return species.find(sameSpecie).residents.filter(sameSex).length;
  }
  if (specie) {
    return species.find(sameSpecie).residents.length;
  }
}
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
