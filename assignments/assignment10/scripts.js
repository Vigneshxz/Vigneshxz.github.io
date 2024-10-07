// Bird class
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, description, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.description = description;
        this.image = image;
    }
}

// Bird objects
const birds = [
    new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', 'They\'re nicknamed "Hummers"', 'Tiny little colorful birds, that bring joy to everyone :)', 'images/Hummingbird.jpeg'),
    new Bird('Blue Jay', '9-12 inches', '7 years', 'Nuts, seeds, fruits', 'Woodlands', 'Known for intelligence and complex behaviors', 'Bright and intelligent birds.', 'images/bluejay.jpeg'),
    new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, insects', 'Gardens and Woodlands', 'Only the male is bright red', 'The males are more colorful than the females.', 'images/cardinal.jpeg'),
    new Bird('Robin', '10 inches', '2 years', 'Insects, worms, berries', 'Forests, cities', 'Associated with the arrival of spring', 'Often considered a symbol of new beginnings.', 'images/robin.jpeg')
];

// Open modal and display bird info
const openModal = (birdIndex) => {
    const bird = birds[birdIndex];
    document.getElementById('birdName').innerText = bird.name;
    document.getElementById('birdSize').innerText = bird.size;
    document.getElementById('birdLifespan').innerText = bird.lifespan;
    document.getElementById('birdFood').innerText = bird.food;
    document.getElementById('birdHabitat').innerText = bird.habitat;
    document.getElementById('birdFact').innerText = bird.fact;
    document.getElementById('birdDescription').innerText = bird.description;
    document.getElementById('modalBirdImage').src = bird.image;
    
    document.getElementById('birdModal').style.display = 'block';
}

// Close modal
const closeModal = () => {
    document.getElementById('birdModal').style.display = 'none';
}
