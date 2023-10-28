
function continuePayment()
{
    //get user inputs (email, phone number, name, address, postcode, city)
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phonenum").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var postcode = document.getElementById("postcode").value;
    var city = document.getElementById("city").value;

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^\d{11}$/;
    const nameRegex =  /^[a-zA-Z\s]+$/; // Allow letters and spaces in the name
    const addressRegex = /^[a-zA-Z0-9\s]+$/; // Allow letters, numbers, and spaces in the address
    const postcodeRegex = /^\d{5}$/; // Assuming a 5-digit postcode format
    const cityRegex = /^[a-zA-Z\s]+$/; // Allow letters and spaces in the city

    //arry of error msg 
    var errMsg = [];

    //perform validation 
    if( email === "" || phonenum === "" || name === "" || address === "" || postcode === "" || city === "" || !email.match(emailRegex) || !phonenum.match(phoneRegex) || !name.match(nameRegex) || !address.match(addressRegex) || !postcode.match(postcodeRegex) || !city.match(cityRegex))
    {
        if(email === "") 
        {
            //alert("Email is required.");
            errMsg.push("Email is required");
        }else if (!email.match(emailRegex))
        {
            //alert("Invalid email address.");
            errMsg.push("Invalid email address")
        }

        if (phonenum === "") {
            //alert("Phone number is required.");
            errMsg.push("Phone number required");
        } else if (!phonenum.match(phoneRegex)) {
            //alert("Invalid phone number. Please enter a 10-digit number.");
            errMsg.push("Invalid phone number");
        }
        if (name === "") {
            //alert("Name is required.");
            errMsg.push("Name is required");
        } else if (!name.match(nameRegex)) {
            //alert("Name must only contain letters and spaces.");
            errMsg.push("Name must only contain letters.")
        }
        if (address === "") {
            //alert("Address is required.");
            errMsg.push("Address is required");
        } else if (!address.match(addressRegex)) {
            //alert("Invalid address format.");
            errMsg.push("Invalid address format");
        }
        if (postcode === "") {
            //alert("Postcode is required.");
        } else if (!postcode.match(postcodeRegex)) {
            //alert("Invalid postcode format.");
            errMsg.push("Invalid Postcode format");
        }
        if (city === "") {
            //alert("City is required.");
            errMsg.push("City is required");
        } else if (!city.match(cityRegex)) {
            //alert("City must only contain letters and spaces.");
            errMsg.push("City must only contain letters");
        }

        if (errMsg.length > 0)
        {
            alert("Please correct the following errors:\n\n" + errMsg.join("\n"));
            return false;
        }
        
    }

        // If all checks pass, perform further actions
        //alert("Validation successful!");
        var user = {
            email: email,
            phonenum: phonenum,
            name: name,
            address: address,
            postcode: postcode,
            city: city
        };
    
        localStorage.setItem("userDetails", JSON.stringify(user));
        window.location.href = "4_2_Checkout_Payment_Method.html";
    } 
