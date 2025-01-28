new Promise((resolve,reject)=>{
    let error = true;

    if(error == true){
        resolve({username:"harsh",pasword:"harsh121"});
    }
    else
    {
       reject("Something Went Wrong");
    }

    //channing then into then into then
})
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either complete or incomplete")
})


//Here one more thing which is finally which is execute always 