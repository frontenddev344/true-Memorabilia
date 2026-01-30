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
function initCookiePopup() {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const declineCookiesBtn = document.getElementById('decline-cookies');

    // Check if cookie popup exists on the page
    if (cookiePopup && acceptCookiesBtn && declineCookiesBtn) {
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

        // Initialize cookie popup
        checkCookieConsent();
    }
}

// Initialize cookie popup when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookiePopup);
} else {
    // DOM is already loaded
    initCookiePopup();
}

// Safari video autoplay fix
function initHeroVideo() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // Force play for Safari
        const playPromise = heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                // Autoplay started successfully
                heroVideo.muted = true; // Ensure muted
            }).catch(error => {
                // Autoplay was prevented, try again on user interaction
                document.addEventListener('touchstart', () => {
                    heroVideo.play().catch(() => {});
                }, { once: true });
                
                document.addEventListener('click', () => {
                    heroVideo.play().catch(() => {});
                }, { once: true });
            });
        }
        
        // Ensure video stays muted and loops
        heroVideo.muted = true;
        heroVideo.loop = true;
        
        // Handle visibility change to resume playback
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden && heroVideo.paused) {
                heroVideo.play().catch(() => {});
            }
        });
    }
}

// Initialize video when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroVideo);
} else {
    initHeroVideo();
}


