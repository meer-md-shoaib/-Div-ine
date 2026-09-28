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
/* ==========================================================================
   Modals: Trailer Player & Movie Details Controller
   ========================================================================== */

function openTrailerModal(trailerId, movieTitle) {
    const modal = document.getElementById('trailer-modal');
    const titleEl = document.getElementById('trailer-modal-title');
    const container = document.getElementById('trailer-video-container');
    
    if (titleEl) titleEl.innerText = ${movieTitle} - Official Trailer;
    if (container) {
        container.innerHTML = 
            <iframe 
                src=\"https://www.youtube.com/embed/?autoplay=1&rel=0\" 
                title=\" Trailer\" 
                allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" 
                allowfullscreen>
            </iframe>
        ;
    }
    if (modal) modal.classList.add('active');
}

function closeTrailerModal() {
    const modal = document.getElementById('trailer-modal');
    const container = document.getElementById('trailer-video-container');
    if (container) container.innerHTML = ''; // Stops playback immediately
    if (modal) modal.classList.remove('active');
}

function openDetailModal(movieId) {
    const movie = moviesDB.find(m => m.id === movieId);
    if (!movie) return;

    const modal = document.getElementById('detail-modal');
    const titleEl = document.getElementById('detail-modal-title');
    const bodyEl = document.getElementById('detail-modal-body');
    
    if (titleEl) titleEl.innerText = movie.title;
    if (bodyEl) {
        bodyEl.innerHTML = 
            <div class=\"movie-modal-grid\">
                <img src=\"\" alt=\"\" class=\"modal-poster\" onerror=\"this.onerror=null; this.src='https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500';\">
                <div class=\"modal-info-column\">
                    <div>
                        <span class=\"modal-pill-tag\"></span>
                        <span class=\"modal-pill-tag\" style=\"background: #000;\">📅 </span>
                        <span class=\"modal-pill-tag\" style=\"background: var(--primary); color: #000;\">⭐ /10</span>
                        <span class=\"modal-pill-tag\" style=\"background: #34495e;\">⏱️ </span>
                    </div>
                    <p style=\"font-size: 1.05rem; line-height: 1.6; margin-top: 8px;\"><strong>Synopsis:</strong> </p>
                    <p><strong>Director:</strong> </p>
                    <div class=\"verdict-box\">
                        <strong>Div-ine Verdict:</strong> \"\"
                    </div>
                    <div style=\"margin-top: 15px; display: flex; gap: 10px;\">
                        <button class=\"btn-comic\" onclick=\"closeDetailModal(); openTrailerModal('', '')\">▶ Watch Trailer</button>
                        <button class=\"btn-comic btn-secondary\" onclick=\"toggleWatchlist('', event)\">
                            
                        </button>
                    </div>
                </div>
            </div>
        ;
    }
    if (modal) modal.classList.add('active');
}

function closeDetailModal() {
    const modal = document.getElementById('detail-modal');
    if (modal) modal.classList.remove('active');
}
/* ==========================================================================
   Watchlist (Favorites) LocalStorage Manager
   ========================================================================== */

