// Modal open
function openModal(videoId) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    modal.style.display = 'block';
}

// Modal close
function closeModal() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('modalVideo');
    iframe.src = ''; // Az iframe escape
    modal.style.display = 'none';
}

// Close with ESC
window.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        closeModal();
    }
});