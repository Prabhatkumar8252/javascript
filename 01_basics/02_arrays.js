// Array

// for the declaration of an arary

const myArray = [2, 4, 5, 7, 8]
const myHeros = ["shaktiman", "naagraj", "doga"]
const myArray2 = new Array(3, 6, 7, 8, 9)
console.log(myArray[0]);
console.log(myArray2[1]);
console.log(myHeros[2]);

// Array Methods

myArray.push(7)
myArray.push(6)
myArray.pop()
myArray.unshift(1)
myArray.shift()

console.log(myArray.includes(9));
console.log(myArray.indexOf(9));
console.log(myArray);

const newArr = myArray.join()
console.log(myArray);
console.log( typeof newArr); // string

// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)
console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 5)
console.log(myn2);


