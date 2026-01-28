const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

allEventListners();


function allEventListners() {

    navToggler.addEventListener('click', togglerClick);

    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}


function togglerClick() {
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');
}


function navLinkClick() {
    if (navMenu.classList.contains('open')) {
        navToggler.click();
    }
}


const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
