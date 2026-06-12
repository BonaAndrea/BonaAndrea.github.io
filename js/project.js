// ─────────────────────────────────────────────
// INTERNATIONALLIZATION ENGINE (i18n)
// ─────────────────────────────────────────────

// Rileva la lingua iniziale basandosi sul salvataggio precedente o sul browser
function getInitialLanguage() {
    const savedLang = localStorage.getItem('preferred_lang');
    if (savedLang) return savedLang;

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang) {
        const shortLang = browserLang.toLowerCase().split('-')[0];
        const supportedLanguages = ['en', 'it', 'fr', 'es'];
        if (supportedLanguages.includes(shortLang)) {
            return shortLang;
        }
    }
    return 'en';
}

// Applica i testi alle sotto-pagine leggendo l'attributo data-i18n
function applyProjectTranslations(lang) {
    if (typeof translations === 'undefined') {
        console.error("[i18n] Dizionario 'translations' non trovato. Verifica il caricamento di translations.js");
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Inizializzazione della lingua al caricamento del DOM
document.addEventListener("DOMContentLoaded", () => {
    const langSelector = document.getElementById('language-selector');
    const initialLang = getInitialLanguage();
    
    if (langSelector) {
        langSelector.value = initialLang;
        langSelector.addEventListener('change', (e) => {
            const selectedLang = e.target.value;
            applyProjectTranslations(selectedLang);
            localStorage.setItem('preferred_lang', selectedLang);
        });
    }

    applyProjectTranslations(initialLang);
    console.log(`[i18n] Localization initialized with language: ${initialLang}`);
});

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

console.log('[Project Layout] Global navigation and translation engine ready.');