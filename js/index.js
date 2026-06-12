let devOverlay = null;
let devMessage = null;
let memoryIndex = 0;
let tombRaiderFound = false;
let overlayTimeout = null;
let hideTimeout = null;
let isOverlayActive = false;

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

// ── NAVBAR SCROLL E MENU ──────────────────────────────────
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    isMenuOpen = !isMenuOpen;
};

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
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 100);
    if (isMenuOpen) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    }
};

// ── UTILITY PER IL GLITCH ─────────────────────────────────
// Applica il glitch solo ai contenuti e non al body, 
// per non rompere il "position: fixed" dell'overlay a tutto schermo.
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
    const mood = simsMoods[Math.floor(Math.random() * simsMoods.length)];
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

// ── INITIALIZATION (QUI MANCAVA LA CHIUSURA!) ─────────────
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


    setPortfolioBoxHeight();
}); // <-- QUESTA È LA PARENTESI CHE MANCAVA E ROMPEVA TUTTO

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