let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slides');
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset to the first slide
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Start the slideshow
showSlides();
