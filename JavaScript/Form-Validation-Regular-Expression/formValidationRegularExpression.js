// https://www.tutorialrepublic.com/javascript-tutorial/javascript-form-validation.php

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

    var name = document.applicationForm.name.value;
    var password = document.applicationForm.password.value;
    var confirmpassword = document.applicationForm.confirmpassword.value;
    var email = document.applicationForm.email.value;
    var mobile = document.applicationForm.mobile.value;
    var country = document.applicationForm.country.value;
    var gender = document.applicationForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }

    var nameError = passwordError = confirmPasswordError = emailError = mobileError = countryError = genderError = hobbiesError = true;

    if (name == "") {
        printError("nameError", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameError", "Please enter a valid name");
        } else {
            printError("nameError", "");
            nameError = false;
        }
    }

    if (password == "") {
        printError("passwordError", "Please enter your password");
    }

    if (confirmpassword == "") {
        printError("confirmPasswordError", "Please enter confirm password");
    }

    if (email == "") {
        printError("emailError", "Please enter your email address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address");
        } else {
            printError("emailError", "");
            emailError = false;
        }
    }

    if (mobile == "") {
        printError("mobileError", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileError", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileError", "");
            mobileError = false;
        }
    }

    if (country == "Select") {
        printError("countryError", "Please select your country");
    } else {
        printError("countryError", "");
        countryError = false;
    }

    if (gender == "") {
        printError("genderError", "Please select your gender");
    } else {
        printError("genderError", "");
        genderError = false;
    }

    if (hobbies == "") {
        printError("hobbiesError", "Please select your hobbies");
    } else {
        printError("hobbiesError", "");
        hobbiesError = false;
    }

    if ((nameError || passwordError || confirmPasswordError || emailError || mobileError || countryError || genderError || hobbiesError) == true) {
        return false;
    } else {

        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }

        alert(dataPreview);
    }
};