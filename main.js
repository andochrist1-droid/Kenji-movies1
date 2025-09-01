// On sélectionne les éléments HTML dont on a besoin
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cards = document.querySelectorAll('.card');

// On écoute l'événement sur le bouton et le champ de recherche
searchButton.addEventListener('click', filterCards);
searchInput.addEventListener('keyup', filterCards);

function filterCards() {
    const searchTerm = searchInput.value.toLowerCase(); // On récupère le texte et on le met en minuscules

    cards.forEach(card => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        
        if (cardTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Affiche la carte si le titre correspond
        } else {
            card.style.display = 'none'; // Cache la carte si le titre ne correspond pas
        }
    });
}