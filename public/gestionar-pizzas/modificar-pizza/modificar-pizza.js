document.addEventListener("DOMContentLoaded", async function () {
  const pizzaId = obtenerParametroUrl("id");

  try {
    const response = await fetch(`http://localhost:3000/api/pizza/${pizzaId}`);
    if (!response.ok) {
      throw new Error("No se pudo obtener la pizza");
    }

    const pizzas = await response.json();

    pizza = pizzas[0];

    document.getElementById("nombre").value = pizza.Nombre;
    document.getElementById("descripcion").value = pizza.Descripcion;
    document.getElementById("precio").value = parseFloat(pizza.Precio);

    // Seleccionar el tamaño correspondiente
    document.querySelector(
      `input[name="tamanio_id"][value="${pizza.tamanio_id}"]`
    ).checked = true;
  } catch (error) {
    console.error("Error al cargar los datos de la pizza:", error.message);
  }
});

async function guardarModificacion() {
  const pizzaId = obtenerParametroUrl("id");
  const data = {
    Nombre: document.getElementById("nombre").value,
    Descripcion: document.getElementById("descripcion").value,
    Precio: parseFloat(document.getElementById("precio").value),
    tamanio_id: parseInt(
      document.querySelector('input[name="tamanio_id"]:checked').value
    ),
  };

  try {
    const response = await fetch(`http://localhost:3000/api/pizza/${pizzaId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error al modificar la pizza");
    }

    alert("Pizza modificada exitosamente");
    window.location.href = "../ver-pizzas/ver-pizzas.html";
  } catch (error) {
    console.error(
      "Error al guardar la modificación de la pizza:",
      error.message
    );
    alert("Error al modificar la pizza");
  }
}

function cancelarModificacion(){
  window.location.href = "../ver-pizzas/ver-pizzas.html";
}

function obtenerParametroUrl(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}
