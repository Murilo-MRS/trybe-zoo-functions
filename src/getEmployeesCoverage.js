const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployeeByName = (employeeName) => {
  // seu código aqui
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName, id }) =>
    firstName === employeeName.name || lastName === employeeName.name || id === employeeName.id);
};

const getSpecies = (...ids) =>
  species.filter(({ id: compId }) => ids.find((id) => compId === id))
    .map((element) => element.name);

const getSpecieLocation = (...ids) =>
  species.filter(({ id: compId }) => ids.find((id) => compId === id))
    .map((element) => element.location);

const fullEmployesList = () => employees.reduce((acc, curr) => {
  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: getSpecies(...curr.responsibleFor),
    locations: getSpecieLocation(...curr.responsibleFor),
  });
  return acc;
}, []);

function getEmployeesCoverage(param) {
  if (!param) {
    return fullEmployesList();
  }

  if (getEmployeeByName(param) === undefined) {
    throw new Error('Informações inválidas');
  }
  const { id: idName, firstName, lastName, responsibleFor } = getEmployeeByName(param);
  return {
    id: idName, // id da pessoa
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(...responsibleFor), // espécies as quais a pessoa é responsável
    locations: getSpecieLocation(...responsibleFor), // Um array contendo todas as localizações das espécies
  };
}

module.exports = getEmployeesCoverage;
