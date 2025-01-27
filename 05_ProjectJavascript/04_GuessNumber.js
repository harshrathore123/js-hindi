let rendom = parseInt(Math.random()*100+1);

const inputbox = document.querySelector("#inputBox");
const submitbtn = document.querySelector("#subBtn");

const PreviousGuess = document.querySelector("#preGues");
const GuesRemainder = document.querySelector("#GuesRem");

const result = document.querySelector(".LowOrHigh");
const resultParas = document.querySelector(".ResultParas")

const p = document.createElement("p");


let prevguess = [];
let newguess =1;

let playGame = true;


if(playGame){
    submitbtn.addEventListener('click',(e)=>{
        e.preventDefault();

        const gues = parseInt(inputbox.value);
        // console.log(gues);
        validateGuess(gues);
    })
}

function validateGuess(gues){
    if(isNaN(gues)){
        result.innerHTML = `Please Enter A Valid Number`;
    }
    else if(gues<1){
        result.innerHTML = `Please Enter Number More Than 1`;
    }
    else if(gues>100){
        result.innerHTML = `Please Enter Number Less Than 100`
    }
    else{
        prevguess.push(gues);

        if(PreviousGuess===11){
            displayGuess(gues);
            displayMessage(`Game Over. Random number was ${rendom}`);
            endGame();
        }

        else{
            displayGuess(gues);
            checkGuess(gues);
        }
    }

}

function checkGuess(gues){
if(gues === rendom){
    displayMessage(`You are Guessing Correct Number`);
    endGame();
}
else if(gues < rendom){
    displayMessage(`You are Guessing Number Which is too low`)
}

else if(gues > rendom){
    displayMessage(`You are Guessing Number Which is too low`)
}
}

function displayGuess(gues){
    inputbox.value = '';
    PreviousGuess.innerHTML += `${gues},`
    newguess = newguess+1;
    GuesRemainder.innerHTML = `${11-newguess}`;
}

function displayMessage(message){
result.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){

    inputbox.value = '';
    inputbox.setAttribute("disable","");
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    resultParas.appendChild(p);
    playGame = false;
    newGame();

}

function newGame(){
const newbtn = document.querySelector("#newGame");
newbtn.addEventListener('click',(e)=>{
    
    rendom = parseInt(Math.random()*100+1);
    prevguess = [];
    newguess = 1;
    PreviousGuess.innerHTML = "";
    GuesRemainder.innerHTML = `${11-newguess}`;
    inputbox.removeAttribute('disabled');
    resultParas.removeChild(p);
    playGame = true;
})
}



