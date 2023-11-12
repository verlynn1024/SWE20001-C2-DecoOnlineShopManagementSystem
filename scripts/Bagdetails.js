document.addEventListener("DOMContentLoaded", function () {
    // Initial item counts and prices
    let itemCount1 = 1; // For the first item
    let itemPrice1 = 1200; // Price for the first item

    let itemCount2 = 2; // For the second item
    let itemPrice2 = 1800; // Price for the second item

    // Function to update the item quantity and total price for the first item
    function updateItemDetails1() {
        const itemQuantityElement = document.getElementById('n__item_bm');
        const itemPriceElement = document.getElementById('USD_1200_bm');

        itemQuantityElement.querySelector("span").textContent = `${itemCount1} item`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount1 * itemPrice1}`;

        // Call the function to update the Product Total
        updateProductTotal();
    }

    // Function to update the item quantity and total price for the second item
    function updateItemDetails2() {
        const itemQuantityElement = document.getElementById('n__items_bng');
        const itemPriceElement = document.getElementById('USD_3600_bnh');

        itemQuantityElement.querySelector("span").textContent = `${itemCount2} item${itemCount2 > 1 ? 's' : ''}`;
        itemPriceElement.querySelector("span").textContent = `USD ${itemCount2 * itemPrice2}`;

        // Call the function to update the Product Total
        updateProductTotal();
    }

    // Increment button click event for the first item
    document.getElementById('Container-Button_bm').addEventListener('click', function () {
        itemCount1++;
        updateItemDetails1();
    });

    // Decrement button click event for the first item
    document.getElementById('Container-Button_bnc').addEventListener('click', function () {
        if (itemCount1 > 1) {
            itemCount1--;
            updateItemDetails1();
        }
    });

    // Increment button click event for the second item
    document.getElementById('Container-Button_bnl').addEventListener('click', function () {
        itemCount2++;
        updateItemDetails2();
    });

    // Decrement button click event for the second item
    document.getElementById('Container-Button_bnq').addEventListener('click', function () {
        if (itemCount2 > 1) {
            itemCount2--;
            updateItemDetails2();
        }
    });

    // Function to update the Product Total
    function updateProductTotal() {
        const productTotalElement = document.getElementById('USD_4800_bmt');
        const productTotal = (itemCount1 * itemPrice1) + (itemCount2 * itemPrice2);
        productTotalElement.querySelector("span").textContent = `USD ${productTotal}`;
    }

    // Initial updates for both items
    updateItemDetails1();
    updateItemDetails2();
});
