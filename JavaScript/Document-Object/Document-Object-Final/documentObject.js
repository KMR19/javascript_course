function displayActiveElement() {

    var activeElement = document.activeElement.tagName;
    document.getElementById("para").innerHTML = activeElement;

}

function displayDocumentProperties() {

    document.getElementById("para1").innerHTML = document.URL;
    document.getElementById("para2").innerHTML = document.readyState;
    document.getElementById("para3").innerHTML = document.title;
    document.getElementById("para4").innerHTML = document.domain;

}

displayDocumentProperties();

function getElements() {

    new_window = window.open("", "newWindow");

    new_window.document.open();

    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementsByName("lastname")[0].value;
    var description = document.getElementsByTagName("textarea")[0].value;

    new_window.document.write("<b>Your Full Name is:</b>" + firstName + " " + lastName + "<br>");
    new_window.document.write("<b>Description is:</b>" + description);

    new_window.document.close();

}