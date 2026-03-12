document.addEventListener('DOMContentLoaded', function() {
  // Initialize Thumbnails first
  const thumbs = new Swiper('.thumbnail-slider', {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });

  // Initialize Main Gallery
  const mainGallery = new Swiper('.main-image-slider', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbs,
    },
  });

  // Simple Image Zoom Effect
  document.querySelectorAll('.zoom-container img').forEach(img => {
    img.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = img.getBoundingClientRect();
      const x = ((e.pageX - left - window.scrollX) / width) * 100;
      const y = ((e.pageY - top - window.scrollY) / height) * 100;
      img.style.transformOrigin = `${x}% ${y}%`;
      img.style.transform = 'scale(2)';
    });
    
    img.addEventListener('mouseleave', () => {
      img.style.transform = 'scale(1)';
    });
  });
});
