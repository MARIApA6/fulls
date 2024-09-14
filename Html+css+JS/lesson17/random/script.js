const students = [
    "אברהם מזרחי גיא",
    "בנדרקר סטיב",
    "גל תומר",
    "דוד יובל",
    "הרשקוביץ רותם",
    "זכריה מתן",
    "יוחנוק איתי",
    "מאיקל כרם",
    "לוי אביתר",
    "לרנר אלישיב",
    "פצ׳ן מריה",
    "צ׳וגאי גלב",
    "צבטקוב מקסים",
    "קבלו אלון",
    "קזס עידו",
    "קטייב ליטל",
    "רבין שי",
    "רגב אדם ",
    "שטיינברג מאיה",
    "שיבלי יסמין",
    "שליט לארס",
    "שפירא אביב"
];

const students_1 = [];
const students_2 = [];
const students_3 = [];

studentsLength = students.length;

for (let i = 0; i < students.length; i++) {
    const rand = Math.floor(Math.random() * studentsLength);
    const student = students[rand];
    students.splice(rand, 1);

    if (i % 3 == 0) {
        ul1.appendChild(li);
    } else if (i % 3 == 1) {
        ul2.appendChild(li);
    } else if (i % 3 == 2) {
        ul3.appendChild(li);
    }
}