<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Deco_store";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn) 
{
    echo "Database connection successful\n";
}
else
{
    echo "Database connection failure\n";
}

// Retrieve user details from the form
if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $email = $_POST['email'];
    $phone_number = $_POST['phone_number'];
    $name = $_POST['name'];
    $address = $_POST['address'];
    $post_code = $_POST['post_code'];
    $city = $_POST['city'];
    
    $sql_table = "Payments";

    // Insert data into the Payments table
    $sql = "INSERT INTO Payments (email, phone_number, name, address, post_code, city) 
            VALUES ('$email', '$phone_number', '$name', '$address', '$post_code', '$city')";
    
    $result = mysqli_query($conn, $sql);
    if (!$result) 
    {
        echo "Something is wrong with ", $sql;
    } 
    else 
    {
        echo "Insert successful";
        header("Location: 4_2_Checkout_Payment_Method.html");
        exit();
    }
}
else
{
    echo "Insert unsuccessful";
}

mysqli_close($conn);
?>
