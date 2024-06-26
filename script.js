    
    
// Hacer la solicitud GET a la API
fetch('http://localhost:3000/Productos')
.then(response => response.json())
.then(data => {

/*data.map((item) => {


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
 */ // Obtener el elemento donde se mostrarán los productos
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

    const imagesElement = document.createElement('div'); 
      const imageElement = document.createElement('img');
      imageElement.src = product.images;
      imageElement.alt = 'Product Image';
      imageElement.classList.add('product-image');
      imagesElement.appendChild(imageElement);

    // Crear botones para editar y eliminar
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.addEventListener('click', () => {
      editButton.dataset.productId = product.id;
      const productId = event.target.dataset.productId;
      const modal = document.getElementById('modal');
      modal.showModal();
   // Enviar la solicitud de actualización a la API
const form = document.getElementById('modal').querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTitle = document.getElementById('new-title').value;
  const newPrice = document.getElementById('new-price').value;
  const newimages = document.getElementById('new-images').value;
  const newdescription = document.getElementById('new-description').value;
  const updatedProduct = {
    title: newTitle,
    price: newPrice,
    description: newdescription,
    images:  [newimages]
  };
  fetch(`http://localhost:3000/users/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedProduct),
  })
  .then((response) => {
    if (response.ok) {
      console.log('Producto actualizado exitosamente');
    } else {
      console.error('Error al actualizar el producto:', response.statusText);
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  // Cierra la ventana modal
  modal.close();
});

    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => {
      deleteButton.dataset.productId = product.id;
      const productId = event.target.dataset.productId;
      fetch(`http://localhost:3000/user/${productId}`, {
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
      const images = document.getElementById('images').value;
    
      const product = {
        title: title,
        price: price,
        description: description,
        images: [images]
      };
    
      // Enviar el producto a la API
      fetch('http://localhost:3000/user', {
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
  
    

    
