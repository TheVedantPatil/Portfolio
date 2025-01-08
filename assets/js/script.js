// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Add click event to toggle 'active' class
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Scroll Reveal
const sr = ScrollReveal({
    origin: 'top', 
    distance: '50px', 
    duration: 2000, 
    delay: 200, 
    // reset: true 
});

sr.reveal('.home-title', { delay: 300 });
sr.reveal('.button', { delay: 500, origin: 'bottom' });
sr.reveal('.home-image', { delay: 700, origin: 'right' });

sr.reveal('.about-title', { delay: 300 });
sr.reveal('.about-description', { delay: 500, origin: 'bottom' });
sr.reveal('.about-img', { delay: 700, origin: 'left' });

sr.reveal('.skills-container', { delay: 300, origin: 'top' });
sr.reveal('.project-list', { delay: 300, interval: 200 });
sr.reveal('.contact-form', { delay: 300 });


