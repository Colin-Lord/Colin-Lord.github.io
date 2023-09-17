document.addEventListener('DOMContentLoaded', function() {
    // Add your smooth scrolling code here
// Add an event listener to each navigation link
document.querySelectorAll('.nav-tab').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the target section's ID from the link's href
        const targetId = this.getAttribute('href').substring(1);

        // Find the target section by ID
        const targetSection = document.getElementById(targetId);

        // Scroll smoothly to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the "Home" link element
const scrollToHomeLink = document.querySelector('.nav-tab[href="#tab-home"]');

// Add a click event listener to the link
scrollToHomeLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Scroll smoothly to the top of the page (either <html> or <body>)
    document.documentElement.scrollIntoView({
        behavior: 'smooth'
    });
});


});
