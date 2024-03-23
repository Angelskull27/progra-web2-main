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
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            productList.innerHTML = '';
            data.forEach(product => {
                displayProduct(product);
            });
        });
}

// Función para buscar un producto por título
function searchProduct(title) {
    fetch(`${apiUrl}/search?title=${title}`)
        .then(response => response.json())
        .then(data => {
            productList.innerHTML = '';
            data.forEach(product => {
                displayProduct(product);
            });
        });
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
    .then(response => getProducts());
}

// Función para eliminar un producto por ID
function deleteProduct(id) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    })
    .then(response => getProducts());
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

// Obtener los productos al cargar la página
getProducts();