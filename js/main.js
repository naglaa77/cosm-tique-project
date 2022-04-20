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
}

let searchForm = document.querySelector('.search-form');
let searchIcons = document.querySelector('.icons .fa-magnifying-glass');

searchIcons.onclick = () => {
    searchForm.classList.toggle('active');
}