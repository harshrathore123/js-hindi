// Here we will discus about this keyword
/** Basically this is a keyboard in javascript whiich is used for
 * access the current context
 */

const user ={
    username : "harsh",
    password : "password1",

    //create method
    checking: function(){
        // console.log(`${username} is a learning mode`)
        console.log(`${this.username} is a learning mode`)
        // if we want to check all current context so we will console.log(this)
        console.log(this)
    }
}

user.checking()
user.username = "AKash";
user.checking()
// Object.freeze(user);
// user.username = "karan"
// user.checking()

console.log(this)

//in function this keyword is used or not we will check

function one(){
    let username = "harsh"
    console.log(this.username)
}
one()

//Finally we have to check this keyword is not working in function

const chat = () =>{
    const hi = "hie"
    console.log(this.hi)
}
chat();

//IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(() =>{
    //simple iife
    console.log("Hi i am harsh rathore")
})();

(function app(){
    //named iife
    console.log("Hi i am harsh rathore")
})()