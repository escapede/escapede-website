document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("img").forEach(img => {
        img.onerror = function() {
            this.src = "images/placeholder.jpg"; // Use a placeholder image if any image is broken
        };
    });
});
