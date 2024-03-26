const apiUrl = 'https://fakestoreapi.com/products';
const productList = document.getElementById('product-list');

// Obtener productos de la API y mostrarlos en la página
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
      `;
      productList.appendChild(productDiv);
    });
  });
// Función para obtener y mostrar todos los productos
function getProducts() {
    fetch('https://fakestoreapi.com/products/1')
    .then(res=>res.json())
    .then(json=>console.log(json))
}
// Función para actualizar un producto por ID

function updateProduct(id, newData) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res=>res.json())
    .then(json=>console.log(json))
}

// Función para eliminar un producto por ID
function deleteProduct(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(json=>console.log("Producto eliminado",json))
}

// Función auxiliar para mostrar un producto en la página
function displayProduct(product) {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
    `;
    productList.appendChild(productDiv);
}
const addProductForm = document.getElementById('add-product-form');

addProductForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productPrice = document.getElementById('product-price').value;

    const data = {
        title: productName,
        price: productPrice
    };

    fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
        console.log(json); // Muestra la respuesta de la API en la consola
        console.log("Producto creado con éxito"); // Muestra un mensaje adicional en la consola
    });
});

// Obtener los productos al cargar la página
getProducts();