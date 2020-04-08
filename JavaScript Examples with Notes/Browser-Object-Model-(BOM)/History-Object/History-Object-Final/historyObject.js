// The history object contains the URLs visited by the user (within a browser window).

// The history object is part of the window object and is accessed through the window.history property.

function displayHistoryCount() {

    // The length property returns the number of URLs in the history list of the current browser window. The property returns at least 1, because the list includes the currently loaded page and Maximum length of history list is 50.
    var historyCount = history.length;
    alert("Hi, You have visited " + historyCount + " web pages so far.");

}

// The forward() method loads the next URL in the history list. This is the same as clicking the "Forward button" in your browser, or history.go(1).
// This method will not work if the next page does not exist in the history list.
function goForward() {
    history.forward();
}

// The back() method loads the previous URL in the history list. This is the same as clicking the "Back button" in your browser, or history.go(-1).
// This method will not work if the previous page does not exist in the history list.
function goBackward() {
    history.back();
}

// The go() method loads a specific URL from the history list.
// The parameter can either be a number which goes to the URL within the specific position (-1 goes back one page, 1 goes forward one page, 2 goes forward two page, -2 goes back two page) or a string.
// The string parameter must be a partial or full URL, and the function will go to the first URL that matches the string.
function goToLink() {
    history.go(1);
}

// The go() method with parameter 0 refresh or reloads current page
function refresh() {
    history.go(0);
}