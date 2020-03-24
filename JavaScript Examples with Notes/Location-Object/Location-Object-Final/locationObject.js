// The location object contains information about the current URL.
// The location object is part of the window object and is accessed through the window.location property.

function getURL() {

    //The href property sets or returns the entire URL of the current page.
    document.getElementById("para1").innerHTML = location.href;

    // The protocol property sets or returns the protocol of the current URL, including the colon (:).
    // It takes value as protocol of the URL,
    // Possible values are file:, ftp:, http:, https:, mailto:
    document.getElementById("para2").innerHTML = location.protocol;

    // The hostname property sets or returns the hostname, domain name or the IP address of a URL.
    // It takes value as hostname, domain name, or the IP address of a URL
    document.getElementById("para3").innerHTML = location.hostname;

    // The pathname property sets or returns the pathname of a URL.
    // It takes value as pathname of the URL
    document.getElementById("para4").innerHTML = location.pathname;

}

function loadPage() {

    //Set the href property value to specified URL.
    // It takes value as URL, representing the entire URL of the page, including the protocol (like http://)
    // Possible values are 
    // An absolute URL - points to another web site (location.href="http://www.example.com/default.html")
    // A relative URL - points to a file within a web site (location.href="default.html")
    // An anchor URL - points to an anchor within a page (location.href="#top")  
    // A new protocol - specifies a different protocol (location.href="ftp://someftpserver.com", location.href="mailto:someone@example.com" or location.href="file://host/path/example.txt")

    location.href = "https://www.wikipedia.org/";
}

function loadNewDocument() {

    // The assign() method loads a new document.
    // It takes parameter of URL which Specifies the URL of the page to navigate to.
    location.assign("https://www.wikibooks.org/");
}

function reloadPage() {

    // The reload() method is used to reload the current document.
    // The reload() method does the same as the reload button in your browser.
    // By default, the reload() method reloads the page from the cache, but you can force it to reload the page from the server by setting the forceGet parameter to true.
    // It takes parameter of forceGet Specifies the type of reloading, 
    // false is Default which Reloads the current page from the cache.
    // true which Reloads the current page from the server
    location.reload(true);
}