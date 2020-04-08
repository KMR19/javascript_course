function getURL() {

    document.getElementById("para1").innerHTML = location.href;

    document.getElementById("para2").innerHTML = location.protocol;

    document.getElementById("para3").innerHTML = location.hostname;

    document.getElementById("para4").innerHTML = location.pathname;

}

function loadPage() {
    location.href = "https://www.wikipedia.org/";
}

function loadNewDocument() {
    location.assign("https://www.wikibooks.org/");
}

function reloadPage() {
    location.reload(true);
}