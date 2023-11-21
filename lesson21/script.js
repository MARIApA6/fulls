class student {
    constructor(student) {
        this.student = student;
    }

    student;

    fullName(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    age(ag) {
        this.birthday = ag;
        let currentDate = now();
        age.between(birthday, currentDate);
    }

    avgGreads() {
        this.grades.forEach(element => {
            sum += element;
        });

        //gareds[grades];
        let sum = sum / (grades.length);
        //צריך להגדיר משתנה בנפרד ךשתי הפעולות ל )(sum ) לפעולה השניה של )(avg)
    }

    testCount() {
        return this.student.grades.length;
    }
}

const s = new Student({
    firstName: "יוסי",
    lastName: "אדלר",
    phone: "059-6506877",
    birthday: "2004-04-14",
    city: "חיפה",
    grades: [90, 80, 100, 95, 100, 100, 100],
});

console.log(fullName);
console.log(age);
console.log(avgGreads);
console.log(testCount);