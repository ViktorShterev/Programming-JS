function focused() {
    const fields = Array.from(document.getElementsByTagName("input"));

    for (const field of fields) {
        field.addEventListener("focus", onFocus);
        field.addEventListener("blur", onBlur);
    }

    function onFocus(e) {
        const parentDiv = e.currentTarget.parentNode;
        parentDiv.classList.add("focused");
    }

    function onBlur(e) {
        const parentDiv = e.currentTarget.parentNode;
        parentDiv.classList.remove("focused");
    }
}