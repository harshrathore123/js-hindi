//Create object through literl not in singlton

// const detail ={
//     name:"harsh",
//     age:"23",
//     email:"Rathorehrharsh@yahoo.com",
//     "class":"2nd"
// }

// console.log(detail.name);
// console.log(detail["class"])

//Now we will access symbol primitive data type in object

//create symbol

const a = Symbol();
const detail ={
    name:"harsh",
    age:"23",
    email:"Rathorehrharsh@yahoo.com",
    "class":"2nd",
    [a]:"Key1"
}

detail.name = "Harsh";
console.log(detail)

//Method Freeze is using for not modifying any thing

// Object.freeze(detail)
detail.age = "33"
console.log(detail)

detail.Message = function(){

    console.log("This is Personal Information");
}

console.log(detail.Message());

detail.Message1 = function(){
    console.log(`Hi My name is: ${this.name}`)
}

console.log(detail.Message1())