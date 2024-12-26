const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadMealsButton = document.getElementById("load-meals");
const listLoaded = document.getElementById("list");
const addButton = document.getElementById("add-meal");
const inputFood = document.getElementById("food");
const inputTime = document.getElementById("time");
const inputCalories = document.getElementById("calories");
const editButton = document.getElementById("edit-meal");
const formElement = document.getElementById("form-container");


loadMealsButton.addEventListener("click", showLoaded);

addButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const isValidInput = inputFood.value !== "" && inputTime.value !== "" && inputCalories.value !== "";

    if (isValidInput) {

        const newMeal = {
            food: inputFood.value,
            calories: inputCalories.value,
            time: inputTime.value,
        };

        await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify(newMeal),
        });

        showLoaded();

        inputFood.value = "";
        inputTime.value = "";
        inputCalories.value = "";
    }
});

editButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const id = formElement.dataset.meal;

    const editedMeal = {
        food: inputFood.value,
        calories: inputCalories.value,
        time: inputTime.value,
        _id: id,
    };

    await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedMeal)
    });

    showLoaded();

    inputFood.value = "";
    inputTime.value = "";
    inputCalories.value = "";

    editButton.disabled = true;
    addButton.disabled = false;
});

async function showLoaded() {
    listLoaded.innerHTML = "";

    const reposnce = await fetch(baseUrl);
    const mealData = await reposnce.json();
    
    for (const meal of Object.values(mealData)) {
        
        const divElement = document.createElement("div");
        divElement.className = "meal";

        const h2Food = document.createElement("h2");
        h2Food.textContent = meal.food;

        const h3Time = document.createElement("h3");
        h3Time.textContent = meal.time;

        const h3Cal = document.createElement("h3");
        h3Cal.textContent = meal.calories;

        const divButtons = document.createElement("div");
        divButtons.id = "meal-buttons";

        const changeButton = document.createElement("button");
        changeButton.className = "change-meal";
        changeButton.textContent = "Change";

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-meal";
        deleteButton.textContent = "Delete";

        divButtons.appendChild(changeButton);
        divButtons.appendChild(deleteButton);

        divElement.appendChild(h2Food);
        divElement.appendChild(h3Time);
        divElement.appendChild(h3Cal);
        divElement.appendChild(divButtons);

        listLoaded.appendChild(divElement);

        changeButton.addEventListener("click", () => {
            inputFood.value = meal.food;
            inputTime.value = meal.time;
            inputCalories.value = meal.calories;

            listLoaded.removeChild(divElement);

            editButton.disabled = false;
            addButton.disabled = true;

            formElement.dataset.meal = meal._id;
        });

        deleteButton.addEventListener("click", async () => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: "DELETE",
            });

            showLoaded();
        });
    }
}