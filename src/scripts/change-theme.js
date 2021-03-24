const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
themeSwitchToggle.addEventListener('change', changeTheme);
const currentTheme = localStorage.getItem('theme');
body.classList.add(currentTheme);

if (body.classList.contains('dark-theme')) {
    themeSwitchToggle.checked = true;
}

function changeTheme(evt) {
    if (evt.target.checked) {
        localStorage.setItem("theme", Theme.DARK);
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    } else {
        localStorage.setItem("theme", Theme.LIGHT);
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    }
}





    
