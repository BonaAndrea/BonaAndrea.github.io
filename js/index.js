let devOverlay = null;
let devMessage = null;
let memoryIndex = 0;
let tombRaiderFound = false;
let overlayTimeout = null;
let hideTimeout = null;
let isOverlayActive = false;
let typedInstance = null; // Riferimento globale per Typed per impedirne istanze multiple concorrenti

const memories = [
    "Every project is a world I once built.",
    "Combat systems are just conversations in code.",
    "VR made me rethink how players feel space.",
    "Some bugs are just unintended game design."
];

const simsMoods = [
    { label: "Focused",           icon: "🎯" },
    { label: "In VR mode",        icon: "🥽" },
    { label: "Debugging reality", icon: "🐛" },
    { label: "Shipping soon",     icon: "🚀" },
    { label: "Burning out",       icon: "🔥" },
    { label: "Coffee required",   icon: "☕" },
];

const GAME_ACHIEVEMENTS = {
    isaac: { title: "Bad Trip", desc: "I found pills... something's wrong.", icon: "🎯" },
    khMemory: { title: "Memory Fragment", desc: "Every project is a world once built.", icon: "🔑" },
    simsMood: { title: "Sul Sul!", desc: "Changed your developmental moodlet.", icon: "💎" },
    tombRaider: { title: "Tomb Raider", desc: "Discovered the ancient developer artifact.", icon: "🏺" }
};

// ── RILEVAMENTO DELLA LINGUA DI PARTENZA (Sincronizzato con localStorage) ──
function getInitialLanguage() {
    const supportedLanguages = ['en', 'it', 'fr', 'es'];
    
    // 1. Leggi e valida il localStorage
    let savedLang = localStorage.getItem('preferred_lang');
    if (savedLang === 'null' || savedLang === 'undefined') {
        localStorage.removeItem('preferred_lang');
        savedLang = null;
    }
    
    if (savedLang && supportedLanguages.includes(savedLang.toLowerCase())) {
        console.log("i18n Debug: Trovata lingua nel localStorage ->", savedLang);
        return savedLang.toLowerCase();
    }

    // 2. Leggi e valida la stringa di Firefox
    const browserLang = navigator.language || navigator.userLanguage;
    console.log("i18n Debug: Stringa nativa restituita da Firefox ->", browserLang);

    if (browserLang) {
        // Pulizia avanzata: isoliamo le prime due lettere eliminando dialetti (-IT) o pesi (,en)
        const shortLang = browserLang.toLowerCase().replace(/[^a-z]/g, '').substring(0, 2);
        console.log("i18n Debug: Stringa pulita ed elaborata dallo script ->", shortLang);

        if (supportedLanguages.includes(shortLang)) {
            return shortLang;
        }
    }

    // 3. Fallback estremo
    console.warn("i18n Debug: Nessuna lingua valida rilevata. Fallback forzato su 'en'");
    return 'en';
}

// ── SISTEMA DI INTERNAZIONALIZZAZIONE (i18n) ──────────────
function updateLanguage(lang) {
    if (typeof translations === 'undefined') {
        console.error("Dizionario 'translations' non caricato. Controlla translations.js");
        return;
    }

    // Salviamo immediatamente la scelta per garantire la persistenza globale
    localStorage.setItem('preferred_lang', lang);

    // 1. Aggiorna tutti gli elementi con attributo data-i18n direttamente qui dentro
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // 2. Aggiorna l'array locale delle memorie per l'Easter Egg coerentemente con la lingua
    if (translations[lang] && translations[lang].memories) {
        memories.length = 0; 
        memories.push(...translations[lang].memories);
    }

    // 3. Gestione, distruzione e reset sicuro di Typed.js per evitare sovrapposizioni di scritte
    if (typedInstance) {
        typedInstance.destroy();
    }

    const currentRoles = translations[lang].roles || translations['en'].roles;

    typedInstance = new Typed('.multiple-text', {
        strings: currentRoles,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        preStringTyped: function(arrayPos) {
            const vowelFixEl = document.getElementById('vowel-fix');
            if (!vowelFixEl) return;

            if (lang === 'en') {
                vowelFixEl.textContent = arrayPos === 4 ? 'an' : 'a';
                vowelFixEl.style.display = 'inline';
            } else if (lang === 'it') {
                vowelFixEl.textContent = (arrayPos === 2 || arrayPos === 4) ? 'uno' : 'un';
                vowelFixEl.style.display = 'inline';
            } else {
                vowelFixEl.style.display = 'none'; 
            }
        }
    });
}

// ── NAVBAR SCROLL E MENU ──────────────────────────────────
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
    };
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));
            const activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
    
    const headerEl = document.querySelector('header');
    if (headerEl) headerEl.classList.toggle('sticky', window.scrollY > 100);
    
    if (isMenuOpen && menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    }
};

