function getEventDetails(event) {

    var eventDetails = "Event Name: " + event.type + "<br>" +
        "X Coordinate: " + event.clientX + "<br>" +
        "Y Coordinate: " + event.clientY + "<br>" +
        "Target Type: " + event.target.type + "<br><br>" +
        "Target Node Name: " + event.target.nodeName + "<br>" +
        "Current Target NodeName: " + event.currentTarget.nodeName + "<br><br>" +
        "Name of Key Pressed: " + event.code + "<br>" +
        "Unicode value of the key pressed: " + event.charCode + "<br>";

    document.getElementById("para1").innerHTML = eventDetails;

}

function simulateMouseOver(event) {

    var x = document.createEvent("MouseEvent");
    x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    document.getElementById("myDiv").dispatchEvent(x);
}