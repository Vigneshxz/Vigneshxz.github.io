
// JavaScript for Count
let count = 0;
document.getElementById('countColumn').addEventListener('click', function() {
    count++;
    document.getElementById('countDisplay').innerHTML = count;
});


// JavaScript for Random Image
function refreshImage(id) {
    document.getElementById(id).src = 'https://picsum.photos/200?' + new Date().getTime();
}
document.getElementById('randomImage').addEventListener('click', function() {
    refreshImage('randomImage');
});

// JavaScript for Slider
const slider = document.getElementById('slider');
const sliderSquare = document.getElementById('sliderSquare');

// Get the width of the column
const column = document.querySelector('.column');
const columnWidth = column.offsetWidth;

// Subtract the width of the slider-square from the column width
const maxMoveDistance = columnWidth - sliderSquare.offsetWidth;

// Ensure the box starts at the left margin
sliderSquare.style.left = '0px'; 

slider.addEventListener('input', function() {
    const sliderValue = this.value; // Get slider value (0-100)
    // Calculate the new left position for the box, mapping sliderValue to maxMoveDistance
    const moveDistance = (maxMoveDistance * sliderValue) / 100; 
    sliderSquare.style.left = moveDistance + 'px'; // Move the box
});


const mobileSlider = document.getElementById('mobileSlider');
const mobileSliderSquare = document.getElementById('mobileSliderSquare');
mobileSlider.addEventListener('input', function() {
    mobileSliderSquare.style.left = this.value + '%';
});
