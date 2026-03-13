/* ============================================================
   RISTO TÕLDSEP — PORTFOLIO SCRIPTS
   GSAP + Lenis + spotlight + cursor + mobile sidebar
   ============================================================ */

'use strict';

/* ── Register GSAP plugins ───────────────────────────────────── */
gsap.registerPlugin(ScrollTrigger);

/* ── Lenis smooth scroll ─────────────────────────────────────── */
const lenis = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
});

// Sync Lenis with GSAP ticker
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

/* ── Preloader ───────────────────────────────────────────────── */
(function () {
    const preloader = document.getElementById('preloader');
    const fill      = document.getElementById('preloaderFill');
    if (!preloader) return;

    let progress = 0;
    const fillInterval = setInterval(() => {
        progress = Math.min(progress + Math.random() * 18, 90);
        if (fill) fill.style.width = progress + '%';
    }, 120);

    function done() {
        clearInterval(fillInterval);
        if (fill) fill.style.width = '100%';

        setTimeout(() => {
            gsap.to(preloader, {
                yPercent: -100,
                duration: 0.85,
                ease: 'power3.inOut',
                onComplete: () => { preloader.style.display = 'none'; },
            });

            // Hero section entrance
            gsap.to('.sec-main .animate-up', {
                y: 0,
                opacity: 1,
                duration: 1.0,
                ease: 'power3.out',
                stagger: 0.14,
                delay: 0.1,
            });
        }, 300);
    }

    const MIN = 1500;
    const start = Date.now();

    if (document.readyState === 'complete') {
        setTimeout(done, Math.max(0, MIN - (Date.now() - start)));
    } else {
        window.addEventListener('load', () => {
            setTimeout(done, Math.max(0, MIN - (Date.now() - start)));
        });
    }
})();

/* ── Spotlight (mouse-tracking background glow) ──────────────── */
(function () {
    const spotlight = document.getElementById('spotlight');
    if (!spotlight) return;
    if (!window.matchMedia('(pointer: fine)').matches) {
        spotlight.style.display = 'none';
        return;
    }

    let tX = window.innerWidth  / 2;
    let tY = window.innerHeight / 2;
    let cX = tX, cY = tY;

    spotlight.style.left = cX + 'px';
    spotlight.style.top  = cY + 'px';

    document.addEventListener('mousemove', e => {
        tX = e.clientX;
        tY = e.clientY;
    }, { passive: true });

    // Use GSAP ticker for smooth lag interpolation
    gsap.ticker.add(() => {
        cX += (tX - cX) * 0.06;
        cY += (tY - cY) * 0.06;
        spotlight.style.left = cX + 'px';
        spotlight.style.top  = cY + 'px';
    });
})();

/* ── Custom Cursor ───────────────────────────────────────────── */
(function () {
    const dot  = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top  = my + 'px';
    }, { passive: true });

    // Ring follows with lag
    gsap.ticker.add(() => {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        ring.style.left = rx + 'px';
        ring.style.top  = ry + 'px';
    });

    document.querySelectorAll('a, button, .svc-card, .gallery-item, .achievement, .skill-cat').forEach(el => {
        el.addEventListener('mouseenter', () => { dot.classList.add('hover'); ring.classList.add('hover'); });
        el.addEventListener('mouseleave', () => { dot.classList.remove('hover'); ring.classList.remove('hover'); });
    });

    document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
})();

/* ── GSAP Scroll Reveal ──────────────────────────────────────── */
(function () {
    // Individual animate-up elements (not in sec-main — those are preloader-handled)
    document.querySelectorAll('.sec-inner .animate-up').forEach(el => {
        gsap.to(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 88%',
            },
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power3.out',
        });
    });

    // Cards with stagger per row/section
    document.querySelectorAll('.sec-inner').forEach(section => {
        const cards = section.querySelectorAll('.animate-card');
        if (!cards.length) return;

        gsap.to(cards, {
            scrollTrigger: {
                trigger: section.querySelector('.animate-card'),
                start: 'top 88%',
            },
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
        });
    });
})();

