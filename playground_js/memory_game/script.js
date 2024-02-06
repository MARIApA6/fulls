const cards = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
const cardsArry = [...cards, ...cards];
//let idex_card1 = [];
//let idex_card2 = [];
const innerCard = [];

const bigD = document.getElementById("bigDId");

function createCards() {
    for (i = 0; i < 18; i++) {
        const indvCard = document.createElement('div');

        indvCard.innerText = "card";
        indvCard.attribute = cards[i];
        bigD.append(indvCard);

        indvCard.classList.add('cardClass');
        indvCard.setAttribute("data-cards", cardsArry[i]/*or funtion shuffle*/);

        // indvCard.addEventListener('click', appendDivs)

    }
}

cards.forEach(element => {
    const newDivs = cardsArry.map(appendDivs);
});


function appendDivs() {

    const mainCards = document.querySelector('.cardClass')

    // 2 divs in continer
    const frontSide = document.createElement('div');
    const backSide = document.createElement('div');

    frontSide.classList.add('frontSide');
    backSide.classList.add('backSide');

    mainCards.append(frontSide, backSide);

}







//$('div.cardClass').hover(flipThis);


function flipCard() {
    (event) => {
        const indexCard = event.target;
        if (!indexCard.classList.contians('flipCard')) {
            createCards.classList.add('flipCard');
        }
    }

}
flipCard();


//פעולה השאפל 
const shuffle = () => {
    cardsArry.sort(() => Math.random() - 0.5);
};
shuffle();



// function flipCard() {
//     let pickCard = document.querySelector(".cardClass");

//     for (i = 0; i < pickCard.length; i++)
//         pickCard[i].classList.toggle(".flipCard");

// }

// flipCard();


////////////////////////////////////////
// const theCards = document.querySelector(".dataCard");
// let cardA = theCards.value = [];
// let cardB = theCards.value = [];
// function checkMatch() {
//     if (cardA === cardB) {

//     }
// }

// function checkCards() {
//     let twoCards = (idex_card1, idex_card2)
//     if (idex_card1 === index_card2) {
//     }
// }

///////////////////////////////////


/*
function flipCard() {
    cards.forEach(element => {
        const hiddenDiv = document.createElement('div');
        innerDiv.classList.add('innerDiv');
        hiddenDiv.querySelectorAll('innerDiv');
    });
};

const theCard = document.querySelector(".smallCards");
theCard.addEventListener('click', flipCard);
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

/*
פונקציה שעושה לזה רנדר כל פעם מחדש?
const renderCards = () => {
    const gameContainer = document.querySelector('.bigDiv');
    gameContainer.innerHTML = '';
    cards.forEach((value, index) => {
        const card = createCards(value, index);
        gameContainer.appendChild(card);
    });
};

*/