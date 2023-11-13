<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "Deco_store";

$conn = new mysqli($host, $username, $password, $dbname);
if (!$conn) {
    echo "<p>Database connection failure</p>";
}

// Array of product data
$products = array(
    array(1, 'Hiroshi', 299, 'Noise Cancelling Headphones', 'Electronics, Home Office, NewIn'),
    array(2, 'Takashi', 199, 'Classic Tea Set', 'Accessories, Dining Room, NewIn'),
    array(3, 'Yukihiro', 99, 'Homemade Handbag', 'Accessories, Bedroom, NewIn'),
    array(4, 'Kenji', 199, 'Waterproof Watch', 'Accessories, Home Office, NewIn'),
    array(5, 'Tatsuya', 399, 'Vintage Typewriter', 'Electronics, Home Office, NewIn'),
    array(6, 'Masaru', 499, 'Leather Sofa', 'Sofa, Living Room, NewIn'),
    array(7, 'Kaito', 299, 'Cotton Sofa', 'Sofa, Bedroom, NewIn'),
    array(8, 'Haruki', 499, 'Wooden Sofa', 'Sofa, Living Room, NewIn'),
    array(9, 'Ryo', 499, 'Leather Sofa', 'Sofa, Living Room, NewIn'),
    array(10, 'Shinji', 599, 'Leather Sofa', 'Sofa, Living Room, NewIn'),
    array(11, 'Haruto', 799.99, 'Handcrafted with love.', 'Sofa, Living Room'),
    array(12, 'Yuki', 649.99, 'Indulge in the dreamy comfort.', 'Sofa, Living Room'),
    array(13, 'Sora', 499.99, 'Elegance and coziness combine.', 'Sofa, Living Room'),
    array(14, 'Riku', 1199.99, 'Experience rustic charm.', 'Sofa, Living Room'),
    array(15, 'Kana', 799.99, 'Find solace in the cozy corner.', 'Sofa, Living Room'),
    array(16, 'Ren', 699.99, 'Add a touch of nostalgia.', 'Sofa, Living Room'),
    array(17, 'Mio', 899.99, 'Unbeatable comfort for relaxation.', 'Sofa, Living Room'),
    array(18, 'Hana', 849.99, 'Perfect for guests and style.', 'Sofa, Living Room'),
    array(19, 'Ginko', 966.99, 'New Sofa Design', 'Sofa, Living Room'),
    array(20, 'Hiyuri', 769.99, 'Elegant and Comfortable Sofa', 'Sofa, Living Room'),
    array(31, 'Kazuki', 499.99, 'Modern and Stylish Chair', 'Chair, Living Room'),
    array(32, 'Haru', 329.99, 'Comfortable Bedroom Chair', 'Chair, Bedroom'),
    array(33, 'Akihiko', 449.99, 'Elegant Living Room Chair', 'Chair, Living Room'),
    array(34, 'Yuta', 399.99, 'Stylish Living Room Chair', 'Chair, Living Room'),
    array(35, 'Takumi', 279.99, 'Home Office Chair', 'Chair, Home Office'),
    array(36, 'Satsuki', 349.99, 'Home Office Chair', 'Chair, Home Office'),
    array(37, 'Naomi', 299.99, 'Living Room Chair', 'Chair, Living Room'),
    array(38, 'Hiroto', 429.99, 'Comfortable Living Room Chair', 'Chair, Living Room'),
    array(39, 'Nao', 369.99, 'Stylish Living Room Chair', 'Chair, Living Room'),
    array(40, 'Akira', 449.99, 'Elegant Living Room Chair', 'Chair, Living Room'),
    array(41, 'Haruto', 799.99, 'Comfortable Bedroom Bed', 'Bed, Bedroom'),
    array(42, 'Kaori', 649.99, 'Elegant Bedroom Bed', 'Bed, Bedroom'),
    array(43, 'Yumi', 899.99, 'Luxurious Bedroom Bed', 'Bed, Bedroom'),
    array(44, 'Renzo', 1099.99, 'Elegant and Comfortable Bedroom Bed', 'Bed, Bedroom'),
    array(45, 'Keiko', 759.99, 'Stylish Bedroom Bed', 'Bed, Bedroom'),
    array(46, 'Masami', 899.99, 'Luxury Bedroom Bed', 'Bed, Bedroom'),
    array(47, 'Taiga', 699.99, 'Comfortable Bedroom Bed', 'Bed, Bedroom'),
    array(48, 'Saki', 849.99, 'Elegant Bedroom Bed', 'Bed, Bedroom'),
    array(49, 'Yukiya', 769.99, 'Stylish Bedroom Bed', 'Bed, Bedroom'),
    array(50, 'Ritsuko', 939.99, 'Luxurious Bedroom Bed', 'Bed, Bedroom'),
);

// SQL query to insert products
$sql = "INSERT INTO Products (ProductID, ProductName, ProductPrice, ProductDesc, Category) VALUES (?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind parameters and execute the statement for each product
foreach ($products as $product) {
    $stmt->bind_param("issds", $product[0], $product[1], $product[2], $product[3], $product[4]);
    $stmt->execute();
}

// Close the statement and the database connection
$stmt->close();
$conn->close();

echo "Records inserted successfully.";

?>