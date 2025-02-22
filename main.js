const elements = document.querySelectorAll('.hidden'); // Selecciona todos los elementos ocultos

function triggerAnimation(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('unset'); 
        } else {
            entry.target.classList.remove('unset');
        }
    });
}

// Configuración del IntersectionObserver
const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};

// Crea el observador
const observer = new IntersectionObserver(triggerAnimation, options);

// Observa cada elemento con la clase .hidden
elements.forEach(el => observer.observe(el));



document.addEventListener('DOMContentLoaded', function() {
    var prevButton = document.querySelector('.prev');
    var nextButton = document.querySelector('.next');
    var gallery = document.querySelector('.photo-gallery');

    if (prevButton && nextButton && gallery) {
        prevButton.addEventListener('click', function() {
            gallery.scrollBy({ left: -300, behavior: 'smooth' });
        });

        nextButton.addEventListener('click', function() {
            gallery.scrollBy({ left: 300, behavior: 'smooth' });
        });
    } else {
        console.error('Error: Elements not found!');
    }
});


//BLOQUEAR EL CLICK DERECHO EN LA PAGINA
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//     });   

///////////////////////////////////////////


///////////////////////////////////////////

function copyURL() {
    // Obtener la URL actual
    const url = window.location.href;

    // Copiar la URL al portapapeles
    navigator.clipboard.writeText(url).then(() => {
        alert('¡URL copiada al portapapeles!');
    }).catch((err) => {
        console.error('Error al copiar la URL: ', err);
    });
}

///////////////////////////////////////////


///////////////////////////////////////////
//FULTRAR FOTOS POR CATEGORIAS/////////////
///////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll('a[data-category]');
    if (categoryLinks.length > 0) { // Solo ejecutar si hay enlaces de categoría
        const photos = document.querySelectorAll('.photo');

        categoryLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const category = this.getAttribute('data-category');

                photos.forEach(photo => {
                    if (photo.getAttribute('data-category') === category) {
                        photo.style.display = 'block';
                    } else {
                        photo.style.display = 'none';
                    }
                });
            });
        });
    } else {
        console.log("No category links found, skipping setup.");
    }
});



////////////////////////////////////////////////////
gsap.to(".social-wrap", {
    y: 10, 
    duration: 1.5, 
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut"
});
