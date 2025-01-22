const arr = [
    'honda',
    'swift',
    'fortuner',
    'BMW'
]

arr.forEach(element => {
    console.log(element);
    
});

arr.forEach(function (val) {
    console.log(val)
})

const myobj = [
    {
        name:"harsh",
        age:"32",
        location:"Indore"
    },
    {
        name:"akash",
        age:"12",
        location:"Bhopal"
    }
]

myobj.forEach((value)=>{
    console.log(value.age);
    
})
