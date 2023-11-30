// Obtenez tous les boutons "Demander un devis"
const buttons = document.querySelectorAll('.lien');

// Écoutez le clic sur chaque bouton
buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Empêche le comportement par défaut du lien

        // Obtenez le titre et la description du service correspondant
        const serviceName = document.querySelectorAll('.servi h3')[index].textContent;
        const serviceDescription = document.querySelectorAll('.servi p')[index].textContent;

        // Remplissez les champs du formulaire avec les données du service
        document.querySelector('#service-name').value = serviceName;
        document.querySelector('#service-description').value = serviceDescription;

        // Affichez le formulaire de demande de devis
        document.querySelector('#devis-form').style.display = 'block';
    });
});

// Écoutez le soumission du formulaire
document.querySelector('#devis-form form').addEventListener('submit', (e) => {
    e.preventDefault();

    // Traitez ici l'envoi du formulaire, par exemple, en l'envoyant à un backend pour traitement.

    // Réinitialisez les champs du formulaire après l'envoi
    document.querySelector('#service-name').value = '';
    document.querySelector('#service-description').value = '';

    // Masquez le formulaire de demande de devis
    document.querySelector('#devis-form').style.display = 'none';
});