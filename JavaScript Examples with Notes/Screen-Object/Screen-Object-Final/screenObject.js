// The screen object contains information about the visitor's screen.

function displayScreenObject() {

    // The height property returns the total height of the user's screen, in pixels.
    document.getElementById("para1").innerHTML = screen.height;

    // The width property returns the total width of the user's screen, in pixels.
    document.getElementById("para2").innerHTML = screen.width;

    // The availHeight property returns the height of the user's screen, in pixels, excluding the Windows Taskbar.
    document.getElementById("para3").innerHTML = screen.availHeight;

    // The availWidth property returns the width of the user's screen, in pixels,excluding the Windows Taskbar
    document.getElementById("para4").innerHTML = screen.availWidth;

    // The colorDepth property returns the bit depth of the color palette for displaying images (in bits per pixel).
    document.getElementById("para5").innerHTML = screen.colorDepth;

    // The pixelDepth property returns the color resolution (in bits per pixel) of the visitor's screen.
    document.getElementById("para6").innerHTML = screen.pixelDepth;


}

displayScreenObject();