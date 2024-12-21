const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadHistoryButton = document.getElementById("load-history");
const listShow = document.getElementById("list");
const addButton = document.getElementById("add-weather");
const inputLocation = document.getElementById("location");
const inputTemp = document.getElementById("temperature");
const inputDate = document.getElementById("date");
const editButton = document.getElementById("edit-weather");
const formElement = document.getElementById("form");


loadHistoryButton.addEventListener("click", loadRecords);

addButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const isValidInput = inputLocation.value !== "" && inputTemp.value !== "" && inputDate.value !== "";

    if (isValidInput) {

        const forcast = {
            location: inputLocation.value,
            temperature: inputTemp.value,
            date: inputDate.value,
        };

        await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(forcast),
        });

        loadRecords();

        inputLocation.value = "";
        inputTemp.value = "";
        inputDate.value = "";
    }
});

editButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const id = formElement.dataset.data;

    const editForcast = {
        location: inputLocation.value,
        temperature: inputTemp.value,
        date: inputDate.value,
        _id: id,
    };

    await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(editForcast),
    });

    loadRecords();

    inputLocation.value = "";
    inputTemp.value = "";
    inputDate.value = "";

    editButton.disabled = true;
    addButton.disabled = false;
});


async function loadRecords() {
    listShow.innerHTML = "";

    const responce = await fetch(baseUrl);
    const records = await responce.json();

    for (const data of Object.values(records)) {
      const divElement = document.createElement("div");
      divElement.className = "container";

      const h2City = document.createElement("h2");
      h2City.textContent = data.location;

      const h3Date = document.createElement("h3");
      h3Date.textContent = data.date;

      const h3Grad = document.createElement("h3");
      h3Grad.textContent = data.temperature;
      h3Grad.id = "celsius";

      divElement.appendChild(h2City);
      divElement.appendChild(h3Date);
      divElement.appendChild(h3Grad);

      const divButtons = document.createElement("div");
      divButtons.className = "buttons-container";

      const changeButton = document.createElement("button");
      changeButton.className = "change-btn";
      changeButton.textContent = "Change";

      const deleteButton = document.createElement("button");
      deleteButton.className = "delete-btn";
      deleteButton.textContent = "Delete";

      divButtons.appendChild(changeButton);
      divButtons.appendChild(deleteButton);

      divElement.appendChild(divButtons);

        listShow.appendChild(divElement);
        
        changeButton.addEventListener("click", () => {
            inputLocation.value = data.location;
            inputTemp.value = data.temperature;
            inputDate.value = data.date;

            listShow.removeChild(divElement);

            editButton.disabled = false;
            addButton.disabled = true;

            formElement.dataset.data = data._id;
        });

        deleteButton.addEventListener("click", async () => {

            await fetch(`${baseUrl}/${data._id}`, {
                method: "DELETE",
            });

            loadRecords();
        });
    }
}