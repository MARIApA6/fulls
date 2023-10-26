const images = [

];



//const gallery = document.querySelector(`#gallery`);
//זה כמוx  imageNames ה
images.forEach(imageNames => {

    //  יצרנו אלמנט חדש
    const img = document.createElement(`img`);

    // הגדרנו עוד מאפיין 
    // הדולר זה לשרשר 
    img.src = `images/${imagesNames}`;

    // הופסנו את הילד-> התמונה-> לגלריה
    gallery.appendChild(img);
});