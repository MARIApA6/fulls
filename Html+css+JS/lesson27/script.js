// x ציר הרוחב
const width = 30;

//ציר האורך ה  y
const height = 25;

const snake = [3, 2, 1, 0];
let head = snake[0];
let direction = 'left';
let random;
let isGameOver = false;
let interval; // (startAuto הפנוקציה למטה)גורם לנחש להמשיך לזוז


const boundaries = {
    up: [],
    right: [],
    down: [],
    left: [],
}

function stopS() {
    let left = [30, 60, 90];
    if (snake === left) {
        alert("SAD END!");
    }
}

//גבולות ימין
//let right = Boolean;
//if (right === false) {
// for (let i = 0; i < width; i++) {
//     boundaries.right.push(width + width);
//   stopsnake();
// }
//}

//שאמל גבול
for (let i = 1; i <= height; i++) {
    boundaries.left.push(width * i);

}

//ימן גבול
for (let i = 1; i < height; i++) {
    boundaries.right.push(width * i - 1);

}

//גבולות למעלה
for (let i = 0; i < width; i++) {
    boundaries.up.push(i - width);
}

//גבולות למטה
for (let i = 0; i < width; i++) {
    boundaries.down.push(height * width + i);
}

//for (let i = 0; i <= width; i++) {
//   boundaries.left.push(width * ).alert("end");
//}

//גבולות שמאל
//for (let i = 0; i < height; i++) {
//  boundaries.left.push(height.length);
//alert("end");
//}
//console.log("end");


//יצירת הדיבים בבורד
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width},1fr)`;

function createBoard() {
    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        //div.innerHTML = i;//המספרים
        board.appendChild(div);
    }
    color();
    setApple();
}

function color() {
    const divs = document.querySelectorAll('.board div');

    divs.forEach(elemt => {
        elemt.classList.remove('active');
        elemt.classList.remove('head');
        elemt.classList.remove('up');
        elemt.classList.remove('right');
        elemt.classList.remove('left');
        elemt.classList.remove('down');
    });

    //add the class "active" to the element of the snake
    snake.forEach(num => divs[num].classList.add('active'));

    divs[head].classList.add('head');
    divs[head].classList.add('direction');
}

function move(dir) {
    if (isGameOver) {
        return;
    }

    const divs = document.querySelectorAll('.board div');

    if (dir === 'up') {
        head -= width;

        if (!divs[head]) {
            gameOver();
            return;
        }
    } else if (dir === 'down') {
        head += width;

        if (!divs[head]) {
            gameOver();
            return;// מונע מהנחש להמשיך לנוע לאינדקסים הבאים
        }
    } else if (dir === 'left') {
        head++;

        if (boundaries.left.includes(head)) {
            gameOver();
            return;//מונע מהנחש להמשיך לנוע לאינדקס הבא
        }
    } else if (dir === 'right') {
        head--;

        if (boundaries.right.includes(head)) {
            gameOver();
            return;
        }
    }

    if (snake.includes(head)) {
        alert("אכלתי את עצמי")
    }

    direction = dir;
    //להוסיף לתחילת המערך 
    snake.unshift(head);

    if (head != random) {
        //להוציא מסוף המערך
        snake.pop();
    } else {
        setApple();
    }

    color();
    startAuto();
}


function gameOver() {
    isGameOver = true;

    clearInterval(interval);
    alert("the end of the game sorry :(");
    location.reload();//טוען את הדף מחדש
}



function setApple() {
    const divs = document.querySelectorAll('.board div');
    random = Math.floor(Math.random() * divs.length);

    if (snake.includes(random)) {
        setApple();
    } else {
        divs.forEach(elem => elem.classList.remove('apple'));
        divs[random].classList.add('apple');
    }

}

//פונקציה מנקה ויוצרת אינטרוול חדש התזוזה של הנחש קדימה נונסטופ
function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 500);
    //if (alert("end")){}פקודה לעצור את האינטרוול כדי שלא ימשיכו לקפוץ פופאפס אחרי למעלה-למטה
}

//לבטל רת הגלילה למטה עם החץ שמובנת באופן אוטמטי
window.addEventListener('keydown', ev => {
    ev.preventDefault();


    //checks which ley was pressed
    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
    }
});

