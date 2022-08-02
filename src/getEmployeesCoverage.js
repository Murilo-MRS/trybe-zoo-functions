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
// console.log(getSpecieLocation(...getEmployeeByName('Nelson').responsibleFor));
// console.log(`${responsibleFor}`);
const fullEmployesList = () => employees.reduce((acc, curr) => {
  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: getSpecies(...curr.responsibleFor),
    locations: getSpecieLocation(...curr.responsibleFor),
  });
  return acc;
}, []);

// console.log(fullEmployesList());
// console.log(getSpecies(...responsibleFor));
function getEmployeesCoverage(param) {
  // seu código aqui
  // const param = { name, id };
  if (!param) {
    return fullEmployesList();
  }

  const { id: idName, firstName, lastName, responsibleFor } = getEmployeeByName(param);
  return {
    id: idName, // id da pessoa
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(...responsibleFor), // espécies as quais a pessoa é responsável
    locations: getSpecieLocation(...responsibleFor), // Um array contendo todas as localizações das espécies
  };
}
// console.log(getEmployeesCoverage({ id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' }));
// console.log(getEmployeesCoverage({ name: 'Nelson' }));
console.log(getEmployeesCoverage());
// console.log(getEmployeesCoverage({ id: 'vasco' }));
module.exports = getEmployeesCoverage;
