import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform( arr ) {
  if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array! ");
  let tarr = [];
  for( let i=0; i<arr.length(); i++){
    if(arr[i] instanceof Number) tarr.push(arr[i]);
    else{
      switch(arr[i]){
        case '--discard-next':
          if(i==arr.length()) break;
          i++;
          break;
        case '--discard-prev':
          if(i==0) break;
          tarr.pop;
          break;
        case '--double-next':
          if(i==arr.length()) break;
          tarr.push(arr[i+1]*2);
          i++;
          break;
        case '--double-prev':
          if(i==0) break;
          tarr[i-1]+=tarr[i-1];
          break;
      }
    }
  }
}
