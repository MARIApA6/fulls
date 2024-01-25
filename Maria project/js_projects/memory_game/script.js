const cards = document.querySelector("smallCards");

function creatCards() {

    for (i = 0; i < 16; i++) {
        const bigD = document.getElementById("bigD");
        const smallCards = document.createElement('div');

        smallCards.innerText = "Small card";

        bigD.append(smallCards);

        smallCards.classList.add('smallCards');
        bigD.classList.add('bigD');


    }
    cards.addEventListener('click', flipCard);
}

function flipCard() {
    cards.forEach(element => {
        const hiddenDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');

        hiddenDiv.querySelectorAll('innerDiv');
    })
}
flipCard();


const theCard = document.querySelector(".smallCards");

theCard.addEventListener('click', flipCard);



//add same picture to 2 divs
//add a condition that is they fliped togather ==true


/*

functions

2.chak right conifgrtion(if two ==right)
3.leave the right one open
4.

*/

/*
function creatCards() {

    for (i = 0; i < 9; i++) {
        const body = document.body
        const mainDiv = document.createElement('div');

        mainDiv.innerText = "Main Div"

        body.append(mainDiv);

        mainDiv.classList.add('mainDiv');
        body.classList.add('body');

    }
}
*/