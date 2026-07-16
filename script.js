// Hero rotation: one of three case photos, chosen at random per page load.
// To swap in real assets, just edit the `img` paths below.
const heroCases = [
  {
    key: 'cz',
    img: 'images/hero_CZ.jpg',
    caption: 'Czech National Archive, Prague, Czech Republic. Photographed 2025'
  },
  {
    key: 'fi',
    img: 'images/hero_E.jpg',
    caption: 'New Valamo Monastery, Heinävesi, Finland. Photographed 2026'
  },
  {
    key: 'am',
    img: 'images/hero_NK.jpg',
    caption: 'Togh, Nagorno-Karabakh/Armenia. Photographed 2014'
  }
];

(function initHeroRotation(){
  const choice = heroCases[Math.floor(Math.random() * heroCases.length)];
  const heroPhoto = document.querySelector('.hero-photo');
  const caption = document.getElementById('heroCaption');
  const captionText = caption ? caption.querySelector('.hero-caption-text') : null;

  if (heroPhoto) {
    heroPhoto.style.backgroundImage =
      `linear-gradient(15deg, rgba(28,27,24,0.35) 0%, rgba(28,27,24,0.0) 55%), url('${choice.img}')`;
  }
  if (caption) {
    caption.classList.remove('case-cz','case-fi','case-am');
    caption.classList.add('case-' + choice.key);
  }
  if (captionText) {
    captionText.textContent = choice.caption;
  }
  document.querySelectorAll('.hero-cases span').forEach(span => {
    span.classList.toggle('is-active', span.classList.contains('case-' + choice.key));
  });
})();

// Scroll progress bar (the "shifting border" that redraws as you scroll)
const progressBar = document.getElementById('borderlineProgress');

function onScroll(){
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
  });
});
