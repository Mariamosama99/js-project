var cartproduct = localStorage.getItem('cart');  // string
if (cartproduct) {
  var product = JSON.parse(cartproduct);   // from string to obj
  var card = document.getElementById('cartitem');
  card.innerHTML = "";
  for (var i = 0; i < product.length; i++) {
    card.innerHTML += `
      <div class="card" id="${product[i].id}">
        <img src="${product[i].image}" alt="${product[i].title}">
        <h3>${product[i].title}</h3>
        <p>${product[i].price}</p>
        <button class="removebtn" onclick="removeItem(${product[i].id})">Remove from Cart</button>
      </div>
    `;
  }
}

function removeItem(id) {
  // Remove item from local storage
  var cart = JSON.parse(localStorage.getItem('cart'));
  var updatedCart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
// store all item which id not equal sellected id

  // Remove item from UI
  var card = document.getElementById(id);
  if (card) {
    card.remove();
  }
  if (updatedCart.length == 0) {
    // var h1 = document.createElement("div");
    var cartElement = document.getElementById('cartitem');
    cartElement.innerHTML = `<div id="cartitem"><h1>Your cart is empty</h1></div>`;
    document.body.appendChild(h1);
  }
}