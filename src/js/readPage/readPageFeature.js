import dateFormat, { masks } from 'dateformat';

let readRevision = document.querySelector('.revision-date-arrow');
let content = document.querySelector('.gallery-text');
const dataTitleRef = document.querySelector('.revision-date-title');

readRevision.addEventListener('click', () => {
  if (readRevision.classList.contains('up')) {
    readRevision.classList.add('down');
    readRevision.classList.remove('up');
  } else {
    readRevision.classList.add('up');
    readRevision.classList.remove('down');
  }
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = null;
    content.style.maxHeight = content.scrollHeight + 'px';
  }
});

function currentDate() {
  const now = new Date();

  return (dataTitleRef.firstChild.textContent = dateFormat(now, 'dd/mm/yyyy'));
}

currentDate();
