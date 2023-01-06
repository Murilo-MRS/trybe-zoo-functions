const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = species.find(({ name }) => name === animal);
  return residents.every(({ age: elementAge }) => elementAge >= age);
}

module.exports = getAnimalsOlderThan;
