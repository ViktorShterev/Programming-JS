function create(words) {

   const divToPut = document.getElementById("content");

   for (const word of words) {
      let div = document.createElement("div");
      let p = document.createElement("p");

      p.textContent = word;
      p.style.display = "none";

      div.addEventListener("click", () => {
         p.style.display = "";
      });

      div.appendChild(p);

      divToPut.appendChild(div);
   }
}