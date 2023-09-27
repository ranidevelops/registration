document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        const firstName = document.getElementById("fname").value.trim();
        const lastName = document.getElementById("lname").value.trim();
        const email = document.getElementById("emailAddress").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();
        const mobileNumber = document.getElementById("mobileNumber").value.trim();
        const Age = document.getElementById("Age").value.trim();


        // Clear previous error messages
        clearErrors();

        if (firstName === "") {
            displayError("first-name-err", "First name is required.");
            displayError("");

            isValid = false;
        }

        if (lastName === "") {
            displayError("last-name-err", "Last name is required.");
            isValid = false;
        }

        if (email === "") {
            displayError("email-err", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            displayError("email-err", "Invalid email address.");
            isValid = false;
        }

        if (password === "") {
            displayError("password-err", "Password is required.");
            isValid = false;
        }else if (!isValidPass(password)) {
            displayError("password-err", " your password must contain eight characters, at least one uppercase letter, one lowercase letter and one number:");
            isValid = false;
        }

        if (confirmPassword === "") {
            displayError("confirm-password-err", "Confirm password is required.");
            isValid = false;
        } else if (password !== confirmPassword) {
            displayError("confirm-password-err", "Passwords do not match.");
            isValid = false;
        }

        if (mobileNumber === "") {
            displayError("mobile-number-err", "Mobile number is required.");
            isValid = false;
        }else if (!isValidMobile(mobileNumber)) {
            displayError("mobile-number-err", " your mobile number must start from10 digit - starting with 7 or 8 or 9");
            isValid = false;
        }
        if (Age === "") {
            displayError("Age-number-err", "Your is required.");
            isValid = false;
        }else if (!isValidAge(Age)) {
            displayError("Age-number-err", " your age is in number.");
            isValid = false;
        }
        if (!isValid) {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });

    function clearErrors() {
        const errorElements = document.querySelectorAll(".error");
        errorElements.forEach(function (element) {
            element.textContent = "";
        });
    }

    function displayError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.classList.add("error");
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function isValidPass(password){
        // Basic password validation regex
        const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    }
    function isValidMobile(mobileNumber){
        // Basic Mobile validation regex
        const MobileRegex=/^[0]?[6789]\d{9}$/;
        return MobileRegex.test(mobileNumber);
    }
    function isValidAge(isValidAge){
        // Basic age validation regex
        const AgeRegex=/^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/;
        return AgeRegex.test(Age);
    }
});