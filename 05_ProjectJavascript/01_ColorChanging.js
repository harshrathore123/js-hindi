const buttons = document.querySelectorAll(".box");
// const body = document.querySelector("body");

buttons.forEach((button)=>{
    
    button.addEventListener('click',(e)=>{

        switch (e.target.id) {
            case 'antiquewhite':
                for(let i=1;i<11;i++)
                {
                    console.log(`2 * ${i} ${2*i}`);
                }

                document.body.style.backgroundColor = e.target.id;
                break;
            
            case 'blue':
                document.body.style.backgroundColor=e.target.id;
            break;

            case 'brown':
                document.body.style.backgroundColor=e.target.id;
            break;

            case 'bisque':
                document.body.style.backgroundColor=e.target.id;
            break;

            default:
                document.body.style.backgroundColor = "black";
                break;
        }
    })
})