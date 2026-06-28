// ── Lucide Icons Init ──
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
});

// ── Mobile Nav Toggle ──
const menuBtn  = document.getElementById('menu-btn');
const mobileNav = document.getElementById('mobile-nav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.querySelector('[data-lucide]').setAttribute('data-lucide', open ? 'x' : 'menu');
    lucide.createIcons();
  });
}

// ── Scroll Reveal ──
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -28px 0px' });
  els.forEach(el => io.observe(el));
}
document.addEventListener('DOMContentLoaded', initReveal);

// ── Footer Newsletter ──
const fnForm = document.getElementById('fn-form');
if (fnForm) {
  fnForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = fnForm.querySelector('button');
    const inp = fnForm.querySelector('input');
    btn.textContent = 'Terdaftar ✓';
    btn.style.opacity = '0.6';
    inp.value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.opacity = ''; }, 3000);
  });
}

// ── Quick Waitlist (home page) ──
const quickForm = document.getElementById('quick-form');
if (quickForm) {
  quickForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = quickForm.querySelector('button');
    const inp = quickForm.querySelector('input');
    btn.textContent = 'Terdaftar ✓';
    btn.style.opacity = '0.6';
    inp.value = '';
    setTimeout(() => { btn.textContent = 'Daftar →'; btn.style.opacity = ''; }, 3000);
  });
}
