window.addEventListener("load", solve);

function solve() {
     
  const inputName = document.getElementById("student");
  const inputUni = document.getElementById("university");
  const inputScore = document.getElementById("score");
  const nextButton = document.getElementById("next-btn");
  const previewList = document.getElementById("preview-list");
  const candidatesList = document.getElementById("candidates-list");

  nextButton.addEventListener("click", () => {
    let isValidInput = inputName.value !== "" && inputUni.value !== "" && inputScore.value !== "";

    if (isValidInput) {

      const liElement = document.createElement("li");
      liElement.className = "application";

      const articleElement = document.createElement("article");

      const articleH4 = document.createElement("h4");
      articleH4.textContent = inputName.value;

      const articleP1 = document.createElement("p");
      articleP1.textContent = `University: ${inputUni.value}`;

      const articleP2 = document.createElement("p");
      articleP2.textContent = `Score: ${inputScore.value}`;

      articleElement.appendChild(articleH4);
      articleElement.appendChild(articleP1);
      articleElement.appendChild(articleP2);

      const editButton = document.createElement("button");
      const applyButton = document.createElement("button");

      editButton.className = "action-btn edit";
      editButton.textContent = "edit";

      applyButton.className = "action-btn apply";
      applyButton.textContent = "apply";

      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(applyButton);

      previewList.appendChild(liElement);

      inputName.value = "";
      inputUni.value = "";
      inputScore.value = "";

      nextButton.disabled = true
      // nextButton.setAttribute("disabled", true);

      editButton.addEventListener("click", () => {

        const name = previewList.querySelector("h4").textContent;
        const uniText = previewList.querySelectorAll("p")[0].textContent;
        const scoreText = previewList.querySelectorAll("p")[1].textContent;

        const uni = uniText.split(": ")[1];
        const score = scoreText.split(": ")[1];

        inputName.value = name;
        inputUni.value = uni;
        inputScore.value = score;

        nextButton.disabled = false;

        previewList.removeChild(liElement);
      });

      applyButton.addEventListener("click", () => {
        liElement.removeChild(editButton);
        liElement.removeChild(applyButton);

        previewList.removeChild(liElement);

        candidatesList.appendChild(liElement);

        nextButton.disabled = false;
      });
    }
  });  
}
  