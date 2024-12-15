async function attachEvents() {

  const baseUrl = "http://localhost:3030/jsonstore/collections/students";
  const [firstName, secondName, facNumber, grade] = document.getElementsByTagName("input");
  const buttonSubmit = document.getElementById("submit");
  const table = document.querySelector("table tbody");

  const responce = await fetch(baseUrl);
  const studentData = await responce.json();

  for (const student of Object.values(studentData)) {
    rowCreator(student);
  }
  
  buttonSubmit.addEventListener("click", async () => {

    const isValidInput =
      firstName.value !== "" &&
      secondName.value !== "" &&
      facNumber.value !== "" &&
      grade.value !== "";

    if (isValidInput) {

      const student = {
        firstName: firstName.value,
        lastName: secondName.value,
        facultyNumber: facNumber.value,
        grade: grade.value,
      };

      await fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(student),
      });

      rowCreator(student);

      firstName.value = "";
      secondName.value = "";
      facNumber.value = "";
      grade.value = "";
    }
  });

  function rowCreator(student) {
    const newRow = document.createElement("tr");

    const rowName = document.createElement("td");
    const rowSecondName = document.createElement("td");
    const rowFacNum = document.createElement("td");
    const rowGrade = document.createElement("td");

    rowName.textContent = student.firstName;
    rowSecondName.textContent = student.lastName;
    rowFacNum.textContent = student.facultyNumber;
    rowGrade.textContent = student.grade;

    newRow.appendChild(rowName);
    newRow.appendChild(rowSecondName);
    newRow.appendChild(rowFacNum);
    newRow.appendChild(rowGrade);

    table.appendChild(newRow);
  }
}

attachEvents();