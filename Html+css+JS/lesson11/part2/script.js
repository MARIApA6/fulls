// משתנה גלובלי(זאת אומרת שהוא תמיד נשאר)
let counter = 1;
let counter2 = 1;

function task1() {
    document.getElementById("btn").innerHTML = ++counter;
    // הפעמיים פלוס מקודם אותו באחד כל הזמן 
}

function task2() {
    const asnwer = document.getElementById("answer1").value;

    if (asnwer == "צהוב") {
        document.getElementById("output1").innerHTML = "נכון מאוד";
    } else {
        document.getElementById("output1").innerHTML = "תתבייש זה מקולקל";
    }
}

function task3() {
    const city = document.getElementById("city").value;

    if (city == "קרית ארבע") {
        document.getElementById("output2").innerHTML = "תכלס";
        document.getElementById("city").style.border = "3px solid green";

    } else {
        document.getElementById("output2").innerHTML = "ממש לא ";
        document.getElementById("city").style.border = "3px solid red";
    }
}

