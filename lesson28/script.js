
const width = 4;
const height = 4;
const divs = [];
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width},1fr)`;

function createBoard() {
    //יצרת מערך של מספרים
    const numbers = new Array(width * height).fill(null).map((n, i) => i + 1);

    for (let i = 0; i < height * width; i++) {
        const div = document.createElement('div');
        const rand = Math.floor(Math.random() * numbers.length);

        //תנאי שמונע מהמספר האחרון במערך להופיע בגריד
        if (numbers[rand] !== width * height) {
            div.innerHTML = numbers[rand];
        }

        numbers.splice(rand, 1);
        board.appendChild(div);
        divs.push(div);
    }

}

function chakesAllOptions() {

}