function toggleWatchlist(movieId, event) {
    if (event) event.stopPropagation();
    
    const index = AppState.watchlist.findIndex(m => m.id === movieId);
    const movie = moviesDB.find(m => m.id === movieId);
    
    if (!movie) return;

    if (index > -1) {
        AppState.watchlist.splice(index, 1);
        showToast(Removed \"\" from your Watchlist!, '💔');
    } else {
        AppState.watchlist.push(movie);
        showToast(Added \"\" to your Watchlist!, '🍿');
    }

    localStorage.setItem('divine_watchlist', JSON.stringify(AppState.watchlist));
    updateWatchlistBadge();

    // Re-render if on current view
    if (AppState.activePage === 'watchlist') {
        renderWatchlist();
    } else if (AppState.activePage === 'movies') {
        renderMoviesList();
    }
}

function updateWatchlistBadge() {
    const badge = document.getElementById('nav-watchlist-count');
    if (badge) {
        badge.innerText = AppState.watchlist.length;
    }
}

function renderWatchlist() {
    const container = document.getElementById('watchlist-container');
    const countEl = document.getElementById('watchlist-page-count');
    
    if (countEl) countEl.innerText = AppState.watchlist.length;
    if (!container) return;

    if (AppState.watchlist.length === 0) {
        container.innerHTML = 
            <div style=\"grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: #1e272e; border: 3px solid #000; box-shadow: 6px 6px 0px #000;\">
                <h3 style=\"font-size: 2.2rem; color: var(--primary); margin-bottom: 10px;\">YOUR WATCHLIST IS EMPTY!</h3>
                <p style=\"font-size: 1.1rem; color: #fff; margin-bottom: 20px;\">Click the heart (❤️) on any movie to hoard it here for lazy weekends.</p>
                <button class=\"btn-comic\" onclick=\"showPage('genre')\">Browse Genres</button>
            </div>
        ;
    } else {
        container.innerHTML = AppState.watchlist.map(m => createMovieCardHTML(m)).join('');
    }
}
/* ==========================================================================
   Surprise Me / Comic Movie Roulette & Trivia
   ========================================================================== */

const funFacts = [
    \"Watching 3 hours of movies burns roughly 0 calories, but fills 100% of your soul.\",
    \"In The Dark Knight, Heath Ledger designed the Joker makeup himself using drugstore cosmetics.\",
    \"The sound of the T-Rex in Jurassic Park was made using baby elephants, tigers, and alligators.\",
    \"The iconic 'I am your father' line was kept secret from even the actors until post-production.\",
    \"The horse head in The Godfather was completely real. The actor's scream was 100% authentic shock.\",
    \"Shah Rukh Khan shot the train entrance in Dilwale Dulhania Le Jayenge in only two takes.\",
    \"In Titanic, the drawing of Rose was actually sketched by director James Cameron himself!\",
    \"Interstellar's black hole simulation was so accurate that physicists published 3 scientific papers from it.\"
];

function rotateFunFact() {
    const factEl = document.getElementById('hero-fun-fact');
    if (!factEl) return;
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    factEl.innerText = randomFact;
}

function surpriseMeMovie() {
    const randomMovie = moviesDB[Math.floor(Math.random() * moviesDB.length)];
    showToast(🎲 Div-ine Destiny Picked: !, '✨');
    openDetailModal(randomMovie.id);
}
/* ==========================================================================
   Feedback Manager & Star Rating Engine
   ========================================================================== */

let selectedRating = 5;

function setRating(rating) {
    selectedRating = rating;
    const stars = document.querySelectorAll('.star-rating-row span');
    stars.forEach((star, idx) => {
        star.style.opacity = idx < rating ? '1' : '0.25';
    });
}

function handleFeedbackSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value.trim();
    const roll = form.roll.value.trim();
    const message = form.message.value.trim();

    const newFeedback = {
        name,
        roll,
        rating: selectedRating,
        message,
        date: new Date().toLocaleDateString()
    };

    AppState.feedbackList.unshift(newFeedback);
    localStorage.setItem('divine_feedback', JSON.stringify(AppState.feedbackList));

    form.reset();
    setRating(5);
    renderFeedbackHistory();

    const funnyReplies = [
        `Thanks ${name}! Your feedback has been forwarded to NASA.`,
        `Saved, ${name}! If this is a roast, we are currently weeping.`,
        `Awesome ${name}! Our popcorn rating went up by 10 points.`,
        `Feedback logged! Babu Bhaiya approves your message.`
    ];
    const reply = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];
    showToast(reply, '🚀');
}

function renderFeedbackHistory() {
    const listEl = document.getElementById('feedback-history-list');
    if (!listEl) return;

    if (AppState.feedbackList.length === 0) {
        listEl.innerHTML = `<p style="color: #333; font-style: italic;">No yells yet. Be the first brave soul to leave your mark!</p>`;
        return;
    }

    listEl.innerHTML = `
        <h4 style="font-family: var(--font-comic); font-size: 1.4rem; margin-bottom: 12px;">Recent Community Yells:</h4>
        ${AppState.feedbackList.slice(0, 5).map(f => `
            <div class="feedback-item-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <strong>${f.name} (${f.roll || 'Anonymous'})</strong>
                    <span>${'⭐'.repeat(f.rating)}</span>
                </div>
                <p style="color: #2c3e50; font-size: 0.95rem; margin: 0;">"${f.message}"</p>
                <small style="color: #888;">${f.date}</small>
            </div>
        `).join('')}
    `;
}
/* ==========================================================================
   Global Event Listeners & Keyboard Shortcuts
   ========================================================================== */

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('mobile-open');
    }
}

function initEventListeners() {
    // Keyboard shortcuts: Escape to close modals, Slash to search
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTrailerModal();
            closeDetailModal();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            showPage('movies');
            const searchInput = document.getElementById('movie-search-input');
            if (searchInput) searchInput.focus();
        }
    });

    // Close modal on background overlay click
    document.querySelectorAll('.comic-modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeTrailerModal();
                closeDetailModal();
            }
        });
    });

    // Setup periodic fact rotator
    setInterval(rotateFunFact, 12000);
}
