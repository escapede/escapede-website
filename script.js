document.getElementById("chat-toggle").addEventListener("click", function() {
    let chatContent = document.getElementById("chat-content");
    if (chatContent.style.display === "none" || chatContent.style.display === "") {
        chatContent.style.display = "block";
    } else {
        chatContent.style.display = "none";
    }
});
