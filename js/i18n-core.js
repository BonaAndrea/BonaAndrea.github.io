// ── RILEVAMENTO DELLA LINGUA DI PARTENZA ──────────────────
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

// ── APPLICA I TESTI STATICI ───────────────────────────────
function applyStaticTranslations(lang) {
    if (typeof translations === 'undefined') {
        console.error("Dizionario delle traduzioni non trovato.");
        return;
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}