const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuIcon.addEventListener("click", () => {
    navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 769) {
            navbar.style.display = "none";
        }
        
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});


window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
        navbar.style.display = "flex"; 
    } else {
        navbar.style.display = "none"; 
    }
});
