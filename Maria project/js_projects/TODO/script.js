// תיגש ללוקאל סטורג אם אין יגד למערך ריק
let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");

const todoList = document.getElementById("todoList");

const todoCount = document.getElementById("todoCount");

const addBtn = document.querySelector(".btn");

const deleteBtn = document.querySelector(".deleteBtn");

// initinalize
// קח
document.addEventListener("DOMContentLoaded",
    function () {
        addBtn.addEventListener("click", addTask);
        todoInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                addTask();
            }
        });
        deleteBtn.addEventListener('click', deleteAllTasks);
        displayTasks();
    });

function addTask() {
    const newTask = todoInput.value.trim();
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false,
        })
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}

function deleteAllTasks() {
    todo = [];
    saveToLocalStorage();
    displayTasks();

}

function displayTasks() {
    todoList.innerHTML = "";
    todo.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
        <div class = "todo-continer">
        <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked" : ""
            } >
            <p id ="todo-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editTask(${index})">${item.text}</p>
        </div>
        `;
        p.querySelector(".todo-checkbox").addEventListener("change", () => {
            toggleTask(index);
        })
        todoList.appendChild(p);
    });
    todoCount.textContent = todo.length;
}

function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
}

function toggleTask(index) {
    todo[index].disabled = !todo[index].disabled;
    saveToLocalStorage();
    displayTasks();

}
// נותן לערוך את הטקסט של המשימה 
function editTask(index) {
    const todoItem = document.getElementById(`todo-${index}`);
    const existingText = todo[index].text;
    const inputElment = document.createElement("input");

    inputElment.value = existingText;
    todoItem.replaceWith(inputElment);
    inputElment.focus();

    inputElment.addEventListener("blur", function () {
        const updatedText = inputElment.value.trim();
        if (updatedText) {
            todo[index].text = updatedText;
            saveToLocalStorage();
        }
        displayTasks();
    });
}