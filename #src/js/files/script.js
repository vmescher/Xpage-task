let iconMenu = document.querySelector('.icon-menu'), menu = document.querySelector('.menu');

function burgerMenu() {
	iconMenu.classList.toggle('_active');
	menu.classList.toggle('_active');
}

iconMenu.addEventListener('click', burgerMenu)