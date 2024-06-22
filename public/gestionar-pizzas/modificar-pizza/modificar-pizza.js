document.addEventListener('DOMContentLoaded', async function() {
  const pizzaId = obtenerParametroUrl('id');

  try {
      const response = await fetch(`http://localhost:3000/api/pizza/${pizzaId}`);
      if (!response.ok) {
          throw new Error('No se pudo obtener la pizza');
      }

      const pizzas = await response.json();

      if (pizzas.length === 0) {
          throw new Error('No se encontró la pizza con el ID especificado');
      }

      const pizza = pizzas[0];
      document.getElementById('nombre').value = pizza.Nombre;
      document.getElementById('descripcion').value = pizza.Descripcion;
      document.getElementById('precio').value = parseFloat(pizza.Precio);
      document.getElementById('imagen').value = pizza.Imagen;
      document.getElementById('tamanio_id').value = pizza.tamanio_id;
  } catch (error) {
      console.error('Error al cargar los datos de la pizza:', error.message);
  }
});

async function guardarModificacion() {
  const pizzaId = obtenerParametroUrl('id');
  const data = {
      Nombre: document.getElementById('nombre').value,
      Descripcion: document.getElementById('descripcion').value,
      Precio: parseFloat(document.getElementById('precio').value),
      Imagen: document.getElementById('imagen').value,
      tamanio_id: parseInt(document.getElementById('tamanio_id').value)
  };

  try {
      const response = await fetch(`http://localhost:3000/api/pizza/${pizzaId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      });

      if (!response.ok) {
          throw new Error('Error al modificar la pizza');
      }

      console.log('Pizza modificada exitosamente');
  } catch (error) {
      console.error('Error al guardar la modificación de la pizza:', error.message);
  }
}

function obtenerParametroUrl(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}
