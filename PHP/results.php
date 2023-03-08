<!-- Start PHP -->
<?php

// PHP file that will return the data from the "Messages" table in the "Cost Of Living Comparator" DB

// Connection constants:
$servername = "localhost";
$username = "root";
$password = "";
$databasename = "cost_of_living_comparator";

// Connect to the database
try {

    // Set up connection parameters
    $connection = new PDO("mysql:host=$servername; dbname=$databasename", $username, $password);
    $connection->SetAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // If successful
    echo "<h1 style='color:green; text-transform:uppercase;'>Connection established and results from the 'Messages' table retrieved.</h1>";
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
    echo "<span style='font-weight:bold'>Message id:</span> " .$row['id'] . "<br />";
    echo "<span style='font-weight:bold'>First Name:</span> " .$row['first_name'] . "<br />"; 
    echo "<span style='font-weight:bold'>Last Name:</span> " .$row['last_name'] . "<br />"; 
    echo "<span style='font-weight:bold'>Email Address:</span> " .$row['email_address'] . "<br />"; 
    echo "<span style='font-weight:bold'>Message sent:</span> " .$row['message'] . "<br />"; 
    echo "<hr />";
}

// Reset the connection
$connection = null;

?>
<!-- END PHP -->