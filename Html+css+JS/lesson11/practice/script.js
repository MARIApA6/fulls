function nameg(name1) {

    var x = Math.random(x * 100) + 1;
    document.getElementById("output1").innerHTML = x;


    // alert = "name1" + "and" + "name2" + "are" + (namegenr) + "%" + "A match";
}
//something = (name1) + "and" + (name2) + "are" + (nameg) + "%" + "A match";


//ניסיתי לבנות פונקציה שנותנת להכניס שתי שמוצ ואז להקפיץ מספר רנדומלי)(המשחק ען המשמות )ת זאת אומרת שאין משמות לשמות רק האירוע של לחיצה על שניהם היתה אמורה להפעיל את הפונקציה ולתת לי מסםר רנדולי


function leapYear(num) {
    //let txt = document.getElementById("txt");
    let res = (num + 4);


    document.getElementById("output1").value.innerHTML(num);
    return res
}
//console.log(res)

function isLeap(year) {

    let year = oninput;
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            (year % 400 === 0){
            } if else "not leap";
        } else "not leap"
    }

}//חסר לי אלס אחד וה תריל להיות תנאי בתוך נאי בתוך כך ש הרטורנן של כל איפ הוא האיפ הבבא 



var guestList = ["NAN", "shlomi", "stav", "shira", "matan"]
var guestName = prompt(" what is youe Name?");

if (guestList.includes(guestName)) {
    alert("welcome!");
} else {
    alert("sorry");
}

// a function that runs number untill 100 
var output = [];
var num = (num);

function fizzBuzz() {
    for (i = 0; i <= 100; i++) {
        console.log(output)
    }
}


//A fucntion that chekes if the next numbr is divideble by 3(fizz) > 5(buzz) > an both (fizzbuzz)
var output = [];
var x = 1;
if (x % 3 === 0 && x % 5 === 0) {
    output.push("buzzfizz");
} else if (x % 3 === 0) {
    if (x % 5 === 0) {
        output.push("fizz");
    }
    else if (x % 5 === 0) {
        output.push("buzz")
    } else {
        output.push("x");
    }
    x++;
} 