"use strict";
$(document).ready(function() {
    
let slideIndex = 1;
let slideTimeout;

showSlides(slideIndex); 

function showSlides(n) {
    clearTimeout(slideTimeout);
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    slides[slideIndex - 1].style.display = "block";
    slideTimeout = setTimeout(function() { showSlides(slideIndex += 1); }, 7000); 
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

const showModal = document.querySelector(".show-modal");

showModal.addEventListener('click', function () {
    const openModal = document.querySelector(".modal");
    openModal.classList.remove("hidden");   
});
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener('click', function () {
    const openModal = document.querySelector(".modal");
    openModal.classList.add("hidden");
});

});
