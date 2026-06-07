// ─────────────────────────────────────────────
// NAVIGATION & MOBILE MENU
// ─────────────────────────────────────────────
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
    };
}

// ─────────────────────────────────────────────
// STICKY NAVBAR & ACTIVE LINKS ON SCROLL
// ─────────────────────────────────────────────
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');

window.onscroll = () => {
    // Gestione classe attiva sui link della navbar in base allo scroll
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });
    
    // Header Sticky dopo i 100px di scroll
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }
    
    // Chiude il menu mobile automaticamente se l'utente scivola sulla pagina
    if (isMenuOpen && menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    }
};

console.log('[Project Layout] Global navigation engine ready.');