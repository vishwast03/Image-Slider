const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;

prevBtn.addEventListener('click', () => {
    counter--;
    carousel();
});

nextBtn.addEventListener('click', () => {
    counter++;
    carousel();
});

function carousel() {

    if(counter < 0) {
        counter = slides.length - 1;
    }
    else if(counter >= slides.length) {
        counter = 0;
    }

    slides.forEach(slide => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}