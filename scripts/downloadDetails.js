function redirectToTracking(){
    console.log("Rdirect to Tracking Page");
    window.location.href = "7_0_Parcel_Info.html";
}

function redirectToOrderHistory()
{
    console.log("redirect to order hsitory page");
    window.location.href = '5_5_User_Account_Management___Order_History.html';
}

function redirectToSettings(){
    console.log("redirect to settings page");
    window.location.href = '2_2_Inventory_Management___Settings.html';
}

document.addEventListener("DOMContentLoaded", function () {
    function generateTextFile() {
        // Create a data object with the dynamic content
        const data = {
            DateOfBirth: "12/09/1989",
            Name: "Lule",
            Email: "lule@example.com",
            BankAccoout: "109876354",
            Member: "Non-member", 
            PaymentMethod : "Paypal", //should remove it?? 
            // Add more data properties as needed
        };

        // Create an HTML template with placeholders
        const template = `
Date of Birth: {{DateOfBirth}}
Name: {{Name}}
Email: {{Email}}
Bank Account: {{BankAccount}}
Member? {{Member}}
Payment Method: {{PaymentMethod}}
        `;

        // Replace placeholders with actual data
        const content = template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()]);

        // Create a Blob containing the text
        const blob = new Blob([content], { type: 'text/plain' });

        // Create a download link
        const downloadLink = document.getElementById('DownloadDetailsLink');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'user_details.txt'; // Specify the file name here
    }

    // Find the "DownloadDetailsLink" element and add a click event listener
    const downloadLink = document.getElementById('DownloadDetailsLink');
    downloadLink.addEventListener('click', function () {
        generateTextFile();
    });
});

$(document).ready(function () {
    $('.editable').each(function () {
      var key = $(this).attr('id');
      var savedValue = localStorage.getItem(key);

      if (savedValue !== null) {
        $(this).html('<span>' + savedValue + '</span>');
      }
    });
  });

  // Load data from local storage
const loadUserData = () => {
    // Define the container IDs and their corresponding keys
    const containerData = [
        { containerId: 'n_2__091989', key: 'n_2__091989' },
        { containerId: 'No_32_2nd_Floor_Kuala_Lumpur', key: 'No_32_2nd_Floor_Kuala_Lumpur' },
        { containerId: 'Non-member', key: 'Non-member' },
        { containerId: 'n_09876354', key: 'n_09876354' },
        { containerId: 'lulegmailcom', key: 'lulegmailcom' },
        // Add more containers as needed
    ];

    // Loop through each container and load data from local storage
    containerData.forEach(({ containerId, key }) => {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerText = localStorage.getItem(key) || ''; // Set a default value if the key is not found
        }
    });
};

// Call the function to load data when the page is loaded
loadUserData();