/* ── Sidebar: Mobile ─────────────────────────────────────────── */
const sidebar      = document.getElementById('sidebar');
const mobileToggle = document.getElementById('mobileToggle');
const overlay      = document.getElementById('mobileOverlay');

function closeMobileMenu() {
    if (!sidebar || !mobileToggle || !overlay) return;
    sidebar.classList.remove('open');
    mobileToggle.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    lenis.start();
}
function openMobileMenu() {
    if (!sidebar || !mobileToggle || !overlay) return;
    sidebar.classList.add('open');
    mobileToggle.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    lenis.stop();
}

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
}
if (overlay) overlay.addEventListener('click', closeMobileMenu);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileMenu(); });

document.querySelectorAll('.topnav-link, .sidebar-cta, .sidebar-nav-link').forEach(el => {
    el.addEventListener('click', () => { if (window.innerWidth <= 860) closeMobileMenu(); });
});

/* ── Active nav on scroll ────────────────────────────────────── */
(function () {
    const sections = ['home', 'work', 'about', 'resume', 'contact'];
    const links    = document.querySelectorAll('.topnav-link');
    const pill     = document.getElementById('topnavPill');
    const list     = document.getElementById('topnavList');

    function movePillTo(el) {
        if (!pill || !list) return;
        if (window.innerWidth <= 860) { pill.style.opacity = '0'; return; }
        const elRect   = el.getBoundingClientRect();
        const listRect = list.getBoundingClientRect();
        pill.style.left    = (elRect.left - listRect.left - 12) + 'px';
        pill.style.width   = (elRect.width + 24) + 'px';
        pill.style.opacity = '1';
    }

    // Hover behaviour
    links.forEach(link => {
        link.addEventListener('mouseenter', () => movePillTo(link));
    });
    if (list) {
        list.addEventListener('mouseleave', () => {
            const active = document.querySelector('.topnav-link.active') || links[0];
            if (active) movePillTo(active);
        });
    }

    const update = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        let active = sections[0];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el && el.getBoundingClientRect().top + window.scrollY - 120 <= scrollY) active = id;
        });
        links.forEach(link => {
            const href = link.getAttribute('href')?.replace('#', '');
            link.classList.toggle('active', href === active);
        });
        // Move pill to active link
        const activeLink = document.querySelector('.topnav-link.active');
        if (activeLink) movePillTo(activeLink);
    };

    window.addEventListener('scroll', update, { passive: true });
    lenis.on('scroll', update);

    // Initialise pill position after a short delay (let layout settle)
    setTimeout(() => {
        update();
        const activeLink = document.querySelector('.topnav-link.active') || links[0];
        if (activeLink) movePillTo(activeLink);
    }, 100);
})();

/* ── Smooth anchor scroll ────────────────────────────────────── */
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href === '#') {
                e.preventDefault();
                lenis.scrollTo(0, { duration: 1.2 });
                return;
            }
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            lenis.scrollTo(target, {
                offset: -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topnav-h'), 10) || 64),
                duration: 1.3,
            });
        });
    });
})();

/* ── Footer year ─────────────────────────────────────────────── */
(function () {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
})();

/* ── Marquee hover-pause (already handled by CSS, but add reverse on alt) ── */
(function () {
    const strip = document.querySelector('.marquee-strip');
    if (!strip) return;
    // Subtle: slightly speed up on section enter
    ScrollTrigger.create({
        trigger: strip,
        start: 'top 95%',
        onEnter: () => gsap.to(strip.querySelectorAll('.marquee-track'), { duration: 0.6, ease: 'power2.out' }),
    });
})();

/* ── Rotating button: GSAP spin (replaces CSS) ───────────────── */
(function () {
    const svg = document.querySelector('.rotating-svg');
    if (svg) {
        gsap.to(svg, {
            rotation: 360,
            duration: 16,
            ease: 'none',
            repeat: -1,
        });
    }
})();
