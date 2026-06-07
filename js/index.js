// ─────────────────────────────────────────────
// CONFIGURAZIONE & STATO GLOBALE (EASTER EGGS)
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// NAVIGATION & SCROLL
// ─────────────────────────────────────────────

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let isMenuOpen = false;

const sectionId = window.location.hash.substr(1);
if (sectionId) {
    const navbarElement = document.querySelector(`a[href="#${sectionId}"]`);
    if (navbarElement) navbarElement.classList.add("active");
} else {
    const navbarElement = document.querySelector(`a[href="#home"]`);
    if (navbarElement) navbarElement.classList.add("active");
}

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

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    if (isMenuOpen) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        isMenuOpen = false;
    }
};

// ─────────────────────────────────────────────
// CORE OVERLAY FUNCTIONS
// ─────────────────────────────────────────────

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
    devOverlay.getBoundingClientRect(); // Force reflow
    devOverlay.classList.add("visible");

    if (glitch) {
        document.body.classList.add("glitch");
        setTimeout(() => document.body.classList.remove("glitch"), 2500);
    }

    overlayTimeout = setTimeout(() => hideOverlay(), 3500);
}

function hideOverlay() {
    if (!devOverlay || !isOverlayActive) return;
    isOverlayActive = false;

    clearTimeout(overlayTimeout);
    devOverlay.classList.remove("visible");
    document.body.classList.remove("glitch");

    hideTimeout = setTimeout(() => {
        if (!devOverlay.classList.contains("visible")) {
            devOverlay.classList.add("hidden");
        }
    }, 400); 
}

// ─────────────────────────────────────────────
// EASTER EGG TRIGGERS
// ─────────────────────────────────────────────

// Tasto I — Isaac Mode
document.addEventListener("keyup", (e) => {
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    if (e.key.toLowerCase() === "i") {
        e.stopImmediatePropagation();
        triggerIsaacMode();
    }
}, true);

function triggerIsaacMode() {
    document.body.classList.add("glitch", "isaac-activated");
    unlockAchievement('isaac');

    setTimeout(() => {
        showOverlay("Something's wrong...", false, "I found pills");
        document.body.classList.remove("glitch", "isaac-activated");
    }, 2000);
}

// Scroll — Tomb Raider Secret
let tombTimeout = null;
window.addEventListener("scroll", () => {
    if (tombRaiderFound) return;
    const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
    if (atBottom) {
        clearTimeout(tombTimeout);
        tombTimeout = setTimeout(() => {
            tombRaiderFound = true;
            triggerTombRaider();
        }, 800);
    }
});

function triggerTombRaider() {
    const secretSound = new Audio('audio/tr2-secret.mp3');
    secretSound.volume = 0.5;
    secretSound.play().catch(err => console.log("Audio non riprodotto:", err));

    const relic = document.createElement('div');
    relic.id = 'tomb-relic';
    relic.innerHTML = `
        <div class="relic-icon">🏺</div>
        <div class="relic-text">
            <strong>Ancient developer artifact discovered</strong>
            <span>You have explored every corner.</span>
        </div>
    `;
    document.body.appendChild(relic);

    requestAnimationFrame(() => relic.classList.add('visible'));

    setTimeout(() => {
        relic.classList.remove('visible');
        setTimeout(() => relic.remove(), 600);
    }, 4000);

    unlockAchievement('tombRaider');
}

