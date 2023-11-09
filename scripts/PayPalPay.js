document.addEventListener("DOMContentLoaded", function () {
    // Initial item counts and prices
    let itemCount1 = 1; // For the first item
    let itemPrice1 = 1200; // Price for the first item

    let itemCount2 = 2; // For the second item
    let itemPrice2 = 1800; // Price for the second item

    // Function to update the item quantity and total price for the first item
    function updateItemDetails1() {
        const itemQuantityElement = document.getElementById('n__item_bc');
        const itemPriceElement = document.getElementById('USD_1200_bc');

        itemQuantityElement.querySelector("span").textContent = `${itemCount1} item`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount1 * itemPrice1}`;

        // Call the function to update the subtotal, total, and Pay button text
        updateSubtotalAndPayButton();
    }

    // Function to update the item quantity and total price for the second item
    function updateItemDetails2() {
        const itemQuantityElement = document.getElementById('n__items_bcn');
        const itemPriceElement = document.getElementById('USD_3600_bco');

        itemQuantityElement.querySelector("span").textContent = `${itemCount2} item${itemCount2 > 1 ? 's' : ''}`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount2 * itemPrice2}`;

        // Call the function to update the subtotal, total, and Pay button text
        updateSubtotalAndPayButton();
    }

    // Increment button click event for the first item
    document.getElementById('incrementButton').addEventListener('click', function () {
        itemCount1++;
        updateItemDetails1();
    });

    // Decrement button click event for the first item
    document.getElementById('decrementButton').addEventListener('click', function () {
        if (itemCount1 > 1) {
            itemCount1--;
            updateItemDetails1();
        }
    });

    // Increment button click event for the second item
    document.getElementById('incrementButton2').addEventListener('click', function () {
        itemCount2++;
        updateItemDetails2();
    });

    // Decrement button click event for the second item
    document.getElementById('decrementButton2').addEventListener('click', function () {
        if (itemCount2 > 1) {
            itemCount2--;
            updateItemDetails2();
        }
    });

    // Function to update the subtotal based on item quantities and prices
    function updateSubtotal() {
        const subtotalElement = document.getElementById('USD_4800_bcj');
        const subtotal = (itemCount1 * itemPrice1) + (itemCount2 * itemPrice2);
        subtotalElement.querySelector("span").textContent = `USD ${subtotal}`;
    
        // Return the calculated subtotal
        return subtotal;
    }

    // Function to update the total and Pay button text
    function updateSubtotalAndPayButton() {
        const subtotal = updateSubtotal();
        updateTotal(subtotal);
        updatePayButton(subtotal);
    }

    // Function to update the total based on the subtotal
    function updateTotal(subtotal) {
        const totalElement = document.getElementById('USD_4800_bcc');
        totalElement.querySelector("span").textContent = `USD ${subtotal}`;
    }

    // Function to update the Pay button text with the total amount
    function updatePayButton(total) {
        const payButton = document.getElementById('Pay_USD_4800_ba');
        payButton.querySelector("span").textContent = `Pay USD ${total}`;
        //Click event listener to the pay button 
        payButton.addEventListener('click', payWithPayPal);
    }

    // Function to handle the Pay button click event
    function payWithPayPal() {
        console.log("Pay button clicked."); // Add this line for debugging
        window.location.href = "4_4_Payment_Success.html";
    }

    // Call the initial update for the total and Pay button
    updateSubtotalAndPayButton();

    // Initial updates for both items
    updateItemDetails1();
    updateItemDetails2();
});

