import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    if (typeof(value) === "boolean" || value === null || isNaN(value) || value === 0){
      value = String(value);
    }
    if (!value){
      this.chain.push('( )');
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if(isNaN(position) || !Number.isInteger(position) || position <= 0 || position >= this.getLength()) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }  
    this.chain.splice(position - 1, 1);
    return this;    
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};
