let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
};

let search = document.querySelector('.search-form');
let see = document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active'); 
    cart.classList.remove('active');
};


let cart = document.querySelector('.cart-items-container');
let cartItem = document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');
    search.classList.remove('active');
    navbar.classList.remove('active');
};

window.onscroll = () =>{
    search.classList.remove('active');
    navbar.classList.remove('active'); 
    cart.classList.remove('active');
}