// Foto About — Sims Mood
function triggerSimsMood() {
    const existing = document.getElementById('sims-plumbob-el');
    if (existing) existing.remove();
    const existingBadge = document.getElementById('sims-badge-el');
    if (existingBadge) existingBadge.remove();

    const mood = simsMoods[Math.floor(Math.random() * simsMoods.length)];
    const imgWrapper = document.querySelector('.about-img');
    if (!imgWrapper) return;

    const plumbob = document.createElement('div');
    plumbob.id = 'sims-plumbob-el';
    plumbob.innerHTML = `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="plumbob-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6ef07a;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#2db83d;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1a7a28;stop-opacity:1" />
                </linearGradient>
                <linearGradient id="plumbob-shine" x1="0%" y1="0%" x2="60%" y2="60%">
                    <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.35" />
                    <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0" />
                </linearGradient>
            </defs>
            <polygon points="50,2 98,50 50,98 2,50" fill="url(#plumbob-grad)" />
            <polygon points="50,2 98,50 50,50 2,50" fill="url(#plumbob-shine)" />
            <polygon points="50,2 2,50 50,40" fill="rgba(255,255,255,0.08)" />
            <polygon points="50,2 98,50 50,98 2,50" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        </svg>
    `;
    imgWrapper.insertBefore(plumbob, imgWrapper.firstChild);

    const badge = document.createElement('div');
    badge.id = 'sims-badge-el';
    badge.innerHTML = `<span class="sims-icon">${mood.icon}</span><span class="sims-label">${mood.label}</span>`;
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

// ─────────────────────────────────────────────
// ACHIEVEMENT SYSTEM ENGINE
// ─────────────────────────────────────────────

function unlockAchievement(id) {
    if (!GAME_ACHIEVEMENTS[id]) return;
    let unlocked = JSON.parse(localStorage.getItem('portfolio_achievements')) || {};
    if (unlocked[id]) return;

    unlocked[id] = true;
    localStorage.setItem('portfolio_achievements', JSON.stringify(unlocked));
    showAchievementToast(GAME_ACHIEVEMENTS[id]);
}

function showAchievementToast(ach) {
    const toast = document.createElement('div');
    toast.className = 'achievement-toast';
    toast.innerHTML = `
        <div class="ach-icon">${ach.icon}</div>
        <div class="ach-text">
            <span class="ach-title">Achievement Unlocked!</span>
            <span class="ach-name">${ach.title}</span>
            <span class="ach-desc">${ach.desc}</span>
        </div>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// ─────────────────────────────────────────────
// INITIALIZATION (DOM CONTENT LOADED)
// ─────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    // Scroll Reveal Init
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal({
            distance: '80px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .demos-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
        ScrollReveal().reveal('.blog-post-item', { origin: 'left', distance: '50px', duration: 1000 });
    }

    // WIP widget handling
    const wipWidget = document.getElementById('wip-widget');
    const wipClose  = document.getElementById('wip-close');
    if (wipWidget && wipClose) {
        wipClose.addEventListener('click', () => wipWidget.classList.add('hidden'));
    }

    // Setup Overlay Elements
    devOverlay = document.getElementById("dev-overlay");
    devMessage = document.getElementById("dev-message");
    if (devOverlay) {
        devOverlay.addEventListener("click", () => hideOverlay());
    }

    // Click sulle statistiche (KH Memory)
    document.querySelectorAll(".stat-number").forEach(el => {
        el.addEventListener("mousedown", (e) => e.preventDefault());
        el.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (window.getSelection) window.getSelection().removeAllRanges();
            
            const msg = memories[memoryIndex % memories.length];
            memoryIndex++;
            showOverlay(msg);
            unlockAchievement('khMemory');
        });
    });

    // Click su foto About (The Sims Plumbob)
    const aboutImg = document.querySelector('.about-img img');
    if (aboutImg) {
        aboutImg.style.cursor = 'pointer';
        aboutImg.addEventListener("click", (e) => {
            e.stopPropagation();
            triggerSimsMood();
        });
    }

    console.log('[Easter] system fully secured.');
});

// ─────────────────────────────────────────────
// CONTACT FORM
// ─────────────────────────────────────────────

function sanitize(input) {
    return input.trim().replace(/(<([^>]+)>)/gi, "");
}

function validateForm() {
    const name    = document.querySelector('#name').value.trim();
    const email   = document.querySelector('#email').value.trim();
    const subject = document.querySelector('#subject').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (!name)    { alert("Please enter your name.");    return false; }
    if (!email)   { alert("Please enter your email address."); return false; }
    if (!/\S+@\S+\.\S+/.test(email)) { alert("Please enter a valid email address."); return false; }
    if (!subject) { alert("Please enter a subject."); return false; }
    if (!message) { alert("Please enter your message."); return false; }

    return { name: sanitize(name), email: sanitize(email), subject: sanitize(subject), message: sanitize(message) };
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const sanitizedData = validateForm();
        if (sanitizedData && typeof emailjs !== 'undefined') {
            emailjs.init('2guQR7Sdp6i40zbDR');
            emailjs.send('gmail_service_prova1', 'template_sr67wnt', sanitizedData)
                .then(() => alert("Your message has been sent!"),
                      () => alert("There was an error. Please try again later."));
            emailjs.send('gmail_service_prova1', 'template_zifh8nb', sanitizedData);
        }
    });
}

// ─────────────────────────────────────────────
// LAYOUT UTILITIES & RESPONSIVE FIXES
// ─────────────────────────────────────────────

window.addEventListener('load', setPortfolioBoxHeight);

window.onload = function () {
    if (contactForm) contactForm.reset();
    setTimeout(setPortfolioBoxHeight, 500);
};

function setPortfolioBoxHeight() {
    const boxes = document.querySelectorAll('.portfolio-box');
    let min = Infinity;
    boxes.forEach(b => { const h = b.getBoundingClientRect().height; if (h < min) min = h; });
    if (min !== Infinity) boxes.forEach(b => b.style.height = `${min}px`);
}



// ─────────────────────────────────────────────
// STAT COUNTER INTERSECTION OBSERVER
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// INITIALIZATION FOR TYPED.JS
// ─────────────────────────────────────────────

if (typeof Typed !== 'undefined') {
    const typed = new Typed('.multiple-text', {
        strings: [
            'game developer', 
            'game designer', 
            'gameplay programmer', 
            'Unity developer', 
            'Unreal Engine developer' // Questa è la stringa all'indice 4
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        
        // Questa funzione scatta un istante prima che inizi a digitarsi la stringa
        preStringTyped: function(arrayPos, self) {
            const articleEl = document.getElementById('vowel-fix');
            if (!articleEl) return;
            
            // Se la stringa è la quinta (indice 4 -> Unreal Engine developer) mette "an"
            if (arrayPos === 4) {
                articleEl.textContent = 'an';
            } else {
                // Per tutte le altre rimette "a"
                articleEl.textContent = 'a';
            }
        }
    });
}