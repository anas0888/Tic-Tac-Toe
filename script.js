const playerBtns = document.querySelectorAll('.playBtn');



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

    }
    }

}
}
