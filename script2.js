function checkout(){

if(cart.length === 0){

alert("Panier vide");

return;

}

let total = 0;

cart.forEach(i=>{

total += i.price * i.quantity;

});

// Ton numéro Wave
let waveNumber = "2250708340726";

// Message WhatsApp
let msg =
`🛒 Nouvelle commande TIME LESS STORE

💰 Total : ${total} FCFA

📱 Paiement Wave au numéro :
${waveNumber}

Merci d'envoyer la capture du paiement.`;

// WhatsApp
let wa =
"https://wa.me/2250708340726?text=" +
encodeURIComponent(msg);

// Ouvre WhatsApp
window.open(wa,"_blank");

alert("Commande envoyée sur WhatsApp");

}