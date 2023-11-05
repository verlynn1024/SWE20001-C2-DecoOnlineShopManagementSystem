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
