function validateForm() {
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phonenum").value;
    var password = document.getElementById("password").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{11}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#38;])[A-Za-z\d@$!%*?&#38;]{8,}$/;

    // Perform your validation checks here
    if (email === "" && phonenum === "") {
        alert("Please fill in either your email or phone number.");
        return false; // Prevent form submission
    }
    
     if (email !== "" && !email.match(emailRegex)) {
        alert('Invalid email address.');
        return false; 
    }

    if (phonenum !== "" && !phonenum.match(phoneRegex)) {
        alert('Invalid phone number. Please enter a 10-digit number.');
        return false; 
    }

    return true; // Allow form submission if all checks pass
}

function login() {
    var form = document.getElementById("loginform");

    // Get user inputs (email, phone number, password)
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phonenum").value;
    var password = document.getElementById("password").value;

    // Perform form validation
    var isValid = validateForm();

    if (isValid) {
        form.submit();
        window.location.href = "5_3_User_Account_Management.html";
    } else {
        alert("Login failed!!");
        document.getElementById("Continue_to_User_Site_bvg").setAttribute("disabled", "true");
    }

    // Get form reference
    var form = document.getElementById("loginform");
}
