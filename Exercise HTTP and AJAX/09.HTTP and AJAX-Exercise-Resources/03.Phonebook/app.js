function attachEvents() {

    const baseUrl = "http://localhost:3030/jsonstore/phonebook";
    const inputName = document.getElementById("person");
    const inputNumber = document.getElementById("phone");
    const loadButton = document.getElementById("btnLoad");
    const createButton = document.getElementById("btnCreate"); 
    const listShow = document.getElementById("phonebook");

    loadButton.addEventListener("click", async () => {
        listShow.innerHTML = "";

        const responce = await fetch(baseUrl);
        const contacts = await responce.json();

        for (const contactInfo of Object.values(contacts)) {

            const name = contactInfo.person;
            const number = contactInfo.phone;
            const id = contactInfo._id;

            let deleteButton = document.createElement("button");
            let li = document.createElement("li");

            li.textContent = `${name}: ${number}`;
            deleteButton.textContent = "Delete";

            li.appendChild(deleteButton);
            listShow.appendChild(li);

            deleteButton.addEventListener("click", () => {

                fetch(baseUrl + "/" + id, {
                    method: "DELETE",
                });
                li.remove();
            });
        }
    });

    createButton.addEventListener("click", async () => {

        const format = {
            person: inputName.value,
            phone: inputNumber.value,
        };

        let isValidInput = inputName.value !== "" && inputNumber.value !== "";

        if (isValidInput) {
            await fetch(baseUrl, {
                method: "POST",
                body: JSON.stringify(format),
            })
        }

        inputName.value = "";
        inputNumber.value = "";
    });
}

attachEvents();