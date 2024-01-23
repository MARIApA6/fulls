

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

// make the divs even(!9)number 16?
//diplay divs in a table(did grid ) 
//move to  bigDiv!!!!


//make the mainDiv have two inner divs
//make them trsntion from hiden 180deg on ev=>click


//add same picture to 2 divs
//add a condition that is they fliped togather ==true


/*

functions

1.creat divs
2.chak right conifgrtion(if two ==right)
3.leave the right one open
4.

*/