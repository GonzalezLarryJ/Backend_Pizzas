document.addEventListener('DOMContentLoaded', function () {
    async function fetchTamanios() {
        try {
            const nombre = document.getElementById('nombre').value.trim();
            const orden = document.getElementById('orden').value.trim();
            const descripcion = document.getElementById('descripcion').value.trim();

            // Log para verificar los valores capturados
            console.log('Valores capturados:', { nombre, orden, descripcion });

            // Construcción de la consulta de la URL
            const query = new URLSearchParams({ nombre, orden, descripcion }).toString();
            console.log('Parametros de la URL:', query);

            // Realizar la solicitud fetch a la API
            const response = await fetch(`/api/tamanio/filtros?${query}`);

            if (!response.ok) {
                console.log('Network response was not ok ' + response.statusText);
                return; // Salir de la función si la respuesta no es ok
            }

            // Verificar el contenido de la respuesta antes de analizarla como JSON
            const responseText = await response.text();
            if (!responseText) {
                throw new Error('Respuesta vacía de la API');
            }

            // Convertir la respuesta a JSON
            const tamanios = JSON.parse(responseText);
            displayTamanios(tamanios);
        } catch (error) {
            console.error('Error fetching tamanios:', error);
        }
    }

    // Función para mostrar los tamanios en la página
    function displayTamanios(tamanios) {
        const tamaniosSection = document.getElementById('tamanios');
        tamaniosSection.innerHTML = '';
        tamanios.forEach(tamanio => {
            const tamanioCard = document.createElement('div');
            tamanioCard.classList.add('card');
            tamanioCard.innerHTML = `
                <h3>${tamanio.nombreTam}</h3>
                <p>${tamanio.descripcionTam}</p>
                <p>Diametro: ${tamanio.diametro}</p>
                <img src="${tamanio.imagenTam}" alt="${tamanio.nombreTam}" width="100%">
                <p class="text-center"><strong>Pizza Sizes</strong></p>
            `;
            tamaniosSection.appendChild(tamanioCard);
        });
    }

    // Asocia el evento submit del formulario para usar fetchTamanios
    document.getElementById('filtroForm').addEventListener('submit', function(event) {
        event.preventDefault();
        fetchTamanios();
    });

    // Opcional: cargar los tamanios iniciales sin filtros
    fetchTamanios();
});
