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
  'Betonvloer Eindhoven': 'Betonboden Eindhoven',

  /* ── Trust bar ── */
  'Snelle oplevering': 'Schnelle Fertigstellung',
  'VCA gecertificeerd': 'VCA zertifiziert',
  'Garantie op werk': 'Garantie auf Arbeit',
  'Altijd bereikbaar': 'Immer erreichbar',
  'Transparante prijzen': 'Transparente Preise',

  /* ── Overlay cards ── */
  'Breid uw leefruimte uit en verhoog de waarde van uw huis met een aanbouw of uitbouw.': 'Erweitern Sie Ihren Wohnraum und erhöhen Sie den Wert Ihres Hauses mit einem Anbau.',
  'Een nette vloer vormt de basis voor elke ruimte.': 'Ein sauberer Boden bildet die Grundlage für jeden Raum.',
  'Veilige, duurzame balkonleuningen op maat voor woning en gebouw.': 'Sichere, langlebige maßgefertigte Balkongeländer für Haus und Gebäude.',
  'Tuinbestrating, terras aanleg en complete tuinrenovatie van A tot Z.': 'Gartenpflasterung, Terrassenbau und komplette Gartensanierung von A bis Z.',
  'Complete renovatie met strak tegelwerk, sanitair en nette afwerking.': 'Komplette Renovierung mit sauberer Fliesenarbeit, Sanitär und ordentlicher Verarbeitung.',

  /* ── Service cards ── */
  'Stijlvolle en duurzame aluminium balkonleuningen op maat voor uw woning of gebouw.': 'Stilvolle und langlebige Aluminium-Balkongeländer nach Maß für Ihr Haus oder Gebäude.',
  'Complete renovatie in slechts 2\u20135 dagen met minimaal breekwerk.': 'Komplette Renovierung in nur 2\u20135 Tagen mit minimalen Abbrucharbeiten.',

  /* ── Split: Aluminium ── */
  'Veilig, stijlvol en duurzaam': 'Sicher, stilvoll und langlebig',
  'Aluminium balkonleuningen zijn structurele elementen die op balkons van gebouwen worden gebruikt om veiligheid en een esthetische uitstraling te bieden. Met diverse ontwerpmogelijkheden passen ze bij elk architectuurstijl.': 'Aluminium-Balkongeländer sind Strukturelemente, die auf Balkonen von Gebäuden für Sicherheit und Ästhetik eingesetzt werden. Mit verschiedenen Designoptionen passen sie zu jedem Architekturstil.',
  'Bestand tegen weer en corrosie': 'Witterungs- und korrosionsbeständig',
  'Diverse kleuren en ontwerpen': 'Verschiedene Farben und Designs',
  'Volledig op maat gemaakt': 'Vollständig maßgefertigt',

  /* ── Split: Tuin ── */
  'Tuinbestrating laten aanleggen?': 'Gartenpflasterung verlegen lassen?',
  'Tuinbestrating aanleggen is bij ons maatwerk van A tot Z. Van het uitgraven en opbouwen van de juiste onderlaag tot het leggen en voegen van keramische tegels of andere bestrating.': 'Gartenpflasterung ist bei uns Maßarbeit von A bis Z. Vom Ausheben und Aufbau des richtigen Untergrunds bis zum Verlegen und Verfugen von Keramikfliesen oder anderer Pflasterung.',
  'Terras, oprit & tuinrenovatie': 'Terrasse, Einfahrt & Gartensanierung',
  'Wij ontzorgen voor 110%': 'Wir kümmern uns zu 110%',
  'Strak en duurzaam resultaat': 'Sauberes und dauerhaftes Ergebnis',

  /* ── Split: Badkamer ── */
  'Complete renovatie in 2\u20135 dagen': 'Komplette Renovierung in 2\u20135 Tagen',
  'Wij renoveren je badkamer of toilet volledig in slechts 2\u20135 dagen, met minimaal breek- en sloopwerk. Van inloopdouche en vloer tot meubel, toilet en verlaagd plafond.': 'Wir renovieren Ihr Bad oder WC vollständig in nur 2\u20135 Tagen mit minimalen Abbrucharbeiten. Von der Dusche und dem Boden bis zu Möbeln, WC und Unterdecke.',
  'Al 1.000+ badkamers vernieuwd': 'Bereits 1.000+ Bäder renoviert',
  'Eigen montageteam': 'Eigenes Montageteam',
  'Alles op maat naar uw wensen': 'Alles nach Ihren Wünschen maßgefertigt',

  /* ── Split: Beton ── */
  'Betonvloer storten in heel Nederland': 'Betonboden gießen in ganz den Niederlanden',
  'Gespecialiseerd in betonvloer storten voor woningen, garages, aanbouwen en bedrijfshallen. Jarenlange ervaring en een strakke, egale afwerking gegarandeerd.': 'Spezialisiert auf das Gießen von Betonböden für Häuser, Garagen, Anbauten und Gewerbehallen. Jahrelange Erfahrung und eine saubere, ebene Oberfläche garantiert.',
  'Woningen, garages & bedrijfshallen': 'Häuser, Garagen & Gewerbehallen',
  'Jarenlange specialistische ervaring': 'Jahrelange Fachexpertise',
  'Strakke en egale afwerking': 'Saubere und ebene Oberfläche',

  /* ── CTA ── */
  'Wij reageren binnen 24 uur en komen bij u langs voor een vrijblijvend adviesgesprek.': 'Wir antworten innerhalb von 24 Stunden und besuchen Sie für ein unverbindliches Beratungsgespräch.',

  /* ── Footer ── */
  'Uw betrouwbare kluspartner in Eindhoven. Van balkonleuningen tot betonvloeren.': 'Ihr zuverlässiger Handwerkspartner in Eindhoven. Von Balkongeländern bis Betonböden.',
  'Leuning Eindhoven': 'Geländer Eindhoven',
  'Tuinbestrating': 'Gartenpflasterung',
  'Privacybeleid': 'Datenschutz',

  /* ── Certs ── */
  'Gecertificeerd': 'Zertifiziert',
  'Veiligheid, gezondheid en milieu centraal op elke bouwplaats.': 'Sicherheit, Gesundheit und Umwelt stehen auf jeder Baustelle im Mittelpunkt.',
  'Erkend leerbedrijf voor de volgende generatie vakmensen.': 'Anerkannter Ausbildungsbetrieb für die nächste Generation von Fachkräften.',
  'Elektrotechnische werkzaamheden conform Nederlandse norm.': 'Elektrotechnische Arbeiten gemäß niederländischer Norm.',
  'Erkend Installateur': 'Anerkannter Installateur',
  'Gecertificeerd voor isolatie en duurzame installaties.': 'Zertifiziert für Isolierung und nachhaltige Installationen.'
};

