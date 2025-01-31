const addUser = document.getElementById("AddBtn");
const addbtntext = addUser.innerText;
const username = document.getElementById("username");

const recordsDisplay = document.getElementById("records");

let userarr = [];

let editid = null;

function add(){
    const user = username.value;

    //Update Part:
    if(editid!=null)
    {
        //edit
        userarr.splice(editid,1,{"user":user}); 
        editid = null; 
    }

    //Add Task part
    else{
        //insert
        userarr.push({"user":user});
    }


    username.value = "";
    

    //Update Time Talk
    addUser.innerText = addbtntext ;
    DisplaySaveInformation();
   
}

function DisplaySaveInformation(){
    let statement = "";
    
    for(let i=0;i<userarr.length;i++){
        statement += ` <tr>
                        <th scope="row">${i+1}</th>
                        <td>${userarr[i].user}</td>
                        <td><i class="btn text-white fa fa-edit btn-info mx-3"  onclick="EditInformation(${i})"></i>
                        <i class="btn btn-danger text-white fa fa-trash btn-info" onclick="DeleteInformation(${i})"></i></td>
                      </tr>`
    }
    recordsDisplay.innerHTML = statement;
}

function EditInformation(id){
editid = id;
username.value = userarr[id].user;
addUser.innerText = "Update";

}


function DeleteInformation(id){
    userarr.splice(id,1);
    DisplaySaveInformation();
}