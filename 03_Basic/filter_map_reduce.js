const arr = [1,32,2,23,2,4,3,23,23,23,23,232,3,2];

// console.log(arr)

let a = arr.filter((n)=>{
    return n%2==0
})

let b = arr.filter((m)=> (m>33));

// console.log(a)
// console.log(b)

//if we are using foreach then the example

let arr1 = []

arr.forEach((num)=>{
    if(num%2!=0){
        arr1.push(num)
    }
})

console.log(arr1);


const mydetail = [
    {
        name:"A",age:"12",dob:"2000"
    },
    {
        name:"B",age:"13",dob:"1980"
    },
    {
        name:"C",age:"15",dob:"2022"
    },
    {
        name:"D",age:"16",dob:"2001"
    },
    {
        name:"E",age:"23",dob:"2021"
    },
    {
        name:"F",age:"23",dob:"2022"
    },
    {
        name:"G",age:"23",dob:"2000"
    },
    {
        name:"H",age:"43",dob:"2000"
    },
    {
        name:"I",age:"42",dob:"2000"
    }
];

//Filter :

let userbook = mydetail.filter((md)=>{
    if (md.name === "z"){
        return md.name
    }
    // return md.name === "A"
})

console.log(userbook);


const arrrr =[1,2,3,4]

arrrr.forEach((num)=>{
    let add = num+10
    console.log(add)
}
)

const c = arrrr.map((n)=>{
    return n+2
}).map((n)=>{
    return n>2
})

console.log(c)


//Reduce Method:

let onearray = [23,12,22,43]

let final = onearray.reduce((accum,cuurval)=>{
    console.log(`accumaltor value is :${accum} and currrent value is: ${cuurval}`);
    return accum+cuurval
    
},0)

console.log(final)