function validate() {
    const input = document.getElementById("email");

    input.addEventListener("change", onChange);

    function onChange(e) {
        const regex = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        const element = e.currentTarget;

        if (regex.test(element.value)) {
          element.classList.remove("error");
        } else {
          element.classList.add("error");
        }
    }    
}