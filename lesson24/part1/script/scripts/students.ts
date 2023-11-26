class studentsClass {

    //יצרנו משתנה ראשוני שאין בו כלום
    // סטודנט:מסוג סטודנט
    student: Student;

    //הקונסטרקטור שם את הסטודנט במחלקה^שם
    constructor(student: Student) {
        this.student = student;
    }
    getFullName() {
        return ` ${this.student.firstName} ${this.student.lastName}`;
    }

    getAge() {
        const rest = +new Date() - +new Date(this.student.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 1) / 10;
    }
    getAbgGreades() {
        const sum = this.student.grades.reduce((res, n) => res += n, 0);
        return Math.round(sum / this.student.grades.length);
    }
}

interface Student {
    id: number;
    firstName: string;
    lastName: string;
    birthday: string;
    grades: number[];
    inActive: boolean;
}

const item = new studentsClass({
    id: 0,
    firstName: '',
    lastName: '',
    birthday: "",
    grades: [108, 4, 130, 124, 11, 44],
    inActive: false,

});

console.log(item.getAge());
console.log(item.getAbgGreades());
console.log(item.getFullName());



