document.addEventListener("DOMContentLoaded", () => {
  obtenerPizzas();
});

async function obtenerPizzas() {
  try {
    const response = await fetch("/api/pizza");
    const pizzas = await response.json();
    const indexContainer = document.getElementById("index-container");
    indexContainer.innerHTML = "";

    pizzas.forEach((pizza) => {
      const card = document.createElement("div");
      card.className = "card";
      card.onclick = () => {
        window.location.href =
          "./view/gestionar-pedidos/crear-pedido/crear-pedido.html";
      };
      card.innerHTML = `
        <img src="./assets/images/pizza.jpg" alt="${pizza.Nombre}" class="pizza-img"/>
        <h2>${pizza.Nombre}</h2>
        <p>${pizza.Descripcion}</p>
        <h4>${pizza.Precio}</h4>
      `;
      indexContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching pizzas: ", error);
  }
}
