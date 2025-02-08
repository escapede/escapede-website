// Chatbox Toggle
document.querySelector('.chat-toggle').addEventListener('click', function() {
    document.querySelector('.chat-content').style.display = 'block';
});

document.querySelector('.chat-close').addEventListener('click', function() {
    document.querySelector('.chat-content').style.display = 'none';
});

// Navigation Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
