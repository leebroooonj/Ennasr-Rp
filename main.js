// 1. Ultra-Smooth Mouse Cursor Tracking via LERP (Linear Interpolation)
const glow = document.querySelector('.cursor-glow');

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // LERP formula: Smoothly slides glow towards mouse position
  glowX += (mouseX - glowX) * 0.08;
  glowY += (mouseY - glowY) * 0.08;

  glow.style.left = `${glowX}px`;
  glow.style.top = `${glowY}px`;

  requestAnimationFrame(animateCursor);
}
animateCursor();

// Grow cursor glow on clickable hover
document.querySelectorAll('a, button, .rule-card').forEach(item => {
  item.addEventListener('mouseenter', () => {
    glow.style.width = '350px';
    glow.style.height = '350px';
  });
  item.addEventListener('mouseleave', () => {
    glow.style.width = '250px';
    glow.style.height = '250px';
  });
});

// 2. Intersection Observer for Smooth Scroll Reveal
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
// 3. Interactive Factions Switcher
const factionBtns = document.querySelectorAll('.faction-btn');
const factionContents = document.querySelectorAll('.faction-content');

factionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    factionBtns.forEach(b => b.classList.remove('active'));
    factionContents.forEach(c => c.classList.remove('active'));

    // Add active class to clicked button & target content
    btn.classList.add('active');
    const targetId = btn.getAttribute('data-target');
    document.getElementById(targetId).classList.add('active');
  });
});