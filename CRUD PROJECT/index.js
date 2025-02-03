const email = document.querySelector("#Email");
const password = document.querySelector("#Password");
const cur_Adress = document.querySelector("#Current_Address");
const per_Adress = document.querySelector("#Permanent_Address");
const city = document.querySelector("#City");
const pincod = document.querySelector("#Zipcode");
const addbtn = document.querySelector("#SignBtn");
const chngbtn = addbtn.innerHTML;
const record = document.querySelector("#records");


let arr = [];

//Add Funtionality
addbtn.addEventListener("click", (e) => {

    e.preventDefault();
    

    const em = email.value;
    const p = password.value;
    const cu = cur_Adress.value;
    const pe = per_Adress.value;
    const c = city.value;
    const pin = pincod.value;

    if(editid != null)
    {
        //edit
        arr.splice(editid,1,{"Email": em, "Password": p, "Current_Address": cu, "Permanent_Address": pe, "City": c,
        "ZipCode": pin});
        editid = null;

    }

    else
    {
        //insert
        arr.push({
            "Email": em, "Password": p, "Current_Address": cu, "Permanent_Address": pe, "City": c,
            "ZipCode": pin
        });
    }

    console.log(arr);

    email.value = "";
    password.value = "";
    cur_Adress.value = "";
    per_Adress.value = "";
    city.value = "";
    pincod.value = "";

    addbtn.innerHTML = chngbtn;


    display();
});


//Display functionality

function display() {
    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += `<tr>
    <td>${i + 1}</td>
    <td>${arr[i].Email}</td>
    <td>${arr[i].Password}</td>
    <td>${arr[i].Current_Address}</td>
    <td>${arr[i].Permanent_Address}</td>
    <td>${arr[i].City}</td>
    <td>${arr[i].ZipCode}</td>
    <td>
    <i class="btn text-white fa fa-edit btn-info mx-3" onclick = "Edit(${i})"></i>
    <i class="btn btn-danger text-white fa fa-trash btn-info" onclick = "Delete(${i})"></i>
</td>
 </tr>`
    }
    record.innerHTML = res;
}


//Delete Functionality

function Delete(id) {
    arr.splice(id, 1);
    display();
}


//Edit Functionality:

let editid = null;
function Edit(id) {
    editid = id;
    email.value = arr[id].Email
    password.value = arr[id].Password
    cur_Adress.value = arr[id].Current_Address
    per_Adress.value = arr[id].Permanent_Address
    city.value = arr[id].City
    pincod.value = arr[id].ZipCode

    addbtn.innerHTML = "Update";


}

// function validate(){
//     if(email.value){
//         email.classList.remove("is-invalid");
//         email.classList.add("is-valid");
//     }
//     else{
//         email.classList.remove("is-valid");
//         email.classList.add("is-invalid");
//     }
// }