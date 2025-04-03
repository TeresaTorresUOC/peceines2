import './styles.css';

console.log('El meu projecte està funcionant!');
//index

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.newsletter-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        alert('Gràcies per subscriure\'t! Rebràs les últimes novetats de la cuina asiàtica al teu correu.');

        form.reset(); 
    });
});

//detall

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('experience-form');
    const messageDiv = document.getElementById('form-message');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();  

      
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const experiencia = document.getElementById('experiencia').value;
        const image = document.getElementById('image').files[0];  
        const video = document.getElementById('video').files[0];  

    
        if (!nom || !email || !experiencia || !image) {
            messageDiv.textContent = "Tots els camps són obligatoris, excepte el vídeo!";
            messageDiv.style.color = 'red';
        } else {
            
            messageDiv.textContent = `Gràcies per compartir la teva experiència, ${nom}! Hem rebut la teva informació.`;
            messageDiv.style.color = 'black';

        }

       
        form.reset();
    });
});
