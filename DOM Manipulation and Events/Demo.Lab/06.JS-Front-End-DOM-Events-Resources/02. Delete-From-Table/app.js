function deleteByEmail() {
    const input = document.getElementsByTagName("input")[0];

    const email = input.value;

    const list = Array.from(document.querySelectorAll("tbody tr td"));

    const result = document.getElementById("result");

    list.forEach(td => {
        if (td.textContent === email) {
            td.parentNode.parentNode.removeChild(td.parentNode);

            result.textContent = "Deleted."
        } else {
            result.textContent = "Not found."
        }
    });

    // const list = Array.from(document.querySelectorAll("tbody tr"));
    // for (const row of list) {
    //     let tdEmail = row.children[1];

    //     if (tdEmail.textContent === email) {
    //         row.remove();
    //     }
    // };

    input.value = "";
}