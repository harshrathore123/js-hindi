//Singlton used for object

const PersonalDetail = new Object();
// console.log("Personal Detail:",PersonalDetail)

//Another way to declare which is not singlton

const MainDetail = {};
// console.log(MainDetail)

MainDetail.id = "12Harsh12";
MainDetail.name = "Harsh_Rathore";
MainDetail.age = "23";

// console.log(MainDetail)

const anotherdata = {
    email :"some@gmail.com",
    FamilyDetail:{
        ParentsDetail:{
            FatherName:"Ramesh",
            MotherName:"Sima"
        },
        ChildrenDetail:{
            BoyName:"Rahul",
            GirlName:"Shreya"
        }
    }
}

console.log(anotherdata.FamilyDetail.ChildrenDetail.GirlName)

const ob1 = {1:"harsh",2:"23"};
const ob2 = {3:"Rathore@gmail.com",4:"Indore"};

const ob3 = Object.assign({},ob1,ob2)
console.log(ob3)

const ob4 = {...ob1,...ob2};
console.log(ob4);

//create an array object

const arr = [
    {
        id:"1",
        name:"harsh"
    },
    {
        id:"2",
        name:"akash"
    }
]

console.log(arr[1].id)
console.log(arr[0].name);

console.log(Object.keys(anotherdata));
console.log(Object.values(anotherdata));
