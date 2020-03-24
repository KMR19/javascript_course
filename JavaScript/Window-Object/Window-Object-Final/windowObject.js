function openNewWindow(url) {

    var width = 600;
    var height = 300;
    var winFeat = "width = " + width + ", height = " + height;

    window.open(url, "subWindow", winFeat);
}

function displayAlert() {
    alert("Hi, This is an alert box.");
}

function resizeWindow() {
    window.resizeBy(-100, -100);
}

function moveWindow() {
    window.moveTo(500, 100);
}

function closeWindow() {
    if (window.confirm("Do you really want to close the browser ?")) {
        window.close();
    }
}

function changeLocation() {
    for (var i = 0; i < window.frames.length; i++) {
        window.frames[i].location = "https://www.wikipedia.org/";
    }
}