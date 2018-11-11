//Seelct DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

//Set Initial Stat of Menu
let showMenu = false;

//Setup Event Listener on menuBtn div
menuBtn.addEventListener('click', togglemenu);

function togglemenu() {
    if (!showMenu) {
        //Run this code if menu is not currently visible
        //Add classes to each element
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        //Add class to each item within the navItems array containing all the .nav-item elements
        navItems.forEach(item => item.classList.add('show'));

        //Set Menu State
        showMenu = true;

    } else {
        //Run this code if menu is currently visible
        //Remove classes from each element
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //Set Menu State
        showMenu = false;
    }
}