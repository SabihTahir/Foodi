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
const foodItems    = document.querySelectorAll('.food-item')

fastfoodbtn.addEventListener('click', () => {
    filterItems('fast-food');
  });
  
  desifoodbtn.addEventListener('click', () => {
    filterItems('desi-food');
  });
  
  allBtn.addEventListener('click', () => {
    filterItems('all');
  });

  function filterItems(category) {
    foodItems.forEach(item => {
      if (category === 'all') {
        item.classList.remove('hidden');
      } else if (item.getAttribute('data-category') !== category) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  }

  const likeBtns = document.querySelectorAll('.like');

  likeBtns.forEach(likeBtn => {
      likeBtn.addEventListener('click', () => {
          likeBtn.classList.toggle('font-bold');
      });
  });
  