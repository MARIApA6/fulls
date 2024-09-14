const images = ["תמונה (1).jpg", "תמונה (2).jpg", "תמונה (3).jpg", "תמונה (4).jpg", "תמונה (5).jpg", "תמונה (6).jpg"];

let currentImage = 0;

function nextImage() {

    if (currentImage >= images.length) {
        currentImage = 0;
    }
    const gallery = document.querySelector('#gallery');
    gallery.innerHTML = "";

    const img = document.createElement('img');
    img.src = `images/${images[currentImage]}`;
    gallery.appendChild(img);
    currentImage++;
}

nextImage();


//const gallery = document.querySelector('#gallery');
//זה כמוx  imageNames ה
//images.forEach(imageNames => {

    //  יצרנו אלמנט חדש
   // const img = document.createElement('#img');

    // הגדרנו עוד מאפיין
    // הדולר זה לשרשר
    //img.src = 'images/${imagesNames}';

    // הופסנו את הילד-> התמונה-> לגלריה
  //  gallery.appendChild(img);
//});