const promise2 = new Promise((resolve,reject)=>{
    let error = true;

    if(!error){
        resolve({username:"Harsh",userpass:"1212"});
    }
    else{
        reject("Something Went Wrong");
    }
});

//When we are using async we must used await
async function consumePromiseSecond(){
    try {
        const response = await promise2
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseSecond();