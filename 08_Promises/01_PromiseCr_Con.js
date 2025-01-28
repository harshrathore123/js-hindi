//Here first way to create and consumption of promise

//Here new keyword is used to create instance of promise method
//Here the promise method is carry two parameter first is success and second failure
const prommise1 = new Promise((success,failure)=>{
    setTimeout(()=>{
        console.log("Async is Create Task 1");
        success();
    },1000)
});

//Now we will consume the creation of promise
prommise1.then(()=>{
    console.log("Consumption of Task 1 is Resolved");
})


//Now in second way we will direct creating with consumption without holding the promise on any variable

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async SetInterval Created");
        resolve();
    },1000)
}).then(()=>{
    console.log("Second Consumption Complete");
})

//Now we will creating promise with resolve parameter

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(/**["harsh","rathore","akash"],**/{username:"harsh",password:"harsh121"});
    },1000)
}).then((user)=>{
    console.log(user);
    
})