const grades = [88, 96, 75, 100, 101, 95, 34, 45, 85];

function sum() {

    let res = 0;
    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }
    document.getElementById("output1").innerHTML = res;
}

function showAsterisks() {
    for (let i = 0; i < 10; i++) {
        document.getElementById("output2").innerHTML += "*" + "<br>";
    }
}

function showNunmber() {

    for (let i = 1; i <= 15; i++) {
        document.getElementById("output3").innerHTML += i + "<br>";
    }
}

function showrRange() {
    const arr = [];
    for (let i = 10; i <= 30; i++) {
        arr.push(i);
    }
    document.getElementById("output4").innerHTML = arr.join(",");
}

function showrSizeNumber() {
    for (let i = 1; i <= 100; i++) {
        const span = `<span style="font-size: ${i}px"> ${i}, </span>`;
        document.getElementById("output5").innerHTML += span;
    }
}

// לולאת for היר גרסה קצרה יותר של while בייסקלי 
//while (ארוך יותר)> for
// לכן נעדיף להשתמש בfor ד

function showAvg() {
    let res = 0;

    for (let i = 0; i < grades.length; i++) {
        res += grades[i];
    }

    const average = res / grades.length;
    document.getElementById("output6").innerHTML = Math.round(average);
}

function colors() {
    for (let i = 0; i < 30; i++) {
        const div = `<div style ="height: 20px; background-color: hsl(${i * 30} 50% 52%);"></div>`;
        document.getElementById("output7").innerHTML += div;
    }
}

function showStars() {
    for (let i = 0; i <= 10; i++) {

        for (let x = 0; x < i; x++)
            document.getElementById("output8").innerHTML += "*";

        document.getElementById("output8").innerHTML += "<br>";
    }
}
