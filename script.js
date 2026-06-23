let images = [
"image1.jpg",
"nature2.jpg",
"wildlife.jpg",
"naure.jpg"
];


let current = 0;



function openLightbox(src){

document.getElementById("lightbox")
.style.display="flex";


document.getElementById("lightbox-img")
.src=src;


current=images.indexOf(src);

}



function closeLightbox(){

document.getElementById("lightbox")
.style.display="none";

}



function nextImage(){

current++;

if(current>=images.length)
current=0;


document.getElementById("lightbox-img")
.src=images[current];

}




function previousImage(){

current--;

if(current<0)
current=images.length-1;


document.getElementById("lightbox-img")
.src=images[current];

}




function filterImages(category){


let imgs=document.querySelectorAll(".gallery img");


imgs.forEach(img=>{


if(category=="all" ||
img.classList.contains(category))
{

img.style.display="block";

}

else{

img.style.display="none";

}


});


}