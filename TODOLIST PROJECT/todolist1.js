const username = document.querySelector("#input");
const btn = document.querySelector("#btn");
const ad = btn.innerHTML;
const recorddata = document.querySelector(".records");

let arr = [];

addTask=()=>{
    const name = username.value;
    if(edit!= null)
    {
        arr.splice(edit,1,{"name":name});
        edit=null;
    }
    else{
        arr.push({"name":name});
    }
    
    console.log(arr);

    username.value = "";
    display();
    btn.innerHTML = ad;

}


display=()=>{

    let store = "";

    arr.forEach((user,i) => {
        store += `<tr>
                <br>
                    <td>${i+1}</td>
                    <td>${user.name}</td>
                    <td>
                        <i class="btn text-white fa fa-edit btn-info mx-3" onclick = "Editbtn(${i})" ></i>
                        <i class="btn btn-danger text-white fa fa-trash btn-info" onclick = "Delete(${i})"></i>
                    </td>
    
                </tr>`
    });
    recorddata.innerHTML = store;


}

Delete = (id)=>{
    arr.splice(id,1);
    display();
}

let edit = null;
Editbtn = (id) =>{
    edit = id;
    username.value = arr[id].name;

    btn.innerHTML = "Update";
}

