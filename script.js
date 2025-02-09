// Slider functionality
document.addEventListener("DOMContentLoaded", function () {
    let sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        slider.scrollLeft = 0;
    });
});

// AI Chatbox Toggle
document.querySelector(".chat-toggle").addEventListener("click", function () {
    let chatContent = document.querySelector(".chat-content");
    chatContent.style.display = chatContent.style.display === "block" ? "none" : "block";
});

// Send Chat
document.querySelector("#send-chat").addEventListener("click", function () {
    alert("AI Bot: We will get back to you soon!");
});
