function calc() {
    const firstNum = document.getElementById("num1");
    const firstNumAsNumber = Number(firstNum.value);

    const secondNum = document.getElementById("num2");
    const secondNumAsNumber = Number(secondNum.value);

    const result = document.getElementById("sum");
    result.value = firstNumAsNumber + secondNumAsNumber;
}
