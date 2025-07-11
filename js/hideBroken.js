document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.onerror = () => {
      img.style.display = 'none';
    };
  });
});
