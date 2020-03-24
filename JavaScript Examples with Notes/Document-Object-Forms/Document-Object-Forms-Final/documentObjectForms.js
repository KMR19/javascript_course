
// The forms collection returns a collection of all <form> elements in the document.
// forms[index] Returns the <form> element from the collection with the specified index (starts at 0). Returns null if the index number is out of range

function order() {

    var order = "Dear ";

    // Get the value of specified name attribute (name) of the first <form> element (index 0) in the document.
    order = order + document.forms[0].name.value;

    // Get the selected value from <select> element specified by name attribute (size). 
    order = order + ", You have ordered a laptop with size";
    if (document.forms[0].size.options[0].selected) {
        order = order + "small";
    }
    if (document.forms[0].size.options[1].selected) {
        order = order + "medium";
    }
    if (document.forms[0].size.options[2].selected) {
        order = order + "large";
    }

    // get the checked value from input type radio specified by name attribute (packaging) 
    order = order + ". The order will be delivered in a "
    if (document.forms[0].packaging[0].checked) {
        order = order + "cardboard box";
    }

    if (document.forms[0].packaging[1].checked) {
        order = order + "styrofoam-insulated container";
    }

    order = order + " to address: ";
    // Get the value of specified name attribute (address)
    order = order + document.forms[0].address.value;

    alert(order);

}