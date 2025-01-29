const con = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((res) => {
        console.log(res);


        //Card Div

        for (let i = 0; i < res.length; i++) {
            const div = document.createElement("div");
            // console.log(div);
            div.setAttribute("class", "div1");

        //Name
            const heading = document.createElement("h1");
            heading.setAttribute("class", "name");
            // const subdiv = document.querySelector(".div1");
            // console.log(subdiv);
            div.appendChild(heading);
            console.log(heading);

            heading.innerHTML = res[i].name;



        //Username Under Card Div
            const Para1 = document.createElement("p");
            Para1.setAttribute("class", "username");
            div.appendChild(Para1);

            Para1.innerHTML = `Username: ${res[i].username}`;



        //Email Under Card Div
            const Para2 = document.createElement("p");
            Para2.setAttribute("class", "email");
            div.appendChild(Para2);

            Para2.innerHTML = `Email: ${res[i].email}`;


        //address Under Card Div
            const address = document.createElement("p");
            address.setAttribute("class", "address");
            div.appendChild(address);

            address.innerHTML = `Address: ${res[i].address.suite}, ${res[i].address.street}, ${res[i].address.city}`;


            // const fdiv = document.querySelector(".container");
            // fdiv.appendChild(div);
            con.appendChild(div);
        }
    })
    .catch(() => {
        console.log("Error: Something Went Wrong");
    })

