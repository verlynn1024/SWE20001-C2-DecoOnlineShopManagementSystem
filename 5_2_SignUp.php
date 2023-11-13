<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "Deco_store";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn) 
{
    echo "Database connection successful\n";
}
else
{
    echo "Database connection failure\n";
}

// Handle the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $entered_email = $_POST["email"];
    $entered_phonenum = $_POST["phonenum"];
    $entered_password = $_POST["password"];

    // Query the database for the entered username
    $sql = "SELECT * FROM customers WHERE email = '$entered_email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) 
    {
        // User exists, now check the password
        $row = $result->fetch_assoc();
        $stored_password = $row["password"];

        if ($entered_password == $stored_password) 
        {
            echo "Login successful!"; 
            header("Location: 5_3_User_Account_Management.html");
            exit();
        } 
        else 
        {
            header("Location: 5_2_Login.html");
        }
    } 
    else 
    {
        echo "Email not found.";
    }
}

$conn->close();
?>
