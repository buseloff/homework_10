"use strict";
/*   Задание 2. Создать класс Stud, который наследует класс User (name, surname) и 
имеет свойство year - год поступления в вуз. Реализовать getFullName() (наследуется от User). 
Содержит еще метод getCourse() - вывод курса студента от 1 до 5 и вычисляется как текущий год 
минус год поступления. Текущий год получить самостоятельно. 
2.1. Подсчитать количество студентов (через static). 

 */
class User {
  static #counter = 0;
  constructor(name, surname) {
    if (typeof name !== "string" || typeof surname !== "string") {
      throw new TypeError("Input name and surname must be a string!!!");
    }
    this._name = name;
    this._surname = surname;
    User.#counter++;
  }
  set name(value) {
    if (typeof value !== "string") {
      throw new TypeError("Input name must be a string!!!");
    }
    this._name = value;
  }
  set surname(value) {
    if (typeof value !== "string") {
      throw new TypeError("Input surname must be a string!!!");
    }
    this._surname = value;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }
  getFullName = function () {
    return `${this._name} ${this._surname}`;
  };
}

class Stud extends User {
  static #counter = 0;
  constructor(name, surname, year) {
    if (!Number.isInteger(year)) {
      throw new TypeError("Input year must be an integer!!!");
    }

    if (
      new Date().getFullYear() - year + 1 > 5 ||
      new Date().getFullYear() - year + 1 < 0
    ) {
      throw new Error("Wrong input year!!!");
    }
    super(name, surname);
    this._year = year;
    Stud.#counter++;
  }
  set year(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError("Input year must be an integer!!!");
    }
    if (
      new Date().getFullYear() - value + 1 > 5 ||
      new Date().getFullYear() - value + 1 < 0
    ) {
      throw new Error("Wrong input year!!!");
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
  getFullName() {
    super.getFullName();
  }
  getCourse() {
    let course = new Date().getFullYear() - this._year + 1;
    return course;
  }
  getQuantity() {
    return Stud.#counter;
  }
}

let stud1, stud2, stud3;
//Объекты без выброса ошибки
try {
  stud1 = new Stud("Pete", "Tong", 2017);
  stud2 = new Stud("Peter", "Pen", 2021);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

console.log("Full name = " + stud1.getFullName());
console.log("Course = " + stud1.getCourse());
console.log("Full name = " + stud2.getFullName());
console.log("Course = " + stud2.getCourse());

//З попытки неправильного создания объекта с выбросом ошибки
console.log(`-------------------------`);
console.log(`Wrong creation of an object:`);
try {
  stud3 = new Stud("Sofia", "Aniston", 545646);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

try {
  stud3 = new Stud("Sofia", "Aniston", "2015");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}
try {
  stud3 = new Stud(56, "Aniston", 2020);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

//Количество созданных объектов
console.log(`-------------------------`);
console.log("Quantity of students = " + stud1.getQuantity());
