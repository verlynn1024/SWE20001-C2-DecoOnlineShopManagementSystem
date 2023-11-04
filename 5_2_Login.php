<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "online_store";

$conn = new mysqli($host, $username, $password, $dbname);
if (!$conn) {
    echo "<p>Database connection failure</p>";
}

// Handle the form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $entered_username = $_POST["username"];
    $entered_password = $_POST["password"];

    // Query the database for the entered username
    $sql = "SELECT * FROM users WHERE username = '$entered_username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // User exists, now check the password
        $row = $result->fetch_assoc();
        $stored_password = $row["password"];

        if ($entered_password == $stored_password) {
            echo "Login successful!"; 
        } else {
            echo "Incorrect password.";
        }
    } else {
        echo "Username not found.";
    }
}

$conn->close();
?>
