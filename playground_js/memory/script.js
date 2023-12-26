
const width = 4;
const height = 4;
const length = width * height;
const divs = [];
const options = [];
const counter = 0;
const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width},1fr)`;

function createBoard() {
    //יצרת מערך של מספרים
    const numbers = new Array(length).fill(null).map((n, i) => i + 1);

    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        const rand = Math.floor(Math.random() * numbers.length);

        //תנאי שמונע מהמספר האחרון במערך להופיע בגריד
        if (numbers[rand] !== length) {
            div.innerHTML = numbers[rand];
        }

        numbers.splice(rand, 1);
        board.appendChild(div);
        divs.push(div);

        div.addEventListener("mouseover", ev => {
            const emptyIdex = divs.findIndex(div => div.innerHTML == '');
            //מה שמאמי כתב
            if (i == emptyIdex) {
                options.forEach(idx => {
                    divs[idx].classList.add("active");
                    console.log("צבע כתום")
                });
                // מה שאני העתקתי ממאמי
            } if (i != emptyIdex) {
                options.forEach(idx => {
                    divs[idx].classList.remove("active");
                });
            }
        });

        div.addEventListener("click", ev => {
            const emptyIdex = divs.findIndex(div => div.innerHTML == '');
            const elem = options.target;

            //    const isTheRightCon = option.every(l => l = )
            // const res1 = isTheRightCon(options());

            if (i == emptyIdex, i++) {
                const empty = divs.find(el => el.innerHTML == '');
                //empty.classList.remove('active');


                empty.innerHTML = elem.innerHTML;
                elem.innerHTML = "";
                // document.querySelector('.conter').innerHTML = ++counter;
                console.log("game is working")
            }
            checksAllOptions();
        });
    }
    checksAllOptions();
}


function checksAllOptions() {
    const emptyIdex = divs.findIndex(div => div.innerHTML == '');

    const top = emptyIdex - width; //פחות 4 משבצות
    const down = emptyIdex + width;// הוספת 4 משבצות  
    const right = emptyIdex - 1;// פחות משבצת
    const left = emptyIdex + 1;// הוספת משבצת 
    //זה החוקיות המתמטית שמצאנו בשביל למגר את האם המשבצות סביב האינדקס הריק עונות על התנאים האלה

    //התנאי העליון בודק מקרה קיצון -כאשר המספר שלילי אינו עומד בתנאי שלנו 

    //איפוס המערך(מנקודת ההתחלה 0 ,עד לנקודת הסוף)
    options.splice(0, options.length);

    if (top >= 0) {
        options.push(top);
        console.log("למעלה");
    }

    //בודקת מקרה קיצון- אם הוא גדול מהמערך הוא עומד בתנאי
    if (down < length) {
        options.push(down);
        console.log("למטה");
    }

    //אם התוצאה שלו לא שווה לאפס הוא עומד בתנאי
    if (emptyIdex % width != 0) {
        options.push(right);
        console.log("ימין");
    }

    //אם התוצאה 
    if (emptyIdex % width != width - 1) {
        options.push(left);
        console.log("שמאל");
    }
}

function isGmaeOver() {
    board.classList.add('game-over');

    confetti({
        particlecount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    })

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = " you won! ";

    document.body.appendChild(winner);

    setTimeout(function () {
        location.reload();
    }, 5 * 1000);

}
// שני פרמטרים שהמטרה להחליף בינהם
// em דיב ריק
//divO דיב שעונה על התנאי


//function switchDivs(em, divO) {
//  const em = divs.find(el => el.innerHTML == '');
// const divO = checksAllOptions() == true;
//  if (divO == true) {
//      take em and divO and switch them(#iwish)
//}//רציתי לקחת שני פרמטרים להגידר כל אחד משתנה ואז לעהחליף בניהם
//בסוף ניסיתי להגדיר משתנה בולאני ואם הפונקציה טרו אז תחליף ?
//היה גם הצעות משהו עם אפפנד צאלייד לעשות אבל אני לא יודעת איך

// }




