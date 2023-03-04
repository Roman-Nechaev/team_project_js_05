const themeButton = document.querySelector('.switch-btn');

themeButton.addEventListener('click', changeTheme);

function changeTheme() {
  const textLight = document.querySelector('.switch-btn_choice_light');
  const textDark = document.querySelector('.switch-btn_choice_dark');
  const iconLight = document.querySelector('.switch-btn_choice_ligh-icon');
  const iconDark = document.querySelector('.switch-btn_choice_dark-icon');
  const switchButton = document.querySelector('.switch-btn');
  switchButton.classList.toggle('switch-on');

  if (switchButton.classList.contains('switch-on')) {
    textLight.style.color = '#5F6775';
    textDark.style.color = '#4B48DB';
    iconLight.style.fill = '#5F6775';
    iconDark.style.fill = '#4B48DB';
    switchButton.style.background = '#111321';
  } else {
    textDark.style.color = '#5F6775';
    textLight.style.color = '#4B48DB';
    iconDark.style.fill = '#5F6775';
    iconLight.style.fill = '#4B48DB';
    switchButton.style.background = 'white';
  }
}
