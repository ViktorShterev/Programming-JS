window.addEventListener("load", solve);

function solve() {
  
    const inputTitle = document.getElementById("task-title");
    const inputCategory = document.getElementById("task-category");
    const inputContent = document.getElementById("task-content");
    const publishButton = document.getElementById("publish-btn");
    const reviewList = document.getElementById("review-list");
    const finalList = document.getElementById("published-list");

    publishButton.addEventListener("click", (e) => {
        e.preventDefault();

        const isValidInput = inputTitle.value !== "" && inputCategory.value !== "" && inputContent.value !== "";

        if (isValidInput) {

            const liElement = document.createElement("li");
            liElement.className = "rpost";

            const articleEl = document.createElement("article");

            const h4Title = document.createElement("h4");
            h4Title.textContent = inputTitle.value;

            const pCat = document.createElement("p");
            pCat.textContent = `Category: ${inputCategory.value}`;

            const pContent = document.createElement("p");
            pContent.textContent = `Content: ${inputContent.value}`;

            articleEl.appendChild(h4Title);
            articleEl.appendChild(pCat);
            articleEl.appendChild(pContent);

            const editButton = document.createElement("button");
            editButton.className = "action-btn edit";
            editButton.textContent = "Edit";

            const postButton = document.createElement("button");
            postButton.className = "action-btn post";
            postButton.textContent = "Post";

            liElement.appendChild(articleEl);
            liElement.appendChild(editButton);
            liElement.appendChild(postButton);

            reviewList.appendChild(liElement);

            inputTitle.value = "";
            inputCategory.value = "";
            inputContent.value = "";

            editButton.addEventListener("click", () => {
                inputTitle.value = h4Title.textContent;
                inputCategory.value = pCat.textContent.split(": ")[1];
                inputContent.value = pContent.textContent.split(": ")[1];

                reviewList.removeChild(liElement);
            });

            postButton.addEventListener("click", () => {
                liElement.removeChild(editButton);
                liElement.removeChild(postButton);

                reviewList.removeChild(liElement);

                finalList.appendChild(liElement);
            });
        }
    })
}