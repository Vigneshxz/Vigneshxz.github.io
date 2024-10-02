// Function to display title and description when an image is clicked
window.onload = () => {
    const images = document.querySelectorAll('.image-container img'); // Get all images inside the container

    images.forEach(image => {
        image.addEventListener('click', () => {
            // Get the title and description from the data attributes
            const title = image.getAttribute('data-title');
            const description = image.getAttribute('data-description');

            // Display the title and description in the designated areas
            document.getElementById('title').textContent = title;
            document.getElementById('desc').textContent = description;
        });
    });
};
