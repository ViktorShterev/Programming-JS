const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadButton = document.getElementById("load-vacations");
const listLoaded = document.getElementById("list");
const editButton = document.getElementById("edit-vacation");
const addButton = document.getElementById("add-vacation");
const inputName = document.getElementById("name");
const inputDays = document.getElementById("num-days");
const inputFromDate = document.getElementById("from-date");
const formElement = document.querySelector("#form form");

loadButton.addEventListener("click", showLoaded);

addButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (inputName.value !== "" && inputDays.value !== "" && inputFromDate.value !== "") {

        const newVacation = {
            name: inputName.value,
            days: inputDays.value,
            date: inputFromDate.value,
        };

        await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(newVacation)
        });

        inputName.value = "";
        inputDays.value = "";
        inputFromDate.value = "";

        showLoaded();
    }
});

editButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const vacationId = formElement.dataset.person;

    const editVacation = {
        _id: vacationId,
        name: inputName.value,
        days: inputDays.value,
        date: inputFromDate.value,
    };

    await fetch(`${baseUrl}/${vacationId}`, {
        method: "PUT",
        body: JSON.stringify(editVacation)
    });

    inputName.value = "";
    inputDays.value = "";
    inputFromDate.value = "";

    showLoaded();

    editButton.disabled = true;
    addButton.disabled = false;

    delete formElement.dataset.person;
});

async function showLoaded() {
    listLoaded.innerHTML = "";

    const response = await fetch(baseUrl);
    const allData = await response.json();
    
    for (const person of Object.values(allData)) {
        let name = person.name;
        let days = person.days;
        let date = person.date;

        const divElement = document.createElement("div");
        divElement.className = "container";

        const h2ElementName = document.createElement("h2");
        h2ElementName.textContent = name;

        const h3ElementDate = document.createElement("h3");
        h3ElementDate.textContent = date;

        const h3ElementDays = document.createElement("h3");
        h3ElementDays.textContent = days;

        const changeButton = document.createElement("button");
        changeButton.className = "change-btn";
        changeButton.textContent = "Change";

        const doneButton = document.createElement("button");
        doneButton.className = "done-btn";
        doneButton.textContent = "Done";

        divElement.appendChild(h2ElementName);
        divElement.appendChild(h3ElementDate);
        divElement.appendChild(h3ElementDays);
        divElement.appendChild(changeButton);
        divElement.appendChild(doneButton);
        
        listLoaded.appendChild(divElement);

        editButton.disabled = true;

        changeButton.addEventListener("click", (e) => {
          e.preventDefault();

          inputName.value = h2ElementName.textContent;
          inputDays.value = h3ElementDays.textContent;
          inputFromDate.value = h3ElementDate.textContent;

          listLoaded.removeChild(divElement);

          editButton.disabled = false;
            addButton.disabled = true;
            
            formElement.dataset.person = person._id;
        });

        doneButton.addEventListener("click", async (e) => {
            e.preventDefault();

            await fetch(`${baseUrl}/${person._id}`, {
              method: "DELETE",
            });

            showLoaded();
        });
    }
}
