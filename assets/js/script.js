//Scroll Reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home-text, .about-container, .home-img', {});
sr.reveal('.home-img, .about-subtitle, .about-container,', { delay: 400 });
sr.reveal('.home-social-icon', { interval: 200 });
sr.reveal('.project-img, .contact-input, .about-container, .home-img', { interval: 200 }); 

//Scroll Section
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

// Function to remove active-link class from all links
const removeActiveClasses = () => {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
};

// Function to add active-link class to the current section's link
const addActiveClass = (sectionId) => {
    const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active-link');
    }
};

// Function to update the active link based on scroll position
const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58, // Adjust for fixed navbar height
            sectionId = current.getAttribute('id');

        // Check if the current scroll position is within the section
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            removeActiveClasses(); // Remove active class from all links
            addActiveClass(sectionId); // Add active class to the current section's link
        }
    });
};

// Function to handle link click event
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const sectionId = link.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(sectionId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
        
        // Update the active link
        removeActiveClasses();
        link.classList.add('active-link');
    });
});

// Listen for scroll events
window.addEventListener('scroll', scrollActive);

