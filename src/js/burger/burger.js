
const burgerBtn = document.querySelector('.burger-btn');
const btnClose = document.querySelector('.closeburgmenu');

burgerBtn.addEventListener('click', openMenu);


function openMenu() {
  const menuOpen = document.querySelector('.burger-menu');
    
  menuOpen.classList.toggle('is-open');
}

btnClose.addEventListener('click', closeMenu);
function closeMenu() {
  const menuOpen = document.querySelector('.burger-menu');
    
  if (menuOpen.classList.contains('is-open')) {
    menuOpen.classList.remove('is-open');
  }
}