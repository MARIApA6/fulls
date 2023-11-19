const tasks = [
    "משימה 1",
    "משימה 2",
];

function showTasks() {
    const list = document.querySelector('#list');
    list.innerHTML = tasks.map(t => `<li>${t}</li>`).join('');
}

function addTask() {
    const input = document.querySelector('input');
    tasks.push(input.value);
    input.value = '';
    showTasks();
}

function removeTask() {

}

// הפעלת הפונקציה באופן ראשוני
showTasks();


// const numbers = [108, 4, 130, 34, 124, 11, 144, 85, 82, 80, 123, 25, 128, 78, 36, 30, 90, 23, 84, 147, 143, 18, 62, 96, 63, 129, 15, 109, 52, 119, 138, 65, 18, 135, 69, 89, 13, 70, 109, 22];

// every
// בודק האם כל הפרמטרים שבמערך עונים על התנאי
numbers.every(x => x > 10);

// some
// בודק האם לפחות אבר אחד עונה על התנאי
numbers.some(x => x > 10);

// filter
// מחזיר מערך מסונן ע"פ התנאי המבוקש
numbers.filter(x => x > 10);

// find
// מחזיר את האבר *הראשון* ע"פ התנאי המבוקש
numbers.find(x => x > 36);

// findIndex
// מחזיר את האינדקס של האבר *הראשון* ע"פ התנאי המבוקש
numbers.findIndex(x => x == 36);

// flat
// משטח את כל המערכים הפנימיים למערך אחד
numbers.flat();

// map
// מחזיר מערך שונה ע"פ התנאי
numbers.map(x => x * 10);

// reduce
// מחזיר תוצאה של חישוב שנעשה על כל המערך
numbers.reduce((res, x) => res += x, 0);

// fill
// מחליף את כל האברים שבמערך לפרמטר המבוקש
// numbers.fill(80); // שמנו את הפונקציה כהערה ע"מ לא ליצור נזקים

onst fn1 = () => { }; // fn1() - undefined
const fn2 = a => { }; // fn2(8) - undefined
const fn3 = (a, b) => a + b; // fn3(8, 5) - 13
const fn4 = x => x; // fn4(10) - 10
const fn5 = () => console.log("banana"); // fn5() - console-log: banana
const fn6 = () => 12; // fn6() - 12
const fn7 = x => console.log(x); // fn7(88) - console-log: 88

/********* הדגמה כפונקציות רגילות **********/
function fun1() {

}

function fun2(a) {

}

function fun3(a, b) {
    return a + b;
}

function fun4(x) {
    return x;
}

function fun5() {
    console.log("banana");
}

function fun6() {
    return 12;
}

function fun7(x) {
    console.log(x);
}