function checkAdminID() {
    const enteredAdminID = document.getElementById("ID").value;
    
    // Replace 'yourAdminID' with the correct admin ID
    const correctAdminID = 'admin123';

    if (enteredAdminID === correctAdminID) {
        // Admin ID is correct, allow navigation to the next page
        window.location.href = "5_1_Login___Admin_Forgot_Password___2.html";
    } else {
        // Admin ID is incorrect, display an error message or take appropriate action
        alert("Incorrect Admin ID. Please try again.");
    }
}