const imagesArray = ["image2.jpg", "image1.jpg", "image3.jpg", "image4.jpg", "Reba Monica John (1).jpg", "Reba Monica John (1).jpg"];

const viewImage = document.getElementById('main_image');

const url = window.location.href;
let urlString = new URL(url);
let id = urlString.searchParams.get("id");
console.log(id);

console.log(imagesArray[id]);

document.getElementById("view_image").src = "images/" + imagesArray[id];


function backToGallery() {
    window.location.href = "/";
}

function nextImage() {
    console.log(id);
    id = parseInt(id) + 1;
    // document.getElementById("view_image").src = "images/" + imagesArray[id];

    window.location.href = '/view.html?id=' + id;
}
