fetch("../students.json")
    .then(r => r.json())
    //Response => Response.json
    .then(students => {
        const elem = document.querySelector(".studentsCards");

        students.forEach(s => {
            const div = document.createElement("div");

            div.innerHTML = `
<h3> ${s.firstName} ${s.lastName}</h3>
<p><b>טלפון:</b>${s.phone}</p>
<p><b>אימייל:</b>${s.email}</p>
<p><b>תאריך לידה:</b>${s.birthday}</p>
<p><b>עיר:</b>${s.city}</p>
`;
            elem.appendChild(div);
        });
    });




