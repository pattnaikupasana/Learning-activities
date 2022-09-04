/*Doubling of number */
let numbers = [1, 2, 3, 4];
let newNumbersDouble = numbers.filter(a => a % 2 !== 0).map(a => a * 2);
console.log("The doubled numbers are", newNumbersDouble);