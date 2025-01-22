let map = new Map();

map.set("name","harsh");
map.set("age","23");
map.set("name","karan");

console.log(map);

//access map in array:

// for (const [key,value] of map) {
//     console.log(`${key} := ${value}`)
// }

for (const [key,value] in map) {
    console.log(`${key} := ${value}`)
}


