const video1 = document.getElementById('medicarm_video');
const btn1 = document.getElementById('muteBtn2');

btn1.addEventListener('click', () => {
  if (video1.muted) {
    video1.muted = false;
    btn1.textContent = 'Mute';
  } else {
    video1.muted = true;
    btn1.textContent = 'Unmute';
  }
});