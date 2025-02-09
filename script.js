function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "block";
    } else {
        chatbox.style.display = "none";
    }
}

function sendMessage() {
    var input = document.getElementById("chatInput").value;
    if (input) {
        alert("AI Bot: We will get back to you soon!");
        document.getElementById("chatInput").value = "";
    }
}
