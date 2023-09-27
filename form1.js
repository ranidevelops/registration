console.log("here");

function validateForm() {
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("emailAddress").value;
    var age = document.getElementById("Age").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var dob = document.getElementById("dob").value;

    var firstNameErr = document.getElementById("first-name-err");
    var lastNameErr = document.getElementById("last-name-err");
    var emailErr = document.getElementById("email-err");
    var ageErr = document.getElementById("Age-number-err");
    var passwordErr = document.getElementById("password-err");
    var confirmPasswordErr = document.getElementById("confirm-password-err");
    var mobileNumberErr = document.getElementById("mobile-number-err");

    // Reset error messages
    firstNameErr.textContent = "";
    lastNameErr.textContent = "";
    emailErr.textContent = "";
    ageErr.textContent = "";
    passwordErr.textContent = "";
    confirmPasswordErr.textContent = "";
    mobileNumberErr.textContent = "";

    var isValid = true;

    // Basic validation examples (you can extend this with more complex rules)
    if (firstName.trim() === "") {
        firstNameErr.textContent = "First Name is required";
        isValid = false;
    }

    if (lastName.trim() === "") {
        lastNameErr.textContent = "Last Name is required";
        isValid = false;
    }

    if (email.trim() === "") {
        emailErr.textContent = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailErr.textContent = "Invalid email format";
        isValid = false;
    }

    if (isNaN(age) || age < 1) {
        ageErr.textContent = "Age must be a positive number";
        isValid = false;
    }

    if (password.length < 6) {
        passwordErr.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (password !== confirmPassword) {
        confirmPasswordErr.textContent = "Passwords do not match";
        isValid = false;
    }

    if (isNaN(mobileNumber) || mobileNumber.length !== 10) {
        mobileNumberErr.textContent = "Invalid mobile number";
        isValid = false;
    }

    if (dob.trim() === "") {
        alert("Date of Birth is required");
        isValid = false;
    }

    return isValid;
}

// function validateEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }
