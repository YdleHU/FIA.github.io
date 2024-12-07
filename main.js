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


// Second Modal
const modal1 = document.getElementById('modal1');
const tournamentsBtn = document.getElementById('tournaments-btn');
const closeBtn = document.getElementById('close-btn');

// Gomb kattintás eseménye
tournamentsBtn.addEventListener('click', () => {
    modal1.style.display = 'flex'; // Modal megjelenítése
});

// Modal bezárás gomb kattintás eseménye
closeBtn.addEventListener('click', () => {
    modal1.style.display = 'none'; // Modal elrejtése
});

// Modal bezárása ha valaki a modal hátterére kattint
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal1.style.display = 'none'; // Modal elrejtése
    }
});