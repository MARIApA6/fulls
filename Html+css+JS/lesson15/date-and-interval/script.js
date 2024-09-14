const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

const month = ["January", "February", "March", "April", "May", "June", "July"];

function showDate() {
    const now = new Date();
    const date = `${now.getDate()
        } /${now.getMonth() + 1}/${now.getfullYear()}`;
    const time = `${d.getHours()}: ${d.getMinutes()}`;

    document.querySelector("#date").innerHTML = "date";
    document.querySelector("#time").innerHTML = "time";
}