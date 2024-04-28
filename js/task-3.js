'use strict';

console.log('**********Task-3***********');


class StringBuilder {
  #value = ""; // на випадок, якщо в конструктор нічого не буде передано
  constructor(initialValue) {
    this.#value = initialValue;
  }
  
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value += str;
  }
  padStart(str) {
    this.#value = str + this.#value;
  }
  padBoth(str) {
    this.#value = str + this.#value + str;
  }

}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="

