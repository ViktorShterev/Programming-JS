function addItem() {
    const textInput = document.getElementById("newItemText");
    const valueInput = document.getElementById("newItemValue");

    const dropDown = document.getElementById("menu");
    const option = document.createElement("option");

    option.textContent = textInput.value;
    option.value = valueInput.value;

    dropDown.appendChild(option);

    textInput.value = "";
    valueInput.value = "";
}