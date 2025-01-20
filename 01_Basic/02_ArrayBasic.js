//Some other method we will used in this js

const arr = [1,4,2,5,2,4]
// console.log("Original Array:",arr)

const newarr = [1,24,2,5,3]
// console.log("New Array:",newarr);

//Using Spread Operator and Concat

const a = arr.concat(newarr);
// console.log("Concat Array:",a)

const b = [...arr,...newarr,...a];
// console.log("Spread Operator Array:",b)

const c = arr.concat(newarr,a,b);
// console.log(c)

//Now we will using flat method in array

const d = [1,3,42,[211,2],23,2,[3,23],2,[2230,232],232,232];
const another_d = d.flat(Infinity);
console.log(another_d)