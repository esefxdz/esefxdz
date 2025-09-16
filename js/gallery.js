document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');
  if (!galleryContainer) {
    console.error("Gallery container not found!");
    return;
  }

  const files = galleryContainer.dataset.files.split(',');

  files.forEach((file, index) => {
    const img = document.createElement('img');
    img.src = `gallery/${file.trim()}`;
    img.alt = `Image ${index + 1}`;
    img.onerror = () => { img.style.display = 'none'; };
    galleryContainer.appendChild(img);
  });
});
