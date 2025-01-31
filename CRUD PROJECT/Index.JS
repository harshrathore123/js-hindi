const username = document.querySelector("#userfield");
const record = document.querySelector("#record");
const addbtn = document.querySelector("#AddBtn");
const addbt = addbtn.innerHTML;

let userarray = [];
//Add functionality

function add() {
    const user = username.value;

    if(edit!=null)
    {
        //edit
        userarray.splice(edit,1,{"Task":user});
        edit = null;
    }

    else
    {
        //insert
        userarray.push({ "Task": user });
    }


    
    username.value = "";
    addbtn.innerHTML = addbt;
    console.log(userarray);
    display();

  
}


//Display Functionality
function display() {
    let res = "";

    for (let i = 0; i < userarray.length; i++) {
        res += `<tr>
                        <th scope="row">${i + 1}</th>
                        <td>${userarray[i].Task}</td>
                        <td><i class="btn text-white fa fa-edit btn-info mx-3" onclick = "Edit(${i})"></i>
                        <i class="btn btn-danger text-white fa fa-trash btn-info" onclick="Delete(${i})"></i>
                        </td>
            
                </tr>`
    }
    record.innerHTML = res;
}

//Edit Functionality

let edit = null;

function Edit(id){
    edit = id;
    username.value = userarray[id].Task;
    addbtn.innerHTML = "Update";

}



//Delete Functionality
function Delete(id) {
    userarray.splice(id, 1);
    console.log(userarray);
    display();
}