<?php
// Establish a database connection
$mysqli = new mysqli("localhost", "root", "admin123", "registration");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Retrieve form data
$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$phone_number = $_POST["phone_number"];
$email = $_POST["email"];
$password = password_hash($_POST["password"], PASSWORD_DEFAULT); // Hash the password for security
$country = $_POST["country"];
$state = $_POST["state"];
$city = $_POST["city"];

// Insert form data into the database
$sql = "INSERT INTO contact_form_data (first_name, last_name, phone_number, email, password, country, state, city)
        VALUES ('$first_name', '$last_name', '$phone_number', '$email', '$password', '$country', '$state', '$city')";

if ($mysqli->query($sql) === TRUE) {
    echo "Form data submitted successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}

// Close the database connection
$mysqli->close();
?>
