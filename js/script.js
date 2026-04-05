/* --- Dynamic Typing Effect --- */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Python Programmer', 'UI/UX Designer', 'Software Student'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1500,
    loop: true
});

/* --- Scroll Reveal Animations --- */
const sr = ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
    reset: true 
});

sr.reveal('.home-content', { origin: 'left' });
sr.reveal('.home-img', { origin: 'right' });
sr.reveal('.skill-box', { origin: 'bottom', interval: 200 });
sr.reveal('.heading', { origin: 'top' });
sr.reveal('.social-media', { origin: 'bottom' });