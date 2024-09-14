let board = "";

for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 10; x++) {
        board += `<div>${y * x}</div>`;
    }
}

document.getElementById("board").innerHTML = board;