const { species } = require('../data/zoo_data');
// pege o elemento da specie elephant que retorna o obj de elephant

const getElephants = () =>
  species.find((specie) => specie.name === 'elephants');
// calcula media de idade dos elefantes residents
const averageAge = ({ residents }) =>
  residents.reduce((sum, elephant) => sum + elephant.age, 0) / residents.length;
// recebe um paramatro count name ou average e retorna o calculo pedido
const computeData = (param, elephants) => {
  switch (param) {
  case 'count':
    return elephants.residents.length;
  case 'names':
    return elephants.residents.map((elephant) => elephant.name);
  case 'averageAge':
    return averageAge(elephants);
  default:
    return null;
  }
};

const handlerElephants = (param) => {
  if (param === undefined) {
    return undefined;
  }
  if (typeof param !== 'string') {
    return 'Parâmetro inválido, é necessário uma string';
  }
  const elephants = getElephants();
  if (Object.keys(elephants).includes(param)) {
    return elephants[param];
  }
  return computeData(param, elephants);
};
module.exports = handlerElephants;
