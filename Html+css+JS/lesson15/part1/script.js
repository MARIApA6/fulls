const numbers = [90, 76, 56, 4, 3, 222, 34, 5, 5];

document.getElementById("numbers").innerHTML = numbers.join(",");

function sum() {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];

    }
    document.getElementById("output1").innerHTML = res;
}