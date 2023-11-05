document.addEventListener("DOMContentLoaded", function () {
    function generateTextFile() {
        // Retrieve data from HTML elements for the first item
        const itemNameElement = document.getElementById("Betty");
        const itemQuantityElement = document.getElementById("n__items");
        const itemTotalPriceElement = document.getElementById("MYR_3600");

        // Retrieve data from HTML elements for the second item
        const itemNameElement2 = document.getElementById("Lule");
        const itemQuantityElement2 = document.getElementById("n__item");
        const itemTotalPriceElement2 = document.getElementById("MYR_7200");

        // Update the Shipping element to return "Free" in the text file
        const shipping = "Free";
        const totalElement = document.getElementById("MYR_10800");

        const itemName = itemNameElement.querySelector("span").textContent;
        const itemQuantity = itemQuantityElement.querySelector("span").textContent;
        const itemTotalPrice = itemTotalPriceElement.querySelector("span").textContent;

        const itemName2 = itemNameElement2.querySelector("span").textContent;
        const itemQuantity2 = itemQuantityElement2.querySelector("span").textContent;
        const itemTotalPrice2 = itemTotalPriceElement2.querySelector("span").textContent;

        const total = totalElement.querySelector("span").textContent;

        // Create a data object with the dynamic content
        const data = {
            "Item Name 1": itemName,
            "Item Quantity 1": itemQuantity,
            "Item Total Price 1": itemTotalPrice,
            "Item Name 2": itemName2,
            "Item Quantity 2": itemQuantity2,
            "Item Total Price 2": itemTotalPrice2,
            "Shipping": shipping,
            "Total": total
            // Add more data properties as needed
        };

        // Create an HTML template with placeholders
        const template = `
Item 1 Name: {{Item Name 1}}
Item 1 Quantity: {{Item Quantity 1}}
Item 1 Total Price: {{Item Total Price 1}}

Item 2 Name: {{Item Name 2}}
Item 2 Quantity: {{Item Quantity 2}}
Item 2 Total Price: {{Item Total Price 2}}

Shipping: {{Shipping}}
Total: {{Total}}
        `;

        // Replace placeholders with actual data
        const content = template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()]);

        // Create a Blob containing the text
        const blob = new Blob([content], { type: 'text/plain' });

        // Create a download link
        const downloadLink = document.getElementById('DownloadOrderHistoryLink');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'order_history.txt'; // Specify the file name here
    }

    // Find the "DownloadOrderHistoryLink" element and add a click event listener
    const downloadLink = document.getElementById('DownloadOrderHistoryLink');
    downloadLink.addEventListener('click', function () {
        generateTextFile();
    });
});
