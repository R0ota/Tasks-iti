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

class CustomStorage<T> {
  items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

const stringStorage = new CustomStorage<string>();
stringStorage.addItem("hello");
console.log(stringStorage.getItems()); // ["hello"]
// 2

const numberstorge = new CustomStorage<number>();
numberstorge.addItem(1);
console.log(numberstorge.getItems()); // [1]
