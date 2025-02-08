document.addEventListener("DOMContentLoaded", function() {
    // Booking Form Submission
    document.getElementById("booking-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you! Your booking request has been received.");
    });

    // Chatbox Toggle
    document.querySelector(".chat-toggle").addEventListener("click", function() {
        document.querySelector(".chat-content").classList.toggle("visible");
    });
});
