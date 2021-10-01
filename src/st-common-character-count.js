import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount( s1, s2 ) {
  let common=0;
  for(let char of s1){
    let pos = s2.indexOf(char);
    if(pos!=-1){
      s2 = s2.slice(0, pos) + s2.slice(pos + 1);
      common++;
    }
  }
  return common;
}
