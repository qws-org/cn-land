const dropdown = document.querySelector('.dropdown');
const button = dropdown.querySelector('.dropdown-button');
const menu = dropdown.querySelector('.dropdown-menu');

let closeTimeout;

const openMenu = () => {
    clearTimeout(closeTimeout);
    dropdown.classList.add('open');
};

const closeMenu = () => {
    closeTimeout = setTimeout(() => {
        dropdown.classList.remove('open');
    }, 300);
};


button.addEventListener('mouseenter', openMenu);
menu.addEventListener('mouseenter', openMenu);

button.addEventListener('mouseleave', closeMenu);
menu.addEventListener('mouseleave', closeMenu);