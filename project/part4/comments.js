// Get DOM elements
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-ul');

// Event listener for form submission
commentForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get the comment text
    const commentText = commentInput.value;

    // Create a new comment element
    const newComment = document.createElement('li');
    newComment.innerHTML = `
        <span>${commentText}</span>
        <span>
            <button class="edit-button">Edit</button>
            <span class="trash-icon" onclick="deleteComment(this)">🗑️</span>
        </span>
    `;

    // Append new comment to the list
    commentsList.appendChild(newComment);

    // Clear the input
    commentInput.value = '';

    // Add event listener for the edit button
    newComment.querySelector('.edit-button').addEventListener('click', function () {
        const commentSpan = newComment.querySelector('span');
        if (this.textContent === 'Edit') {
            this.textContent = 'Save';
            commentSpan.contentEditable = true; // Make it editable
            commentSpan.focus(); // Focus on the text area
        } else {
            this.textContent = 'Edit';
            commentSpan.contentEditable = false; // Make it non-editable
        }
    });
});

// Function to delete a comment
function deleteComment(element) {
    const commentItem = element.parentElement.parentElement; // Get the li element
    commentsList.removeChild(commentItem); // Remove the comment
}
