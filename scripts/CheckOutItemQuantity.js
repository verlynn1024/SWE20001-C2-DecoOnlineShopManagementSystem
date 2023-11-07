document.addEventListener("DOMContentLoaded", function () {
    // Initial item counts and prices
    let itemCount1 = 1; // For the first item
    let itemPrice1 = 1200; // Price for the first item

    let itemCount2 = 2; // For the second item
    let itemPrice2 = 1800; // Price for the second item

    // Function to update the item quantity and total price for the first item
    function updateItemDetails1() {
        const itemQuantityElement = document.getElementById('n__item');
        const itemPriceElement = document.getElementById('USD_1200_n');

        itemQuantityElement.querySelector("span").textContent = `${itemCount1} item`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount1 * itemPrice1}`;

        // Call the function to update the subtotal
        updateSubtotal();
    }

    // Function to update the item quantity and total price for the second item
    function updateItemDetails2() {
        const itemQuantityElement = document.getElementById('n__items');
        const itemPriceElement = document.getElementById('USD_3600');

        itemQuantityElement.querySelector("span").textContent = `${itemCount2} item${itemCount2 > 1 ? 's' : ''}`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount2 * itemPrice2}`;

        // Call the function to update the subtotal
        updateSubtotal();
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

    // Function to update the subtotal
    function updateSubtotal() {
        const subtotalElement = document.getElementById('USD_4800_y');
        const subtotal = (itemCount1 * itemPrice1) + (itemCount2 * itemPrice2);
        subtotalElement.querySelector("span").textContent = `USD ${subtotal}`;
        
        // Call the function to update the total
        updateTotal(subtotal);
    }

    // Function to update the total based on the subtotal
    function updateTotal(subtotal) {
        const totalElement = document.getElementById('USD_4800');
        totalElement.querySelector("span").textContent = `USD ${subtotal}`;
        
    }
     // Initial updates for both items
     updateItemDetails1();
     updateItemDetails2();
     
    // Calculate and update the total
    updateSubtotal();
    
    // Add an initial total
    const initialTotal = (itemCount1 * itemPrice1) + (itemCount2 * itemPrice2);
    updateTotal(initialTotal);
});

// Increment button click event for the second item
document.getElementById('incrementButton2').addEventListener('click', function () {
    console.log("Increment button 2 clicked"); // Debugging statement
    itemCount2++;
    updateItemDetails2();
});

// Decrement button click event for the second item
document.getElementById('decrementButton2').addEventListener('click', function () {
    console.log("Decrement button 2 clicked"); // Debugging statement
    if (itemCount2 > 1) {
        itemCount2--;
        updateItemDetails2();
    }
});
