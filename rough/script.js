// Get references to the links and sections
const exercise1Link = document.getElementById('exercise1-link');
const exercise2Link = document.getElementById('exercise2-link');
const colorSliderSection = document.getElementById('color-slider');
const pictureChooserSection = document.getElementById('picture-chooser');
const redSlider = document.getElementById('red-slider');
const colorBox = document.getElementById('color-box');
const mainBox = document.querySelector('.main-box');

// Toggle menu items and change arrow direction
const menuToggle = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', function() {
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';  // Show the menu items
        menuToggle.innerHTML = '&#9650;';  // Change arrow to up
    } else {
        menuItems.style.display = 'none';  // Hide the menu items
        menuToggle.innerHTML = '&#9660;';  // Change arrow to down
    }
});

// Event listener for Exercise 1 (Color Slider)
exercise1Link.addEventListener('click', function() {
    colorSliderSection.style.display = 'block';  // Show Color Slider
    pictureChooserSection.style.display = 'none';  // Hide Picture Chooser
    mainBox.style.backgroundColor = '#000';  // Reset to black for Exercise 1
    mainBox.style.color = '#fff';  // Reset font color to white
});

// Event listener for Exercise 2 (Picture Chooser)
exercise2Link.addEventListener('click', function() {
    colorSliderSection.style.display = 'none';  // Hide Color Slider
    pictureChooserSection.style.display = 'block';  // Show Picture Chooser

    // Change the background color and font color for Exercise 2
    mainBox.style.backgroundColor = 'rgb(232, 232, 159)';  // Set background to rgb(232, 232, 159)
    mainBox.style.color = 'rgb(58, 192, 158)';  // Set font color to rgb(58, 192, 158)
});

// Change background color and update message based on slider value
redSlider.addEventListener('input', function() {
    const redValue = this.value;
    const greenValue = 0; // Fixed green value
    const blueValue = 0; // Fixed blue value

    // Set the background color of the color box
    colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Change the main box color based on RGB values
    mainBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Update the message based on the red value
    const colorMessage = document.getElementById('color-message');
    if (redValue < 85) {
        colorMessage.textContent = "The color is quite dark!";
    } else if (redValue < 170) {
        colorMessage.textContent = "It's getting brighter!";
    } else {
        colorMessage.textContent = "Wow! That's a bright red!";
    }
});

// Handle picture choosing
const pictureButtons = document.querySelectorAll('.picture-button');
const chosenPicture = document.getElementById('chosen-picture');

pictureButtons.forEach(button => {
    button.addEventListener('click', function() {
        const size = this.getAttribute('data-size');
        let imgSize;

        switch(size) {
            case 'small':
                imgSize = '200'; // Small image size
                break;
            case 'medium':
                imgSize = '400'; // Medium image size
                break;
            case 'large':
                imgSize = '600'; // Large image size (slightly larger than medium)
                break;
        }

        chosenPicture.src = `https://picsum.photos/${imgSize}`;
        chosenPicture.style.display = 'block'; // Show chosen picture
    });
});