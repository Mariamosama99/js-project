var products = [
  {
    id: 1,
    title: 'opinion glasses 1',
    price: '$50',
    image: 'g1.jpg'
  },
  {
    id: 2,
    title: 'opinion glasses 2',
    price: '$60',
    image: 'g2.jpg'
  },
  {
    id: 3,
    title: 'opinion glasses',
    price: '$70',
    image: 'g3.jpg'
  },
  {
    id: 4,
    title: 'Sun Glasses',
    price: '$80',
    image: 's0.jpg'
  },
  {
    id: 5,
    title: 'Sun Glasses 5',
    price: '$90',
    image: 's2.jpg'
  },
  {
    id: 6,
    title: 'Sun Glasses 6',
    price: '$100',
    image: 's3.jpg'
  },
  {
    id: 7,
    title: 'Sun Glasses 7',
    price: '$110',
    image: 's4.jpg'
  },
  {
    id: 8,
    title: 'Sun Glasses 8',
    price: '$120',
    image: 's5.jpg'
  },
  {
    id: 9,
    title: 'Sun Glasses 9',
    price: '$130',
    image: 's7.jpg'
  }
];
// 
let logname =localStorage.getItem('username');
let log = document.getElementById("log");
if(logname){
  log.innerHTML=""
  log.innerHTML=`<li><a href="sign_up.html">${logname}</a></li>
  ` 
}

// home
var card = document.getElementById('item');
for (var i = 0; i < products.length; i++) {
  card.innerHTML += `
      <div class="card">
        <img src="${products[i].image}" alt="${products[i].title}">
    <div class="card-content">
        <h3>${products[i].title}</h3>
        <p>${products[i].price}</p>
        <button id="addbtn" onclick="add(${products[i].id - 1})">Add to Cart</button>
      </div>
      </div>
    `;
}

// add to cart
var cart = [];
function add(index) {
  if (localStorage.getItem('username')) {
    cart.push(products[index]);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else { open("sign_up.html"); }
}

// search
function search() {
  var text = document.getElementById('search').value
  var searchitem = document.getElementById('item');
  searchitem.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    if (products[i].title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
      searchitem.innerHTML += `
    <div class="card">
      <img src="${products[i].image}" alt="${products[i].title}">
  <div class="card-content">
      <h3>${products[i].title}</h3>
      <p>${products[i].price}</p>
      <button id="addbtn" onclick="add(${products[i].id - 1})">Add to Cart</button>
    </div>
    </div>
    `;
    }
  }

}

// filter
var filter = document.getElementById('filter');
filter.addEventListener('change', filterProducts);

function filterProducts() {
  var searchText = filter.value.toLowerCase();
  var cardContainer = document.getElementById('item');
  cardContainer.innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    var title = products[i].title.toLowerCase();
    if (title.indexOf(searchText) !== -1 || searchText === "all") {
      cardContainer.innerHTML += `
      <div class="card">
        <img src="${products[i].image}" alt="${products[i].title}">
    <div class="card-content">
        <h3>${products[i].title}</h3>
        <p>${products[i].price}</p>
        <button id="addbtn" onclick="add(${products[i].id - 1})">Add to Cart</button>
      </div>
      </div>
      `;
    }
  }
}