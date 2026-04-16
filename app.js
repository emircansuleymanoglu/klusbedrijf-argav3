/* ==========================================
   ARGAKLUS â€“ SHARED JAVASCRIPT
   ========================================== */

/* â”€â”€ LANGUAGE SWITCHER â”€â”€ */
let currentLang = 'nl';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (el.getAttribute('data-lang') === lang) {
      el.classList.add('lang-active');
    } else {
      el.classList.remove('lang-active');
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.switch === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('argaklus-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.switch));
});

const savedLang = localStorage.getItem('argaklus-lang');
setLang(savedLang && ['nl','en','tr'].includes(savedLang) ? savedLang : 'nl');

/* â”€â”€ HERO SLIDESHOW â”€â”€ */
(function() {
  const el = document.getElementById('heroSlideshow');
  if (!el) return;
  const slides = el.querySelectorAll('img');
  if (!slides.length) return;
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 3500);
})();

/* â”€â”€ SCROLL ANIMATIONS â”€â”€ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.service-card, .step-card, .cert-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

/* â”€â”€ ACTIVE NAV â”€â”€ */
const navSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__menu > li > a');
window.addEventListener('scroll', () => {
  let cur = '';
  navSections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

/* â”€â”€ FAQ ACCORDION â”€â”€ */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* â”€â”€ MOBILE MENU â”€â”€ */
(function() {
  const burger = document.getElementById('burgerBtn');
  const overlay = document.getElementById('mobileMenu');
  if (!burger || !overlay) return;
  burger.addEventListener('click', () => {
    const open = overlay.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  overlay.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      overlay.classList.remove('open');
      burger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
})();

/* â”€â”€ CONTACT FORM â”€â”€ */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn      = this.querySelector('button[type="submit"]');
    const msgBox   = document.getElementById('formMsg');
    const btnText  = document.getElementById('formBtnText');

    // Loading state
    btn.disabled = true;
    btnText.textContent = '...';

    const data = new FormData(this);

    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
      .then(() => {
        msgBox.style.display = 'block';
        msgBox.style.background = '#d1fae5';
        msgBox.style.color = '#065f46';
        msgBox.textContent = 'Bedankt. Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.';
        form.reset();
      })
      .catch(() => {
        msgBox.style.display = 'block';
        msgBox.style.background = '#fee2e2';
        msgBox.style.color = '#991b1b';
        msgBox.textContent = 'Verbindingsfout. Probeer het later opnieuw of mail naar info@argaklus.nl';
      })
      .finally(() => {
        btn.disabled = false;
        btnText.innerHTML = '<span data-lang="nl" class="lang-active">Verstuur Aanvraag \u2192</span><span data-lang="en">Send Request \u2192</span><span data-lang="tr">G\u00f6nder \u2192</span>';
        setLang(currentLang);
        setTimeout(() => { msgBox.style.display = 'none'; }, 6000);
      });
  });
}

