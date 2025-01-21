//write a function syntax

function  myfunction(name){
    return `My name is ${name}`
}

let Name = "harsh";
console.log(myfunction(Name));
console.log(myfun());


function myfun(){
    console.log("Harsh");
}

//Now we will see how to add to cart funcitonality work with rest operator as well as spread operator and when we say spread or rest at the time of use case

function addToCart(num1){
    return num1;
}

console.log(addToCart(2))

function ADDTOCART(...num1){
    return num1
}

console.log(ADDTOCART(78,58,42,5,5,5,5556));

/** When we are using rest operator (...) so it contain the rest values in an array */

function myFunctiS(val,val1,...num){
    return num

}

console.log(myFunctiS(1,2,4,2,43,23,2,4,23,2))

//Object Calling in function:

let user={
    username:"harsh",
    password:"harsh1212"
}

function Details(anyDetail){
    console.log(`User name of object is: ${anyDetail.username} and the password is : ${anyDetail.password}`);
    
}

Details(user);

//aother way to object calling in function we dont need to create a object (alg se) we will make object property at the time of calling of function

// example

function checkdetail(myobject){
    console.log(`Object NAME is: ${myobject.username} and password is: ${myobject.password}`);
    
}

checkdetail({
    username:"harsh",
    password:"lgsldjkf"
})


//Now we will try array in function

const arr = [1,3,2,4,2]

function myfunction(getarr){
    return getarr;
}

console.log(arr)

//another way to try array in function

function myarray(gettingarray){
    return gettingarray
}

console.log(myarray([1,2,423,23]));