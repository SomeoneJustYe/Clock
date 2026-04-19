const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme when page opens
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
}

// Toggle theme when button clicked
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save theme to localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});