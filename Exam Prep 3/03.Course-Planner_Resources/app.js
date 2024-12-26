const baseUrl = "http://localhost:3030/jsonstore/tasks";
const loadCoursesButton = document.getElementById("load-course");
const listLoaded = document.getElementById("list");
const addButton = document.getElementById("add-course");
const inputTitle = document.getElementById("course-name");
const inputType = document.getElementById("course-type");
const inputDescription = document.getElementById("description");
const inputTeacher = document.getElementById("teacher-name");
const editCourseButton = document.getElementById("edit-course");
const formElement = document.getElementById("form");

loadCoursesButton.addEventListener("click", showLoaded);

addButton.addEventListener("click", async (e) => {
    e.preventDefault();

  const isValidInput =
    inputTitle.value !== "" &&
    inputType.value !== "" &&
    inputDescription.value !== "" &&
    inputTeacher.value !== "";

  if (isValidInput) {
    const newCourse = {
      title: inputTitle.value,
      type: inputType.value,
      description: inputDescription.value,
      teacher: inputTeacher.value,
    };

    await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(newCourse),
    });

      showLoaded();
      
      inputTitle.value = "";
      inputType.value = "";
      inputDescription.value = "";
      inputTeacher.value = "";
  }
});

editCourseButton.addEventListener("click", async (e) => {
    e.preventDefault();

    const id = formElement.dataset.course;

    const editedCourse = {
      title: inputTitle.value,
      type: inputType.value,
      description: inputDescription.value,
        teacher: inputTeacher.value,
      _id: id,
    };

    await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedCourse),
    });

    showLoaded();

    editCourseButton.disabled = true;
    addButton.disabled = false;

    inputTitle.value = "";
    inputType.value = "";
    inputDescription.value = "";
    inputTeacher.value = "";
})

async function showLoaded() {

  listLoaded.innerHTML = "";

  const responce = await fetch(baseUrl);
  const dataCourse = await responce.json();

  for (const course of Object.values(dataCourse)) {
    const divElement = document.createElement("div");
    divElement.className = "container";

    const h2Title = document.createElement("h2");
    h2Title.textContent = course.title;

    const h3Teacher = document.createElement("h3");
    h3Teacher.textContent = course.teacher;

    const h3Type = document.createElement("h3");
    h3Type.textContent = course.type;

    const h4Description = document.createElement("h4");
    h4Description.textContent = course.description;

    const editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit Course";

    const finishButton = document.createElement("button");
    finishButton.className = "finish-btn";
    finishButton.textContent = "Finish Course";

    divElement.appendChild(h2Title);
    divElement.appendChild(h3Teacher);
    divElement.appendChild(h3Type);
    divElement.appendChild(h4Description);
    divElement.appendChild(editButton);
      divElement.appendChild(finishButton);
      
      editCourseButton.disabled = true;

      listLoaded.appendChild(divElement);
      
      editButton.addEventListener("click", () => {
          inputTitle.value = h2Title.textContent;
          inputType.value = h3Type.textContent;
          inputDescription.value = h4Description.textContent;
          inputTeacher.value = h3Teacher.textContent;

          listLoaded.removeChild(divElement);

          editCourseButton.disabled = false;
          addButton.disabled = true;

          formElement.dataset.course = course._id;
      });

      finishButton.addEventListener("click", async () => {
          await fetch(`${baseUrl}/${course._id}`, {
              method: "DELETE",
          });

          showLoaded();
      })
  }
}
