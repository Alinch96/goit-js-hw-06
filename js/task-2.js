'use strict';

console.log('**********Task-2***********');


class Storage {
  #items = []; // ініціалізую одразу масивом на випадок, якщо в конструктор нічого не буде передано, тоді після виклику методу getItems() отримаємо не undefined, а порожній масив, а виклик методу addItem(newItem) не викличе помилку
  
  constructor(initialArrayOfGoods) {
    this.#items = initialArrayOfGoods;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(itemToRemove) {
    if(this.#items.includes(itemToRemove)) this.#items.splice(this.#items.indexOf(itemToRemove), 1);
  
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

