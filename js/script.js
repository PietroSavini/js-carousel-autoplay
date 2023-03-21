//genero immagini dinamicament
const images = [
    `img/01.jpg`,
    `img/02.jpg`,
    `img/03.jpg`,
    `img/04.jpg`,
    `img/05.jpg`,
]
let thumbnail = "";
let img = "";
const preview = document.querySelector(".carousel-preview");
const imgContainer = document.querySelector(".slides");
for (let i = 0 ; i < images.length ; i++ ){
    const currentImg = images[i];
    img +=
        `<li class="slide"><img src="${currentImg}" alt=""></li>`;
    thumbnail += 
        `
        <div class="img-container">
            <div class="overlay"></div>
            <img src="${currentImg}" alt="">
        </div>
        `;
}

imgContainer.innerHTML = img;
preview.innerHTML += thumbnail;
//gestione carosello
//stato iniziale
let active = 0;
const thumbnailElement = document.getElementsByClassName("img-container")
const sliderElement = document.getElementsByClassName("slide");
sliderElement[active].classList.add("active");
thumbnailElement[active].classList.add("active");
//funzionalità bottoni
const nextBtn = document.querySelector(".next-btn");
nextBtn.addEventListener("click", function() {
    sliderElement[active].classList.remove("active");
    thumbnailElement[active].classList.remove("active");

    if (active < images.length - 1) {
        active++ ;
    }else{
        active = 0;
    }

    sliderElement[active].classList.add("active")
    thumbnailElement[active].classList.add("active")
})

//prev btn
const prevBtn = document.querySelector(".back-btn");
prevBtn.addEventListener("click", function() {
    sliderElement[active].classList.remove("active");
    thumbnailElement[active].classList.remove("active");

    if (active > 0) {
        active-- ;
    }else{
        active = images.length -1;
    }
    sliderElement[active].classList.add("active")
    thumbnailElement[active].classList.add("active")
})

