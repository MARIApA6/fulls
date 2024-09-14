const numbers = [27, 27, 41, 37, 29, 54, 6, 95, 22, 63, 33, 34, 68, 42, 99, 61, 46, 41, 79, 9, 59, 59, 49, 17, 8, 31, 49, 70, 31, 71]

//task 1
const names = students.map(s => s.firstName);
document.querySelector("#task1 p").innerHTML = names.join(", ");

// task 2
const order = students.map((s, i) => `${i + 1}. ${s.firstName}`);
document.querySelector("#task2 p").innerHTML = order.join(",");
// show numbers
document.querySelector("#numbers div").innerHTML = numbers.join(" | ");

// task 3
document.querySelector("#task3 p").innerHTML = numbers.map(n => n * 2).join(" | ");

// task 4
document.querySelector("#task4 p").innerHTML = numbers.filter(n => n > 40).join(" | ");

// task 5
document.querySelector("#task5 p").innerHTML = numbers.filter(n => n >= 20 && n <= 50).join(" | ");
