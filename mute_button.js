const video = document.getElementById('TIMVideo');
const btn = document.getElementById('muteBtn');

btn.addEventListener('click', () => {
  if (video.muted) {
    video.muted = false;
    btn.textContent = 'Mute';
  } else {
    video.muted = true;
    btn.textContent = 'Unmute';
  }
});
