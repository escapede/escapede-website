document.getElementById('chat-toggle').addEventListener('click', function() {
    var chat = document.getElementById('chat-container');
    if (chat.style.display === "none") {
        chat.style.display = "block";
    } else {
        chat.style.display = "none";
    }
});

document.getElementById('send-message').addEventListener('click', function() {
    alert("AI Bot: We will get back to you soon!");
});
