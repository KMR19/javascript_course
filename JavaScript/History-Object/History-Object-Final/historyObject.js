function displayHistoryCount() {

    var historyCount = history.length;
    alert("Hi, You have visited " + historyCount + " web pages so far.");

}

function goForward() {
    history.forward();
}

function goBackward() {
    history.back();
}

function goToLink() {
    history.go(1);
}

function refresh() {
    history.go(0);
}