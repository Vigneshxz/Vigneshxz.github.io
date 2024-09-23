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

menuToggle.addEventListener('click', () => {
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block'; 
        menuToggle.innerHTML = '&#9650;';  
    } else {
        menuItems.style.display = 'none';  
        menuToggle.innerHTML = '&#9660;';  
    }
});

// Event listener for Exercise 1 (Color Slider)
exercise1Link.addEventListener('click', () => {
    colorSliderSection.style.display = 'block';  
    pictureChooserSection.style.display = 'none';  
    mainBox.style.backgroundColor = '#000';  
    mainBox.style.color = '#fff';  
});

// Event listener for Exercise 2 (Picture Chooser)
exercise2Link.addEventListener('click', () => {
    colorSliderSection.style.display = 'none';  // Hide Color Slider
    pictureChooserSection.style.display = 'block';  // Show Picture Chooser

    // Change the background color and font color for Exercise 2
    mainBox.style.backgroundColor = 'rgb(232, 232, 159)';  
    mainBox.style.color = 'rgb(58, 192, 158)';  
});

// Change background color and update message based on slider value
redSlider.addEventListener('input', () => {
    const redValue = redSlider.value;
    const greenValue = 0; // Fixed green value
    const blueValue = 0; // Fixed blue value

    // Set the background color of the color box
    colorBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

    // Change the main box color based on RGB values
    mainBox.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

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
    button.addEventListener('click', () => {
        const size = button.getAttribute('data-size');
        let imgSize;

        switch(size) {
            case 'small':
                imgSize = '200'; // Small image size
                break;
            case 'medium':
                imgSize = '400'; // Medium image size
                break;
            case 'large':
                imgSize = '600'; // Large image size 
                break;
        }

        chosenPicture.src = `https://picsum.photos/${imgSize}`;
        chosenPicture.style.display = 'block'; 
    });
});
