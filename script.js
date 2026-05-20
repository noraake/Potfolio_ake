/* ============================================================
   NOURA AKEBLI — PORTFOLIO JAVASCRIPT
   ============================================================ */

/* ─── LOADER ─────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
    // Trigger hero animations after loader
    document.querySelectorAll('#hero .reveal-up').forEach((el, i) => {
      setTimeout(() => el.classList.add('revealed'), i * 100);
    });
  }, 2000);
});

/* ─── SCROLL PROGRESS BAR ────────────────────────────────────── */
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrolled / total * 100) + '%';
});

/* ─── NAVBAR SCROLL EFFECT ───────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ─── MOBILE NAV TOGGLE ──────────────────────────────────────── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─── TYPING EFFECT ──────────────────────────────────────────── */
const typedEl   = document.getElementById('typed-text');
const phrases   = [
  'Software Engineering Student',
  'Systems Programmer',
  'Problem Solver',
  'C / C++ Developer',
  'Linux Enthusiast',
];
let phraseIdx = 0;
let charIdx   = 0;
let deleting  = false;
let typingDelay = 110;

function type() {
  const current = phrases[phraseIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, charIdx + 1);
    charIdx++;
    if (charIdx === current.length) {
      deleting = true;
      typingDelay = 2000; // pause at end
    } else {
      typingDelay = 95 + Math.random() * 40;
    }
  } else {
    typedEl.textContent = current.slice(0, charIdx - 1);
    charIdx--;
    typingDelay = 45;
    if (charIdx === 0) {
      deleting  = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      typingDelay = 300;
    }
  }
  setTimeout(type, typingDelay);
}
// Delay start until after loader
setTimeout(type, 2300);

/* ─── PARTICLE CANVAS ────────────────────────────────────────── */
(function initParticles() {
  const canvas  = document.getElementById('particle-canvas');
  const ctx     = canvas.getContext('2d');
  let particles = [];
  let W, H;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const PARTICLE_COUNT = 70;
  const CYAN = '0, 212, 255';

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x:  Math.random() * (window.innerWidth  || 1200),
      y:  Math.random() * (window.innerHeight || 900),
      vx: (Math.random() - .5) * .35,
      vy: (Math.random() - .5) * .35,
      r:  Math.random() * 1.5 + .5,
      a:  Math.random() * .5 + .1,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CYAN}, ${p.a})`;
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${CYAN}, ${0.12 * (1 - dist / 130)})`;
          ctx.lineWidth = .6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ─── SCROLL REVEAL ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Respect animation-delay set inline
      const delay = parseFloat(entry.target.style.animationDelay || 0) * 1000;
      setTimeout(() => entry.target.classList.add('revealed'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
  // Don't observe hero items — they're handled by loader callback
  if (!el.closest('#hero')) revealObserver.observe(el);
});

/* ─── SKILL BAR ANIMATION ────────────────────────────────────── */
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar-fill').forEach(bar => {
        const w = bar.getAttribute('data-width');
        setTimeout(() => bar.style.width = w + '%', 200);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const barSection = document.querySelector('.skill-bars');
if (barSection) barObserver.observe(barSection);

/* ─── PROJECT FILTERING ──────────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const projCards   = document.querySelectorAll('.proj-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    projCards.forEach(card => {
      const cat = card.getAttribute('data-category');
      if (filter === 'all' || cat === filter) {
        card.classList.remove('hidden');
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

/* ─── CONTACT FORM ───────────────────────────────────────────── */
const form      = document.getElementById('contact-form');
const btnText   = document.getElementById('btn-text');
const successMsg= document.getElementById('form-success');
const sendBtn   = document.getElementById('send-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btnText.textContent = 'Sending...';
  sendBtn.disabled = true;
  setTimeout(() => {
    btnText.textContent = 'Send Message';
    sendBtn.disabled = false;
    successMsg.classList.add('show');
    form.reset();
    setTimeout(() => successMsg.classList.remove('show'), 4000);
  }, 1500);
});

/* ─── SMOOTH ACTIVE NAV ON SCROLL ────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAs.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--cyan)' : '';
  });
}, { passive: true });
