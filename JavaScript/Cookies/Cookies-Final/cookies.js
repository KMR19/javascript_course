function checkCookie() {

    var user = getCookie("username");

    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    }
}

function setCookie(cookiename, cookievalue, expiry) {
    var date = new Date();
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 100));
    var expires = "expires=" + date.toUTCString();

    document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

function getCookie(cookiename) {
    var name = cookiename + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}