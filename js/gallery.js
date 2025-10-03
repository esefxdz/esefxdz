document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');
  const totalImages = 50; // number of images you want to load

  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.alt = `Image ${i}`;

    // Try jpg first
    img.src = `gallery/${i}.jpg`;

    // fallback to png
    img.onerror = () => {
      img.src = `gallery/${i}.png`;

      // fallback to gif
      img.onerror = () => {
        img.src = `gallery/${i}.gif`;

        // hide if all fail
        img.onerror = () => { img.style.display = 'none'; };
      };
    };

    galleryContainer.appendChild(img);
  }
});
