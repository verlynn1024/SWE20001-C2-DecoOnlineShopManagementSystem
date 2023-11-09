<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "Deco_store";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failure: " . $conn->connect_error);
}

$sql_table = "Customers";

// handles form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $phone_number = $_POST["phonenum"];

    // inserts data into the customers table
    $sql = "INSERT INTO customers (name, email, password, phone_number) VALUES ('$name', '$email', '$password', '$phone_number')";

    if (mysqli_query($conn, $sql)) {
        echo "Signup successful!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

// Close the database connection
mysqli_close($conn);
?>
