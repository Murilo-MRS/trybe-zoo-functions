const data = require('../data/zoo_data');

const { species } = data;
// spread para jogar mais valores como param de getSpeciesByIds
function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter(({ id: compId }) => ids.find((id) => compId === id));
}

module.exports = getSpeciesByIds;
