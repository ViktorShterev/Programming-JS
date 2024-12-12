function sumTable() {
    const rowElements = document.querySelectorAll("table tr");

    let sum = 0;

    for (let index = 1; index < rowElements.length; index++) {
        const cells = rowElements[index].children;
        const price = Number(cells[1].textContent);
        sum += price;
    }

    document.getElementById("sum").textContent = sum;
}