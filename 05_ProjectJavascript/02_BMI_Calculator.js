const form = document.querySelector("form");

form.addEventListener('submit',(event)=>{

   event.preventDefault();


   const h = parseInt(document.querySelector(".height").value);
   const w = parseInt(document.querySelector(".Weight").value);

   const r = document.querySelector("#result");

   if(h===""||h<0||isNaN(h)){
        r.innerHTML = `Please Give Correct Height ${h}`;
   }
   else if(w===""||w<0||isNaN(w)){
        r.innerHTML = `Please Give Correct Weight ${w}`;
   }
   else{
        const f = (w/((h*h)/10000)).toFixed(2);

        r.innerHTML = `<span>${f}</span>`
        // console.log(formula);
   }

})