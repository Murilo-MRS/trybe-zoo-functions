const data = require('../data/zoo_data');

const { employees } = data;

// console.log(employees);
function isManager(ids) {
  // seu código aqui
  return employees.some((element) => element.managers.some((elem) => elem === ids));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const sameManager = employees.filter(({ managers }) =>
    managers.find((id) => id === managerId));
  return sameManager.map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
