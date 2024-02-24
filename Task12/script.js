let slider_img = document.querySelector(".slider-img");
let images = ["img.jpg", "img2.jpg", "img3.jpg"];
let i = 0;


function back() {
    if (i <= 0) 
    i = images.length;
    --i;
    return setImg();
}

function next() {
    if (i >= images.length - 1) i = -1;
    ++i;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute('src', "Images/"+images[i]);
}