document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');
  const totalImages = 50; // number of images you want to load

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `gallery/${i}.jpg`;  // assuming .jpg extension, change if needed
    img.alt = `Image ${i}`;
    img.onerror = () => { img.style.display = 'none'; }; // hide broken images
    galleryContainer.appendChild(img);
  }
});
