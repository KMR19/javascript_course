// The navigator object contains information about the browser.

function displayNavigator() {

    // The appName property returns the name of the browser.
    // IE11, Firefox, Chrome and Safari returns "Netscape"
    // IE 10 and earlier versions return "Microsoft Internet Explorer"
    // Opera returns "Opera"
    document.getElementById("para1").innerHTML = navigator.appName;

    // The appVersion property returns the version information of the browser.
    document.getElementById("para2").innerHTML = navigator.appVersion;

    // The appCodeName property returns the code name of the browser.
    document.getElementById("para3").innerHTML = navigator.appCodeName;

    // The platform property returns for which platform the browser is compiled like Win32, HP-UX, Linux i686, Linux armv7l, SunOS, WinCE etc.
    document.getElementById("para4").innerHTML = navigator.platform;

    // The userAgent property returns the value of the user-agent header sent by the browser to the server.
    // The value returned, contains information about the name, version and platform of the browser.
    document.getElementById("para5").innerHTML = navigator.userAgent;

    // The cookieEnabled property returns a Boolean value that specifies whether cookies are enabled in the browser.
    // Returns true if enabled, otherwise it returns false
    document.getElementById("para6").innerHTML = navigator.cookieEnabled;

    // The language property returns the language version of the browser.
    // Examples of valid language codes are: "en", "en-US", "de", "fr", etc.
    document.getElementById("para7").innerHTML = navigator.language;

    // The product property returns the engine name of the browser.
    // All browsers returns "Gecko".
    document.getElementById("para8").innerHTML = navigator.product;

    // The javaEnabled() method returns a Boolean value that specifies whether the browser has Java enabled.
    // Returns true if enabled, false if not.
    document.getElementById("para9").innerHTML = navigator.javaEnabled();


}

displayNavigator();