//{}-> THIS IS CALLED SCOPED

let a = 200;

function myfunction(){
    let a = 23;
    const b = 322;
    console.log("Block Scope:",a)
    console.log("Block Scope:",b)
}

myfunction()
console.log("Global Scope:",a)

// console.log(b)