try {
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('html').classList.add('dark');
  }
} catch (error) {}

const butonRef = document.querySelector('.toggle-theme');

butonRef.addEventListener('click', onClick);

function onClick(e) {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
}
