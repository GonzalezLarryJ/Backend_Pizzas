async function fetchTamanios() {
    try {
        const response = await fetch('/api/tamanio');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const tamanios = await response.json();
        displayTamanios(tamanios);
    } catch (error) {
        console.error('Error fetching tamanios:', error);
    }
}

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

fetchTamanios();