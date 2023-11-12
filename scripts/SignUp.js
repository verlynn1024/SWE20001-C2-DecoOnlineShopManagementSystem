function validateForm(){
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phonenum").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    //Regular expression for validation 
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{11}$/;
    const nameRegex = /^[a-zA-Z\s]+$/; // Allow letters and spaces in the name
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#38;])[A-Za-z\d@$!%*?&#38;]{8,}$/;

    //perform validation check here 
    if(email === "" || phonenum === "" || name === "" || password === "")
    {
        alert("Please fill in all the fields!!");
        return false; //prevent form submission 
    }

    if(!email.match(emailRegex))
    {
        alert("Invlaid email address!!");
        return false;
    }

    if(!phonenum.match(phoneRegex))
    {
        alert("Invalid phone number. Please enter a 10-digit number!!");
        return false;
    }

    if(!name.match(nameRegex))
    {
        alert("Name must only contain letters and spaces!!");
        return false;
    }

    if(!password.match(passwordRegex))
    {
        alert("Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special character!!");
        return false;
    }

    return true;
}

function signup()
{
    var form = document.getElementById("signupForm");
    
    //get user inputs (emails, phone number, name, password)
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phonenum").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    //perform validation 
    var isValid = validateForm();

    if(isValid)
    {
        alert("Sign Up Successful!!"); 
        form.submit();
        window.location.href = "5_3_User_Account_Management.html";
    }
    else{
        alert("Sign Up Failed!");
        document.getElementById("Continue_to_User_Site").setAttribute("disabled", "true");
       }

    var form = document.getElementById("signupForm");
}

// Add a click event listener for the radio button
 // Add a click event listener for the radio button
 document.getElementById("privacy_policy").addEventListener("click", function() {
    alert("Radio button clicked!");
});
