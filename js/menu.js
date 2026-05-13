document.addEventListener('DOMContentLoaded', () => {
  const toggleMenu = document.getElementById('menuToggle');
  const menuList = document.getElementById('menuList');
  const closeMenu = document.getElementById('closeMenu');
  const links = document.querySelectorAll('.nav__links');

  if (!toggleMenu || !menuList || !closeMenu) return;

  toggleMenu.addEventListener('click', () => {
    menuList.classList.add('show');
    document.body.style.overflow = 'hidden';
  });

  closeMenu.addEventListener('click', () => {
    menuList.classList.remove('show');
    document.body.style.overflow = '';
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menuList.classList.remove('show');
      document.body.style.overflow = '';
    });
  });
});