// ── UTILITY PER IL GLITCH ─────────────────────────────────
function toggleGlitch(enable) {
    const elementsToGlitch = document.querySelectorAll('header, section, footer');
    elementsToGlitch.forEach(el => {
        if (enable) el.classList.add("glitch");
        else el.classList.remove("glitch");
    });
}

// ── OVERLAY EASTER EGG ────────────────────────────────────
function showOverlay(text, glitch = false, title = 'Memory Fragments') {
    if (!devOverlay || !devMessage) return;

    if (isOverlayActive) {
        clearTimeout(overlayTimeout);
        clearTimeout(hideTimeout);
    }
    isOverlayActive = true;

    const titleEl = devOverlay.querySelector('.dev-title');
    if (titleEl) titleEl.textContent = title;
    devMessage.textContent = text;

    devOverlay.classList.remove("hidden");
    devOverlay.classList.add("visible");

    if (glitch) {
        toggleGlitch(true);
        setTimeout(() => toggleGlitch(false), 2500);
    }

    overlayTimeout = setTimeout(() => hideOverlay(), 3500);
}

function hideOverlay() {
    if (!devOverlay || !isOverlayActive) return;
    isOverlayActive = false;
    clearTimeout(overlayTimeout);
    devOverlay.classList.remove("visible");
    toggleGlitch(false);

    hideTimeout = setTimeout(() => {
        if (!devOverlay.classList.contains("visible")) {
            devOverlay.classList.add("hidden");
        }
    }, 400); 
}

// ── EASTER EGGS TRIGGERS ──────────────────────────────────
document.addEventListener("keyup", (e) => {
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.key.toLowerCase() === "i") {
        e.stopImmediatePropagation();
        unlockAchievement('isaac');
        toggleGlitch(true);
        setTimeout(() => {
            showOverlay("Something's wrong...", false, "I found pills");
            toggleGlitch(false);
        }, 2000);
    }
}, true);

let tombTimeout = null;
window.addEventListener("scroll", () => {
    if (tombRaiderFound) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
        clearTimeout(tombTimeout);
        tombTimeout = setTimeout(() => {
            tombRaiderFound = true;
            triggerTombRaider();
        }, 800);
    }
});

function triggerTombRaider() {
    let unlocked = JSON.parse(localStorage.getItem('portfolio_achievements')) || {};
    if (unlocked.tombRaider) {
        tombRaiderFound = true;
        return;
    }

    const secretSound = new Audio('audio/tr2-secret.mp3');
    secretSound.volume = 0.5;
    secretSound.play().catch(() => {});

    const relic = document.createElement('div');
    relic.id = 'tomb-relic';
    relic.innerHTML = `<div class="relic-icon">🏺</div><div class="relic-text"><strong>Ancient developer artifact discovered</strong><span>You have explored every corner.</span></div>`;
    document.body.appendChild(relic);
    requestAnimationFrame(() => relic.classList.add('visible'));

    setTimeout(() => {
        relic.classList.remove('visible');
        setTimeout(() => relic.remove(), 600);
    }, 4000);
    unlockAchievement('tombRaider');
}

