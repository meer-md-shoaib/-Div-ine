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
/* ==========================================================================
   Filter, Search & Sorting Logic
   ========================================================================== */

function filterMovies(genre = 'All') {
    AppState.selectedGenre = genre;
    AppState.searchQuery = '';
    
    // Clear search bar
    const searchInput = document.getElementById('movie-search-input');
    if (searchInput) searchInput.value = '';

    renderMoviesList();
    showPage('movies');
}

function filterByMood(mood) {
    showPage('movies');
    const container = document.getElementById('movie-container');
    const header = document.getElementById('movie-header');
    
    let filtered = [];
    let moodTitle = \"Mood: \" + mood;

    if (mood === 'laugh') {
        filtered = moviesDB.filter(m => m.genre === 'Comedy');
        moodTitle = \"Laugh Until Your Ribs Hurt 😂\";
    } else if (mood === 'adrenaline') {
        filtered = moviesDB.filter(m => m.genre === 'Action' || m.genre === 'Superhero');
        moodTitle = \"High-Octane Adrenaline Rush 💥\";
    } else if (mood === 'cry') {
        filtered = moviesDB.filter(m => m.genre === 'Romance' || m.id === 'coco');
        moodTitle = \"Emotional Tears & Tissues 😭\";
    } else if (mood === 'mindblown') {
        filtered = moviesDB.filter(m => m.genre === 'Sci-Fi' || m.genre === 'Thriller');
        moodTitle = \"Mind-Bending Twists 🤯\";
    } else if (mood === 'spooky') {
        filtered = moviesDB.filter(m => m.genre === 'Horror');
        moodTitle = \"Spooky Don't Look Behind You 👻\";
    }

    if (header) header.innerText = moodTitle;
    if (container) {
        container.innerHTML = filtered.map(m => createMovieCardHTML(m)).join('');
    }
}

function handleSearch(query) {
    AppState.searchQuery = query.toLowerCase().trim();
    renderMoviesList();
}

function handleSort(sortOption) {
    AppState.sortBy = sortOption;
    renderMoviesList();
}

function renderMoviesList() {
    const container = document.getElementById('movie-container');
    const header = document.getElementById('movie-header');
    if (!container) return;

    let list = [...moviesDB];

    // 1. Genre Filter
    if (AppState.selectedGenre && AppState.selectedGenre !== 'All') {
        list = list.filter(m => m.genre === AppState.selectedGenre);
        if (header) header.innerText = ${getGenreEmoji(AppState.selectedGenre)}  Movies;
    } else {
        if (header) header.innerText = \"🍿 All Movies Collection\";
    }

    // 2. Search Query Filter
    if (AppState.searchQuery) {
        list = list.filter(m => 
            m.title.toLowerCase().includes(AppState.searchQuery) ||
            m.caption.toLowerCase().includes(AppState.searchQuery) ||
            m.director.toLowerCase().includes(AppState.searchQuery) ||
            (m.tags && m.tags.some(t => t.toLowerCase().includes(AppState.searchQuery)))
        );
        if (header) header.innerText = 🔍 Results for \"\" ();
    }

    // 3. Sorting
    if (AppState.sortBy === 'rating-desc') {
        list.sort((a, b) => b.rating - a.rating);
    } else if (AppState.sortBy === 'year-desc') {
        list.sort((a, b) => b.year - a.year);
    } else if (AppState.sortBy === 'year-asc') {
        list.sort((a, b) => a.year - b.year);
    } else if (AppState.sortBy === 'title-asc') {
        list.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (list.length === 0) {
        container.innerHTML = 
            <div style=\"grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #1e272e; border: 3px solid #000; box-shadow: 6px 6px 0px #000;\">
                <h3 style=\"font-size: 2.2rem; color: var(--primary); margin-bottom: 10px;\">NO MOVIES FOUND!</h3>
                <p style=\"font-size: 1.1rem; color: #fff; margin-bottom: 20px;\">Even our infinite popcorn couldn't locate that. Try another keyword or genre!</p>
                <button class=\"btn-comic\" onclick=\"filterMovies('All')\">Reset Filters</button>
            </div>
        ;
    } else {
        container.innerHTML = list.map(m => createMovieCardHTML(m)).join('');
    }
}
