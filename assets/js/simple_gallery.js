/**
 * Excalibur by Diogo Cordeiro
 * https://www.diogo.site/
 * Released for free under the Creative Commons Attribution 3.0 license
 */
document.getElementById("gallery-controller").style="display:inline";
let slideIndex = 1;
let x = document.getElementsByClassName("gallery_image");
showDivs(slideIndex);

function plusDivs(n) {
    document.getElementById("click" + slideIndex).className.replace("active_gallery_button", "");
    slideIndex += n;
    if (slideIndex > x.length) {
        slideIndex = 1
    }
    if (slideIndex < 1) {
        slideIndex = x.length
    }
    document.getElementById("click" + slideIndex).classList.add("active_gallery_button");
    showDivs(slideIndex);
}

function currentDiv(n) {
    document.getElementById("click" + slideIndex).className.replace("active_gallery_button", "");
    document.getElementById("click" + n).classList.add("active_gallery_button");
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let dots = document.getElementsByClassName("gallery_numerical_button");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace("active_gallery_button", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active_gallery_button");
}
