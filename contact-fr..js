document.getElementById('contact-form').addEventListener('submit', function(event) {
    var contactPreference = document.getElementById('contact-preference').value;
    
    if (contactPreference === 'option') {
        event.preventDefault(); // Empêche l'envoi du formulaire
        alert('Vous avez choisi(e) aucune option possible. Le formulaire ne peut pas être envoyé.');
    }
});
