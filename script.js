    // Hacer la solicitud GET a la API
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
      // Obtener el elemento donde se mostrarán los productos
      const productList = document.getElementById('product-list');

      // Recorrer los productos y crear los elementos HTML
      data.forEach(product => {
        // Crear un div para cada producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Crear los elementos para mostrar la información del producto
        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;

        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price}`;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;

        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${product.category.name}`;

        const categoryImageElement = document.createElement('img');
        categoryImageElement.src = product.category.image;
        categoryImageElement.alt = `${product.category.name} Category Image`;
        categoryImageElement.classList.add('product-image');

        const imagesElement = document.createElement('div');
        product.images.forEach(image => {
          const imageElement = document.createElement('img');
          imageElement.src = image;
          imageElement.alt = 'Product Image';
          imageElement.classList.add('product-image');
          imagesElement.appendChild(imageElement);
        });

        // Agregar los elementos al div del producto
        productDiv.appendChild(titleElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);
        productDiv.appendChild(categoryElement);
        productDiv.appendChild(categoryImageElement);
        productDiv.appendChild(imagesElement);

        // Agregar el div del producto a la lista de productos
        productList.appendChild(productDiv);
      });
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
    });
    
    // Función para crear un nuevo producto (POST)
function createProduct(newProduct) {
    fetch('https://api.escuelajs.co/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nuevo producto creado:', data);
      // Agregar el nuevo producto a la lista de productos
      addProductToList(data);
    })
    .catch(error => {
      console.error('Hubo un problema al crear el producto:', error);
    });
  }
  

  // Función para agregar un producto a la lista de productos
  function addProductToList(product) {
    // Obtener el elemento donde se mostrarán los productos
    const productList = document.getElementById('product-list');
  
    // Crear un div para el nuevo producto
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
  
    // Crear los elementos para mostrar la información del producto
    const titleElement = document.createElement('h2');
    titleElement.textContent = product.title;
  
    const priceElement = document.createElement('p');
    priceElement.textContent = `Price: $${product.price}`;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = product.description;
  
    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${product.category.name}`;
  
    const categoryImageElement = document.createElement('img');
    categoryImageElement.src = product.category.image;
    categoryImageElement.alt = `${product.category.name} Category Image`;
    categoryImageElement.classList.add('product-image');
  
    const imagesElement = document.createElement('div');
    product.images.forEach(image => {
      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = 'Product Image';
      imageElement.classList.add('product-image');
      imagesElement.appendChild(imageElement);
    });
  
    // Agregar los elementos al div del producto
    productDiv.appendChild(titleElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(categoryElement);
    productDiv.appendChild(categoryImageElement);
    productDiv.appendChild(imagesElement);
  
    // Agregar el div del producto a la lista de productos
    productList.appendChild(productDiv);
  }
  
  
  
  // Hacer la solicitud GET a la API
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
      // Obtener el elemento donde se mostrarán los productos
      const productList = document.getElementById('product-list');
  
      // Recorrer los productos y crear los elementos HTML
      data.forEach(product => {
        // Crear un div para cada producto
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.dataset.id = product.id; // Agregar el ID del producto al div
  
        // Crear los elementos para mostrar la información del producto
        const titleElement = document.createElement('h2');
        titleElement.textContent = product.title;
  
        const priceElement = document.createElement('p');
        priceElement.textContent = `Price: $${product.price}`;
  
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = product.description;
  
        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${product.category.name}`;
  
        const categoryImageElement = document.createElement('img');
        categoryImageElement.src = product.category.image;
        categoryImageElement.alt = `${product.category.name} Category Image`;
        categoryImageElement.classList.add('product-image');
  
        const imagesElement = document.createElement('div');
        product.images.forEach(image => {
          const imageElement = document.createElement('img');
          imageElement.src = image;
          imageElement.alt = 'Product Image';
          imageElement.classList.add('product-image');
          imagesElement.appendChild(imageElement);
        });
  
        // Agregar los elementos al div del producto
        productDiv.appendChild(titleElement);
        productDiv.appendChild(priceElement);
        productDiv.appendChild(descriptionElement);
        productDiv.appendChild(categoryElement);
        productDiv.appendChild(categoryImageElement);
        productDiv.appendChild(imagesElement);
  
        // Agregar el div del producto a la lista de productos
        productList.appendChild(productDiv);
      });
    })
    .catch(error => {
      console.error('Hubo un problema con la solicitud fetch:', error);
    });
  
  // Ejemplo de uso de las funciones de POST y PUT
  // Crear un nuevo producto
  const newProduct = {
    title: "CONTROL",
    price: 200,
    description: "Descripción del nuevo producto",
    categoryId: 2,
    images: ["https://placeimg.com/640/480/any"]
  };
  createProduct(newProduct);

  const form = document.getElementById('product-form');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = {
        title: form.elements.title.value,
        price: parseFloat(form.elements.price.value),
        description: form.elements.description.value,
        categoryId: parseInt(form.elements.categoryId.value),
        categoryName: form.elements.categoryName.value,
        categoryImage: form.elements.categoryImage.value,
        images: form.elements.images.value.split(', ')
      };
     
      console.log('Formulario enviado:', formData);
    });
  
    
