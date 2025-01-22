//if object then foroff loop support

const obj1 = {
    name:"harsh",
    age:"23"
}

// for (const [element,value] of obj1) {
//     console.log([element,value])
// }

for (const [key,value] in obj1) {
    console.log([key,value])
}

const arr = [232,423,24323,2123,23]

for (const i in arr) {
    console.log(`Indexing of ${i} is: ${arr[i]}`);
    
}