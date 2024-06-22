document.addEventListener('DOMContentLoaded', async () => {
    const pizzaTableBody = document.querySelector('#pizzaTable tbody');

    async function fetchPizzas() {
        try {
            const response = await fetch('/api/pizza');
            const pizzas = await response.json();

            pizzas.forEach(pizza => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pizza.idPizza}</td>
                    <td>${pizza.Imagen}</td>
                    <td>${pizza.Nombre}</td>
                    <td>${pizza.Descripcion}</td>
                    <td>${pizza.Precio}</td>
                    <td>${pizza.tamanio_id}</td>
                    <td>
                        <button class="deleteBtn" data-id="${pizza.idPizza}">Eliminar</button>
                    </td>
                `;
                pizzaTableBody.appendChild(row);
            });

            document.querySelectorAll('.deleteBtn').forEach(button => {
                button.addEventListener('click', async (e) => {
                    const pizzaId = e.target.getAttribute('data-id');
                    if (confirm(`¿Estás seguro de que deseas eliminar la pizza?`)) {
                        await deletePizza(pizzaId);
                    }
                });
            });
        } catch (error) {
            console.error('Error al cargar las pizzas:', error);
        }
    }

    async function deletePizza(pizzaId) {
        try {
            const response = await fetch(`/api/pizza/${pizzaId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                const errorData = await response.json();
                alert(`Error al eliminar pizza: ${errorData.message}`);
            } else {
                alert('Pizza eliminada con éxito');
            }
        } catch (error) {
            console.error('Error al eliminar pizza:', error);
            alert('Error al eliminar pizza');
        }
        window.location.href = '../ver-pizzas/ver-pizzas.html';
    }

    fetchPizzas();
});
