document
  .getElementById("createPizzaForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const pizza = {
      Imagen: "c:/",
      Nombre: document.getElementById("nombre").value,
      Descripcion: document.getElementById("descripcion").value,
      Precio: parseFloat(document.getElementById("precio").value).toFixed(2),
      tamanio_id: parseInt(document.getElementById("tamanio_id").value),
    };

    try {
      const response = await fetch("/api/pizza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pizza),
      });

      if (response.ok) {
        alert("Pizza creada con éxito");
        window.location.href = '../ver-pizzas/ver-pizzas.html';
      } else {
        const errorData = await response.json();
        alert(`Error al crear pizza: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error al crear pizza:", error);
      alert("Error al crear pizza");
    }
  });
