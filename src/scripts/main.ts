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

  // translate3d, not left/top. Those are layout properties, so writing them
  // every frame made the browser count each frame as a layout shift: this one
  // element was the whole of a reproducible CLS of 0.301 on desktop, and the
  // per-frame relayout fed the main-thread time behind it. The -50% keeps the
  // circle centred on the cursor, exactly as the stylesheet used to.
  const place = () => {
    spotlight.style.transform =
      'translate3d(' + cX + 'px,' + cY + 'px,0) translate(-50%,-50%)';
  };
  place();

  document.addEventListener('mousemove', (e: MouseEvent) => {
    tX = e.clientX;
    tY = e.clientY;
  }, { passive: true });

  gsap.ticker.add(() => {
    cX += (tX - cX) * 0.06;
    cY += (tY - cY) * 0.06;
    place();
  });
}

function initCursor(): void {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  if (!window.matchMedia('(pointer: fine)').matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  // left/top deliberately, unlike the spotlight above. These two reserve
  // `transform` for the hover scale, which is transitioned (0.07s on the dot,
  // 0.22s on the ring) - writing position into the same property would both
  // override the .hover rule and drag every pointer move through that easing.
  // They are 7px and 32px and only run on a fine pointer, so the layout cost
  // is small and lands where TBT was already zero.
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

  // The Vestly chat's buttons live in its shadow DOM, out of reach of the listeners above:
  // find them through the event path instead.
  let overChatButton = false;
  // mouseover, not pointerover: it fires after the mouseleave of the element above it.
  document.addEventListener('mouseover', (e: MouseEvent) => {
    const path = e.composedPath().filter((n): n is Element => n instanceof Element);
    const inChat = path.some(el => el.id === 'vestly-chat');
    const onButton = inChat && path.some(el => el.matches('a, button:not(:disabled), [role="button"]'));
    if (onButton === overChatButton) return;
    overChatButton = onButton;
    dot.classList.toggle('hover', onButton);
    ring.classList.toggle('hover', onButton);
  }, { passive: true });

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

  document.querySelectorAll('.topnav-link, .sidebar-cta, .sidebar-nav-link, .lang-switch').forEach(el => {
    el.addEventListener('click', () => { if (window.innerWidth <= 860) closeMobileMenu(); });
  });
}

function initActiveNav(): void {
  const links = document.querySelectorAll<HTMLElement>('.topnav-link');
  const pill  = document.getElementById('topnavPill');
  const list  = document.getElementById('topnavList');
  if (!links.length || !pill || !list) return;

  function movePillTo(el: HTMLElement) {
    if (!pill || !list) return;
    if (window.innerWidth <= 860) { pill.style.opacity = '0'; return; }
    const elRect   = el.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    pill.style.left    = (elRect.left - listRect.left - 12) + 'px';
    pill.style.width   = (elRect.width + 24) + 'px';
    pill.style.opacity = '1';
  }

  function restPill() {
    const active = document.querySelector<HTMLElement>('.topnav-link.active');
    if (active) movePillTo(active);
    else if (pill) pill.style.opacity = '0';
  }

  links.forEach(link => link.addEventListener('mouseenter', () => movePillTo(link)));
  list.addEventListener('mouseleave', restPill);
  window.addEventListener('resize', restPill);

  // Route links: the deepest matching path wins, so /work/clarte/ highlights
  // Work rather than Home. The bare home path only counts on an exact match,
  // otherwise it would match every page.
  const path = window.location.pathname;
  let routeMatch: HTMLElement | null = null;
  let matchLength = 0;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;
    const target = new URL(href, window.location.origin).pathname;
    const isHomeLink = target === '/' || /^\/[a-z]{2}\/$/.test(target);
    const hit = isHomeLink ? path === target : path.startsWith(target);
    if (hit && target.length > matchLength) {
      routeMatch = link;
      matchLength = target.length;
    }
  });

  if (routeMatch) {
    links.forEach(link => link.classList.toggle('active', link === routeMatch));
  }

  // Scroll spy only applies to the in-page anchors, which exist on the homepage.
  const anchors = Array.from(links).filter(l => l.getAttribute('href')?.startsWith('#'));
  const hasSections = anchors.some(l => document.getElementById(l.getAttribute('href')!.slice(1)));

  if (hasSections && !routeMatch) {
    const update = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      let active = anchors[0]?.getAttribute('href')?.slice(1) ?? '';
      anchors.forEach(link => {
        const id = link.getAttribute('href')!.slice(1);
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY - 120 <= scrollY) active = id;
      });
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${active}`);
      });
      restPill();
    };

    window.addEventListener('scroll', update, { passive: true });
    lenis.on('scroll', update);
    setTimeout(update, 100);
    return;
  }

  setTimeout(restPill, 100);
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
  clearTimeout((window as unknown as { __rtReveal?: number }).__rtReveal);
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
