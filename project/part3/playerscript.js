document.querySelectorAll('.player').forEach(player => {
    player.addEventListener('click', () => {
        // Toggle the 'player-expanded' class to expand/collapse player details
        player.classList.toggle('player-expanded');
    });
});
