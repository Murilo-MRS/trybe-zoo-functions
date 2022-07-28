const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  // seu código aqui
  return (data.species.filter((element) => element.id === ids));
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
