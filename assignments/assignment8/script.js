document.getElementById('draw-btn').addEventListener('click', () => {
    const starsInput = document.getElementById('stars').value;
    const canvas = document.getElementById('canvas');
    const errorMessage = document.getElementById('error-message');
    const starNumberDisplay = document.getElementById('star-number');
    
    // Clear previous stars and error message
    canvas.innerHTML = '';
    errorMessage.textContent = '';
    starNumberDisplay.style.display = 'none';
    
    let numStars = parseInt(starsInput);
    
    if (isNaN(numStars) || numStars <= 0) {
        errorMessage.textContent = '* Invalid Input';
        return;
    }

    // Draw stars
    for (let i = 1; i <= numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * (canvas.offsetWidth - 20) + 'px';
        star.style.top = Math.random() * (canvas.offsetHeight - 20) + 'px';
        star.dataset.starNumber = i;
        star.addEventListener('click', () => {
            starNumberDisplay.style.display = 'block';
            starNumberDisplay.textContent = 'You clicked on star number: ' + star.dataset.starNumber;
        });
        canvas.appendChild(star);
    }
});

