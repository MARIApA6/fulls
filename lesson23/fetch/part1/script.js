
// מה שאני ניסיתי ךעשות 
//function fun() {
 //  return "someting cute";
//}
//console.log(fun);

//function funCalBac(num1, num2, fun) {
 //   const calc = num1 * num2;
  //  return calc() + fun();

//}

//console.log(funCalBac);//




//  מה שאלישיב עשה 
function showStudents(students) {
    const ol = document.createElement('ol');

    for (const s of students) {
        const li = document.createElement('li');
        li.innerHTML = `${s.firstName} ${s.lastName}`;

        ol.appendChild(li);
    }

    document.querySelector(".frame").appendChild(ol);
}

/////////////////////// אופציה 1 ////////////////////////
fetch("../students.json")
    .then(response => response.json())
    .then(showStudents);

/////////////////////// אופציה 2 ////////////////////////
// fetch("students.json")
//     .then(response => response.json())
//     .then(students => showStudents(students));

/////////////////////// אופציה 3 ////////////////////////
// כתבנו בפנים ישירות את הפונקציה
// fetch("students.json")
//     .then(response => response.json())
//     .then(students => {
//         const ol = document.createElement('ol');
    
//         for (const s of students) {
//             const li = document.createElement('li');
//             li.innerHTML = `${s.firstName} ${s.lastName}`;
    
//             ol.appendChild(li);
//         }
    
//         document.querySelector(".frame").appendChild(ol);
//     });