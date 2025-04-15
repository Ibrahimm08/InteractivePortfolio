function CardToggle(){
    const Block = document.querySelectorAll(".Block");

    Block.forEach((block) => {
    block.addEventListener("click", (event) => {
        const clicked = event.currentTarget;
        const LBLock = document.querySelector(".Block.large");
        if (clicked === LBLock){
            console.log("Large carde clicked");
            return;
        }
        LBLock.classList.remove("large");
        LBLock.classList.add("norm");
        clicked.classList.remove("norm");
        clicked.classList.add("large");
    })
    })
    // let block = document.getElementsByClassName("Block");
    
    // for (let i = 0; i < block.length; i++){
    //     block[i].addEventListener("click", function(){
    //         let current = document.getElementsByClassName("large");
    //         current[0].className = current[0].className.replace(" large"," norm");
    //         this.className.replace(" norm","");
    //         this.className += " large";
    //     })
    // }
}