//Task-1 Fetching API in WebPage

fetch('https://jsonplaceholder.typicode.com/users')
.then((user)=>{

    return user.json();
})
.then((userData)=>{
    console.log(userData[0]);

    const name = document.querySelector(".card-Name");
    name.innerHTML = userData[0].name;

    const username = document.querySelector(".username");
    username.innerHTML = `Username: ${userData[0].username}`;

    const email = document.querySelector(".email");
    email.innerHTML = `Email: ${userData[0].email}`;

    const address = document.querySelector(".address");
    address.innerHTML = `Address: ${userData[0].address.city}`;

    const phone = document.querySelector(".phone");
    phone.innerHTML = `Phone: ${userData[0].phone}`;
})  
.catch((error)=>{
    console.log("Error: Something Went Wrong");
})



