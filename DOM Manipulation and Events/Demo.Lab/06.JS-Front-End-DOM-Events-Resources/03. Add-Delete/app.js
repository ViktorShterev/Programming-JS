function addItem() {
    let ul = document.getElementById("items");

    let input = document.getElementById("newItemText").value;

    let li = document.createElement("li");
    li.textContent = input;

    const deleteLink = document.createElement("a");
    deleteLink.href = "#";
    deleteLink.textContent = "[Delete]";

    li.appendChild(deleteLink);

    ul.appendChild(li);

    document.getElementById("newItemText").value = "";

    deleteLink.addEventListener("click", deleteItem);

    function deleteItem(e) {
        const row = e.currentTarget.parentNode;
        row.remove();
    };
}