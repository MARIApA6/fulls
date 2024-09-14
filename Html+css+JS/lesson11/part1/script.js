function welcome() {
    alert("ברוכים הבאים")
    console.log("Welcome to the site");
}
function welcome2() {
    const userName = document.getElementById("userName").value;
    alert("ברוכה הבאה" + " " + userName);
}
function multi50() {
    const n = document.getElementById("number1").value;
    alert(n * 50);
}
function multi() {
    const n1 = document.getElementById("num2").value;
    const n2 = document.getElementById("num3").value;

    // alert(n1 * n2);
    document.getElementById("output1").innerHTML = n1 * n2;
}

function changeColor() {
    const color = document.getElementById("myColor").value;
    document.body.style.backgroundColor = color;
}

function multiaddnums() {
    //אופציה א להוסיף לפני דוקימיונט (+) ואז חיבור רגיל בין משתניפ
    const n4 = +document.getElementById("num4").value;
    const n5 = +document.getElementById("num5").value;
    alert(n5 + n4);
    //אופציה ב׳ זה לשים כל משתנה בתוך סוגרים עם הפלוס ואז לחבר בניהם ואז לא צריך את ה)(+) שלפני הדיוקמנט
    //alert((+n5) + (+n4));
    //דרך אחרת לעשות אותו חישוב פשוא בעזרת היגיון של מתמטי
    document.getElementById("output2").innerHTML = Number(n4) + Number(n5);

}

function sum2() {
    const n6 = +document.getElementById("num6").value;
    const n7 = +document.getElementById("num7").value;
    const res = n6 + n7;

    document.getElementById("output3").innerHTML = n6 + " + " + n7 + " = " + res;

}