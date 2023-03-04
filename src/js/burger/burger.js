(() => {
  const refs = {
    openMenuBtn: document.querySelector("[burg-menu-open]"),
    closeMenuBtn: document.querySelector("[burg-menu-close]"),
    menu: document.querySelector("[burg-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-open");
  }
})();