function createCards() {
    for (i = 0; i < 18; i++) {
        const indvCard = document.createElement('div');

        indvCard.innerText = "card";
        indvCard.attribute = cards[i];
        bigD.append(indvCard);

        indvCard.classList.add('cardClass');
        indvCard.setAttribute("data-cards", cardsArry[i]/*or funtion shuffle*/);



        indvCard.addEventListener('click', appendDivs)

    }
}


function appendDivs() {

    const mainCards = document.querySelector('.cardClass')

    // 2 divs in continer
    const frontSide = document.createElement('div');
    const backSide = document.createElement('div');

    frontSide.classList.add('frontSide');
    backSide.classList.add('backSide');

    mainCards.append(frontSide, backSide);

}
appendDivs();