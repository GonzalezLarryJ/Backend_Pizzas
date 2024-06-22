document
  .getElementById("createPizzaForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const pizza = {
      Imagen:
        "c:/" /* Nota: El back-end pide una imagen, pero por ahora solo pasamos un string */,
      Nombre: document.getElementById("nombre").value,
      Descripcion: document.getElementById("descripcion").value,
      Precio: parseFloat(document.getElementById("precio").value).toFixed(2),
      tamanio_id: parseInt(
        document.querySelector('input[name="tamanio_id"]:checked').value
      ),
    };

    const response = await fetch("/api/pizza", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pizza),
    });

    if (response.ok) {
      alert("Pizza creada con éxito");
      window.location.href = "../ver-pizzas/ver-pizzas.html";
    } else {
      const errorData = await response.json();
      alert(`Error al crear pizza: ${errorData.message}`);
    }
  });

function cancelarModificacion() {
  window.location.href = "../ver-pizzas/ver-pizzas.html";
}
