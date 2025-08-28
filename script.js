    // Dark Mode Toggle
    function toggleDarkMode() {
        document.body.classList.toggle('dark');
    }

    // Likes
    document.addEventListener("DOMContentLoaded", () => {
        for (let i = 1; i <= 3; i++) {
            let count = localStorage.getItem(`game${i}-likes`) || 0;
            document.getElementById(`like-count-${i}`).textContent = `${count} Likes`;
        }
    });

    function likeGame(gameId) {
        let key = `game${gameId}-likes`;
        let count = parseInt(localStorage.getItem(key) || 0);
        count++;
        localStorage.setItem(key, count);
        document.getElementById(`like-count-${gameId}`).textContent = `${count} Likes`;
    }

    // Search Filter
    document.getElementById('search').addEventListener('input', function() {
        let searchValue = this.value.toLowerCase();
        document.querySelectorAll('.game-card').forEach(card => {
            let title = card.dataset.title.toLowerCase();
            card.style.display = title.includes(searchValue) ? 'block' : 'none';
        });
    });

    // Modal
    function openModal(title, url) {
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-iframe').src = url;
        document.getElementById('gameModal').style.display = 'flex';
    }

    function closeModal() {
        document.getElementById('gameModal').style.display = 'none';
        document.getElementById('modal-iframe').src = '';
    }

    // Close modal when clicking outside content
    window.onclick = function(event) {
        if (event.target === document.getElementById('gameModal')) {
            closeModal();
        }
    }