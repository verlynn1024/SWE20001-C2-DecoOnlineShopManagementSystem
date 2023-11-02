// Function to retrieve user details from localStorage and populate the HTML elements
function displayUserDetails() {
    // Check if user details are stored in localStorage
    if (localStorage.getItem("userDetails")) {
        // Parse the stored user details from JSON
        var user = JSON.parse(localStorage.getItem("userDetails"));

        // Get the HTML elements where you want to display user details
        var userAddressElement = document.getElementById("userAddress");
        var userEmailElement = document.getElementById("userEmail");

        // Populate the HTML elements with user's address and email
        userAddressElement.textContent = user.address;
        userEmailElement.textContent = user.email;
    }
}

// Call the function to display user details when the page loads
window.addEventListener("load", displayUserDetails);


document.addEventListener("DOMContentLoaded", function(){
    //card number 
    const cardNumberField = document.getElementById("cardNumber");
    const cardNumberFeedback = document.getElementById("cardNumberFeedback");

    cardNumberField.addEventListener("input", function () {
        const cardNumber = this.value;
        if (isValidCardNumber(cardNumber)) {
            cardNumberFeedback.textContent = "Valid card number";
            cardNumberFeedback.classList.remove("invalid-feedback");
            cardNumberFeedback.classList.add("valid-feedback");
        } else {
            cardNumberFeedback.textContent = "Invalid card number";
            cardNumberFeedback.classList.remove("valid-feedback");
            cardNumberFeedback.classList.add("invalid-feedback");
        }
    
         // Add event listeners for card fields
        const cardNumberInput = document.getElementById("cardNumber");
        const expiryDateInput = document.getElementById("expiryDate");
        const cvcInput = document.getElementById("cvc");
        const payButton = document.getElementById("Pay_USD_4800");

        const radioButtons = document.getElementsByName("paymentMethod");
        

        cardNumberInput.addEventListener("input", checkValidation);
        expiryDateInput.addEventListener("input", checkValidation);
        cvcInput.addEventListener("input", checkValidation);

        function checkValidation() {
            const cardNumber = cardNumberInput.value;
            const expiryDate = expiryDateInput.value;
            const cvc = cvcInput.value;

            const isCardNumberValid = isValidCardNumber(cardNumber);
            const isExpiryDateValid = isValidExpiryDate(expiryDate);
            const isCVCValid = isValidCVC(cvc);

            if (isCardNumberValid && isExpiryDateValid && isCVCValid) {
                payButton.disabled = false;
                payButton.style.cursor = "pointer";
                payButton.style.backgroundColor = "#ff9900";
            } else {
                payButton.disabled = true;
                payButton.style.cursor = "not-allowed";
                payButton.style.backgroundColor = "#ddd";
            }
         }

    });

    // Expiry Date
    const expiryDateField = document.getElementById("expiryDate");
    const expiryDateFeedback = document.getElementById("expiryDateFeedback");

    expiryDateField.addEventListener("input", function () {
        const expiryDate = this.value;
        if (isValidExpiryDate(expiryDate)) {
            expiryDateFeedback.textContent = "Valid expiry date";
            expiryDateFeedback.classList.remove("invalid-feedback");
            expiryDateFeedback.classList.add("valid-feedback");
        } else {
            expiryDateFeedback.textContent = "Invalid expiry date";
            expiryDateFeedback.classList.remove("valid-feedback");
            expiryDateFeedback.classList.add("invalid-feedback");
        }



    });

    // CVC
    const cvcField = document.getElementById("cvc");
    const cvcFeedback = document.getElementById("cvcFeedback");

    cvcField.addEventListener("input", function () {
        const cvc = this.value;
        if (isValidCVC(cvc)) {
            cvcFeedback.textContent = "Valid CVC";
            cvcFeedback.classList.remove("invalid-feedback");
            cvcFeedback.classList.add("valid-feedback");
        } else {
            cvcFeedback.textContent = "Invalid CVC";
            cvcFeedback.classList.remove("valid-feedback");
            cvcFeedback.classList.add("invalid-feedback");
        }
    });
});

    function isValidCardNumber(cardNumber) {
        return /^\d{16}$/.test(cardNumber);
    }

    function isValidExpiryDate(expiryDate) {
        return /^\d{2}\/\d{2}$/.test(expiryDate);
    }

    function isValidCVC(cvc) {
        return /^\d{3}$/.test(cvc);
    }

    // Function to enable the "Pay" button if all card fields are valid
function enablePayButton() {
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvc = document.getElementById("cvc").value;
    const payButton = document.getElementById("Pay_USD_4800");

    // Check the validity of card number, expiry date, and CVC
    const isCardNumberValid = isValidCardNumber(cardNumber);
    const isExpiryDateValid = isValidExpiryDate(expiryDate);
    const isCVCValid = isValidCVC(cvc);

    // Enable or disable the Pay button based on field validity
    if (isCardNumberValid && isExpiryDateValid && isCVCValid) {
        payButton.disabled = false;
        payButton.style.cursor = "pointer";
        payButton.style.backgroundColor = "#ff9900";
    } else {
        payButton.disabled = true;
        payButton.style.cursor = "not-allowed";
        payButton.style.backgroundColor = "#ddd";
    }
}

// Attach input event listeners to card fields
document.getElementById("cardNumber").addEventListener("input", enablePayButton);
document.getElementById("expiryDate").addEventListener("input", enablePayButton);
document.getElementById("cvc").addEventListener("input", enablePayButton);

// Function to handle the "Pay" button click
function Pay() {
    // Get the card number, expiry date, and CVC
    const cardNumber = document.getElementById("cardNumber").value;
    const expiryDate = document.getElementById("expiryDate").value;
    const cvc = document.getElementById("cvc").value;

    // Check the validity of card fields one more time
    const isCardNumberValid = isValidCardNumber(cardNumber);
    const isExpiryDateValid = isValidExpiryDate(expiryDate);
    const isCVCValid = isValidCVC(cvc);

    if (isCardNumberValid && isExpiryDateValid && isCVCValid) {
        window.location.href = "4_4_Payment_Success.html";
    } else {
        alert("Please ensure all card details are valid.");
        // Disable the button and show feedback
        const payButton = document.getElementById("Pay_USD_4800");
        payButton.disabled = true;
        payButton.style.cursor = "not-allowed";
        payButton.style.backgroundColor = "#ddd";
    }
}

const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const itemCount = document.getElementById('item-count');

// Initialize item count
let count = 2;

// Update item count and display
function updateItemCount() {
    itemCount.textContent = count + ' items';
}

// Event listeners for the buttons
decrementButton.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateItemCount();
    }
});

incrementButton.addEventListener('click', () => {
    count++;
    updateItemCount();
});

// Initial display
updateItemCount();



