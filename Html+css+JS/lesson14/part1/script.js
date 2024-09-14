const numbers = [90, 76, 56, 4, 3, 222, 34, 5, 5];

function addToArray(ev) {
    // באובייקט של האוונט שקיבלנו - יש פרמטר שמביא לנו את האלמנט (target)
    const value = ev.target.value;

    // אנחנו מריצים את הקוד רק אם המשתמש לחץ על אנטר (Enter)// ורק אם יש ערךi
    if (ev.keyCode === 13 && value) {
        numbers.push(+value);
        // איפסנו את האינפוט
        ev.target.value = "";
    }
}

function showArray() {
    document.getElementById("output1").innerHTML = numbers.join(",");
}

function sum() {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    document.getElementById("output2").innerHTML = res;
}

function avg() {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }

    document.getElementById("output3").innerHTML = Math.round(res / numbers.length);
}

function max() {
    let res = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > res)
            res = numbers[i];

    }
    document.getElementById("output4").innerHTML = res;
}

function min() {
    let res = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < res)
            res = numbers[i];
    }
    document.getElementById("output5").innerHTML = res;
}

function allFunctions() {
    showArray();
    sum();
    avg();
    max();
    min();
}