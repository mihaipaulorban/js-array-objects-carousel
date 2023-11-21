
//OGGETTI IMMAGINE
const pics = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.jpeg',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.jpeg',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.png',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.jpeg',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

//FUNZIONI
function changePic(target) {

    // Rimuovo la classe active dall'immagine
    galleryFigures[currentActiveIndex].classList.remove('active');
    thumbnailImages[currentActiveIndex].classList.remove('active');

    if (target === 'next') {

        // Vado avanti nell'indice
        currentActiveIndex++;

        // Controllo se sono andato oltre
        if (currentActiveIndex === galleryFigures.length) currentActiveIndex = 0;

    } else if (target === 'prev') {
        // Vado indietro nell'indice
        currentActiveIndex--;

        // Controllo se sono arrivato a valori negativi
        if (currentActiveIndex < 0) currentActiveIndex = galleryFigures.length - 1;
    } else {
        currentActiveIndex = target;
    }
    // Do active al nuovo indice 
    galleryFigures[currentActiveIndex].classList.add('active');
    thumbnailImages[currentActiveIndex].classList.add('active');
}


//PROGRAMMA

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const gallery = document.querySelector('#carousel .gallery');
const thumbGallery = document.querySelector('#thumbnails');

let galleryElements = '';
let thumbnailElements = '';


pics.forEach((pic, i) => {
    const img = `<img src="${pic.image}" alt="games_${i}">`;
    thumbnailElements += img;

    galleryElements += `
        <figure>
           ${img}
           <figcaption>
                <h2>${pic.title}</h2>
                <h3>${pic.text}</h3>
           </figcaption>
        </figure>
     `;
});

gallery.innerHTML = galleryElements;
thumbGallery.innerHTML = thumbnailElements;



const galleryFigures = document.querySelectorAll('.gallery figure');
const thumbnailImages = document.querySelectorAll('#thumbnails img');

//Prima immagine come attiva
let currentActiveIndex = 0;
galleryFigures[currentActiveIndex].classList.add('active');

thumbnailImages[currentActiveIndex].classList.add('active');




next.addEventListener('click', function () {
    changePic('next');
});

prev.addEventListener('click', function () {
    changePic('prev');
});

thumbnailImages.forEach((thumb, i) => {
    thumb.addEventListener('click', function () {
        changePic(i);
    });
});


let autoplayInterval;

// Funzione per avviare l'autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        changePic('next'); 
    }, 3000);
}

// Funzione per fermare l'autoplay
function stopAutoplay() {
     // Interrompe l'intervallo di autoplay
    clearInterval(autoplayInterval);
}

// Avvio dell'autoplay tramite bottone
const autoplayButton = document.getElementById('autoplay');

autoplayButton.addEventListener('click', function () {
    const isAutoplayOn = autoplayButton.classList.toggle('active');

    if (isAutoplayOn) {
         // Avvia l'autoplay se il pulsante è attivo
        startAutoplay();
    } else {
         // Altrimenti, ferma l'autoplay
        stopAutoplay();
    }
});
