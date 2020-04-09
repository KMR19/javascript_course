// When a event occurs and it calls its associated function, it also passes a single argument to the function — a reference to the event object. The event object contains a number of properties and methods that describe the event that occurred.
// All event types like mouseEvent, keyboardEvent etc. which belongs to event object has access to the Event Object's properties and methods.

function getEventDetails(event) {

    // The type event property returns the type of the triggered event.
    var eventDetails = "Event Name: " + event.type + "<br>" +

        // The clientX property returns the horizontal coordinate of the mouse pointer when a mouse event was triggered.
        "X Coordinate: " + event.clientX + "<br>" +

        // The clientY property returns the vertical coordinate of the mouse pointer when a mouse event was triggered.
        "Y Coordinate: " + event.clientY + "<br>" +

        // The target property returns the element that triggered the event. 
        "Target Type: " + event.target.type + "<br><br>" +
        "Target Node Name: " + event.target.nodeName + "<br>" +

        // The currentTarget property returns the element whose event listeners triggered the event.
        // The currentTarget property always refers to the element whose event listener triggered the event, opposed to the target property, which returns the element that triggered the event.
        "Current Target NodeName: " + event.currentTarget.nodeName + "<br><br>" +

        // The code property returns the key that triggered the keyboard event.
        "Name of Key Pressed: " + event.code + "<br>" +

        // The charCode property returns the Unicode character code of the key that triggered the onkeypress event.
        // If this property is used on onkeydown or onkeyup events, the returned value is always "0".
        "Unicode value of the key pressed: " + event.charCode + "<br>";

    document.getElementById("para1").innerHTML = eventDetails;

}

function simulateMouseOver(event) {

    // The createEvent() method Creates a new event.
    // The event can be of any legal event type like keyboardEvent, mouseEvent etc, and must be initialized before use.
    var x = document.createEvent("MouseEvent");

    // The initMouseEvent() method initializes the value of a mouse event once it's been created.
    // Events initialized in this way must have been created with the createEvent() method.
    // This method must be called to set the event before it is dispatched
    x.initMouseEvent("mouseover", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    // dispatchEvent() method Dispatches an Event at the specified EventTarget
    document.getElementById("myDiv").dispatchEvent(x);
}