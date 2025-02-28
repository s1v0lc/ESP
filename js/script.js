/* Script App Multi ESP */
/* Auteur: Clovis Gauthier */
/* Session hiver 2025 */

// Sélectionne les éléments du DOM
let icone = document.querySelector('.bouton');
let checkbox = document.getElementById('checkbox');

// Décoche le checkbox pour desktop
window.addEventListener('resize', function () {
    // Si la taille de la page est supérieure à 768px, décocher le checkbox
    if (window.innerWidth >= 768) {
        checkbox.checked = false;
        icone.classList.remove('tourne');
    }
});

// Décoche le checkbox quand on clique sur les liens
document.querySelectorAll('.lien').forEach(lien => {
    lien.addEventListener('click', function () {
        // Décoche le checkbox lorsque le lien est cliqué
        checkbox.checked = false;  
        icone.classList.remove('tourne');
    });
});

// Ajoute un écouteur d'événements pour surveiller les changements sur le checkbox
checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        // Ajouter la classe si le checkbox est coché
        icone.classList.add('tourne');  
    } else {
        // Retirer la classe si décoché
        icone.classList.remove('tourne');  
    }
});


