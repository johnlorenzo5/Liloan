// Function to check if an element is in view
function isElementInView(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0; // Check if element is in viewport
}

// Function to trigger the animation when the section comes into view
function handleScroll() {
    const section = document.getElementById('highlight');
    const video = section.querySelector('.highlight-video');
    const content = section.querySelector('.highlight-section-content');
    const heading = content.querySelector('h1');
    const paragraph = content.querySelector('p');

    // Check if the section is in view
    if (isElementInView(section)) {
        // Trigger video slide up
        if (!video.classList.contains('visible')) {
            video.classList.add('visible'); // Add class to trigger video animation
        }
        
        // Trigger content (heading + paragraph) slide in
        if (!content.classList.contains('visible')) {
            content.classList.add('visible'); // Add class to trigger content animation

            // Trigger heading slide in
            heading.classList.add('visible');
            
            // Trigger paragraph slide in after a delay
            paragraph.classList.add('visible');
        }
    }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Trigger the scroll check on page load
window.addEventListener('load', handleScroll);

// Handle scroll event efficiently using requestAnimationFrame
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            isScrolling = false;
        });
    }
});
