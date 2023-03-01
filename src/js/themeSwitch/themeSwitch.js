const butonRef = document.querySelector('.toggle-theme');

// butonRef.addEventListener('click', onClick);  ///

function onClick(e) {
  addClassDark();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  addClassDark();
}

export function addClassDark(e) {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  } catch (error) {}
}
