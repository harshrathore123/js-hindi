let arr = [1,32,23,12,123,31];

console.log(arr);

//PUSH METHOD
/* Syntax:

    arrayname.push(element which we want to insert last index);

*/

arr.push(23);
console.log(`Insert Element at last index ${arr}`);

//UNSHIFT METHOD
/**
 * Syntax:
 * 
 * arrayname.unshift(Element which we want to insert first index)
 */

arr.unshift(23);
console.log(`Insert Element at first index ${arr}`);

//POP METHOD
/**
 * Syntax:
 * 
 * arrayname.pop():-Deleting element from the end index
 */

console.log(`Removing Element from Last Index: ${arr.pop()}`);
console.log(`After removing last element our array is: ${arr}`);

//SHIFT METHOD
/**
 * Syntax:
 * 
 * arrayname.shift():-Deleting element from the first index
 */

console.log(`Removing Element from First Index: ${arr.shift()}`);
console.log(`After removing last element our array is: ${arr}`);

//TOSTRING METHOD
/**
 * Syntax:
 * 
 * arrayname.toString():-Using for convert array into string
 */


console.log(`Converting array into string:`);
arr.toString();
console.log(arr);

//REVERESE METHOD
/**
 * Syntax:
 * 
 * arrayname.reverse():-Reverse the array 
 */

arr.reverse();
console.log(arr);

let strarr = ["harsh","akash","karan"];
console.log(strarr);

strarr.reverse();
console.log(strarr);

//INCLUDE METHOD
/**
 * Syntax:
 * 
 * arrayname.includes(element):-It checks the element is present or not gives boolean type output
 */


console.log(arr.includes(1));

//MAP METHOD
/**
 * Syntax:
 * 
 * arrayname.map(()=>{}):-Map is iterative method which take callbackfunction and iterate every element we will perform all task from this
 */

console.log(arr.map((i)=>i+1));

console.log(arr);

/**
 * Entries with next with value
 * 
 * if we want to print the array value with key and value format then we will use entries and then we will print
 * .next().value
 * 
 */


let v = arr.entries();
console.log(v.next().value);

