
function creatP(content = "") {
    const div = document.createElement('div');
    div.className = "task";

    const p = document.createElement('p');
    p.contentEditable = true;
    p.innerHTML = content;
    div.appendchild(p);


    document.querySelector('.frame').appendChild("div");


    if (ev.key == 'ArrowDown' && task.nextSibling) {
        task.nextSibling.querySelector("p").focus();
    } else if (ev.key == 'ArrowUp' && task.previousSibling) {
        task.previousSibling.querySelector("p").focus();
        p.focus();
    }
}

creatP();