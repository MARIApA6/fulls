const x_player = "x"
const o_player = "circle"
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

let isPlyer_o_turn = false
let boxes = document.querySelectorAll("[data-cell]")
const boardElem = document.getElementById("board")
const restartBtn = document.getElementById("restartGame")

playerX()

function playerX() {
  boxes.forEach(cell => {
    cell.addEventListener('click', function handleClick(ev) {
      console.log("box cliked", ev);
      //cell.setAttribute('style', 'background-color: yellow;')
      cell.innerHTML = "x";
    });
  });
}
// צריך לעשות טוגל שיעשב סוויצ בין משתנים אולי בגלל לולאת for ech?
///לא עובד הפלייר אפס
function playerO() {
  const emptyBox = document.innerHTML = "";
  if (boxes == emptyBox) {
    boxes.forEach(cell => {
      cell.addEventListener('click', function handleClick(ev) {
        console.log("box cliked", ev);
        cell.innerHTML = "o";
      });
    });
  }
}




function addTextToBoxs() {
  const emptyBoxes = document.innerHtml = "";
  if (boxes == emptyBoxes) {
    boxes.classList.addEventListener(click, ev => ev = add.innerHtml = (x_player));
  } else {
    boxes.classList.addEventListener(click, ev => ev = add.innerHtml = (o_player));
  }
}

//הפונקציה שמאפשת הכל ומפעילה את המשחק מחדש זאת אומרת שכל דבר צריך remove
function restartGame() {
  if (isPlyer_o_turn ? true : o_player) {

  }
}


function isADraw() {

}

function isAWin() {

}



function restartGameBtn() {

}


//דרך אחרת להגדיר את איקס ואפס 
//const x_player = document.getElementById(?)
//const o_player = document.getElementById(?)





/// לנסות להשתמש בזה 
//document.querySelectorAll('.weekdays').forEach(e => e.addEventListener('click', listener)):

//div.classlist.innerHTML("x");

//const myDiv = document.getElementById('myDiv');
//for (ev => ev.innerHTML) {
//    myDiv.innerHTML = "x";
//    addEventListener(click)
//}

//tButton.addEbentListener('click', startGame)
