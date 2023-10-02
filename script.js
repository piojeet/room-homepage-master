const slides = document.querySelectorAll(".slide");
const slides3 = document.querySelectorAll(".slide3");
let container = 0;
const totalSlides = slides.length;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

slides3.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const back = () => {
    if (container > 0) {
        container--;
        slideImage();
        slideImage3();
    }
}

const next = () => {
    if (container < totalSlides - 1) {
        container++;
        slideImage();
        slideImage3();
    }
}

const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${container * 100}%)`;
    });
}
const slideImage3 = () => {
    slides3.forEach((slide) => {
        slide.style.transform = `translateX(-${container * 100}%)`;
    });
}





