document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".slider img");
    let index = 0;

    function slideShow() {
        images[index].style.display = "none";
        index = (index + 1) % images.length;
        images[index].style.display = "block";
    }

    images.forEach(img => img.style.display = "none");
    images[0].style.display = "block";
    setInterval(slideShow, 3000);
});
