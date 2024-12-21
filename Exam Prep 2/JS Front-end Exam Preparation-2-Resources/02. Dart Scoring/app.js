window.addEventListener("load", solve);

function solve() {
    
  const inputPlayer = document.getElementById("player");
  const inputScore = document.getElementById("score");
  const inputRound = document.getElementById("round");
  const addButton = document.getElementById("add-btn");
  const listShow = document.getElementById("sure-list");
  const scoreboardList = document.getElementById("scoreboard-list");
  const buttonClear = document.querySelector(".clear");

  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    const isValidInput = inputPlayer.value !== "" && inputScore.value !== "" && inputRound.value !== "";

    if (isValidInput) {

      const liElement = document.createElement("li");
      liElement.className = "dart-item";

      const articleElement = document.createElement("article");

      const pName = document.createElement("p");
      pName.textContent = inputPlayer.value;

      const pScore = document.createElement("p");
      pScore.textContent = `Score: ${inputScore.value}`;

      const pRound = document.createElement("p");
      pRound.textContent = `Round: ${inputRound.value}`;
      
      articleElement.appendChild(pName);
      articleElement.appendChild(pScore);
      articleElement.appendChild(pRound);

      const editButton = document.createElement("button");
      editButton.className = "btn edit";
      editButton.textContent = "edit";

      const okButton = document.createElement("button");
      okButton.className = "btn ok";
      okButton.textContent = "ok";

      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(okButton);

      listShow.appendChild(liElement);

      inputPlayer.value = "";
      inputScore.value = "";
      inputRound.value = "";

      addButton.disabled = true;

      editButton.addEventListener("click", () => {
        inputPlayer.value = pName.textContent;
        inputScore.value = pScore.textContent.split(": ")[1];
        inputRound.value = pRound.textContent.split(": ")[1];

        listShow.removeChild(liElement);

        addButton.disabled = false;
      });

      okButton.addEventListener("click", () => {

        addButton.disabled = false;

        liElement.removeChild(editButton);
        liElement.removeChild(okButton);

        scoreboardList.appendChild(liElement);

        listShow.removeChild(liElement);
      });
    }
  });

  buttonClear.addEventListener("click", () => {
    window.location.reload();
  })
}
  