function countImages() {
    var totalImages = document.images.length;
    document.getElementById("para1").innerHTML = totalImages;
}

function addBorder() {

    var firstImage = document.images[0];
    firstImage.style.border = "10px solid red";
}

function displayImageURL() {
    var imageList = document.images;
    var imageUrl = "";

    for (var i = 0; i < imageList.length; i++) {
        imageUrl = imageUrl + imageList[i].src + "<br>"
    }

    document.getElementById("para2").innerHTML = imageUrl;
}