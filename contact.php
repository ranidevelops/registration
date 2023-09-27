<?php
    include('ConnectionDB.php');
    $fname = $_POST['fname'];
    // echo $fname;
    $lname = $_POST['lname'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    $gender = $_POST['gender'];
    $mobile = $_POST['mobile'];
    $dob=$_POST['dob'];
    $hobby=$_POST['hobby'];
    $country = $_POST['country'];
    $state=$_POST['state'];
    $city=$_POST['city'];

    
    // $sql = "INSERT INTO information (first name,last name, email,password ,Confrim password,gender, age,phone,dob,hobbies,country,state,city) 
    // VALUES ('$','$lname,$email,$password,$cpassword,$gender,$age,$age,$mobile,$dob,$hobby,$country,$state,$city)";
    $sql = "INSERT INTO `information` (`first name`, `last name`, `email`, `password`, `Confrim password`, `gender`, `age`, `phone`, `dob`, `hobbies`, `country`, `state`, `city`) VALUES ('$fname', '$lname', '$email', '$password', '$cpassword', '$gender', '$age', '$mobile', '$dob', '$hobby', '$country', '$state', '$city');" ;
    echo $sql;
    // if (mysqli_query($conn, $sql)) {
    //   echo "New record created successfully";
    // } else {
    //  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    // }
    // mysqli_close($conn);

    $result = $conn->query($sql);

    if(!$result){
        echo "error in query";
    }

    echo "successfully ";



?>