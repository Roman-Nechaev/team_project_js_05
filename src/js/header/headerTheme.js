const themeButton = document.querySelector('.switch-btn');
const themeButtonMobile = document.querySelector('.switch-btn_mobile');


themeButton.addEventListener('click', changeTheme);
themeButtonMobile.addEventListener('click', changeTheme);

function changeTheme(event) { 
    event.preventDefault();
   if (localStorage.getItem('theme') === 'dark') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'dark');
    }
    setTheme();
}

function setTheme() {
    try {
         if (localStorage.getItem('theme') === 'dark') {
        document.querySelector(`html`).classList.add(`dark`);
    }
    else {
        document.querySelector(`html`).classList.remove(`dark`);
    }
        
    } catch (error) {
     console.log(Error);   
    }
   
}
setTheme();