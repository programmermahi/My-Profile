document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu animation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Typed.js animation for hero subtitle
    if (window.Typed) {
        new Typed('.typing', {
            strings: ['Web Developer', 'Designer', 'Freelancer','Software Engineer','Software Developer'],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true
        });
    }
});