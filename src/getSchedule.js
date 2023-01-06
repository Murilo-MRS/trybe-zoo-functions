const data = require('../data/zoo_data');

const { species } = data;
const { hours } = data;
const days = Object.keys(hours);
const animais = species.map((element) => element.name);

// FUNCAO QUE RETORNA CASO O PARAM FOR UM ANIMAL
const animalSchedule = (animal) => species.find((element) => element.name === animal).availability;

// FUNCAO QUE RETORNA CASO NAO TIVER PARAM
const allDaysWeekSchedule = () => days.reduce((acc, curr) => {
  const callback = ({ availability }) => availability.includes(curr);

  if (curr === 'Monday') {
    acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter(callback).map((nomeAnimal) => nomeAnimal.name),
    };
  }
  return acc;
},
{});
// FUNCAO QUE RETORNA CASO O PARAM FOR UM DIA
const dayWeekSchedule = (dia) => {
  const callback = ({ availability }) => availability.includes(dia);
  if (dia === 'Monday') {
    return { [dia]: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return { [dia]: {
    officeHour: `Open from ${hours[dia].open}am until ${hours[dia].close}pm`,
    exhibition: species.filter(callback).map((nomeAnimal) => nomeAnimal.name) } };
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (days.includes(scheduleTarget)) return dayWeekSchedule(scheduleTarget);
  if (animais.includes(scheduleTarget)) return animalSchedule(scheduleTarget);
  return allDaysWeekSchedule();
}
console.log(getSchedule('lions'));
module.exports = getSchedule;
