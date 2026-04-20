/* ==========================================
   ARGAKLUS - SHARED JAVASCRIPT
   ========================================== */

/* LANGUAGE SWITCHER */
let currentLang = 'nl';
const supportedLangs = ['nl', 'en', 'tr', 'de'];

const germanText = {
  'Diensten': 'Leistungen',
  'Diensten ▾': 'Leistungen ▾',
  'Diensten &#9662;': 'Leistungen ▾',
  'Informatie': 'Informationen',
  'Informatie ▾': 'Informationen ▾',
  'Contact': 'Kontakt',
  'Gratis Offerte': 'Kostenloses Angebot',
  'Gratis Offerte Aanvragen': 'Kostenloses Angebot anfragen',
  'Aanbouw / Uitbouw': 'Anbau / Erweiterung',
  'Aanbouw en Uitbouw': 'Anbau und Erweiterung',
  'Vloeren PVC/Laminaat / Vloertegels': 'PVC-, Laminat- und Bodenfliesen',
  'Aluminium Balkonleuningen': 'Aluminium-Balkongeländer',
  'Tuinwerkzaamheden': 'Gartenarbeiten',
  'Badkamer & Toilet Renovatie': 'Bad- und Toilettenrenovierung',
  'Badkamer &amp; Toilet Renovatie': 'Bad- und Toilettenrenovierung',
  'Badkamer &amp; Toilet': 'Bad und Toilette',
  'Betonvloer Storten': 'Betonboden gießen',
  'Alles onder een dak': 'Alles unter einem Dach',
  'Breid uw leefruimte uit en verhoog de waarde van uw huis met een aanbouw / uitbouw.': 'Erweitern Sie Ihren Wohnraum und steigern Sie den Wert Ihres Hauses mit einem Anbau oder einer Erweiterung.',
  'Van balkonleuningen en tuinbestrating tot badkamerrenovatie en betonvloeren. Professioneel, betrouwbaar en op tijd in Eindhoven.': 'Von Balkongeländern und Gartenpflasterung bis zu Badrenovierung und Betonböden. Professionell, zuverlässig und pünktlich in Eindhoven.',
  'Onze Diensten': 'Unsere Leistungen',
  'Wat kunnen wij voor u betekenen?': 'Was können wir für Sie tun?',
  'Meer lezen ->': 'Mehr erfahren ->',
  'Meer lezen →': 'Mehr erfahren →',
  'Meer informatie →': 'Mehr Informationen →',
  'Projecten': 'Projekte',
  'Jaar ervaring': 'Jahre Erfahrung',
  'Tevredenheid': 'Zufriedenheit',
  'Nieuwe dienst': 'Neue Leistung',
  'Dienst': 'Leistung',
  'Meer leefruimte met een aanbouw, uitbouw of bijgebouw op maat.': 'Mehr Wohnraum mit einem maßgeschneiderten Anbau, einer Erweiterung oder einem Nebengebäude.',
  'Strakke vloerafwerking met PVC, laminaat en vloertegels.': 'Saubere Bodenverlegung mit PVC, Laminat und Bodenfliesen.',
  'Maatwerk balkonleuningen in aluminium: veilig, strak en onderhoudsarm.': 'Aluminium-Balkongeländer nach Maß: sicher, modern und pflegeleicht.',
  'Tuinaanleg, bestrating, overkappingen en onderhoud voor een nette buitenruimte.': 'Gartenanlage, Pflasterarbeiten, Überdachungen und Pflege für einen gepflegten Außenbereich.',
  'Complete badkamer- en toiletrenovatie met leidingwerk, tegelwerk en afwerking.': 'Komplette Bad- und Toilettenrenovierung mit Leitungen, Fliesenarbeiten und Endbearbeitung.',
  'Gestorte betonvloeren voor woningen, garages, aanbouwen en bedrijfshallen.': 'Gegossene Betonböden für Häuser, Garagen, Anbauten und Gewerbehallen.',
  'Vraag vandaag nog een gratis offerte aan.': 'Fordern Sie noch heute ein kostenloses Angebot an.',
  'Wij reageren binnen 24 uur.': 'Wir antworten innerhalb von 24 Stunden.',
  'Neem contact op': 'Kontakt aufnehmen',
  'Wij nemen binnen 24 uur contact met u op.': 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
  'Adres': 'Adresse',
  'Telefoon': 'Telefon',
  'Bedrijfsgegevens': 'Firmendaten',
  'Voornaam': 'Vorname',
  'Achternaam': 'Nachname',
  'Telefoonnummer': 'Telefonnummer',
  'Bericht': 'Nachricht',
  'Offerte Aanvragen': 'Angebot anfragen',
  'Verstuur Aanvraag →': 'Anfrage senden →',
  'Bedankt. Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.': 'Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns so schnell wie möglich bei Ihnen.',
  'Verbindingsfout. Probeer het later opnieuw of mail naar info@argaklus.nl': 'Verbindungsfehler. Bitte versuchen Sie es später erneut oder schreiben Sie an info@argaklus.nl',
  'Uw betrouwbare kluspartner in Eindhoven.': 'Ihr zuverlässiger Handwerkspartner in Eindhoven.',
  'Snelle Links': 'Schnelle Links',
  'Offerte': 'Angebot',
  'WhatsApp ons': 'Schreiben Sie uns',
  'Home': 'Startseite',
  'Laminaat': 'Laminat',
  'Visgraat': 'Fischgrät',
  'Geef je interieur een upgrade met tijdloos visgraatlaminaat.': 'Werten Sie Ihr Interieur mit zeitlosem Fischgrätlaminat auf.',
  'Ons werk': 'Unsere Arbeit',
  'Vloerprojecten': 'Bodenprojekte',
  'Aanbouw projecten': 'Anbauprojekte',
  'Gerealiseerde projecten': 'Realisierte Projekte',
  'Veelgestelde vragen': 'Häufig gestellte Fragen',
  'Werkproces': 'Arbeitsprozess',
  'Van idee tot oplevering': 'Von der Idee bis zur Übergabe',
  'Adviesgesprek': 'Beratungsgespräch',
  'Opmeten & Offerte': 'Aufmaß und Angebot',
  'Afwerking & Oplevering': 'Fertigstellung und Übergabe',
  'Woningen': 'Wohnungen',
  'Garages': 'Garagen',
  'Bedrijfshallen': 'Gewerbehallen',
  'Aluminium Eindhoven': 'Aluminium Eindhoven',
  'Badkamer Eindhoven': 'Bad Eindhoven',
  'Betonvloer Eindhoven': 'Betonboden Eindhoven'
};

