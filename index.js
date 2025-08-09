
document.addEventListener('DOMContentLoaded', () => {
    // Typing animation
    new Typed('.typing', {
        strings: ['Web Developer', 'Software Developer', 'Designer','Software Engineer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Animate skill bars on scroll
    const skillsSection = document.querySelector('#skills');
    const skillLevels = document.querySelectorAll('.skill-level');

    const animateSkills = () => {
        skillLevels.forEach(skillLevel => {
            const level = skillLevel.style.width;
            skillLevel.style.width = '0';
            setTimeout(() => {
                skillLevel.style.width = level;
            }, 100);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (skillsSection) {
        observer.observe(skillsSection);
    }

    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
