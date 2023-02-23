'use strict';

const mobileBtn = document.querySelector('.mobile_btn');
const MobileMenu = document.querySelector('.mobile_menu');

mobileBtn.addEventListener('click', () => {
    MobileMenu.classList.toggle('hidden');
    mobileBtn.classList.toggle('fa-times')
});

