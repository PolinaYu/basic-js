import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options ) {
  let{
    repeatTimes,
    separator = '+',
    addition = '',
    additionRepeatTimes = 0,
    additionSeperator ='|'
  } = options
  let result = String(str);
  for(let i = 0; i < repeatTimes; i++){
    result+=separator+str;
    for(let j = 0; j < additionRepeatTimes; j++){
      result+=addition + additionSeperator;
    }
  }

}
