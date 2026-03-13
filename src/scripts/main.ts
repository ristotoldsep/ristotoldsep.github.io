import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.25,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time: number) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

function initPreloader(): void {
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
}

function initSpotlight(): void {
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

  document.addEventListener('mousemove', (e: MouseEvent) => {
    tX = e.clientX;
    tY = e.clientY;
  }, { passive: true });

  gsap.ticker.add(() => {
    cX += (tX - cX) * 0.06;
    cY += (tY - cY) * 0.06;
    spotlight.style.left = cX + 'px';
    spotlight.style.top  = cY + 'px';
  });
}

function initCursor(): void {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', (e: MouseEvent) => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  }, { passive: true });

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
}

function initScrollReveal(): void {
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
}

function initMobileSidebar(): void {
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

  const sidebarInner = document.getElementById('sidebarInner');
  if (sidebarInner) {
    sidebarInner.addEventListener('touchmove', function (e) {
      e.stopPropagation();
    }, { passive: true });
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      sidebar?.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
    });
  }
  if (overlay) overlay.addEventListener('click', closeMobileMenu);
  document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape') closeMobileMenu(); });

  document.querySelectorAll('.topnav-link, .sidebar-cta, .sidebar-nav-link').forEach(el => {
    el.addEventListener('click', () => { if (window.innerWidth <= 860) closeMobileMenu(); });
  });
}

function initActiveNav(): void {
  const sections = ['home', 'work', 'about', 'skills', 'contact'];
  const links    = document.querySelectorAll<HTMLElement>('.topnav-link');
  const pill     = document.getElementById('topnavPill');
  const list     = document.getElementById('topnavList');

  function movePillTo(el: HTMLElement) {
    if (!pill || !list) return;
    if (window.innerWidth <= 860) { pill.style.opacity = '0'; return; }
    const elRect   = el.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    pill.style.left    = (elRect.left - listRect.left - 12) + 'px';
    pill.style.width   = (elRect.width + 24) + 'px';
    pill.style.opacity = '1';
  }

  links.forEach(link => {
    link.addEventListener('mouseenter', () => movePillTo(link));
  });
  if (list) {
    list.addEventListener('mouseleave', () => {
      const active = document.querySelector<HTMLElement>('.topnav-link.active') || links[0];
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
    const activeLink = document.querySelector<HTMLElement>('.topnav-link.active');
    if (activeLink) movePillTo(activeLink);
  };

  window.addEventListener('scroll', update, { passive: true });
  lenis.on('scroll', update);

  setTimeout(() => {
    update();
    const activeLink = document.querySelector<HTMLElement>('.topnav-link.active') || links[0];
    if (activeLink) movePillTo(activeLink);
  }, 100);
}

function initSmoothAnchors(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e: Event) => {
      const href = link.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.2 });
        return;
      }
      const target = href ? document.querySelector(href) : null;
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, {
        offset: -(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--topnav-h'), 10) || 64),
        duration: 1.3,
      });
    });
  });
}

function initFooterYear(): void {
  const el = document.getElementById('year');
  if (el) el.textContent = String(new Date().getFullYear());
}

function initMarquee(): void {
  const strip = document.querySelector('.marquee-strip');
  if (!strip) return;
  ScrollTrigger.create({
    trigger: strip,
    start: 'top 95%',
    onEnter: () => gsap.to(strip.querySelectorAll('.marquee-track'), { duration: 0.6, ease: 'power2.out' }),
  });
}

function initRotatingButton(): void {
  const svg = document.querySelector('.rotating-svg');
  if (svg) {
    gsap.to(svg, {
      rotation: 360,
      duration: 16,
      ease: 'none',
      repeat: -1,
    });
  }
}

export function initAll(): void {
  initPreloader();
  initSpotlight();
  initCursor();
  initScrollReveal();
  initMobileSidebar();
  initActiveNav();
  initSmoothAnchors();
  initFooterYear();
  initMarquee();
  initRotatingButton();
}
