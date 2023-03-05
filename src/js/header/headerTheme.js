const themeButton = document.querySelector('.switch-btn');

themeButton.addEventListener('click', changeTheme);

function changeTheme() { 
    const header = document.querySelector('.header');    
    header.classList.toggle('header_dark');
    return;
}