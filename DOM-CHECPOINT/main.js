let openShopping = document.getElementById('shoppingBag');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total')
let quantity = document.getElementById('quantity')
let card = document.querySelector('.card')

openShopping.addEventListener('click',()=>{
    card.classList.toggle('active');
})

closeShopping.addEventListener('click',()=>{
    card.classList.toggle('active');
})