/* =============================================
   PARTICLES
   ============================================= */
particlesJS('particles-js', {
  particles: {
    number: { value: 55, density: { enable: true, value_area: 900 } },
    color: { value: '#6366f1' },
    shape: { type: 'circle' },
    opacity: { value: 0.35, random: true },
    size: { value: 2.5, random: true },
    line_linked: {
      enable: true,
      distance: 160,
      color: '#6366f1',
      opacity: 0.15,
      width: 1
    },
    move: { enable: true, speed: 1.2, random: true, out_mode: 'out' }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: false }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 0.4 } }
    }
  },
  retina_detect: true
});

/* =============================================
   AOS INIT
   ============================================= */
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  easing: 'ease-out-cubic'
});

/* =============================================
   NAVBAR SCROLL
   ============================================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* =============================================
   ACTIVE NAV LINK (IntersectionObserver)
   ============================================= */
const sections = document.querySelectorAll('section[id], .hero[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observer.observe(s));

/* =============================================
   MOBILE MENU
   ============================================= */
const toggle = document.querySelector('.menu-toggle');
const menu   = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('active');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

menu.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

/* =============================================
   TYPING EFFECT
   ============================================= */
const phrases = [
  'Full-Stack Developer',
  'PHP & Laravel Expert',
  'JavaScript Enthusiast',
  'Construtor de soluções digitais'
];

let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
const typingEl = document.getElementById('typing');

function type() {
  const current = phrases[phraseIdx];
  typingEl.textContent = deleting
    ? current.substring(0, charIdx--)
    : current.substring(0, charIdx++);

  let delay = deleting ? 50 : 90;

  if (!deleting && charIdx > current.length) {
    delay = 1800;
    deleting = true;
  } else if (deleting && charIdx < 0) {
    deleting = false;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }

  setTimeout(type, delay);
}

type();

/* =============================================
   SKILL BARS (animate on scroll)
   ============================================= */
const barFills = document.querySelectorAll('.bar-fill');

const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      fill.style.width = fill.dataset.width + '%';
      barObserver.unobserve(fill);
    }
  });
}, { threshold: 0.3 });

barFills.forEach(fill => barObserver.observe(fill));

/* =============================================
   BACK TO TOP
   ============================================= */
const backTop = document.getElementById('backTop');

window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* =============================================
   CONTACT FORM (basic feedback)
   ============================================= */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Mensagem enviada!';
    btn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
    setTimeout(() => {
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar Mensagem';
      btn.style.background = '';
    }, 3000);
  });
}