const germanHtml = {
  'Alles onder een dak': 'Alles unter<br /><span>einem Dach</span>',
  'Aanbouw / Uitbouw': 'Anbau / <em>Erweiterung</em>',
  'Vloeren PVC/Laminaat / Vloertegels': 'PVC/Laminat / <em>Bodenfliesen</em>',
  'Klaar om uw project te starten?Vraag vandaag nog een gratis offerte aan.': 'Bereit, Ihr Projekt zu starten?<br /><em>Fordern Sie noch heute ein kostenloses Angebot an.</em>'
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

/* DIENST SELECT TRANSLATIONS */
const dienstOptions = {
  nl: {
    placeholder: 'Selecteer een dienst...',
    options: [
      'Aanbouw / Uitbouw',
      'Veranda & Terassen',
      'Vloeren PVC/Laminaat / Vloertegels',
      'Aluminium Balkonleuningen',
      'Tuinwerkzaamheden',
      'Badkamer & Toilet Renovatie',
      'Betonvloer Storten'
    ]
  },
  en: {
    placeholder: 'Select a service...',
    options: [
      'Extension / Home Addition',
      'Veranda & Terraces',
      'Floors PVC / Laminate / Tiles',
      'Aluminium Balcony Railings',
      'Garden Works',
      'Bathroom & Toilet Renovation',
      'Concrete Floor Pouring'
    ]
  },
  tr: {
    placeholder: 'Bir hizmet seçin...',
    options: [
      'Ek Yapı / Genişletme',
      'Veranda & Teraslar',
      'Zemin PVC / Laminat / Fayans',
      'Alüminyum Balkon Korkulukları',
      'Bahçe İşlemleri',
      'Banyo & Tuvalet Renovasyonu',
      'Beton Zemin Döküm'
    ]
  },
  de: {
    placeholder: 'Leistung auswählen...',
    options: [
      'Anbau / Erweiterung',
      'Veranda & Terrassen',
      'PVC- / Laminat- / Bodenfliesen',
      'Aluminium-Balkongeländer',
      'Gartenarbeiten',
      'Bad- & Toilettenrenovierung',
      'Betonboden gießen'
    ]
  }
};

function updateDienstSelect(lang) {
  const sel = document.getElementById('dienstSelect');
  if (!sel) return;
  const t = dienstOptions[lang] || dienstOptions['nl'];
  const current = sel.value;
  const currentIndex = Array.from(sel.options).findIndex(o => o.value === current) - 1;
  sel.options[0].text = t.placeholder;
  t.options.forEach((text, i) => {
    if (sel.options[i + 1]) sel.options[i + 1].text = text;
  });
}

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
  updateDienstSelect(lang);
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

/* ANCHOR SCROLL FIX – prevents Vercel redirect issues on #contact links */
document.addEventListener('click', function(e) {
  const link = e.target.closest('a[href="#contact"]');
  if (!link) return;
  const target = document.getElementById('contact');
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

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

    // Bot korumasi: JS token uret (sayfa yuklenme zamani + prefix)
    const _pageLoad = window._argaPageLoad || Date.now();
    const _ts = Math.floor(_pageLoad / 1000);
    data.append("_token", (window._argaToken || "") + String(_ts));

    fetch('mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })
      .then(function(res) { return res.json(); })
      .then(function(json) {
        if (json.status === 'success') {
          msgBox.style.display = 'block';
          msgBox.style.background = '#d1fae5';
          msgBox.style.color = '#065f46';
          msgBox.textContent = currentLang === 'de'
            ? 'Vielen Dank. Ihre Anfrage wurde gesendet. Wir melden uns so schnell wie möglich bei Ihnen.'
            : currentLang === 'en'
            ? 'Thank you. Your request has been sent. We will contact you as soon as possible.'
            : currentLang === 'tr'
            ? 'Teşekkürler. Talebiniz gönderildi. En kısa sürede sizinle iletişime geçeceğiz.'
            : 'Bedankt. Uw aanvraag is verzonden. Wij nemen zo snel mogelijk contact met u op.';
          form.reset();
        } else {
          throw new Error(json.message || 'error');
        }
      })
      .catch(function() {
        msgBox.style.display = 'block';
        msgBox.style.background = '#fee2e2';
        msgBox.style.color = '#991b1b';
        msgBox.textContent = currentLang === 'de'
          ? 'Verbindungsfehler. Bitte versuchen Sie es später erneut oder schreiben Sie an info@argaklus.nl'
          : currentLang === 'en'
          ? 'Connection error. Please try again later or email info@argaklus.nl'
          : currentLang === 'tr'
          ? 'Bağlantı hatası. Lütfen daha sonra tekrar deneyin veya info@argaklus.nl adresine e-posta gönderin.'
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
