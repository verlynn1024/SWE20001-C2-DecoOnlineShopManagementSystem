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

// SQL query to retrieve data
$sql = "SELECT email, address, post_code, city FROM Payments";
$result = $conn->query($sql);

// Check if there is any result
if ($result->num_rows > 0) 
{
    // Output data of each row
    while ($row = $result->fetch_assoc()) 
    {
        echo "Email: " . $row["email"] . "<br>";
        echo "Address: " . $row["address"] . "<br>";
        echo "Postcode: " . $row["post_code"] . "<br>";
        echo "City: " . $row["city"] . "<br>";
    }
} 
else 
{
    echo "No results found";
}

// Close connection
$conn->close();
?>
