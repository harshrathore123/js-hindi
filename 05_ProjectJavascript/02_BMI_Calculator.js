// const form = document.querySelector("form");

// form.addEventListener('submit',(event)=>{

//    event.preventDefault();


//    const h = parseInt(document.querySelector(".height").value);
//    const w = parseInt(document.querySelector(".Weight").value);

//    const r = document.querySelector("#result");

//    if(h===""||h<0||isNaN(h)){
//         r.innerHTML = `Please Give Correct Height ${h}`;
//    }
//    else if(w===""||w<0||isNaN(w)){
//         r.innerHTML = `Please Give Correct Weight ${w}`;
//    }
//    else{
//         const f = (w/((h*h)/10000)).toFixed(2);

//         r.innerHTML = `<span>${f}</span>`
//         // console.log(formula);
//    }

// })


//REVISION FOR BMI CALCULATOR:-

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
     e.preventDefault();

     let height = parseInt(document.querySelector(".height").value);
     let Width = parseInt(document.querySelector(".Weight").value);

     let result = document.querySelector("#result");

     if(height===""||height<0||isNaN(height)){
          result.innerHTML = `Please Enter Correct height ${height}`
     }
     else if(Width===""||Width<0||isNaN(Width)){
          result.innerHTML = `Please Enter Correct width ${Width}`
     }
     else{
          let res = (Width/((height*height)/10000)).toFixed(2);

          result.innerHTML = `<span>${res}</span>`

          if(res<=18.6){
               result.innerHTML = `<span> ${res} Under Weight </span>`
          }
          else if(res>18.6 && res<=24.9){
               result.innerHTML = `<span> ${res} Normal Weight </span>`
          }
          else{
               result.innerHTML = `<span> ${res} Over Weight </span>`
          }
     }

     


})

























