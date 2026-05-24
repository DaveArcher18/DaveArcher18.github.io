document.addEventListener('DOMContentLoaded', () => {
    updateCurrentYear();
    setupActiveNavigation();
});

function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function setupActiveNavigation() {
    const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
    const observedSections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!('IntersectionObserver' in window) || observedSections.length === 0) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
            return;
        }

        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${visibleEntry.target.id}`;
            link.classList.toggle('active', isActive);
        });
    }, {
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.1, 0.25, 0.5]
    });

    observedSections.forEach((section) => observer.observe(section));
}
