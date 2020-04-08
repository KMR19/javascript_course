function openNewWindow(url) {
    var width = 600;
    var height = 300;
    var winSpecs = "width = " + width + ", height = " + height;
    // The open() method opens a new browser window, or a new tab.
    // URL parameter Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened.
    // name parameter Specifies the target attribute or the name of the window.
    // WindowFeatures parameter containing a comma-separated list of window features given with their corresponding values in the form "name=value". These features include options such as the window's default size and position, whether or not to include scroll bars, and so forth
    window.open(url, "subWindow", winSpecs)
}

function displayAlert() {
    // The alert() method displays an alert box with a specified message and an OK button.
    // message parameter Specifies the text to display in the alert box, or an object converted into a string and displayed.
    window.alert("Hi, This is alert box.");
}

function resizeWindow() {
    // The resizeBy() method resizes a window by the specified amount, relative to its current size.
    // This method moves the bottom right corner of the window by the specified number of pixels defined. The top left corner will not be moved (it stays in its original coordinates).
    // width parameter A positive or a negative number that specifies how many pixels to resize the width by
    // height parameter A positive or a negative number that specifies how many pixels to resize the height by
    window.resizeBy(-100, -100);
}

function moveWindow() {
    // The moveTo() method moves a window's left and top edge to the specified coordinates.
    //x parameter A positive or negative number that specifies the horizontal coordinate to be moved to
    //Y parameter A positive or negative number specifies the vertical coordinate to be moved to
    window.moveTo(500, 100);
}

function closeWindow() {
    // The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.The confirm() method returns true if the user clicked "OK", and false otherwise.
    // message Parameter Specifies the text to display in the confirm box
    if (window.confirm("Do you really want to close the browser ?")) {
        // The close() method closes the current window.
        window.close();
    }
}

function changeLocation() {
    // The frames property returns an array-like object, which represents all <iframe> elements in the current window.
    //The <iframe> elements can be accessed by index numbers. The index starts at 0.
    // frames.length used to find the number of frames.
    for (var i = 0; i < window.frames.length; i++) {
        // Loop through all frames on a page, and change the location of all frames to "https://www.wikipedia.org/":
        window.frames[i].location = "https://www.wikipedia.org/";
    }
}