function order() {

    var order = "Dear ";
    order = order + document.forms[0].name.value;

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

    order = order + ". The order will be delivered in a "
    if (document.forms[0].packaging[0].checked) {
        order = order + "cardboard box";
    }

    if (document.forms[0].packaging[1].checked) {
        order = order + "styrofoam-insulated container";
    }

    order = order + " to address: ";
    order = order + document.forms[0].address.value;

    alert(order);

}