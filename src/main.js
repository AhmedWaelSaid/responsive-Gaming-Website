const Hamburger = document.getElementById('Hamburger');
const closebtn = document.getElementById('closebtn');
const navmenu= document.getElementById('nav-menu');
const navlink = document.querySelectorAll(".nav-link")
Hamburger.addEventListener('click', () => {
    navmenu.classList.remove('hidden');
});
closebtn.addEventListener('click', () => {
    navmenu.classList.add('hidden');
});
navlink.forEach(item => {
    item.addEventListener('click', () => {
        navmenu.classList.add('hidden');
    });
});
