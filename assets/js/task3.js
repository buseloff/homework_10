"use strict";
/*    Задание 3. Дан массив. Вывести элементы после первого нуля.
 */
const testArray = [4, 568, 56, 0, 5, 8, 59];

function findElementsAfterFirstZero(inputArray) {
  let indexOfZeroItem = inputArray.indexOf(0);
  let resultArray = [];
  for (let i = indexOfZeroItem + 1; i < inputArray.length; i++) {
    resultArray.push(inputArray[i]);
  }
  return resultArray;
}

console.log("Initial array:");
console.log(testArray.join(" "));
console.log("Found array after 1st zero element:");
console.log(findElementsAfterFirstZero(testArray).join(" "));
