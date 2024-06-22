document.addEventListener("DOMContentLoaded", () => {
  fetchPizzas();
});

async function fetchPizzas() {
  try {
    const response = await fetch("/api/pizza");
    const pizzas = await response.json();
    const tableBody = document.querySelector("#pizzaTable tbody");
    tableBody.innerHTML = "";
    pizzas.forEach((pizza) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${pizza.Nombre}</td>
                <td>${pizza.Descripcion}</td>
                <td>${pizza.Precio}</td>
                <td>${pizza.tamanio_id}</td>
                <td>
                    <button onclick="window.location.href='../modificar-pizza/modificar-pizza.html?id=${pizza.idPizza}'">
                        Editar
                    </button>
                </td>
            `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching pizzas:", error);
  }
}
