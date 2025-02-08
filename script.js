document.addEventListener("DOMContentLoaded", () => {
    const chatBtn = document.getElementById("chat-btn");
    const chatContainer = document.getElementById("chat-container");
    const closeChat = document.getElementById("close-chat");

    chatBtn.addEventListener("click", () => {
        chatContainer.classList.toggle("hidden");
    });

    closeChat.addEventListener("click", () => {
        chatContainer.classList.add("hidden");
    });
});
