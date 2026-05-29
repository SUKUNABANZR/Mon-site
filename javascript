let cart = [];
let isAdmin = false;

let products = [
{
name:'Sneakers',
price:35000,
image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
},

{
name:'Montre',
price:45000,
image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30'
},

{
name:'T-Shirt',
price:15000,
image:'https://images.unsplash.com/photo-1521572267360-ee0c2909d518'
}
];

function renderProducts(){

let c = document.getElementById('products');

c.innerHTML = '';

products.forEach((p,i)=>{

c.innerHTML += `
<div class="card">

<img src="${p.image}">

<div class="card-content">

<h3>${p.name}</h3>

<div class="price">
${p.price} FCFA
</div>

<div class="qty">

<button onclick="dec(this)">-</button>

<span>1</span>

<button onclick="inc(this)">+</button>

</div>

<button class="add-cart"
onclick="addCart('${p.name}',${p.price},'${p.image}',this)">
Ajouter
</button>

${isAdmin ? `
<button class="delete-btn" onclick="del(${i})">
Supprimer
</button>
` : ''}

</div>
</div>
`;

});

}

function inc(b){
b.parentElement.querySelector('span').innerText++;
}

function dec(b){

let s = b.parentElement.querySelector('span');

if(s.innerText > 1){
s.innerText--;
}

}

function addCart(n,p,img,b){

let q = parseInt(
b.parentElement.querySelector('span').innerText
);

cart.push({
name:n,
price:p,
image:img,
quantity:q
});

updateCart();

}

function updateCart(){

let c = document.getElementById('cart-items');

let t = 0;

c.innerHTML = '';

cart.forEach(i=>{

t += i.price * i.quantity;

c.innerHTML += `
<div class="cart-item">

<img src="${i.image}">

<div>
<h4>${i.name}</h4>
<p>${i.quantity} x ${i.price} FCFA</p>
</div>

</div>
`;

});

document.getElementById('total').innerText = t;

document.getElementById('cart-count').innerText = cart.length;

}

function toggleCart(){
document.getElementById('cartPanel')
.classList.toggle('active');
}

function openAdmin(){
document.getElementById('adminPanel').style.display='flex';
}

function closeAdmin(){
document.getElementById('adminPanel').style.display='none';
}

function loginAdmin(){

if(
document.getElementById('adminPassword').value
=== 'TIMELESS2026'
){

isAdmin = true;

alert('Connexion réussie');

renderProducts();

closeAdmin();

}else{

alert('Code incorrect');

}

}

function addProduct(){

let n = document.getElementById('productName').value;

let p = document.getElementById('productPrice').value;

let i = document.getElementById('productImage').value;

products.push({
name:n,
price:p,
image:i
});

renderProducts();

}

function del(i){

products.splice(i,1);

renderProducts();

}

function checkout(){

if(cart.length === 0){

alert("Panier vide");

return;

}

let total = 0;

cart.forEach(i=>{

total += i.price * i.quantity;

});

// Remplace TON_ID par ton vrai ID Wave
let wave =
"https://pay.wave.com/checkout/TON_ID?amount=" + total;

let msg =
`Commande TIME LESS STORE
Total : ${total} FCFA
Merci d'envoyer la capture Wave`;

let wa =
"https://wa.me/2250708340726?text=" +
encodeURIComponent(msg);

window.open(wave,"_blank");

setTimeout(()=>{
window.open(wa,"_blank");
},2000);

alert("Paiement et WhatsApp ouverts");

}

renderProducts();