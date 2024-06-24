document.addEventListener("DOMContentLoaded", async () => {
  const pizzaTableBody = document.querySelector("#pizzaTable tbody");

  async function obtenerPizzas() {
    const response = await fetch("/api/pizza");
    const pizzas = await response.json();

    pizzas.forEach((pizza) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                  <td class="crud-tabla-td">${pizza.Nombre}</td>
                  <td class="crud-tabla-td">${pizza.Descripcion}</td>
                  <td class="crud-tabla-td">${pizza.Precio}</td>
                  <td class="crud-tabla-td">${obtenerMedidaConID(
                    pizza.tamanio_id
                  )}</td>
                  <td class="crud-tabla-td">
                      <button class="table-btn" id="eliminar-btn" data-id="${
                        pizza.idPizza
                      }">Eliminar</button>
                  </td>
              `;
      pizzaTableBody.appendChild(row);
    });

    document.querySelectorAll("#eliminar-btn").forEach((button) => {
      button.addEventListener("click", async (e) => {
        const pizzaId = e.target.getAttribute("data-id");
        if (confirm(`¿Estás seguro de que deseas eliminar la pizza?`)) {
          await deletePizza(pizzaId);
        }
      });
    });
  }

  async function deletePizza(pizzaId) {
    const response = await fetch(`/api/pizza/${pizzaId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorData = await response.json();
      alert(`Error al eliminar pizza: ${errorData.message}`);
    } else {
      alert("Pizza eliminada con éxito");
      location.reload();
    }
  }

  function obtenerMedidaConID(tamanio_id) {
    switch (tamanio_id) {
      case 1:
        return "Pequeña";
      case 2:
        return "Mediana";
      case 3:
        return "Grande";
      case 4:
        return "Slice";
      default:
        return "Desconocido";
    }
  }

  obtenerPizzas();
});
