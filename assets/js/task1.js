"use strict";
/*   Cоздать класс, который выводит массив используя Symbol.iterator.
 */
class ShowArray {
  constructor(inputArray) {
    //Проверка является ли параметр массивом
    if (!Array.isArray(inputArray)) {
      throw new TypeError("Input data must be an array!");
    }
    this._innerArray = inputArray;
  }
  set innerArray(inputArray) {
    if (!Array.isArray(inputArray)) {
      throw new TypeError("Input data must be an array!");
    }
    this._innerArray = inputArray;
  }
  get innerArray() {
    return this._innerArray;
  }

  //Итератор для перебора массива
  [Symbol.iterator]() {
    let index = 0;
    let array = this._innerArray;
    return {
      next() {
        return index < array.length
          ? { value: array[index++], done: false }
          : { done: true };
      },
    };
  }
}

//Создание  массива
const inputArray1 = [];
for (let i = 0; i < 10; i++) {
  inputArray1.push(+(Math.random() * 100).toFixed(0));
}
//Правильное создание объекта
let objectShowArray1;
try {
  objectShowArray1 = new ShowArray(inputArray1);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
//Вывод массива из объекта
console.log(`Input array = ${objectShowArray1.innerArray}`);
console.log(`Inner array with iterator:`);
for (let num of objectShowArray1) {
  console.log(num);
}

//Неправильное создание объекта
console.log(`-------------------------`);
console.log(`Wrong creation of an object:`);
let objectShowArray2;
try {
  objectShowArray2 = new ShowArray("hafghsdfgsd");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Program finished!");
}
