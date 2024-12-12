function search() {
   const towns = document.getElementsByTagName("li");
   const search = document.getElementById("searchText");

   let counter = 0;

   for (const town of Array.from(towns)) {
      town.style.fontWeight = "";
      town.style.textDecorationLine = "";
   }

   for (const town of Array.from(towns)) {
      let name = town.textContent;
      if (name.includes(search.value)) {
        counter++;

        town.style.fontWeight = "bold";
        town.style.textDecorationLine = "underline";
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`;
}
