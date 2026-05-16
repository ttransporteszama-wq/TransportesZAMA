document.addEventListener('DOMContentLoaded', () => {
  const slides = [...document.querySelectorAll('.slide')];
  const next = document.getElementById('next');
  const before = document.getElementById('before');

  if (!slides.length || !next || !before) return;

  let current = 0;
  let timer;

  const showSlide = (index) => {
    slides[current].classList.remove('slide--show');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('slide--show');
  };

  const restart = () => {
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 8000);
  };

  next.addEventListener('click', () => {
    showSlide(current + 1);
    restart();
  });

  before.addEventListener('click', () => {
    showSlide(current - 1);
    restart();
  });

  restart();
});
