const data = require('../data/zoo_data');

const { prices } = data;
function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter(({ age }) => age < 18);
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50);
  const senior = entrants.filter(({ age }) => age >= 50);
  return { adult: adult.length, senior: senior.length, child: child.length };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const visitantes = countEntrants(entrants);
  const [adult, senior, child] = Object.values(visitantes);
  const valor = [adult * prices.adult, senior * prices.senior, child * prices.child];
  return valor.reduce((acc, curr) => acc + curr);
}

module.exports = { calculateEntry, countEntrants };
