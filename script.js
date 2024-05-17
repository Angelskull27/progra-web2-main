    
// Hacer la solicitud GET a la API
fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(data => {

data.map((item) => {


let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string


let imageNoGarbage = imageStringify


.substring(2, imageStringify.length - 2)


.replaceAll('\\', ' ')


.replaceAll('""', '"')


.replaceAll('" "', '"')


.replaceAll(' ', '');


try {


item.images = JSON.parse(imageNoGarbage);


item.imagesActual = item.images[0];


} catch (e) {}


});
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

    // Crear botones para editar y eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editButton.dataset.productId = product.id;
      const productId = event.target.dataset.productId;
      const newTitle = 'Tulio';
      const newPrice = 300; // Precio actualizado
      
      // Crear un objeto con los datos actualizados
      const updatedProduct = {
        title: newTitle,
        price: newPrice,
      };
      
      // Enviar la solicitud de actualización a la API
      fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      })
      .then(response => {
        if (response.ok) {
          console.log('Producto actualizado exitosamente');
        } else {
          console.error('Error al actualizar el producto:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      console.log(`Editar producto: ${product.id}`);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      deleteButton.dataset.productId = product.id;
      const productId = event.target.dataset.productId;
      fetch(`https://api.escuelajs.co/api/v1/products/${productId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
.then(response => {
  if (response.ok) {
    console.log('Producto eliminado exitosamente');
  } else {
    console.error('Error al eliminar el producto:', response.statusText);
  }
})
.catch((error) => {
  console.error('Error:', error);
});
      console.log(`Eliminar producto: ${product.id}`);
    });

    // Agregar los elementos al div del producto
    productDiv.appendChild(titleElement);
    productDiv.appendChild(priceElement);
    productDiv.appendChild(descriptionElement);
    productDiv.appendChild(categoryElement);
    productDiv.appendChild(categoryImageElement);
    productDiv.appendChild(imagesElement);
    productDiv.appendChild(editButton);
    productDiv.appendChild(deleteButton);

    // Agregar el div del producto a la lista de productos
    productList.appendChild(productDiv);
  });
})
.catch(error => {
  console.error('Hubo un problema con la solicitud fetch:', error);
})


  
  // Ejemplo de uso de las funcion de POST
  // Crear un nuevo producto
  document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('product-form').addEventListener('submit', function(event) {
      event.preventDefault();
    
      const title = document.getElementById('title').value;
      const price = document.getElementById('price').value;
      const description = document.getElementById('description').value;
      const categoryId = document.getElementById('category').value;
      const images = document.getElementById('image').value;
    
      const product = {
        title: title,
        price: price,
        description: description,
        categoryId: categoryId,
        images: [images]
      };
    
      // Enviar el producto a la API
      fetch('https://api.escuelajs.co/api/v1/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Producto creado:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
  
    
