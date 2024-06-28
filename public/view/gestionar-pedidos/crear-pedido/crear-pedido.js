const API_URL = "http://localhost:3000/api/pedido/";

const form = document.getElementById("pedidoForm");
const pedidoList = document.getElementById("pedidoList");

async function loadPedidos() {
  try {
    const response = await fetch(API_URL);
    const pedidos = await response.json();

    pedidoList.innerHTML = "";
    pedidos.forEach((pedido) => {
      const pedidoElement = document.createElement("div");
      pedidoElement.classList.add("card");
      pedidoElement.innerHTML = `
        <p><strong>ID:</strong> ${pedido.pedido_Id}</p>
        <p><strong>Fecha:</strong> ${pedido.fecha}</p>
        <p><strong>Cliente:</strong> ${pedido.cliente_nombre}</p>
        <p><strong>Total:</strong> ${pedido.total}</p>
        <button onclick="editPedido(${pedido.pedido_Id})" class="button">Editar</button>
        <button onclick="deletePedido(${pedido.pedido_Id})" class="button" style="background-color: #dc3545;">Eliminar</button>
        <hr>
      `;
      pedidoList.appendChild(pedidoElement);
    });
  } catch (error) {
    console.error("Error al cargar los pedidos:", error);
  }
}

async function submitPedido(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const pedido = {
    fecha: formData.get("fecha"),
    cliente_nombre: formData.get("clienteNombre"),
    telefono: formData.get("telefono"),
    email: formData.get("email"),
    direccion: formData.get("direccion"),
    subTotal: parseFloat(formData.get("subTotal")),
    impuesto: parseFloat(formData.get("impuesto")),
    total: parseFloat(formData.get("total")),
    detalle_pedido_Id: parseInt(formData.get("detallePedidoId")),
  };

  let url = API_URL;
  let method = "POST";
  const pedidoId = formData.get("pedidoId");

  if (pedidoId) {
    url += pedidoId;
    method = "PUT";
  }

  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pedido),
    });

    if (response.ok) {
      form.reset();
      loadPedidos();
    } else {
      console.error("Error al guardar el pedido:", response.statusText);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

async function editPedido(id) {
  try {
    const response = await fetch(API_URL + id);
    const pedido = await response.json();

    form.elements["fecha"].value = pedido.fecha;
    form.elements["clienteNombre"].value = pedido.cliente_nombre;
    form.elements["telefono"].value = pedido.telefono;
    form.elements["email"].value = pedido.email;
    form.elements["direccion"].value = pedido.direccion;
    form.elements["subTotal"].value = pedido.subTotal;
    form.elements["impuesto"].value = pedido.impuesto;
    form.elements["total"].value = pedido.total;
    form.elements["detallePedidoId"].value = pedido.detalle_pedido_Id;

    const submitButton = form.querySelector("#submitButton");
    submitButton.textContent = "Actualizar Pedido";
    submitButton.style.backgroundColor = "#007bff";
    submitButton.removeEventListener("click", submitPedido);
    submitButton.addEventListener("click", function (event) {
      submitPedido(event, id);
    });
  } catch (error) {
    console.error("Error al cargar el pedido para edición:", error);
  }
}

async function deletePedido(id) {
  try {
    const response = await fetch(API_URL + id, {
      method: "DELETE",
    });

    if (response.ok) {
      loadPedidos();
    } else {
      console.error("Error al eliminar el pedido:", response.statusText);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadPedidos();

  form.addEventListener("submit", submitPedido);
});
