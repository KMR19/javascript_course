// To react on events we can assign a handler – a function that runs in case of an event.
// Handlers are a way to run JavaScript code in case of user actions.
// There are several ways to assign a handler. they are using HTML Event Attribute, using DOM Property and using DOM EventListener.

// function to alert current date and time
function displayDate() {
    alert(Date());
}

// function to alert message
function displayMessage() {
    alert("Welcome to JavaScript");
}

// function to alert mouse over message
function displayMouseOver() {
    alert("Moused Over!");
}

// function to alert random number between 1 and 99 
function displayRandomNumber() {
    alert("Random Number: " + Math.floor(Math.random() * 100));
}

document.getElementById("myBtn").onclick = displayMessage;

// We can assign a handler using a DOM property on<event>. For example, element.onclick
// If the handler is assigned using an HTML event attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property. So DOM property way is actually the same as HTML event attribute
// The handler is always in the DOM property, the HTML event attribute is just one of the ways to initialize it.
// DOM properties are case-sensitive.
// The function should be assigned as displayDate without parentheses
// If we add parentheses, displayDate() – is a function call that actually takes the result of the function execution, that is undefined (as the function returns nothing), and assigns it to onclick. That doesn’t work.
document.getElementById("myBtn1").onclick = displayDate;
// we can’t assign more than one event handler to one event. adding a another handler overwrites the existing handler.
// To remove a handler – assign element.onclick = null.
document.getElementById("myBtn1").onclick = displayMessage;

// An alternative way of managing handlers using special methods are addEventListener and removeEventListener.
// The addEventListener() method attaches an event handler to the specified element
// The addEventListener() method allows you to add many events to the same element, without overwriting existing event handler.
// You can add events of different types to the same element
// You can add many event handlers of the same type to one element, i.e two "click" events.
// The first parameter is event - which is Event name,
// The second parameter is handler or function - which is The handler function.
// The third parameter is a boolean value specifying whether to use event bubbling or event capturing.
// you don't use the "on" prefix for the event
var button = document.getElementById("myBtn2");
button.addEventListener("click", displayDate);
button.addEventListener("click", displayMessage);
button.addEventListener("mouseover", displayMouseOver);

// To remove the handler, use removeEventListener. To remove a handler we should pass exactly the same function as was assigned.
button.removeEventListener("mouseover", displayMouseOver);

// The addEventListener() method allows you to add event handlers on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.
window.addEventListener("load", displayRandomNumber);
