document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.portfolioBtns .btn');
  const cards = document.querySelectorAll('.portfolioGallery .card');
  const popupBox = document.getElementById('popupBox');
  const popupImage = popupBox ? popupBox.querySelector('img') : null;
  const closePopupBtn = popupBox ? popupBox.querySelector('.popup-close') : null;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(item => item.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-item');
        card.style.display = filter === 'all' || filter === category ? 'block' : 'none';
      });
    });
  });

  cards.forEach(card => {
    card.addEventListener('click', () => {
      if (!popupBox || !popupImage) return;
      const img = card.querySelector('img');
      if (!img) return;
      popupImage.src = img.src;
      popupImage.alt = img.alt;
      popupBox.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  });

  const closePopup = () => {
    if (!popupBox) return;
    popupBox.classList.remove('show');
    document.body.style.overflow = '';
  };

  if (closePopupBtn) closePopupBtn.addEventListener('click', closePopup);

  if (popupBox) {
    popupBox.addEventListener('click', event => {
      if (event.target === popupBox) closePopup();
    });
  }

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(item => observer.observe(item));
});
const cards = document.querySelectorAll('.card');
const popupBox = document.getElementById('popupBox');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img');
    const video = card.querySelector('video');

    document.querySelectorAll('video').forEach(v => {
      v.pause();
      v.currentTime = 0;
    });

    popupBox.classList.add('show');

    if (img) {
      popupBox.innerHTML = `
        <button class="popup-close" aria-label="Cerrar">&times;</button>
        <img src="${img.src}" alt="">
      `;
    }

    if (video) {
      const source = video.querySelector('source').src;

      popupBox.innerHTML = `
        <button class="popup-close" aria-label="Cerrar">&times;</button>
        <video controls autoplay playsinline>
          <source src="${source}" type="video/mp4">
        </video>
      `;
    }

    const closePopup = () => {
      popupBox.classList.remove('show');
      popupBox.innerHTML = `
        <button class="popup-close" aria-label="Cerrar">&times;</button>
        <img src="" alt="Vista previa" />
      `;
    };

    popupBox.querySelector('.popup-close').addEventListener('click', closePopup);
  });
});