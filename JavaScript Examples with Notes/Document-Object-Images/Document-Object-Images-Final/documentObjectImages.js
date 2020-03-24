// The images collection returns a collection of all <img> elements in the document.
// The images collection does not return a collection of <input> elements with type="image".

function countImages() {

    //  length property returns the number of <img> elements in the collection.
    var totalImages = document.images.length;
    document.getElementById("para1").innerHTML = totalImages;
}

function addBorder() {

    // images[index] Returns the <img> element from the collection with the specified index (starts at 0). Returns null if the index number is out of range
    var firstImage = document.images[0];
    firstImage.style.border = "10px solid red";
}

function displayImageURL() {

    // The images collection returns a collection of all <img> elements in the document.
    var imageList = document.images;
    var imageUrl = "";

    // Loop through all <img> elements in the document, and output the URL (src) of each image:
    for (var i = 0; i < imageList.length; i++) {
        imageUrl = imageUrl + imageList[i].src + "<br>"
    }

    document.getElementById("para2").innerHTML = imageUrl;
}