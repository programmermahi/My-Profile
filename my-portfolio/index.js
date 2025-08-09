const navLinks = document.querySelectorAll('nav ul li a');

// Add event listeners for each navigation link
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('animated');
    });

    link.addEventListener('mouseout', () => {
        link.classList.remove('animated');
    });

    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Optional: Add a typing effect for the hero subtitle
const options = {
    strings: ["Web Developer", "Designer", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
};

const typed = new Typed('.typing', options);