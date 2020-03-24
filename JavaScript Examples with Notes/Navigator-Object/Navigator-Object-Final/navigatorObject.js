function displayNavigator() {
    document.getElementById("para1").innerHTML = navigator.appName;

    document.getElementById("para2").innerHTML = navigator.appVersion;

    document.getElementById("para3").innerHTML = navigator.appCodeName;

    document.getElementById("para4").innerHTML = navigator.platform;

    document.getElementById("para5").innerHTML = navigator.userAgent;

    document.getElementById("para6").innerHTML = navigator.cookieEnabled;

    document.getElementById("para7").innerHTML = navigator.language;

    document.getElementById("para8").innerHTML = navigator.product;

    document.getElementById("para9").innerHTML = navigator.javaEnabled();


}

displayNavigator();