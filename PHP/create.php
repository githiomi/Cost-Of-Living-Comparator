<!-- Start PHP -->
<?php

// PHP file that will create the "Messages" table in the "Backpacker's Hostel" DB

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
    echo "<h1 style='color:green; text-transform:uppercase;'>Connection established and 'Messages' table created.</h1>";
    echo "<br/> <br/>";
} catch (PDOException $ex) {

    // If unsuccessful
    echo "<h1 style='color:red; text-transform:uppercase;'>Connection failed with error code: </h1>" . $ex->getMessage();
}

// Create a query
$query = $connection -> prepare ("CREATE TABLE Messages (
    id int(6) NOT NULL auto_increment,
    first_name varchar(15) NOT NULL,
    last_name varchar(15) NOT NULL,
    email_address varchar(30) NOT NULL,
    message varchar(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE id (id),
    KEY id_2 (id))");

// Execute the query
$query -> execute();

// Reset the connection
$connection = null;

?>
<!-- End of PHP -->