document.addEventListener("DOMContentLoaded", function () {
    function generateTextFile() {
        // Create a data object with the dynamic content
        const data = {
            DateOfBirth: "12/09/1989",
            Name: "Lule",
            Email: "lule@example.com",
            BankAccoout: "109876354",
            Member: "Non-member", 
            PaymentMethod : "Paypal", 
            // Add more data properties as needed
        };

        // Create an HTML template with placeholders
        const template = `
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 20px;
            }
            h2 {
                color: #333;
                border-bottom: 2px solid #333;
                padding-bottom: 5px;
            }
            p {
                margin: 5px 0;
            }
        </style>
        <h1>User Details</h1>
        Date of Birth: {{DateOfBirth}} \n
        Name: {{Name}} \n
        Email: {{Email}} \n
        Bank Account: {{BankAccount}} \n
        Member? {{Member}} \n
        Payment Method: {{PaymentMethod}} \n
        `;

        // Replace placeholders with actual data
        const content = template.replace(/{{(.*?)}}/g, (match, key) => data[key.trim()]);

        // Create a Blob containing the text
        // const blob = new Blob([content], { type: 'text/plain' });
        const element = document.createElement('div');
        element.innerHTML = content;
        
        // Use html2pdf for the PDF
        html2pdf(element, {
            margin: 10,
            filename: 'Details.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        });

        // Create a download link
        const downloadLink = document.getElementById('DownloadDetailsLink');
        downloadLink.href = URL.createObjectURL(blob);
        // downloadLink.download = 'user_details.txt'; // Specify the file name here
        downloadLink.download = 'Details.pdf';
    }

    // Find the "DownloadDetailsLink" element and add a click event listener
    const downloadLink = document.getElementById('DownloadDetailsLink');
    downloadLink.addEventListener('click', function () {
        generateTextFile();
    });
});
