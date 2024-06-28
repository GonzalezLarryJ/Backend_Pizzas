document.addEventListener("DOMContentLoaded", () => {
  obtenerPizzas();
});

async function obtenerPizzas() {
  const response = await fetch("/api/pizza");
  const pizzas = await response.json();
  const tableBody = document.querySelector("#pizzaTable tbody");
  tableBody.innerHTML = "";
  pizzas.forEach((pizza) => {
    console.error("pizza: ", pizza);
    const row = document.createElement("tr");
    row.innerHTML = `
                <td class="crud-tabla-td">${pizza.Nombre}</td>
                <td class="crud-tabla-td">${pizza.Descripcion}</td>
                <td class="crud-tabla-td">${pizza.Precio}</td>
            `;
    tableBody.appendChild(row);
  });
}

function obtenerMedidaConID(medidaID) {
  switch (medidaID) {
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
