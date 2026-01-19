// Add any interactivity here
console.log("Website Loaded");

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
});





