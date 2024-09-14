const images = ["תמונה (1).jpg", "תמונה (2).jpg", "תמונה (3).jpg", "תמונה (4).jpg", "תמונה (5).jpg", "תמונה (6).jpg"];

let currentImage = -1;
let myInterval;

function nextImage() {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    const img = document.querySelector('#gallery img');
    img.src = `images/${images[currentImage]}`;

    startAuto();
}

nextImage();

function prevImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    const img = document.querySelector('#gallery img');
    img.src = `images/${images[currentImage]}`;

    startAuto();
}

window.addEventListener('keydown', ev => {
    if (ev.key == 'ArrowRight') {
        prevImage();
    } else if (ev.key == 'ArrowLeft') {
        nextImage();
    }
});

function startAuto() {
    // קודם כל מנקים את האינטרבל הקודם
    stopAuto();

    // מתחילים אינטרבל חדש
    myInterval = setInterval(nextImage, 3 * 1000);
}

function stopAuto() {
    clearInterval(myInterval);
}

// זאת אומרת שבונים פה פונקציה (פעולה ) לכל דבר ואז ממקמים את הפעולה עם סוגריים () רגילים בכל מקום שיש צורך לפעולה .עם זה לעצור להמשיך וכו
// לשים לב לטעיות  בccs  
//מאוד חשוב ומשפיע על כל מה שרואים מתבצע 