const input = document.getElementById('inputNigga');
const totalPrice=document.getElementById('tPrice');

function check(){
    console.log(input.value)
   newPrice = input.value * 0.5
    totalPrice.innerHTML = "$" + newPrice;
}
input.addEventListener('keyup',check)

