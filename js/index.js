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

// Cookie Popup Functionality
const cookiePopup = document.getElementById('cookie-popup');
const acceptCookiesBtn = document.getElementById('accept-cookies');
const declineCookiesBtn = document.getElementById('decline-cookies');

// Check if user has already made a choice
function checkCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
        // Show popup after a short delay
        setTimeout(() => {
            cookiePopup.classList.add('show');
        }, 1000);
    }
}

// Accept cookies
acceptCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookiePopup.classList.remove('show');
    // You can add additional cookie setting logic here
});

// Decline cookies
declineCookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookiePopup.classList.remove('show');
    // You can add additional cookie removal logic here
});

// Initialize cookie popup on page load
document.addEventListener('DOMContentLoaded', () => {
    checkCookieConsent();
});


