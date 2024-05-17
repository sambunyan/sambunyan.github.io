document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector("#mobile_nav");
    const menuLink = document.querySelector('.nav_ul');

    // Toggle mobile navigation menu
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLink.classList.toggle('active');
    });

    // Close mobile navigation menu when clicking outside the menu
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuLink.contains(e.target)) {
            menu.classList.remove('is-active');
            menuLink.classList.remove('active');
        }
    });

    // Close mobile navigation menu when clicking on a link
    document.querySelectorAll('.nav_link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('is-active');
            menuLink.classList.remove('active');
        });
    });

    // animations
    const animate = document.querySelectorAll('.animation');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    // Observer
    const observer = new IntersectionObserver(function(entries, options) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, options);

    animate.forEach((el) => observer.observe(el));
});