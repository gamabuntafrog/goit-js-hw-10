import card from './templates/test.hbs';
import menuData from './menu.json';
// импорт шаблона и данных

const container = document.querySelector('#menu-container');
const toolBar = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body')
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// конст понятно чего

function createCard(data) {return card(data)}
container.insertAdjacentHTML('beforeend', createCard(menuData));
// создание разметки

body.classList.add(`${localStorage.getItem('theme')}`)
if (body.className === `${Theme.DARK}`) {
  toolBar.setAttribute('checked', 'true')
}
// ну тут вроде итак понятно

toolBar.addEventListener('change', () => {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    body.classList.remove(`${currentTheme}`)
    localStorage.setItem('theme', Theme.LIGHT)
    body.classList.add(`${localStorage.getItem('theme')}`)
    // если тема тёмная то удаляем тёмную тему и ставим светлую и меняем значение в localStorage
 } else {
    body.classList.remove(`${currentTheme}`)
    localStorage.setItem('theme', Theme.DARK)
    body.classList.add(`${localStorage.getItem('theme')}`)
    // если светлая то наоборот
  }
})

