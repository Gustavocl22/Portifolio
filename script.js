const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("section");


menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 769) {
            navbar.classList.remove("active");
        }
    });
});


window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
});


window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) {
        navbar.classList.add("desktop"); 
        navbar.classList.remove("active"); 
    } else {
        navbar.classList.remove("desktop"); 
    }
});
