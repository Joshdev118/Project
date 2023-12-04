const img1 = document.getElementById("seb1");
const img2 = document.getElementById("seb2");
const img3 = document.getElementById("seb3");

let slide = 0;
const maxSlide = 2;

function nextSlide(num) {
    const slides = document.getElementsByClassName("img-seb");
    slides[slide].style.display = "none";
    slide = slide + num;
    if (slide > 2) {
        slide = 0;
    }else if (slide < 0) {
        slide = 2;
    }
    slides[slide].style.display = "block";
}






