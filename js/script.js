// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});


// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function(e) {
    if(!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})
