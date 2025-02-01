"use strict";
// class CustomStorage<T> {
//   private lenght: T[] = [];
//   addItem(item: T): void {
//     this.lenght.push(item);
//   }
//   getItems(): T[] {
//     return this.lenght;
//   }
// }
// const stringStorage = new CustomStorage<string>();
// stringStorage.addItem("hello");
// console.log(stringStorage.getItems());
class CustomStorage {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
const stringStorage = new CustomStorage();
stringStorage.addItem("hello");
console.log(stringStorage.getItems()); // ["hello"]
// 2
const numberstorge = new CustomStorage();
numberstorge.addItem(1);
console.log(numberstorge.getItems()); // [1]
