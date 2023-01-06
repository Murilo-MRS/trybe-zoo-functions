const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getSpeciesByIds(id) {
  // seu código aqui
  return species.find((element) => element.id === id);
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstSpecie = employees.find((e) => e.id === id).responsibleFor[0];
  const { residents } = getSpeciesByIds(firstSpecie);
  const { name, sex, age } = residents.reduce((acc, curr) => (acc.age < curr.age ? curr : acc));
  return [name, sex, age];
}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
module.exports = getOldestFromFirstSpecies;
