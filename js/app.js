/**
 * <Div>ine - Main Interactive Application Logic
 * Single Page App Navigation, State Store & Utilities
 */

const AppState = {
    activePage: 'home',
    selectedGenre: 'All',
    searchQuery: '',
    sortBy: 'default',
    watchlist: JSON.parse(localStorage.getItem('divine_watchlist') || '[]'),
    feedbackList: JSON.parse(localStorage.getItem('divine_feedback') || '[]')
};

// Page Navigation Controller
function showPage(pageId) {
    AppState.activePage = pageId;
    
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    // Show selected page
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update active nav button
    document.querySelectorAll('.nav-links button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-page') === pageId) {
            btn.classList.add('active');
        }
    });

    // Close mobile nav if opened
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.remove('mobile-open');
    }

    // Trigger page-specific renders
    if (pageId === 'watchlist') {
        renderWatchlist();
    } else if (pageId === 'feedback') {
        renderFeedbackHistory();
    }
}

// Toast notification helper
function showToast(message, emoji = '🍿') {
    let toast = document.getElementById('comic-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'comic-toast';
        toast.className = 'comic-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = <span style=\"font-size:1.4rem;\"></span> <span></span>;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2800);
}

// Initialize on DOM load
window.addEventListener('DOMContentLoaded', () => {
    updateWatchlistBadge();
    updateGenreCounts();
    initEventListeners();
});
/* ==========================================================================
   Movie Renderer & Card Generators
   ========================================================================== */

function getGenreEmoji(genre) {
    const map = {
        'Action': '💥',
        'Comedy': '😂',
        'Romance': '❤️',
        'Horror': '👻',
        'Superhero': '🦸',
        'Sci-Fi': '🚀',
        'Animation': '🎨',
        'Thriller': '🔪',
        'All': '🍿'
    };
    return map[genre] || '🎬';
}

function updateGenreCounts() {
    const genres = ['Action', 'Comedy', 'Romance', 'Horror', 'Superhero', 'Sci-Fi', 'Animation', 'Thriller'];
    genres.forEach(g => {
        const count = moviesDB.filter(m => m.genre === g).length;
        const el = document.getElementById(count-);
        if (el) el.innerText = count;
    });
    const totalEl = document.getElementById('total-movies-count');
    if (totalEl) totalEl.innerText = moviesDB.length;
}

function createMovieCardHTML(movie) {
    const isBookmarked = AppState.watchlist.some(item => item.id === movie.id);
    return 
        <div class=\"movie-card\" data-id=\"\">
            <div class=\"movie-poster-wrap\">
                <img src=\"\" alt=\"\" loading=\"lazy\" onerror=\"this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500';\">
                <div class=\"movie-rating-badge\">⭐ </div>
                <div class=\"movie-year-badge\"></div>
                <button class=\"watchlist-btn \" title=\"\" onclick=\"toggleWatchlist('', event)\">
                    
                </button>
            </div>
            <div class=\"movie-info\">
                <h3></h3>
                <span class=\"funny-caption\">\"\"</span>
                <div class=\"movie-card-actions\">
                    <button class=\"btn-comic btn-sm\" onclick=\"openTrailerModal('', '')\">▶ Trailer</button>
                    <button class=\"btn-comic btn-sm btn-secondary\" onclick=\"openDetailModal('')\">ℹ Info</button>
                </div>
            </div>
        </div>
    ;
}
