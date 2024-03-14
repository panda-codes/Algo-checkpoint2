// correct the code bellow


let openShopping = document.getElementById('shoppingBag');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listcard');
let body = document.querySelector('body');
let total = document.querySelector('.total')
let quantity = document.getElementById('quantity')
let card = document.querySelector('.card')

// functions to toggle shopping cart list
openShopping.addEventListener('click',()=>{
    card.classList.toggle('active');
})

closeShopping.addEventListener('click',()=>{
    card.classList.toggle('active');
})

// product array
let products = [
    {
        id:1,
        name:'PRODUCT NAME 1',
        image:'1.PNG',
        price:3200
    },
    {
        id:2,
        name:'PRODUCT NAME 1',
        image:'2.PNG',
        price:5200
    },
    {
        id:3,
        name:'PRODUCT NAME 1',
        image:'3.PNG',
        price:3750
    },
    {
        id:4,
        name:'PRODUCT NAME 1',
        image:'4.PNG',
        price:3000
    },
    {
        id:5,
        name:'PRODUCT NAME 1',
        image:'5.PNG',
        price:2500
    },
    {
        id:6,
        name:'PRODUCT NAME 1',
        image:'/6.png',
        price:1200
    },
]

let listCards =[];
function initmain(){
    products.forEach((value,key)=>{
        let newDiv= document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML=`
        <img style="border-radius:20px;" src="img/${value.image}"/>
        <div class="title">${value.name}</div>
        <div class="price">₦${value.price.toLocaleString()}</div>
        <button onclick = "addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initmain();
// ask mr yemi to explain this code


function addToCart(key){
    if(listCards[key]==null){
        listCards[key] = products[key];
        listCards[key].quantity=1;
    }
    reloadCart();
}


function reloadCart(){
    listCard.innerHTML = 'werjpowjporjw';
    let count = 0;
    let totalPrice=0;
    listCards.forEach((value,key)=>{
        totalPrice= totalPrice + value.price;
        count = count + value.quantity;
    })
    total.innerHTML = `${totalPrice.toLocaleString()}`;
    quantity.innerText = `${count}`;
}


function increaseQuantity(button) {
    var input = button.parentNode.querySelector('input');
    input.value = parseInt(input.value) + 1;
    updateTotalPrice();
  }

