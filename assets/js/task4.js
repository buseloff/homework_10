"use strict";
/*Задание 4. Добыть 1-цу из массива [7, 7, 7, 1, 7, 7, 7, 7, 7, 7]. 
4.1  Дан массив [1, 2, 3, [4, 5, [6, 7, 8, 9], 10, 11, 12], 13, 14, 15]. Извлечь:
- 5, 8 
- [6, 7, 8, 9]
 - все, кроме 1, 2, 3.

 */
const testArray1 = [7, 7, 7, 1, 7, 7, 7, 7, 7, 7];
let [, , , number1] = testArray1;
console.log("Initial array 1:");
console.log("[7, 7, 7, 1, 7, 7, 7, 7, 7, 7]");
console.log("Found value:");
console.log(number1);
console.log(`-------------------------`);

const testArray2 = [1, 2, 3, [4, 5, [6, 7, 8, 9], 10, 11, 12], 13, 14, 15];
let [, , , [, number5, [, , number8]]] = testArray2;
console.log("Initial array 2:");
console.log("[1, 2, 3, [4, 5, [6, 7, 8, 9], 10, 11, 12], 13, 14, 15]");
console.log("Found values:");
console.log(number5 + " " + number8);
console.log(`-------------------------`);

let [, , , [, , [...innerArray]]] = testArray2;
console.log(innerArray.join(" "));
console.log(`-------------------------`);

//Вариант 1
let [, , , [...res1], ...res2] = testArray2;
console.log(res1 + "," + res2);
//Вариант 2
let [, , , ...res3] = testArray2;
console.log(res3.join(","));