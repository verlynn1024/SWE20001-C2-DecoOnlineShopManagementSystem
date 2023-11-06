<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "online_store";

$conn = new mysqli($host, $username, $password, $dbname);
if (!$conn) 
	{
		echo "<p>Database connection failure</p>";	
	}

// Array of delivery status data
$deliveryStatuses = array(
    array("1", "Pending"),
    array("2", "Ready for delivery"),
    array("3", "Out for delivery"),
    array("4", "Delivered"),
    array("5", "Cancelled"),
);

// SQL query to insert delivery statuses
$sql = "INSERT INTO DeliveryStatus (StatusID, StatusName) VALUES (?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind parameters and execute the statement for each delivery status
foreach ($deliveryStatuses as $status) {
    $stmt->bind_param("is", $status[0], $status[1]);
    $stmt->execute();
}

// Close the statement and the database connection
$stmt->close();
$conn->close();

echo "Records inserted successfully.";

?>
