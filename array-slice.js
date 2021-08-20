// using slice()
const numbers = [3, 5, 6, 8, 9, 25, 29, 35, 28, 87];
const numberSliced = numbers.slice(7, 9);
// console.log(numberSliced);
// console.log(numbers);

// splice to remove an elements from an array
// const numberSpliced = numbers.splice(4, 3);
// console.log(numberSpliced);
// console.log(numbers);


// remove/delete elements and add/insert some elements by using splice()
const numberSpliced2 = numbers.splice(4, 0, 99, 111, 88, 777, 28);
console.log(numberSpliced2);
console.log(numbers);

