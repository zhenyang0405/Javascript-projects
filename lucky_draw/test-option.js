// Simple changing image one by one
function changeImage() {
    if (image == img1) {
        document.getElementById('pic').src = img2;
        image = img2;
    } else if (image == img2){
        document.getElementById('pic').src = img3;
        image = img3;
        select = selectedLucky();
    } else if (image == img3) {
        document.getElementById('pic').src = img4;
        image = img4;
        select = selectedLucky();
    } else if (image == img4) {
        document.getElementById('pic').src = img5;
        image = img5;
        select = selectedLucky();
    } else if (image == img5) {
        document.getElementById('pic').src = img6;
        image = img6;
    } else if (image == img6) {
        document.getElementById('pic').src = img7;
        image = img7;
    } else if (image == img7) {
        document.getElementById('pic').src = img8;
        image = img8;
    } else {
        document.getElementById('pic').src = img1;
        image = img1;
    }
}