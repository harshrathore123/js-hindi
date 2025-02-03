//sort METHOD
/**
 * Syntax:
 * 
 * arrayname.sort():-Only it can sorting array in string format not in a number format
 * 
 */

let arr1 = ["harsh","akash","great","punch"];
console.log(arr1);

arr1.sort();
console.log(arr1);

//but in case of number if we find ascending then a,b and for descending b,a
let arr2 = [1,32,23,12,123,31];

arr2.sort(function(a,b){
    return a-b;
})

console.log(arr2);

