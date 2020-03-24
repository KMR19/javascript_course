
// The checkCookie function finds an existing cookie, it will display a greeting. If not, it will ask a user to enter his name. Then, it will save the new information and set a cookie.
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

// The setCookie function creates a cookie by adding together the cookie name, the cookie value, and the expires string (expiry).
function setCookie(cookiename, cookievalue, expiry) {

    // new Date() creates a new date object with the current date and time. By default, JavaScript will use the browser's time zone and display a date as a full text string.
    var date = new Date();

    // The internal clock in JavaScript starts at midnight January 1, 1970.
    // The getTime() method returns the number of milliseconds between midnight of January 1, 1970 and the specified date. 
    // expiry day is converted into miliseconds.
    // then The setTime() method sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970.
    date.setTime(date.getTime() + (expiry * 24 * 60 * 60 * 1000));

    // The toUTCString() method converts a Date object to a string, according to universal time.
    // The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
    // UTC time is the same as GMT time.
    var expires = "expires=" + date.toUTCString();

    // document.cookie property might be used to create, delete and read cookies.
    // By default, cookies are instantly deleted once you close the browser. However, a defined expiry date can be added to the cookies.
    // The path parameter specifies the path to which the cookie belongs. By default, the path is the current page.
    document.cookie = cookiename + "=" + cookievalue + ";" + expires + ";path=/";
}

// The getCookie function returns the value of a specified cookie. It takes the cookie name as a parameter, splits each element of the document.cookie into an array (cookieArray), then loops through all the elements and reads each value.
function getCookie(cookiename) {
    var name = cookiename + "=";
    // The decodeURIComponent() function decodes a URI component. It decodes special characters
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var c = cookieArray[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        // If a cookie is found c.indexOf(name) == 0, its value is returned, if not "" is returned:
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}