    // Menu toggle functionality
    document.addEventListener('DOMContentLoaded', function() {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');
        
        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                this.classList.toggle('active');
            });
        }
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    });

    // Dynamic year
    document.addEventListener('DOMContentLoaded', function() {
        const yearElement = document.getElementById('copyright-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    });

    // Smooth scroll functionality
    document.querySelector('.scroll-down').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#content').scrollIntoView({ behavior: 'smooth' });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.observe(element);
    });