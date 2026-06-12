/* NAV SCROLL */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 40);
});

/* WAVEFORM BARS */
const wf = document.getElementById('waveform');
const barCount = window.innerWidth < 640 ? 30 : 56;
const barHeights = [];
for (let i = 0; i < barCount; i++) {
  const span = document.createElement('span');
  const h = 25 + Math.abs(Math.sin(i * 0.45)) * 55 + Math.abs(Math.cos(i * 0.27)) * 20;
  barHeights.push(h);
  span.style.height = h + '%';
  wf.appendChild(span);
}

/* AUDIO ENGINE */
let activeAudio = null;
let activeCard = null;
let spectrumFrame = null;

const PLAY_SVG  = '<path d="M4 2l10 6-10 6V2z"/>';
const PAUSE_SVG = '<rect x="3" y="2" width="3" height="12"/><rect x="10" y="2" width="3" height="12"/>';

function stopAll() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  if (activeCard) {
    activeCard.querySelector('.play-icon').style.display = '';
    activeCard.querySelector('.pause-icon').style.display = 'none';
    activeCard = null;
  }
  cancelAnimationFrame(spectrumFrame);
  waveformIdle();
  resetHeroBtns();
}

/* WAVEFORM: IDLE STATE */
function waveformIdle() {
  if (!wf) return;
  wf.classList.remove('playing');
  const bars = wf.querySelectorAll('span');
  bars.forEach(b => { b.style.animation = ''; });
}

/* WAVEFORM: PLAYING STATE — spectrum analyzer effect */
function waveformPlay() {
  if (!wf) return;
  wf.classList.add('playing');
  const bars = wf.querySelectorAll('span');
  bars.forEach((b, i) => {
    const dur = (0.25 + Math.random() * 0.55).toFixed(2);
    const delay = (Math.random() * 0.4).toFixed(2);
    b.style.animation = `bar-pulse ${dur}s ease-in-out ${delay}s infinite`;
  });
}

/* HERO AUDIO PLAYER */
function heroPlay(type) {
  const alphaEl = document.getElementById('hero-audio-alpha');
  const ticksEl = document.getElementById('hero-audio-ticks');
  const target  = type === 'alpha' ? alphaEl : ticksEl;
  const other   = type === 'alpha' ? ticksEl : alphaEl;

  // If clicking the already-active track → pause/stop
  if (activeAudio === target && !target.paused) {
    stopAll();
    return;
  }

  stopAll();

  target.play();
  activeAudio = target;
  waveformPlay();

  // Update button labels
  const btnAlpha  = document.getElementById('btn-alpha');
  const btnTicks  = document.getElementById('btn-ticks');
  const iconAlpha = document.getElementById('icon-alpha');
  const iconTicks = document.getElementById('icon-ticks');
  const lblAlpha  = document.getElementById('label-alpha');
  const lblTicks  = document.getElementById('label-ticks');

  if (type === 'alpha') {
    iconAlpha.innerHTML = PAUSE_SVG;
    lblAlpha.textContent = 'Pause';
    btnAlpha.classList.add('btn-playing');
  } else {
    iconTicks.innerHTML = PAUSE_SVG;
    lblTicks.textContent = 'Pause';
    btnTicks.classList.add('btn-playing');
  }

  target.onended = stopAll;
}

function resetHeroBtns() {
  const iconAlpha = document.getElementById('icon-alpha');
  const iconTicks = document.getElementById('icon-ticks');
  const lblAlpha  = document.getElementById('label-alpha');
  const lblTicks  = document.getElementById('label-ticks');
  const btnAlpha  = document.getElementById('btn-alpha');
  const btnTicks  = document.getElementById('btn-ticks');
  if (iconAlpha)  iconAlpha.innerHTML  = PLAY_SVG;
  if (iconTicks)  iconTicks.innerHTML  = PLAY_SVG;
  if (lblAlpha)   lblAlpha.textContent  = 'Alpha Waves';
  if (lblTicks)   lblTicks.textContent  = 'Ticks Only';
  if (btnAlpha)   btnAlpha.classList.remove('btn-playing');
  if (btnTicks)   btnTicks.classList.remove('btn-playing');
}

/* BREATHWORK CARD AUDIO — plays alpha version on click */
document.querySelectorAll('.card.has-audio').forEach(card => {
  // Create a hidden audio element per card
  const audio = new Audio(card.dataset.audioAlpha);
  const playIcon  = card.querySelector('.play-icon');
  const pauseIcon = card.querySelector('.pause-icon');

  card.addEventListener('click', () => {
    if (activeAudio === audio && !audio.paused) {
      stopAll();
      return;
    }

    stopAll();
    audio.play();
    activeAudio = audio;
    activeCard  = card;
    playIcon.style.display  = 'none';
    pauseIcon.style.display = '';

    audio.onended = stopAll;
  });
});
