const href = window.location.href;
const path = href.split('/');

function pageCurrent() {
  if (path[4] === 'index.html') {
    document.getElementById('home').classList.add('current');
    document.getElementById('mobile-home').classList.add('current');
  } else if (path[4] === 'favourite.html') {
    document.getElementById('favorite').classList.add('current');
    document.getElementById('mobile-favorite').classList.add('current');
  } else if (path[4] === 'read.html') {
    document.getElementById('read').classList.add('current');
    document.getElementById('mobile-read').classList.add('current');
  }
}

pageCurrent();
