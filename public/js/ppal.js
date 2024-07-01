document.addEventListener('DOMContentLoaded', function(){
    async function fetchPizzas(){
        try {
            const nombre = document.getElementById('nombre').value.trim();
            const orden = document.getElementById('orden').value.trim();
            const descripcion = document.getElementById('descripcion').value.trim();
            
            //valores capturados
            console.log('valores capturados: ', {nombre,orden,descripcion});

            //url
            const query = new URLSearchParams({
                nombre, orden, descripcion}).toString();
                console.log('parametro de la URL: ', query);
            
            // solicitud del fetche
            const response = await fetch(`/api/pizza/filtros?${query}`);
            if (!response.ok) {
                console.log('Network response was not ok ' + response.statusText);
                return; // Salir de la función si la respuesta no es ok
            }
             // Verificar el contenido de la respuesta antes de analizarla como JSON
             const responseText = await response.text();
             if (!responseText) {
                 throw new Error('Respuesta vacía de la API');
             }

             const pizzas = JSON.parse(responseText);
             displayPizza(pizzas)

        } catch (error) {
            console.error('Error fetching pizzas:', error);
        }
    }

    function displayPizza(pizzas){
        const pizzaSeccion = document.getElementById('pizzas');
        pizzaSeccion.innerHTML = '';
        pizzas.forEach(element => {
            const pizzaCard = document.createElement('div');
            pizzaCard.classList.add('card');
            pizzaCard.innerHTML = `
                <h3>${element.Nombre}</h3>
                <p>${element.Descripcion}</p>
                <p><strong>Precio:</strong> $ ${element.Precio}</p>
                <img src="${element.Imagen}" alt="${element.Nombre}" width="100%">
                <p class="text-center"><strong>Pizza Sizes</strong></p>
            `;
            pizzaSeccion.appendChild(pizzaCard);
        });
        
    }

     // Asocia el evento submit del formulario para usar fetchTamanios
     document.getElementById('filtroPizzas').addEventListener('submit', function(event) {
        event.preventDefault();
        fetchPizzas();
    });

    fetchPizzas();
})