function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll("button"));

    for (const button of buttons) {
        button.addEventListener("click", show);

        function show(e) {
    
            let unlock = button.parentNode.querySelector('[value="unlock"]');

            const profile = e.currentTarget.parentNode;
            const div = profile.getElementsByTagName("div")[0];
            
            if (!unlock.checked) {
                return;
            }

            if (e.currentTarget.textContent === "Show more") {
                div.style.display = "block";
                e.currentTarget.textContent = "Hide it";
            } else if (e.currentTarget.textContent === "Hide it") {
              div.style.display = "none";
              e.currentTarget.textContent = "Show more";
            }
        }
    }
}