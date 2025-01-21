//closre

function myfunction(){
    let username = "harsh"

    function mysecondfunction(){
        let password = "hgsdf"
        console.log(`Username from outer function is ${username}`)
    }

    // console.log(password)
    mysecondfunction();
}

myfunction()


//Conditional Statement

if(true){
    const username = "Harsh"

    if(username == "Harsh"){
        const password = "Harsh121"
        console.log(`Username : ${username} & Password : ${password}`)
    }

    // console.log(password)
}

// console.log(username)


//++++++++++++++++++++++++++++++  INTERESTING ++++++++++++++++++++++++++++++

console.log(myone(4))
function myone(num1){
    return num1+1
}

// myone(4)

//----------------------------------------------------------------------------


balance(4000)
const balance = function(amount){
    return amount+1000;
}

// balance(4000);
