class Person {
    id = null;
    firstName = '';
    lastName = '';
    phone = '';
    email = '';
    city = '';
    birthday = '';


    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getAge() {
        const rest = new Date() - new Date(this.birthday);
        return Math.floor(rest / 1000 / 60 / 60 / 24 / 365 * 10) / 10;
    }

    constructor(person) {

    }
}

class student extends person {

}

class Teacher {

}

class Director {

}
const student = new student();