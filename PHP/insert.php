<!-- Start PHP -->
<?php

// PHP file that will insert user input data into the "Messages" table in the "Cost Of Living Comparator" DB from the form

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
    echo "<h1 style='color:green; text-transform:uppercase;'>Connection established and data entered into the 'Messages' table.</h1>";
    echo "<br/> <br/>";
} catch (PDOException $ex) {

    // If unsuccessful
    echo "<h1 style='color:red; text-transform:uppercase;'>Connection failed with error code: </h1>" . $ex->getMessage();
}

// Query to get and insert user data
$query = $connection -> prepare ('INSERT INTO Messages (first_name, last_name, email_address, message) VALUES (?, ?, ?, ?)');

// Bind values parameters to local variables
$query -> bindParam(1, $first_name);
$query -> bindParam(2, $last_name);
$query -> bindParam(3, $email_address);
$query -> bindParam(4, $message);

// Assign data from form to local variables
$first_name = $_POST['f_name'];
$last_name = $_POST['l_name'];
$email_address = $_POST['email'];
$message = $_POST['message'];

// Execute the query
$query -> execute();

// Reset the connection
$connection = null;

// Print Message
echo 'Hi '.$first_name .' ' .$last_name .' thanks for your interest.</br>'; 
echo 'We will contact you at '. $email_address.' as soon as possible.</br>'; 

?>
<!-- End PHP -->