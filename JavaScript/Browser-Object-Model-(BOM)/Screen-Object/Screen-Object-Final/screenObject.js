function displayScreenObject() {

    document.getElementById("para1").innerHTML = screen.height;

    document.getElementById("para2").innerHTML = screen.width;

    document.getElementById("para3").innerHTML = screen.availHeight;

    document.getElementById("para4").innerHTML = screen.availWidth;

    document.getElementById("para5").innerHTML = screen.colorDepth;

    document.getElementById("para6").innerHTML = screen.pixelDepth;


}

displayScreenObject();