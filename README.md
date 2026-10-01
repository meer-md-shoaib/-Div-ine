# 🎬 &lt;Div&gt;ine - The Pop-Art Comic Movie Universe

[![Live Demo](https://img.shields.io/badge/Live%20Demo-2EA44F?style=for-the-badge&logo=github&logoColor=white)](https://meer-md-shoaib.github.io/-Div-ine/)
[![Made with Pop Art](https://img.shields.io/badge/Aesthetic-Comic%20Pop--Art-FFD700?style=for-the-badge&logo=css3&logoColor=black)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-9b59b6?style=for-the-badge)](#)

> *"We waste our time watching movies so you don't have to."*

**&lt;Div&gt;ine** is a vibrant, comic-book pop-art styled movie discovery single-page web app. Designed with neo-brutalist borders, bold typography, witty one-liner reviews, in-page video trailer playback, persistent watchlist bookmarks, and genre/mood filters.

---

## ✨ Features & Enhancements

- 🎭 **8 Rich Genres:** Action (Explosions), Comedy (Haha Funni), Romance (Lovey Dovey), Horror (Don't Look), Superhero (Spandex), Sci-Fi (Black Holes), Animation (Masterpieces), and Thriller (Mind Bending).
- 🔍 **Live Instant Search:** Instant client-side search across titles, directors, actors, and comedy tags (Press `/` anywhere to focus).
- 🎬 **Modal YouTube Trailer Player:** Watch official HD movie trailers directly within the site without being redirected or losing your place.
- 🎯 **Interactive Mood Filter:** Match your exact vibe (*"Laugh till my ribs hurt"*, *"Adrenaline rush"*, *"Emotional tears"*, *"Mind twists"*).
- ❤️ **Persistent Watchlist (Favorites):** Save your must-watch movies directly to your browser's `localStorage` with live counter badge.
- 🎲 **"Surprise Me!" Movie Roulette:** Can't decide what to watch? Spin the wheel to get an instant random pick!
- ℹ️ **Movie Quick-View Dossier:** Synopsis, director, runtime, release year, and the hilarious *Div-ine Verdict*.
- 💬 **Interactive Feedback & Star Ratings:** Submit thoughts and reviews with funny instant replies and local history log.
- ⚡ **Movie Trivia Rotator:** Auto-rotating funny cinema facts and trivia on the homepage.
- 📱 **Fully Responsive:** Smooth navigation on desktop, tablet, and mobile with comic hamburger drawer.

---

## 📂 Project Structure

```text
-Div-ine/
├── index.html                   
├── css/
│   └── style.css                
├── js/
│   ├── movies-data.js
│   └── app.js                   
├── data/
│   └── movies.json              
├── assets/
│   └── images/                  
├── MOVIES_EXPANSION_GUIDE.md    
└── README.md                    
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/meer-md-shoaib/-Div-ine.git
   cd -Div-ine
   ```

2. **Open the project:**
   Simply double-click `index.html` or serve with any local HTTP server:
   ```bash
   npx serve .
   # or
   python -m http.server 8000
   ```

3. **Visit the Live Site:**
   [https://meer-md-shoaib.github.io/-Div-ine/](https://meer-md-shoaib.github.io/-Div-ine/)

---

## 👥 The &lt;Div&gt;ine Team (3CSE14)

- **Meer Mohammed Shoaib** — *The Leader & System Architect*
- **Mohommed Adil** — *The Coder Extraordinaire*
- **Nihaal R** — *The Soldier & Quality Assurance*
- **Shreyas Bharadwaj** — *The Healer & Media Curator*

🏛️ **Presidency University**, Bengaluru, Karnataka

---

## 💡 Scaling & Adding More Movies

Looking to expand to hundreds or thousands of movies? Check out [`MOVIES_EXPANSION_GUIDE.md`](./MOVIES_EXPANSION_GUIDE.md) for full blueprints on:
1. **Free TMDB REST API** integration (800k+ movies, automated posters and trailers).
2. **Google Sheets as a Headless CMS** (let classmates add movies without touching code).
3. **Infinite Scroll with IntersectionObserver** for zero-latency loading on GitHub Pages.
4. **AI-powered Sarcastic Verdict Generator** with the Google Gemini API.
