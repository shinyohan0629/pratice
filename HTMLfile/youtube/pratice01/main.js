const toogleBtn = document.querySelector('.novbar_toogleBtn');
const menu = document.querySelector('.novbar_menu');
const icons = document.querySelector('.novbar_icons');

toogleBtn.addEventListener('click', () => {
menu.classList.toggle('active');
icons.classList.toggle('active');
});