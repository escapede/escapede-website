function moveSlide(step, sliderId) {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft += step * 300;
}

function toggleChat() {
    document.getElementById('chat-window').classList.toggle('active');
}

function sendMessage() {
    alert("AI Bot: We will get back to you soon!");
}
