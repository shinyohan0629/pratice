const toggleBtn = document.querySelector('.navbar_toogleBtn');
const manu = document.querySelector('.navbar_manu');
const icons = document.querySelector('.navbar_icons');

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
})