window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

const wf = document.getElementById('waveform');
const barCount = window.innerWidth < 640 ? 30 : 56;
for (let i = 0; i < barCount; i++) {
  const span = document.createElement('span');
  const h = 25 + Math.abs(Math.sin(i * 0.45)) * 55 + Math.abs(Math.cos(i * 0.27)) * 20;
  span.style.height = h + '%';
  wf.appendChild(span);
}
