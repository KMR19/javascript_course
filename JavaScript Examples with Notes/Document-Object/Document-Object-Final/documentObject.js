function displayActiveElement() {

    // The activeElement property returns the currently focused element in the document.
    var activeElement = document.activeElement.tagName;
    document.getElementById("para").innerHTML = activeElement;

}

function displayDocumentProperties() {

    // The URL property returns the full URL of the current HTML document.
    document.getElementById("para1").innerHTML = document.URL;

    // The readyState property returns the (loading) status of the current document.
    document.getElementById("para2").innerHTML = document.readyState;

    // The title property sets or returns the title of the current document (the text inside the HTML title element).
    document.getElementById("para3").innerHTML = document.title;

    // The domain property returns the domain name of the server that loaded the current document.
    document.getElementById("para4").innerHTML = document.domain;

}

displayDocumentProperties();

function getElements() {

    // The window.open() method opens a new browser window, or a new tab.
    // URL parameter Specifies the URL of the page to open. If no URL is specified, a new window/tab with about:blank is opened.
    // name parameter Specifies the target attribute or the name of the window.
    // WindowFeatures parameter containing a comma-separated list of window features given with their corresponding values in the form "name=value". These features include options such as the window's default size and position, whether or not to include scroll bars, and so forth
    new_window = window.open("", "newWindow");

    // The document.open() method opens an output stream to collect the output from any document.write() or document.writeln() methods.
    // It accepts MIMEtype parameter specifies the type of document you are writing to. Default value is "text/html"
    // An automatic document.open() call happens when document.write() is called after the page has loaded.
    new_window.document.open();

    // The getElementById() method returns the element that has the ID attribute with the specified value.
    // Returns null if no elements with the specified ID exists.
    // An ID should be unique within a page. However, if more than one element with the specified ID exists, the getElementById() method returns the first element in the source code.
    var firstName = document.getElementById("firstname").value;

    // The getElementsByName() method returns a collection of all elements in the document with the specified name (the value of the name attribute)
    var lastName = document.getElementsByName("lastname")[0].value;

    // The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name,
    var description = document.getElementsByTagName("textarea")[0].value;

    // The write() method writes HTML expressions or JavaScript code to a document.
    // The write() method is mostly used for testing. If it is used after an HTML document is fully loaded, it will delete all existing HTML.
    new_window.document.write("<b>Your Full Name is:</b>" + firstName + " " + lastName + "<br>");
    new_window.document.write("<b>Description is:</b>" + description);

    // The close() method closes the output stream previously opened with the document.open() method, and displays the collected data in this process.
    new_window.document.close();

}