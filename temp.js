// Select the navbar
const navbar = document.querySelector('.navbar');

// Track the last scroll position
let lastScrollY = window.scrollY;

// Add a scroll event listener
window.addEventListener('scroll', () => {
    // Check the current scroll position
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        navbar.style.top = '-70px';
    } else {
        // If scrolling up, show the navbar
        navbar.style.top = '0';
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
});
