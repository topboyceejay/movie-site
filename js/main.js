'use strict';

const header = document.querySelector('header');
const nav = document.querySelector('nav');
const navbarMenubtn = document.querySelector('.navbar-menu-btn');

const navabarForm = document.querySelector('.navbar-form');
const navbarFormCloseBtn= document.querySelector('.navbar-form-close');
const navbarSearchBtn = document.querySelector('.navbar-search-btn');

function navIsActive(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
    navbarMenubtn.classList.toggle('active');
}

navbarMenubtn.addEventListener('click', navIsActive);

const searchBarIsActive = () => navabarForm.classList.toggle('active');

navbarSearchBtn.addEventListener('click', searchBarIsActive);
navbarFormCloseBtn.addEventListener('click', searchBarIsActive);