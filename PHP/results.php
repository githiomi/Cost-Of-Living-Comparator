<!-- Start PHP -->
<?php

// PHP file that will return the data from the "Messages" table in the "Backpacker's Hostel" DB

// Connection constants:
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "backpackers_hostel";

// Connect to the database
try {

    // Set up connection parameters
    $connection = new PDO("mysql:host=$servername; dbname=$databasename", $username, $password);
    $connection->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // If successful
    echo "<h1 style='color:green; text-transform:uppercase;'>Connection established and reults from the 'Messages' table retrieved.</h1>";
    echo "<br/> <br/>";
} catch (PDOException $ex) {

    // If unsuccessful
    echo "<h1 style='color:red; text-transform:uppercase;'>Connection failed with error code: </h1>" . $ex->getMessage();
}

// Get all the rows from the 'messages' table
$query = $connection -> prepare('SELECT * FROM messages');

// Execute the query
$query -> execute();

// Create a varible to hold the results
$results = $query -> fetchAll(PDO::FETCH_ASSOC);

// Loop through alll results and print
foreach ($results as $row) {
    echo "<br/>";
    echo "<span style='font-weight:bold'>Message id:</span>" .$row['id'] . "<br />";
    echo $row['first_name'] . "<br />"; 
    echo $row['last_name'] . "<br />"; 
    echo $row['email_address'] . "<br />"; 
    echo $row['message'] . "<br />"; 
    echo "<hr />";
}

// Reset the connection
$connection = null;

?>
<!-- END PHP -->