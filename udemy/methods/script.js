function HouseKeeper(yearsOfExperience, name, cleaningRepertoire) {
    this.years0fExperience = years0fExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    alert("good");
}


function findKey() {
    if (key != "w", "s", "d", "j") {
        alert("not right key");
    } else {
        this.play();
    }
}

//פונקציה שברגע הלחיצה משנה את אופסטי של הכפתור
function btnAnimation(theKeyThatPressed) {

    // דוגמה איך לגשת בעזאת קיפרס למשהו במסך עי הכוונה לאלמנט במקרה זה H1
    document.querySelectorAll("h1").classList.add(".pressd");
    //דוגמה איך לגשת למשתנה בעזרת הדרתו והוספת קלאס ליסט עם שם של קלאס מHTMl
    var activeBtn = document.querySelector("currentKey");

    activeBtn.classList.add(".classThatChangesSomthing")

    setTimeout(function () {
        activeBtn.classList.remove(".classThatChangesSomthing")
    }, 100);
}


