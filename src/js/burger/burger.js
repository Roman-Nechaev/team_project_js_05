
const burgerBtn = document.getElementById('burger-open');
const btnClose = document.getElementById('burger-close');

burgerBtn.addEventListener('click', openMenu);


function openMenu() {
  const menuOpen = document.getElementById('burger-menu_add');
    
  menuOpen.classList.toggle('is-open');
}

btnClose.addEventListener('click', closeMenu);
function closeMenu() {
  const menuOpen = document.getElementById('burger-menu_add');
    
  if (menuOpen.classList.contains('is-open')) {
    menuOpen.classList.remove('is-open');
  }
}