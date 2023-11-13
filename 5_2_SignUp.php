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

// form submission handling 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"] ?? '';
    $email = $_POST["email"] ?? '';
    $password = password_hash($_POST["password"] ?? '', PASSWORD_DEFAULT);
    $phone_number = $_POST["phonenum"] ?? '';

$sql_table = "customers";

// insert data 
$sql = "INSERT INTO customers (name, email, password, phone_number) VALUES ('$name', '$email', '$password', '$phone_number')";

$result = mysqli_query($conn, $sql);
if (!$result) 
{
    echo "Something is wrong with ", $sql;
} 
else 
{
    echo "Insert successful";
    header("Location: 5_3_User_Account_Management.html");
    exit();
}
}
else
{
    echo "Insert unsuccessful";
}

mysqli_close($conn);
?>
