document.addEventListener('DOMContentLoaded', function () {
    const commentBox = document.getElementById('comment-box');
    const submitButton = document.getElementById('submit-comment');
    
    // Function to add a new comment
    function addComment(username, text, timestamp) {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.innerHTML = `
        <h4>${username}</h4>
        <p>${text}</p>
        <span class="timestamp">${timestamp}</span>
      `;
      commentBox.appendChild(commentDiv);
    }
  
    // Function to get current timestamp
    function getCurrentTimestamp() {
      const date = new Date();
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }
  
    // Add user comment on click
    submitButton.addEventListener('click', function () {
      const userComment = document.getElementById('user-comment').value;
      if (userComment.trim() !== '') {
        addComment('User', userComment, getCurrentTimestamp());
        document.getElementById('user-comment').value = ''; // Clear textarea
      }
    });
  
    // Automatically generate the "Good Morning Madridista" message at 6:00 a.m.
    function generateMorningMessage() {
      const now = new Date();
      const morningMessage = 'Good morning Madridista, HALA MADRID';
      const morningTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0, 0);
      
      // If the current time is past 6:00 AM, generate the message for today
      if (now > morningTime) {
        addComment('Server', morningMessage, '6:00 AM');
      }
  
      // Set up the interval to post the message every day at 6:00 AM
      const timeUntilMorning = morningTime - now > 0 ? morningTime - now : 24 * 60 * 60 * 1000 - (now - morningTime);
      setTimeout(function () {
        addComment('Server', morningMessage, '6:00 AM');
        setInterval(function () {
          addComment('Server', morningMessage, '6:00 AM');
        }, 24 * 60 * 60 * 1000); // 24 hours interval
      }, timeUntilMorning);
    }
  
    // Load the morning message if applicable
    generateMorningMessage();
  });
  