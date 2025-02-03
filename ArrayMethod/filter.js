let arr = [2,312,12,32,12];

//FILTER METHOD
/**
 * Syntax:
 * 
 * arrayname.filter(()=>{}):-Filter is method which only check the condition true or false */

console.log(arr.filter((i)=>(i<=19)));


//Searching array:


const fruits = ["apple", "banana", "grapes", "mango","orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "Ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
