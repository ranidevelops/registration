<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration form</title>
    <link rel="stylesheet" href="form.css">
    <!-- <script
			  src="https://code.jquery.com/jquery-3.7.1.min.js"
			  integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
			  crossorigin="anonymous"></script> -->
    <script src="form1.js"></script>          
    
</head>
<body>
<form method="post" action="contact.php"  onsubmit="return validateForm(); > 

<div class ="container">  

<!-- <center>   </center>   -->
<h1 style="text-align: center">Registeration Form</h1>
<hr>  

<label> <b>Firstname</b> </label>   

<input type="text"  id ="fname"name="fname" placeholder= "enter your first name:" size="50" /> 
<div id="first-name-err"></div>
<br>

<label> <b>lastname</b> </label>   

<input type="text"  id ="lname" name="lname" placeholder= "enter your last name:" size="50"  /> 
<div id="last-name-err"></div>
<br>

<label for="email"><b>Email</b></label>  

<input type="text" id="emailAddress" placeholder="Enter Email" name="email" > 
<div id="email-err"></div> 

<label for="age"><b>Age</b></label>  

<input type="number" id="Age" placeholder="Enter Age" name="age" >
<div id="Age-number-err"></div> 
<br> 
<lable for="password"><b>enter password:</b>
<input type="password" placeholder="Enter your password " id="password"name="password"> 
<div id="password-err"></div>
<br> 
<b for="password"><b>confrim password:</b>
<input type="password"  id="confirmPassword"placeholder="confrim your password " name="cpassword" > 

<div id="confirm-password-err"></div>
<br> 



<div>  

<label>   

<b>Gender : </b> 

</label><br>  

<input type="radio" value="Male" name="gender"  value=m> Male   

<input type="radio" value="Female" name="gender" value=f> Female   

<input type="radio" value="Other" name="gender" value=o> Other  

</div>  
<b>Phone No.</b> 
<input type="text" id="mobileNumber" placeholder="Mobile Nubmer" name="mobile">
<div id="mobile-number-err"></div>
<b>DOB:</b><input type="date" id="dob" name="dob"><br><br>
<b>Hobbies:</b><br><input type="checkbox" id="hobby" name="hobby">playing
<input type="checkbox" name ="hobby">Dancing
<input type="checkbox" name ="hobby">Reading
<input type="checkbox" name ="hobby">other<br><br>
<b>Country:<b><select name="country" class= "select" id="select"></select>
<b>State:</b><select name="state" class= "select" id="state"></select>
<b>City:</b><select name="city" class= "select" id="city"></select><br>  

<button type="submit" class="registerbtn">Register</button>    

</form>  
<!-- <script>
    $(document).ready(function(){
  $("input").click(function(){
    $(this).clearErrors().hide();
  });
});
</script> -->



<!-- <script src="form.js"></script> -->
</body>
</html>