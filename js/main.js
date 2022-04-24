// nav bar show

let navbar = document.querySelector('.navbar');
let hamburger = document.querySelector('.icons .fa-bars');
let closeNav = document.querySelector('.navbar .fa-xmark');
console.log(closeNav);
hamburger.onclick = () => {

    navbar.classList.toggle('active');

}
closeNav.onclick = () => {

    navbar.classList.remove('active');

}
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
let searchIcons = document.querySelector('.search-form .fa-magnifying-glass');
console.log(searchIcons);
searchIcons.onclick = () => {
    searchForm.classList.toggle('active');
}

// for slide image

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length; //length = 3
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// slider shop section
let containerSlide = [...document.querySelectorAll('.products-slider')];
let icremenBtn = [...document.querySelectorAll('.shop i.fa-greater-than')];
let decrementBtn = [...document.querySelectorAll('.shop i.fa-less-than')];
let slide = document.querySelectorAll('.shop .products-slider .slide');
console.log(containerSlide);

containerSlide.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width; 

    icremenBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    decrementBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });


})
