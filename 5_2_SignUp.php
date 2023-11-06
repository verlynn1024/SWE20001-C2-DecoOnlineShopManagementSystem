<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "online_store";

$conn = new mysqli($host, $username, $password, $dbname);
if (!$conn) {
    echo "<p>Database connection failure</p>";
}

$sql_table = "online_store";

$query = "insert into $sql_table (CustID, FName, LName, Email, Phone) VALUES ('$CustID', '$FName', '$LName', '$Email', '$Phone')";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind parameters and execute the statement for each customer
foreach ($customers as $customer) {
	$stmt->bind_param("issss", $customer[0], $customer[1], $customer[2], $customer[3], $customer[4]);
    $stmt->execute();
}

// Close the statement and the database connection
$stmt->close();
$conn->close();

echo "Records inserted successfully.";

?>