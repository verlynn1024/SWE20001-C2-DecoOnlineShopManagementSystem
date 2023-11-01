// Function to validate the password and update feedback in real-time
function validatePassword() {
    // Get the password and confirmation password input elements
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    // Get the password requirements elements
    const lengthRequirement = document.getElementById("lengthRequirement");
    const capitalRequirement = document.getElementById("capitalRequirement");
    const numberRequirement = document.getElementById("numberRequirement");
    const specialCharacterRequirement = document.getElementById("specialCharacterRequirement");

    // Regular expressions to check for password requirements
    const lengthRegex = /.{8,}/;
    const capitalRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+[\]{};:'"<>,.?~\\/-]/;

    // Check the password against each requirement
    const isLengthValid = lengthRegex.test(passwordInput.value);
    const isCapitalValid = capitalRegex.test(passwordInput.value);
    const isNumberValid = numberRegex.test(passwordInput.value);
    const isSpecialCharValid = specialCharRegex.test(passwordInput.value);

    // Function to update the feedback with the correct icon (✓ or ❌)
    function updateFeedback(element, isValid) {
        const icon = element.querySelector(".icon");
        icon.textContent = isValid ? "✓" : "❌";
        element.classList.toggle("valid", isValid);
    }

    // Update the feedback based on the requirements
    updateFeedback(lengthRequirement, isLengthValid);
    updateFeedback(capitalRequirement, isCapitalValid);
    updateFeedback(numberRequirement, isNumberValid);
    updateFeedback(specialCharacterRequirement, isSpecialCharValid);

    // Check if the confirmation password matches the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }

    // Check if the confirmation password matches the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
        document.getElementById("ConfirmationPasswordFeedback").style.display = "block";
    } else {
        confirmPasswordInput.setCustomValidity("");
        document.getElementById("ConfirmationPasswordFeedback").style.display = "none";
    }

    // Check if the confirmation password matches the password
    if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match");
        document.getElementById("ConfirmationPasswordFeedback").style.display = "block";
    } else {
        confirmPasswordInput.setCustomValidity("");
        document.getElementById("ConfirmationPasswordFeedback").style.display = "none";
    }

    // Check if all conditions are met to enable the "Continue" button
    const isPasswordValid = isLengthValid && isCapitalValid && isNumberValid && isSpecialCharValid;
    const isConfirmationValid = confirmPasswordInput.value === passwordInput.value;

    // Enable or disable the "Continue" button based on the conditions
    const continueButton = document.getElementById("Primary-Button");
    continueButton.disabled = !(isPasswordValid && isConfirmationValid);
}

// Function to enable or disable the "Continue" button
function enableContinueButton() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const continueButton = document.getElementById("Primary-Button");

    // Check if both password and confirmation password are filled
    const isPasswordFilled = passwordInput.value.trim() !== "";
    const isConfirmationFilled = confirmPasswordInput.value.trim() !== "";

    // Enable the "Continue" button only when both inputs are filled
    continueButton.disabled = !(isPasswordFilled && isConfirmationFilled);
}

// Function to be called when the "Continue" button is clicked
function Continue() {
    // Check if the password and confirmation password are filled and meet the requirements
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const continueButton = document.getElementById("Primary-Button");

    if (passwordInput.value.trim() !== "" && confirmPasswordInput.value.trim() !== "" && !continueButton.disabled) {
        // Navigate to the next HTML page when the button is clicked
        window.location.href = "5_2_Inventory_Management___Dashboard.html";
    } else {
        // Show an error message or take other actions if the conditions are not met
        alert("Please fill in the required fields and meet the password requirements.");
    }

    function openPopup() {
        document.getElementById("successPopup").style.display = "block";
    }
    
    function closePopup() {
        document.getElementById("successPopup").style.display = "none";
    }
}

// Add event listeners to the password and confirmation password inputs
document.getElementById("password").addEventListener("input", validatePassword);
document.getElementById("confirmPassword").addEventListener("input", validatePassword);
