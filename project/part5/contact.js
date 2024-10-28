document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const formMessage = document.getElementById('form-message');
    const form = event.target;

    // Clear previous messages
    formMessage.textContent = '';

    // Prepare the form data
    const formData = new FormData(form);

    try {
        // Make the request to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        // Handle response
        if (response.ok) {
            const result = await response.json();
            if (result.success) {
                formMessage.textContent = 'Thank you for your message. I will get back to you shortly!';
                formMessage.style.color = 'green';
                form.reset(); // Clear the form
            } else {
                throw new Error(result.message || 'Error sending message.');
            }
        } else {
            throw new Error('Failed to send the message.');
        }
    } catch (error) {
        formMessage.textContent = 'There was an error submitting the form. Please try again.';
        formMessage.style.color = 'red';
    }
});
