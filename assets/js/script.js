//---------- Navigation ----------//
// Select all navigation links
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove active-link class from all links
const removeActiveLink = () => {
    navLinks.forEach(link => link.classList.remove('active-link'));
};

// Function to add active-link class to the link corresponding to the current section
const setActiveLink = () => {
    // Get current scroll position
    const scrollY = window.scrollY;

    // Loop through each section linked in the nav
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1); // Get the section ID
        const section = document.getElementById(sectionId); // Select the section

        if (section) {
            const sectionTop = section.offsetTop - 100; // Adjust for header height
            const sectionHeight = section.offsetHeight;

            // Check if the scroll position is within the current section
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                removeActiveLink(); // Remove active class from all links
                link.classList.add('active-link'); // Add active class to the current link
            }
        }
    });
};

// Add scroll event listener to window
window.addEventListener('scroll', setActiveLink);



//---------- Scroll Reveal ----------//
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

// Home Section Animations
sr.reveal('.home-title', {}); 
sr.reveal('.home-social-icon', { interval: 200 });
sr.reveal('.home-img', { delay: 400 });
sr.reveal('.button', { delay: 600 });

// About Section Animations
sr.reveal('.about-img', {});
sr.reveal('.about-subtitle', { delay: 200 });
sr.reveal('.about-text', { delay: 400 });

// Skills Section Animations
sr.reveal('.skill-subtitle', {}); 
sr.reveal('.skills-data', { interval: 200 });

// Projects Section Animations
sr.reveal('.project-list > div', { interval: 200 });

// Contact Section Animations
sr.reveal('.contact-form input, .contact-form textarea, .contact-button', { interval: 200 });

