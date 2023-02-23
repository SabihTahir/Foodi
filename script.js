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

const allBtn = document.querySelector('.all');
const fastfoodbtn = document.querySelector('.fast_food');
const desifoodbtn = document.querySelector('.desi_food');
const fastFoodcart = document.querySelector('.fastFood');
const desiFoodcart = document.querySelector('.desiFood');

fastfoodbtn.addEventListener('click', () => {
    desiFoodcart.classList.add('hidden');
    fastFoodcart.classList.remove('hidden');
});
desifoodbtn.addEventListener('click', () => {
    fastFoodcart.classList.add('hidden');
    desiFoodcart.classList.remove('hidden');
});
allBtn.addEventListener('click', () => {
    desiFoodcart.classList.remove('hidden');
    fastFoodcart.classList.remove('hidden');
});