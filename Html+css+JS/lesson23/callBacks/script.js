function fun() {
    return "someting cute";
}
console.log(fun);

function funCalBac(num1, num2, fun) {
    const calc = num1 * num2;
    return calc() + fun();

}

console.log(funCalBac);