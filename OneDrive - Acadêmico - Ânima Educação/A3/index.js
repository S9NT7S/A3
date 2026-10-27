const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

function toggleMenu(){
    menu.classList.toggle('ativo');
}

btnMenu.addEventListener('click', toggleMenu);