function triggerSimsMood() {
    document.querySelectorAll('#sims-plumbob-el, #sims-badge-el').forEach(el => el.remove());
    
    const currentLang = localStorage.getItem('preferred_lang') || 'en';
    
    const moodsSource = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang].simsMoods) 
                        ? translations[currentLang].simsMoods 
                        : simsMoods;
    
    const mood = moodsSource[Math.floor(Math.random() * moodsSource.length)];
    const imgWrapper = document.querySelector('.about-img');
    if (!imgWrapper) return;

    const plumbob = document.createElement('div');
    plumbob.id = 'sims-plumbob-el';
    plumbob.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="plumbob-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6ef07a"/><stop offset="50%" stop-color="#2db83d"/><stop offset="100%" stop-color="#1a7a28"/></linearGradient><linearGradient id="plumbob-shine" x1="0%" y1="0%" x2="60%" y2="60%"><stop offset="0%" stop-color="rgba(255,255,255,0.35)"/><stop offset="100%" stop-color="transparent"/></linearGradient></defs><polygon points="50,2 98,50 50,98 2,50" fill="url(#plumbob-grad)"/><polygon points="50,2 98,50 50,50 2,50" fill="url(#plumbob-shine)"/><polygon points="50,2 2,50 50,40" fill="rgba(255,255,255,0.08)"/><polygon points="50,2 98,50 50,98 2,50" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/></svg>`;
    
    const badge = document.createElement('div');
    badge.id = 'sims-badge-el';
    badge.innerHTML = `<span class="sims-icon">${mood.icon}</span><span class="sims-label">${mood.label}</span>`;
    
    imgWrapper.insertBefore(plumbob, imgWrapper.firstChild);
    imgWrapper.insertBefore(badge, imgWrapper.firstChild);

    requestAnimationFrame(() => {
        plumbob.classList.add('visible');
        badge.classList.add('visible');
    });

    unlockAchievement('simsMood');
    setTimeout(() => {
        plumbob.classList.remove('visible');
        badge.classList.remove('visible');
        setTimeout(() => { plumbob.remove(); badge.remove(); }, 500);
    }, 3500);
}

function unlockAchievement(id) {
    if (!GAME_ACHIEVEMENTS[id]) return;
    let unlocked = JSON.parse(localStorage.getItem('portfolio_achievements')) || {};
    if (unlocked[id]) return;
    unlocked[id] = true;
    localStorage.setItem('portfolio_achievements', JSON.stringify(unlocked));
    
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `<div class="ach-icon">${GAME_ACHIEVEMENTS[id].icon}</div><div class="ach-text"><span class="ach-title">Achievement Unlocked!</span><span class="ach-name">${GAME_ACHIEVEMENTS[id].title}</span><span class="ach-desc">${GAME_ACHIEVEMENTS[id].desc}</span></div>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// ── INITIALIZATION (Punto di Sincronizzazione Critico) ────
document.addEventListener("DOMContentLoaded", function () {
    let unlocked = JSON.parse(localStorage.getItem('portfolio_achievements')) || {};
    if (unlocked.tombRaider) tombRaiderFound = true;

    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.services-container, .portfolio-box, .demos-box', { origin: 'bottom' });
        ScrollReveal().reveal('.about-img', { origin: 'left' });
        ScrollReveal().reveal('.about-content', { origin: 'right' });
    }

    devOverlay = document.getElementById("dev-overlay");
    devMessage = document.getElementById("dev-message");
    if (devOverlay) devOverlay.addEventListener("click", () => hideOverlay());

    document.querySelectorAll(".stat-number").forEach(el => {
        el.addEventListener("mousedown", (e) => e.preventDefault());
        el.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const msg = memories[memoryIndex % memories.length];
            memoryIndex++;
            showOverlay(msg);
            unlockAchievement('khMemory');
        });
    });

    document.querySelectorAll('.services-box').forEach(box => {
        let pressTimer = null;
        box.addEventListener('touchstart', () => {
            pressTimer = setTimeout(() => {
                unlockAchievement('isaac');
                toggleGlitch(true);
                setTimeout(() => {
                    showOverlay("Something's wrong...", false, "I found pills");
                    toggleGlitch(false);
                }, 2000);
            }, 1200);
        });
        box.addEventListener('touchend', () => clearTimeout(pressTimer));
        box.addEventListener('touchmove', () => clearTimeout(pressTimer));
    });

    const aboutImg = document.querySelector('.about-img img');
    if (aboutImg) {
        aboutImg.style.cursor = 'pointer';
        aboutImg.addEventListener("click", (e) => { e.stopPropagation(); triggerSimsMood(); });
    }

    // ── GESTIONE TENDINA LINGUA CUSTOM DROPDOWN ────────────────
    const dropdown = document.getElementById('lang-dropdown');
    const initialLang = getInitialLanguage();

    if (dropdown) {
        const selectedBtn = dropdown.querySelector('.dropdown-selected');
        const selectedFlag = dropdown.querySelector('.selected-flag');
        const selectedText = dropdown.querySelector('.selected-text');
        const options = dropdown.querySelectorAll('.dropdown-options li');

        function syncDropdownUI(lang) {
            options.forEach(opt => {
                opt.classList.remove('active');
                if (opt.getAttribute('data-value') === lang) {
                    opt.classList.add('active');
                    const content = opt.textContent.trim().split(' ');
                    if (selectedFlag) selectedFlag.textContent = content[0];
                    if (selectedText) selectedText.textContent = content[1];
                }
            });
        }

        selectedBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        options.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const targetLang = this.getAttribute('data-value');
                
                updateLanguage(targetLang);
                syncDropdownUI(targetLang);
                
                dropdown.classList.remove('active');
            });
        });

        document.addEventListener('click', () => {
            dropdown.classList.remove('active');
        });

        // Forza la sincronizzazione grafica all'avvio leggendo dal valore iniziale validato
        syncDropdownUI(initialLang);
    }

    // Forza il caricamento del dizionario corretto dei testi ed inizializza Typed.js
    updateLanguage(initialLang);

    setPortfolioBoxHeight();
}); 

// ── LAYOUT UTILITIES ──────────────────────────────────────
window.addEventListener('load', setPortfolioBoxHeight);

function setPortfolioBoxHeight() {
    const boxes = document.querySelectorAll('.portfolio-box');
    let min = Infinity;
    boxes.forEach(b => { const h = b.getBoundingClientRect().height; if (h < min && h > 0) min = h; });
    if (min !== Infinity) boxes.forEach(b => b.style.height = `${min}px`);
}

const counters = document.querySelectorAll('.stat-number');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = true;
            const target = +entry.target.dataset.target;
            const step = target / (1200 / 16);
            let current = 0;
            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    entry.target.textContent = target;
                    clearInterval(timer);
                } else {
                    entry.target.textContent = Math.floor(current);
                }
            }, 16);
        }
    });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));