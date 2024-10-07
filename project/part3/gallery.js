let slideIndex = 0;
showSlides();

// Function to show slides
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide
    }
    slides[slideIndex - 1].style.display = "block"; // Show current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

// Function to change slides
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to first slide
    }
    if (slideIndex < 1) {
        slideIndex = slides.length; // Go to last slide
    }
    showSlides();
}
