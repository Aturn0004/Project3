window.onload = function() {
    document.querySelector('.right_img img').classList.add('loaded');
    document.querySelector('.text_intro').classList.add('visible');
    document.querySelector('.name').classList.add('visible');
};

const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav_links");

hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});