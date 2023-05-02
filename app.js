const imagesArray = ["image2.jpg", "image1.jpg", "image3.jpg", "image4.jpg", "Reba Monica John (1).jpg", "Reba Monica John (1).jpg"];
const main_section = document.getElementById('main_section');

const viewImage = document.getElementById('main_image');

imagesArray.forEach((value, key) =>{
    console.log(value);


    main_section.insertAdjacentHTML("beforeend", `<img src="images/`+value+`" alt="`+value+`" class="main_image" onClick="viewSelectedImage(`+key+`)" />`);

    console.log(main_section);
})

function viewSelectedImage(id){
    window.location.href = "/view.html?id=" + id;
}

function backToGallery(){
    window.location.href = "/";
}
