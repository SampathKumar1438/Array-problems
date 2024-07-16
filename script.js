//creating an array and init it

let arr=[1,3,2,4];
console.log(arr);

//add and remove elements

arr.push(33);
console.log(arr);
arr.pop(2);
console.log(arr);
arr.shift(1);
console.log(arr);
arr.unshift(3);
console.log(arr);

//array searching

let index = arr.indexOf(3);
console.log(index);
let msg = (value) => value < 4; console.log(arr.find(msg));

// array filtering 

let msg1 = (value) => value%2!=0; console.log(arr.filter(msg));

// mapping in array

const arr1=[4,16,9,25];
const newArr = arr1.map(Math.sqrt);
console.log(newArr);


