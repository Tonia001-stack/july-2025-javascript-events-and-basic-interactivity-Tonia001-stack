// Wait for the entire HTML document to load before running the script.
// This prevents errors from trying to access elements that don't exist yet.
document.addEventListener('DOMContentLoaded', () => {

    
       //Event Handling & Interactive Feature 1:
       //Dynamic Content Change

    // Get the button and the paragraph elements from the HTML
    const changeTextBtn = document.getElementById('change-text-btn');
    const messageText = document.getElementById('message-text');

    // Add an event listener to the button.
    // 'click' is the event type we are listening for.
    changeTextBtn.addEventListener('click', () => {
        // This code runs when the button is clicked.
        messageText.textContent = "The text has been successfully changed by JavaScript!";
    });



       //Interactive Feature 2:
      // Show/Hide Content

    // Get the button and the content container from the HTML
    const toggleContentBtn = document.getElementById('toggle-content-btn');
    const hiddenContent = document.getElementById('hidden-content');

    // Add a 'click' event listener to the toggle button.
    toggleContentBtn.addEventListener('click', () => {
        // The toggle() method checks if the 'hidden' class exists on the element.
        // If it exists, it removes it (making the element visible).
        // If it doesn't exist, it adds it (making the element hidden).
        hiddenContent.classList.toggle('hidden');
    });



       //CUSTOM FORM VALIDATION.

    // Get the form and all its related elements
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Add a 'submit' event listener to the form.
    // This event fires when the user clicks the submit button.
    form.addEventListener('submit', (event) => {
        // Prevent the form from submitting normally.
        // This is crucial for custom validation, as it stops the page from refreshing.
        event.preventDefault();

        // Reset all error messages and styles before re-validating.
        emailError.textContent = '';
        passwordError.textContent = '';
        emailInput.classList.remove('invalid');
        passwordInput.classList.remove('invalid');

        // Assume the form is valid until proven otherwise.
        let isFormValid = true;

        // --- Validation Rule 1: Email Format ---
        // A simple regular expression to check for a basic email pattern.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            emailInput.classList.add('invalid');
            isFormValid = false;
        }

        // --- Validation Rule 2: Password Length ---
        // Checks if the password is at least 8 characters long.
        if (passwordInput.value.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters long.';
            passwordInput.classList.add('invalid');
            isFormValid = false;
        }

        // --- Validation Rule 3: Password is not empty ---
        // A simple check to ensure the field isn't blank.
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password cannot be empty.';
            passwordInput.classList.add('invalid');
            isFormValid = false;
        }

        // If the form is valid, you can perform an action, like submitting data.
        if (isFormValid) {
            alert('Form submitted successfully!');
            // In a real application, you would send the data to a server here.
            form.reset(); // Clears the form fields.
        }
    });
});