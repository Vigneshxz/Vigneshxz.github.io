async function fetchIceCreams() {
    try {
      const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
      const data = await response.json();
      const gallery = document.getElementById('iceCreamGallery');
  
      data.forEach((iceCream) => {
        const card = document.createElement('div');
        card.classList.add('card');
  
        const img = document.createElement('img');
        img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
  
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.textContent = iceCream.name;
  
        card.appendChild(img);
        card.appendChild(overlay);
        gallery.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching ice creams:', error);
    }
  }
  
  fetchIceCreams();
  