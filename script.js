const playerBtns = document.querySelectorAll('.playBtn');



let turn = true;




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
    }) 
    })

