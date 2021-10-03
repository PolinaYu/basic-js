import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(names)) return false
  let teamName =[];
  for(let member of members){
    if(typeof members==='string'){
      member = member.trim();
      teamName.push(member[0].toUpperCase);

    } 
  }
  if(teamName.length==0) return false;
  teamName.sort((a, b) => a.localeCompare(b));
  return teamName.join('');
}
