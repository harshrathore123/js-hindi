//Through async and await

//Now i understand await is used for reducing timing when they consume time

// async function getalldata(){
//     try {
//         const response = await fetch('https://randomuser.me/api/');

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: Something Went Wrong");
//     }
// }
// getalldata();


//Now we will using fetch through promise methods

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E: Something Went Wrong");
})