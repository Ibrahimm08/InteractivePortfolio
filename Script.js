function CardToggle(){
    let block = document.getElementsByClassName("Block");
    
    for (let i = 0; i < block.length; i++){
        block[i].addEventListener("click", function(){
            let current = document.getElementsByClassName("large");
            current[0].className = current[0].className.replace(" large"," norm");
            this.className.replace(" norm","");
            this.className += " large";
        })
    }
}