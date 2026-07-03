const playerBtns = document.querySelectorAll('.playBtn');

playerBtns.forEach ((playBtn) => {
playBtn.addEventListener('click' , () => {
    console.log("button was clicked ")
    playBtn.innerText = "X"
    }) 
    })

