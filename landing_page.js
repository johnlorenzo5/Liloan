// JavaScript to handle button click with page transition
function handleButtonClick() {
    document.body.classList.add('fade-out');  // Add fade-out class to body

    // After the animation duration (1s), navigate to the next page
    setTimeout(function() {
        window.location.href = 'pre.html';  // Redirect to the new page
    }, 1000);  // 1000ms is the duration of the fade-out animation
}