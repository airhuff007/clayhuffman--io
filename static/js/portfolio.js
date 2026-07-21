/* ── PORTFOLIO AUDIO ENGINE ─────────────────────────────── */
(function () {
  'use strict';

  var currentAudio = null;
  var currentCard  = null;

  function stopAll() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (currentCard) {
      currentCard.classList.remove('pf-playing');
      currentCard.querySelector('.pf-icon-play').style.display  = '';
      currentCard.querySelector('.pf-icon-pause').style.display = 'none';
      var bar = currentCard.querySelector('.pf-progress-bar');
      if (bar) bar.style.width = '0%';
    }
    currentAudio = null;
    currentCard  = null;
  }

  function bindAudioCard(card) {
    var src = card.getAttribute('data-audio');
    if (!src) {
      // No audio yet — show a helpful message on click
      card.addEventListener('click', function () {
        var h3 = card.querySelector('h3');
        if (h3) {
          var orig = h3.textContent;
          h3.textContent = 'Add audio path to data-audio attr';
          setTimeout(function () { h3.textContent = orig; }, 2000);
        }
      });
      return;
    }

    var audio   = new Audio(src);
    var playBtn = card.querySelector('.pf-play-btn');
    var iconPlay  = card.querySelector('.pf-icon-play');
    var iconPause = card.querySelector('.pf-icon-pause');
    var bar     = card.querySelector('.pf-progress-bar');

    audio.addEventListener('timeupdate', function () {
      if (!audio.duration) return;
      bar.style.width = (audio.currentTime / audio.duration * 100) + '%';
    });

    audio.addEventListener('ended', function () {
      stopAll();
    });

    card.addEventListener('click', function () {
      if (currentAudio === audio && !audio.paused) {
        stopAll();
        return;
      }
      stopAll();
      audio.play();
      currentAudio = audio;
      currentCard  = card;
      card.classList.add('pf-playing');
      iconPlay.style.display  = 'none';
      iconPause.style.display = '';
    });
  }

  function bindLinkCard(card) {
    var href = card.getAttribute('data-href');
    if (!href) return;
    card.addEventListener('click', function () {
      window.open(href, '_blank', 'noopener,noreferrer');
    });
  }

  /* ── PORTFOLIO HERO WAVEFORM ─────────────────────────── */
  var wf = document.getElementById('pf-waveform');
  if (wf) {
    var count = window.innerWidth < 640 ? 30 : 56;
    for (var i = 0; i < count; i++) {
      var span = document.createElement('span');
      var h = 20 + Math.abs(Math.sin(i * 0.45)) * 55 + Math.abs(Math.cos(i * 0.27)) * 20;
      span.style.height = h + '%';
      wf.appendChild(span);
    }
  }

  /* ── INIT ────────────────────────────────────────────── */
  document.querySelectorAll('.pf-audio-card').forEach(bindAudioCard);
  document.querySelectorAll('.pf-link-card').forEach(bindLinkCard);
})();
