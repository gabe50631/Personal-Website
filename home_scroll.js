document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const arrow = document.querySelector('.arrow');
    if (!arrow) {
      console.log('Arrow element not found!');
      return;
    }
    console.log('Scroll position:', window.scrollY);

    if (window.scrollY > 150) {
      arrow.style.display = 'none';
      console.log('Arrow hidden');
    } else {
      arrow.style.display = 'block';
      console.log('Arrow shown');
    }
  });
  console.log('scroll js file loaded and DOM ready');
});
