//Task-1 Fetching API in WebPage

fetch('https://jsonplaceholder.typicode.com/users')
.then((user)=>{

    return user.json();
})
.then((userData)=>{

    const arr = [userData];
    // console.log(arr);

   console.log(arr[0]);
})  
.catch((error)=>{
    console.log("Error: Something Went Wrong");
})



