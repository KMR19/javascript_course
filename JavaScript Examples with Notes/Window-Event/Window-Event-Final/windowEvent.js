// Alert some text when the web page has completely loaded all content (including images, script files, CSS files, etc.).
function loadFunction() {
    alert("Page is Loaded");
}

// return a custom message when the document is about to be unloaded but this only works in Internet Explorer.
function beforeUnload() {
    return "Changes you made may not be saved.";
}

// Alerts some text if an error occurs when loading the image.
function errorFunction() {
    alert("The image could not be loaded");
}

// Alert some text when the browser window has been resized.
function resizeFunction() {
    alert("You have changed the size of the browser window");
}