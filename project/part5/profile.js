let playersData = [];

// Fetch player data from the JSON file
const fetchPlayers = async () => {
  try {
    const response = await fetch('https://vigneshxz.github.io/json/players.json');
    playersData = await response.json();

    // Initialize click events after fetching data
    assignClickEvents();
  } catch (error) {
    console.error('Error fetching player data:', error);
  }
};

// Function to display the player information in the popup
const showPlayerInfo = (playerName) => {
  const player = playersData.find((p) => p.name === playerName);

  if (player) {
    document.getElementById('popup-title').textContent = player.name;
    document.getElementById('popup-stats').innerHTML = `
      <p><strong>Position:</strong> ${player.position}</p>
      <p><strong>Nationality:</strong> ${player.nationality}</p>
      <img src="https://vigneshxz.github.io/json/${player.img_name}" alt="${player.name}" style="width:100%; border-radius:8px;">
    `;
    document.getElementById('popup').style.display = 'flex';
  } else {
    console.error(`Player "${playerName}" not found.`);
  }
};

// Close the popup
const closePopup = () => {
  document.getElementById('popup').style.display = 'none';
};

// Assign click events to all player boxes
const assignClickEvents = () => {
  const playerBoxes = document.querySelectorAll('.player-box');
  playerBoxes.forEach((box) => {
    const playerName = box.querySelector('p').textContent.trim();
    box.addEventListener('click', () => showPlayerInfo(playerName));
  });
};

// Initialize fetching of players when the page loads
fetchPlayers();
