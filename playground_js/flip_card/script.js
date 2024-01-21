const card = document.getElementById("card")

card.addEventListener("click", flipCard);

function flipCard() {
    card.classList.toggle("flipCard");
}

flipCard();

//for each function toogle?
//card.forEach()=>{
//card.classList.toggle("flipCard");}?
//
