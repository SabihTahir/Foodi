'use strict';

const mobileBtn = document.querySelector('.mobile_btn');
const MobileMenu = document.querySelector('.mobile_menu');

mobileBtn.addEventListener('click', () => {
    MobileMenu.classList.toggle('hidden');
    mobileBtn.classList.toggle('fa-times')
});

const createDishBtn = document.querySelector('.create_btn');
const closebtnmodal = document.querySelector('.close_btn');
const carmodal = document.querySelector('.Add_cart_modal');

createDishBtn.addEventListener('click', () => {
    carmodal.classList.toggle('hidden');
});
closebtnmodal.addEventListener('click', () => {
    carmodal.classList.toggle('hidden');
});