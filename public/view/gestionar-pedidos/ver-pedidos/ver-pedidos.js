// En factura.js
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // const urlParams = new URLSearchParams(window.location.search);
    // const pedidoId = urlParams.get('id');

    // if (!pedidoId) {
    //   throw new Error('ID del pedido no proporcionado');
    // }

    const response = await fetch(`http://localhost:3000/api/pedido/3`);
    if (!response.ok) {
      throw new Error('Error al obtener los detalles del pedido');
    }

    const pedido = await response.json();
    console.log('Detalles del pedido:', pedido);

    // Construye dinámicamente la vista de la factura con los datos obtenidos del servidor
    const facturaDetails = document.getElementById('facturaDetails');
    facturaDetails.innerHTML = `
      <h2>Factura del Pedido #${pedido.pedido_Id}</h2>
      <p>Cliente: ${pedido.clienteNombre}</p>
      <p>Fecha: ${pedido.fecha}</p>
      <p>Total: $${pedido.total}</p>
      <!-- Agrega más detalles según tu modelo de datos -->
    `;

  } catch (error) {
    console.error('Error:', error);
    // Manejo de errores: muestra un mensaje al usuario o realiza acciones adicionales según sea necesario
  }
});
