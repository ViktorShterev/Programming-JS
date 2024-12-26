window.addEventListener("load", solve);

function solve() {
    
    const inputExpense = document.getElementById("expense");
    const inputAmount = document.getElementById("amount");
    const inputDate = document.getElementById("date");
    const addButton = document.getElementById("add-btn");
    const previewList = document.getElementById("preview-list");
    const expensesList = document.getElementById("expenses-list");
    const deleteButton = document.querySelector(".delete");


    addButton.addEventListener("click", () => {
        const isValidInput = inputExpense.value !== "" && inputAmount.value !== ""
            && inputDate.value !== "";
        
        if (isValidInput) {

            const liElement = document.createElement("li");
            liElement.className = "expense-item";

            const articleEl = document.createElement("article");

            const pTypeEx = document.createElement("p");
            pTypeEx.textContent = `Type: ${inputExpense.value}`;

            const pAmount = document.createElement("p");
            pAmount.textContent = `Amount: ${inputAmount.value}$`;

            const pDate = document.createElement("p");
            pDate.textContent = `Date: ${inputDate.value}`;

            articleEl.appendChild(pTypeEx);
            articleEl.appendChild(pAmount);
            articleEl.appendChild(pDate);

            const divButtons = document.createElement("div");
            divButtons.className = "buttons";

            const editButton = document.createElement("button");
            editButton.className = "btn edit";
            editButton.textContent = "edit";

            const okButton = document.createElement("button");
            okButton.className = "btn ok";
            okButton.textContent = "ok";

            divButtons.appendChild(editButton);
            divButtons.appendChild(okButton);

            liElement.appendChild(articleEl);
            liElement.appendChild(divButtons);

            previewList.appendChild(liElement);
            
            addButton.disabled = true;

            inputExpense.value = "";
            inputAmount.value = "";
            inputDate.value = "";

            editButton.addEventListener("click", () => {

                inputExpense.value = pTypeEx.textContent.split(": ")[1];
                inputAmount.value = pAmount.textContent.split(": ")[1].split("\$")[0];
                inputDate.value = pDate.textContent.split(": ")[1];

                previewList.removeChild(liElement);
                
                addButton.disabled = false;
            });

            okButton.addEventListener("click", () => {
                addButton.disabled = false;

                liElement.removeChild(divButtons);

                expensesList.appendChild(liElement);

                previewList.removeChild(liElement);
            });
        }
    });

    deleteButton.addEventListener("click", () => {
      window.location.reload();
    });
}