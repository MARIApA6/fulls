class Gallery {
    currentIndex: number;
    constructor(private elemId: string, private images: string[]) {

        const elem = document.getElementById(elemId);
        const img = document.createElement('img');
        img.src = "../images/" + images[0];

        elem?.appendChild(img);
    }
}
const gallery1 = new Gallery("g1", ["1תמונה.jpg", "2תמונה.jpg", "3תמונה.jpg", "4תמונה.jpg"]);
const gallery2 = new Gallery("g2", ["5תמונה.jpg", "6תמונה.jpg", "7תמונה.jpg", "8תמונה.jpg", "9תמונה.jpg"]);