const germanHtml = {
  'Alles onder een dak': 'Alles unter<br /><span>einem Dach</span>',
  'Aanbouw / Uitbouw': 'Anbau / <em>Erweiterung</em>',
  'Vloeren PVC/Laminaat / Vloertegels': 'PVC/Laminat / <em>Bodenfliesen</em>'
};

function normalizeText(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function langGroup(el) {
  const group = [el];
  let prev = el.previousElementSibling;
  while (prev && prev.hasAttribute('data-lang')) {
    group.unshift(prev);
    prev = prev.previousElementSibling;
  }
  let next = el.nextElementSibling;
  while (next && next.hasAttribute('data-lang')) {
    group.push(next);
    next = next.nextElementSibling;
  }
  return group;
}

function addGermanTranslations() {
  document.querySelectorAll('[data-lang="nl"]').forEach(el => {
    const group = langGroup(el);
    if (group.some(item => item.getAttribute('data-lang') === 'de')) return;
    const clone = el.cloneNode(true);
    clone.setAttribute('data-lang', 'de');
    clone.classList.remove('lang-active');
    const original = normalizeText(el.textContent || '');
    if (germanHtml[original]) {
      clone.innerHTML = germanHtml[original];
    } else if (germanText[original]) {
      clone.textContent = germanText[original];
    }
    group[group.length - 1].after(clone);
  });
}

function addGermanButtons() {
  document.querySelectorAll('.lang-switcher').forEach(switcher => {
    if (switcher.querySelector('[data-switch="de"]')) return;
    const btn = document.createElement('button');
    btn.className = 'lang-btn';
    btn.dataset.switch = 'de';
    btn.setAttribute('aria-label', 'Deutsch');
    btn.innerHTML = '<span class="flag-icon"><svg viewBox="0 0 5 3"><rect width="5" height="3" fill="#ffce00"/><rect width="5" height="2" fill="#dd0000"/><rect width="5" height="1" fill="#000"/></svg></span><span class="lang-label">Deutsch</span>';
    switcher.appendChild(btn);
  });
}

addGermanTranslations();
addGermanButtons();

function setLang(lang) {
  if (!supportedLangs.includes(lang)) lang = 'nl';
  currentLang = lang;
  const handled = new Set();
  document.querySelectorAll('[data-lang]').forEach(el => {
    if (handled.has(el)) return;
    const group = langGroup(el);
    group.forEach(item => handled.add(item));
    const target = group.find(item => item.getAttribute('data-lang') === lang)
      || group.find(item => item.getAttribute('data-lang') === 'nl')
      || group[0];
    group.forEach(item => item.classList.toggle('lang-active', item === target));
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
setLang(savedLang && supportedLangs.includes(savedLang) ? savedLang : 'nl');

/* HERO SLIDESHOW */
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

/* SCROLL ANIMATIONS */
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

/* ACTIVE NAV */
const navSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__menu > li > a');
window.addEventListener('scroll', () => {
  let cur = '';
  navSections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + cur));
});

/* FAQ ACCORDION */
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

/* MOBILE MENU */
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

/* IMAGE LIGHTBOX */
(function() {
  const imageSelectors = [
    '.img-gallery img',
    '.img-single img',
    '.gallery-item img',
    '.page-hero__img img',
    '.detail-hero__img img',
    '.overlay-card img',
    '.hero__slideshow img'
  ];
  const images = document.querySelectorAll(imageSelectors.join(','));
  const clickTargets = document.querySelectorAll([
    ...imageSelectors,
    '.gallery-item'
  ].join(','));
  if (!images.length) return;

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button class="lightbox__close" type="button" aria-label="Close">&times;</button><img alt="" />';
  document.body.appendChild(lightbox);

  const fullImage = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.lightbox__close');
  const close = () => {
    lightbox.classList.remove('open');
    fullImage.removeAttribute('src');
    document.body.style.overflow = '';
  };

  const open = (img) => {
    fullImage.src = img.currentSrc || img.src;
    fullImage.alt = img.alt || '';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  clickTargets.forEach(target => {
    target.addEventListener('click', event => {
      const img = target.matches('img') ? target : target.querySelector('img');
      if (!img) return;
      event.preventDefault();
      event.stopPropagation();
      open(img);
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
})();

/* CONTACT FORM */
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
        msgBox.textContent = currentLang === 'de'
          ? 'Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns so schnell wie möglich bei Ihnen.'
          : 'Bedankt. Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.';
        form.reset();
      })
      .catch(() => {
        msgBox.style.display = 'block';
        msgBox.style.background = '#fee2e2';
        msgBox.style.color = '#991b1b';
        msgBox.textContent = currentLang === 'de'
          ? 'Verbindungsfehler. Bitte versuchen Sie es später erneut oder schreiben Sie an info@argaklus.nl'
          : 'Verbindingsfout. Probeer het later opnieuw of mail naar info@argaklus.nl';
      })
      .finally(() => {
        btn.disabled = false;
        btnText.innerHTML = '<span data-lang="nl" class="lang-active">Verstuur Aanvraag \u2192</span><span data-lang="en">Send Request \u2192</span><span data-lang="tr">G\u00f6nder \u2192</span><span data-lang="de">Anfrage senden \u2192</span>';
        setLang(currentLang);
        setTimeout(() => { msgBox.style.display = 'none'; }, 6000);
      });
  });
}
