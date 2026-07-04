const playerBtns = document.querySelectorAll('.playBtn');
const message = document.querySelector('.message-container');
const msg = document.querySelector('#msg');
const resetBtn = document.querySelector('.reset')



let turn = true;
const winPattern = [
[0,1,2],
[3,4,5],
[6,7,8],
[2,4,6],
[0,3,6],
[2,5,8],
[1,4,7],
[0,4,8]
    ]

const resetGame = () => {
turn = true;
enableBtn();
message.classList.add("hide");

    }

const enableBtn = () => {
for(let button of playerBtns){
button.disabled = false;
button.innerText = "";
    }
    }


function showWinner(winner){ msg.innerText = `The winner is ${winner}` 
message.classList.remove("hide");
}

const disableBtn = () => {
for(let button of playerBtns){
button.disabled = true;
    }
    }


playerBtns.forEach ((playBtn) => { 
playBtn.addEventListener('click' , () => {
    console.log("button was clicked ")
    

if(turn === true){
playBtn.innerText = "O";
turn = false;
    }
    else{
        playBtn.innerText = "X";
        turn = true;
}
checkWinner();
    }) 
    })




function checkWinner(){

for (let pattern of winPattern){
let pos1Val = playerBtns[pattern[0]].innerText;
let pos2Val = playerBtns[pattern[1]].innerText;
let pos3Val = playerBtns[pattern[2]].innerText;

if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
if(pos1Val === pos2Val && pos2Val === pos3Val){
console.log("we have a winner", pos1Val)
showWinner(pos1Val);
disableBtn();
    }
    }

}
}

resetBtn.addEventListener("click",resetGame);





