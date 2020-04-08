
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {

    var username = document.applicationForm.username.value;
    var name = document.applicationForm.name.value;
    var email = document.applicationForm.email.value;
    var password = document.applicationForm.password.value;
    var mobile = document.applicationForm.mobile.value;
    var website = document.applicationForm.website.value;

    var userNameError = nameError = emailError = passwordError = mobileError = websiteError = true;

    if (username == "") {
        printError("userNameError", "Please enter your user name");
    } else {
        var regex = /^\w+$/;
        if (regex.test(username) === false) {
            printError("userNameError", "Username must contain only letters, numbers and underscores!")
        } else {
            printError("userNameError", "");
            userNameError = false;
        }
    }

    if (name == "") {
        printError("nameError", "Please enter your full name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameError", "Name must be in alphabets only")
        } else {
            printError("nameError", "");
            nameError = false;
        }
    }

    if (email == "") {
        printError("emailError", "Please enter your email");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailError", "Please enter a valid email address e.g me@mydomain.com")
        } else {
            printError("emailError", "");
            emailError = false;
        }
    }

    if (password == "") {
        printError("passwordError", "Please enter your password");
    } else {
        var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (regex.test(password) === false) {
            printError("passwordError", "Password must contain atleast one number and one uppercase and lowercase letter, and atleast 6 or more characters")
        } else {
            printError("passwordError", "");
            passwordError = false;
        }
    }

    if (mobile == "") {
        printError("mobileError", "Please enter your mobile number");
    } else {
        var regex = /^[0-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printError("mobileError", "Please enter a valid 10 digit mobile number")
        } else {
            printError("mobileError", "");
            mobileError = false;
        }
    }

    if (website == "") {
        printError("websiteError", "Please enter your website URL");
    } else {
        var regex = /https?\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}/;
        if (regex.test(website) === false) {
            printError("websiteError", "Please enter valid website URl https://domain.com")
        } else {
            printError("websiteError", "");
            websiteError = false;
        }
    }

    if ((userNameError || nameError || emailError || passwordError || mobileError || websiteError) == true) {
        return false;
    } else {

        var dataPreview = "You have entered the following details: \n" +
            "User Name: " + username + "\n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Password: " + password + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Website URL: " + website + "\n";

        alert(dataPreview);
    }

}