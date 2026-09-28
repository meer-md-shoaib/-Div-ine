/**
 * <Div>ine - The Movie Database
 * Structured movie repository with comic ratings, funny captions, trailers & trivia
 */

const moviesDB = [
    // ==========================================
    // ACTION
    // ==========================================
    {
        id: "john-wick-4",
        title: "John Wick 4",
        genre: "Action",
        year: 2023,
        rating: 7.7,
        runtime: "169 min",
        director: "Chad Stahelski",
        img: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        caption: "Local dog lover kills 400 people on stairs.",
        synopsis: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
        verdict: "Do NOT touch anyone's dog. Ever.",
        trailerId: "qEVUtrk8_B4",
        tags: ["explosions", "guns", "adrenaline", "suits"]
    },
    {
        id: "bullet-train",
        title: "Bullet Train",
        genre: "Action",
        year: 2022,
        rating: 7.3,
        runtime: "126 min",
        director: "David Leitch",
        img: "https://image.tmdb.org/t/p/w500/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        caption: "Thomas the Tank Engine for certified psychopaths.",
        synopsis: "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
        verdict: "Brad Pitt wearing a bucket hat dodging swords.",
        trailerId: "0IOsk2Vun8Q",
        tags: ["train", "assassins", "fun", "chaos"]
    },
    {
        id: "dhoom",
        title: "Dhoom",
        genre: "Action",
        year: 2004,
        rating: 6.6,
        runtime: "129 min",
        director: "Sanjay Gadhvi",
        img: "dhoom.jpeg",
        caption: "Physics has left the chat on a Hayabusa.",
        synopsis: "A mysterious gang of bikers starts robbing banks across Mumbai, leading an eccentric cop and a local mechanic on a high-speed chase.",
        verdict: "Every 2000s kid suddenly wanted a superbike.",
        trailerId: "drQ9t5bFmJc",
        tags: ["bikes", "bollywood", "nitro", "heist"]
    },
    {
        id: "jawan",
        title: "Jawan",
        genre: "Action",
        year: 2023,
        rating: 7.0,
        runtime: "169 min",
        director: "Atlee",
        img: "jawan.jpg",
        caption: "Too many bandages, infinite unstoppable swag.",
        synopsis: "A high-voltage action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.",
        verdict: "Shah Rukh Khan entering like a meteor strike.",
        trailerId: "COv52Qyctws",
        tags: ["srk", "metro", "rebellion", "masala"]
    }
];
    {
        id: "mad-max-fury-road",
        title: "Mad Max: Fury Road",
        genre: "Action",
        year: 2015,
        rating: 8.1,
        runtime: "120 min",
        director: "George Miller",
        img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        caption: "A 2-hour U-turn in the desert with a flame-throwing guitar.",
        synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        verdict: "Witness me shiny and chrome!",
        trailerId: "hEJnMQG938g",
        tags: ["desert", "cars", "flames", "insane"]
    },
    {
        id: "kgf-chapter-2",
        title: "K.G.F: Chapter 2",
        genre: "Action",
        year: 2022,
        rating: 8.2,
        runtime: "168 min",
        director: "Prashanth Neel",
        img: "https://image.tmdb.org/t/p/w500/6A7uqgC2N1nU3nvd0xVn7fQ12Jq.jpg",
        caption: "Violence violence violence. He avoids, but violence likes him.",
        synopsis: "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
        verdict: "High-octane smoking slow-motion masculinity.",
        trailerId: "JKa05nyUmuQ",
        tags: ["gold", "monologue", "mass", "power"]
    },
    {
        id: "top-gun-maverick",
        title: "Top Gun: Maverick",
        genre: "Action",
        year: 2022,
        rating: 8.3,
        runtime: "130 min",
        director: "Joseph Kosinski",
        img: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        caption: "Tom Cruise refusing to use CGI or age like a normal human.",
        synopsis: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on an impossible mission.",
        verdict: "Danger zone never sounded so exhilarating.",
        trailerId: "giXco2jaZ_4",
        tags: ["jets", "flying", "adrenaline", "danger"]
    },
