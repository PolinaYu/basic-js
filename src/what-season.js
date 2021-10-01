import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toTimeString();
  } catch (e) {
    throw new Error("Invalid date!");
  }
  let season;
  switch(date.getMonth()){
    case (11||0||1): 
      season ='winter';
      break;
    case (2||3||4):
      season = 'spring';
      break;
    case (5||6||7):
      season = 'summer';
      break;
    case (8||9||10):
      season = 'autumn';
      break;
  }
  return season;
}
