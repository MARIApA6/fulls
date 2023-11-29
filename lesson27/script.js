const height = 25;
const width = 30;
const snake = [3, 2, 1, 0];
let head = snake[0];
let direction = 'left';
let interval;

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width},1fr)`;

function createBoard() {
    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
    }

    color();
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

    snake.forEach(num => divs[num].classList.add('active'));

    divs[head].classList.add('head');
    divs[head].classList.add('direction');
}

function move(dir) {
    if (dir === 'up') {
        head -= width;
    } else if (dir === 'down') {
        head += width;
    } else if (dir === 'left') {
        head++;
    } else if (dir === 'right') {
        head--;
    }

    direction = dir;
    //להוסיף לתחילת המערך 
    snake.unshift(head);
    //להוציא מסוף המערך
    snake.pop();
    color();
    startAuto();

}
//פונקציה מנקה ויוצרת אינטרוול חדש
function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), 500);
}

window.addEventListener('keydown', ev => {
    ev.preventDefault();

    switch (ev.key) {
        case 'ArrowUp': move('up'); break;
        case 'ArrowRight': move('right'); break;
        case 'ArrowDown': move('down'); break;
        case 'ArrowLeft': move('left'); break;
    }
});