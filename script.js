// State management
let currentPersona = 'math'; // 'math' or 'corporate'
let currentPage = 'home';

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing website...');
    
    // Initialize from URL first
    initializeFromURL();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update display
    updatePersonaDisplay();
    showPage(currentPage);
    
    // Add visual enhancements
    setupVisualEnhancements();
});

// Event listeners setup
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Persona toggle
    const personaToggle = document.getElementById('persona-toggle');
    if (personaToggle) {
        personaToggle.addEventListener('click', togglePersona);
        console.log('Persona toggle listener added');
    } else {
        console.error('Persona toggle button not found!');
    }
    
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    console.log('Navigation listeners added to', navLinks.length, 'links');
    
    // Handle browser back/forward
    window.addEventListener('popstate', handlePopState);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

// Persona switching
function togglePersona() {
    console.log('Toggling persona from', currentPersona);
    currentPersona = currentPersona === 'math' ? 'corporate' : 'math';
    console.log('New persona:', currentPersona);
    
    updatePersonaDisplay();
    updateURL();
}

function updatePersonaDisplay() {
    console.log('Updating persona display for:', currentPersona);
    
    const body = document.body;
    const personaToggle = document.getElementById('persona-toggle');
    
    // Update button text
    if (personaToggle) {
        personaToggle.textContent = currentPersona === 'math' 
            ? 'Switch to Corporate Dave' 
            : 'Switch to Maths Dave';
    }
    
    // Update body class for styling
    if (currentPersona === 'corporate') {
        body.classList.add('corporate-mode');
    } else {
        body.classList.remove('corporate-mode');
    }
    
    // Update persona content on home page
    updatePersonaContent();
    
    // Update navigation visibility based on persona
    updateNavigationVisibility();
}

function updatePersonaContent() {
    const mathDescription = document.getElementById('math-description');
    const corporateDescription = document.getElementById('corporate-description');
    
    if (mathDescription && corporateDescription) {
        if (currentPersona === 'math') {
            mathDescription.classList.add('active');
            corporateDescription.classList.remove('active');
        } else {
            mathDescription.classList.remove('active');
            corporateDescription.classList.add('active');
        }
    }
}

function updateNavigationVisibility() {
    console.log('Updating navigation visibility for persona:', currentPersona);
    
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const page = link.dataset.page;
        
        if (currentPersona === 'math') {
            // Math mode: show Writing, Organization, Workshops; hide Tools
            if (page === 'tools') {
                link.classList.add('hidden');
            } else {
                link.classList.remove('hidden');
            }
        } else {
            // Corporate mode: show Tools; hide Writing, Organization, Workshops
            if (['writing', 'organization', 'workshops'].includes(page)) {
                link.classList.add('hidden');
            } else {
                link.classList.remove('hidden');
            }
        }
    });
    
    // If current page is now hidden, navigate to home
    const currentNavLink = document.querySelector(`[data-page="${currentPage}"]`);
    if (currentNavLink && currentNavLink.classList.contains('hidden')) {
        console.log('Current page is hidden, navigating to home');
        showPage('home');
        updateURL();
    }
}

// Page navigation
function handleNavigation(e) {
    e.preventDefault();
    const targetPage = e.target.dataset.page;
    
    console.log('Navigating to:', targetPage);
    
    // Don't navigate if link is hidden
    if (e.target.classList.contains('hidden')) {
        console.log('Navigation blocked - link is hidden');
        return;
    }
    
    showPage(targetPage);
    updateURL();
}

function showPage(pageName) {
    console.log('Showing page:', pageName);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(pageName);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageName;
        
        // Update active nav link
        updateActiveNavLink(pageName);
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        console.error('Page not found:', pageName);
    }
}

function updateActiveNavLink(pageName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// URL management
function updateURL() {
    const params = new URLSearchParams();
    if (currentPage !== 'home') params.set('page', currentPage);
    if (currentPersona !== 'math') params.set('persona', currentPersona);
    
    const newURL = params.toString() 
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;
        
    history.pushState({ page: currentPage, persona: currentPersona }, '', newURL);
}

function handlePopState(e) {
    if (e.state) {
        currentPage = e.state.page || 'home';
        currentPersona = e.state.persona || 'math';
    } else {
        // Parse URL parameters
        const params = new URLSearchParams(window.location.search);
        currentPage = params.get('page') || 'home';
        currentPersona = params.get('persona') || 'math';
    }
    
    showPage(currentPage);
    updatePersonaDisplay();
}

// Initialize from URL on page load
function initializeFromURL() {
    const params = new URLSearchParams(window.location.search);
    currentPage = params.get('page') || 'home';
    currentPersona = params.get('persona') || 'math';
    
    console.log('Initialized from URL - Page:', currentPage, 'Persona:', currentPersona);
}

// Keyboard navigation
function handleKeyboard(e) {
    // Alt + number keys for quick navigation
    if (e.altKey) {
        switch(e.key) {
            case '1': 
                showPage('home'); 
                updateURL();
                break;
            case '2': 
                if (currentPersona === 'math') {
                    showPage('writing'); 
                    updateURL();
                }
                break;
            case '3': 
                if (currentPersona === 'math') {
                    showPage('organization'); 
                    updateURL();
                }
                break;
            case '4': 
                if (currentPersona === 'math') {
                    showPage('workshops'); 
                    updateURL();
                }
                break;
            case '5': 
                if (currentPersona === 'corporate') {
                    showPage('tools'); 
                    updateURL();
                }
                break;
            case 'p': 
            case 'P':
                togglePersona(); 
                break;
        }
    }
}

// Visual enhancements
function setupVisualEnhancements() {
    // Add hover effects to content cards
    const contentCards = document.querySelectorAll('.content-card');
    contentCards.forEach(card => {
        // Set initial state for intersection observer
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    contentCards.forEach(card => {
        observer.observe(card);
    });
}

// Touch gestures for mobile (optional enhancement)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 100; // Increased threshold to prevent accidental swipes
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next page
            navigateToNextPage();
        } else {
            // Swipe right - previous page
            navigateToPreviousPage();
        }
    }
}

function navigateToNextPage() {
    const availablePages = getAvailablePages();
    const currentIndex = availablePages.indexOf(currentPage);
    if (currentIndex !== -1 && currentIndex < availablePages.length - 1) {
        const nextPage = availablePages[currentIndex + 1];
        showPage(nextPage);
        updateURL();
    }
}

function navigateToPreviousPage() {
    const availablePages = getAvailablePages();
    const currentIndex = availablePages.indexOf(currentPage);
    if (currentIndex > 0) {
        const prevPage = availablePages[currentIndex - 1];
        showPage(prevPage);
        updateURL();
    }
}

function getAvailablePages() {
    if (currentPersona === 'math') {
        return ['home', 'writing', 'organization', 'workshops'];
    } else {
        return ['home', 'tools'];
    }
} 