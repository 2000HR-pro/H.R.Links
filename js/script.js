document.addEventListener('contextmenu', event => event.preventDefault());
// 1. Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// 2. Typing Effect
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Python Programmer', 'UI/UX Designer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
});

// 3. Scroll Reveal
const sr = ScrollReveal({ 
    distance: '30px',
    duration: 1500,
    delay: 100,
    reset: false 
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .exp-card, .skill-box', { origin: 'bottom', interval: 100 });

// 4. Scroll Logic
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};
