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
    },
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

    // ==========================================
    // COMEDY
    // ==========================================
    {
        id: "the-hangover",
        title: "The Hangover",
        genre: "Comedy",
        year: 2009,
        rating: 7.7,
        runtime: "100 min",
        director: "Todd Phillips",
        img: "hangover.jpg",
        caption: "Why you should never go to Vegas without an adult supervisor.",
        synopsis: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They must make their way around the city in order to find their friend before his wedding.",
        verdict: "There is a tiger in the bathroom and a baby in the closet.",
        trailerId: "tcdUhdOlz9M",
        tags: ["vegas", "hangover", "wild", "chaos"]
    },
    {
        id: "the-mask",
        title: "The Mask",
        genre: "Comedy",
        year: 1994,
        rating: 6.9,
        runtime: "101 min",
        director: "Chuck Russell",
        img: "mask.jpeg",
        caption: "S-s-s-smokin'! Peak Jim Carrey energy unleashed.",
        synopsis: "Bank clerk Stanley Ipkiss is transformed into a manic superhero when he wears a mysterious Norse god mask.",
        verdict: "Yellow zoot suit and physics-breaking jaw drops.",
        trailerId: "LZl69yk5lEY",
        tags: ["jimcarrey", "green", "cartoon", "classic"]
    },
    {
        id: "dhamaal",
        title: "Dhamaal",
        genre: "Comedy",
        year: 2007,
        rating: 7.4,
        runtime: "137 min",
        director: "Indra Kumar",
        img: "dhamaal.jpg",
        caption: "Looking for a big 'W' under a palm tree in Goa.",
        synopsis: "Four lazy slackers and a police inspector embark on a cross-country treasure hunt to unearth 10 crore rupees hidden in Goa.",
        verdict: "Aditya, Manav, and the red champagne car that never dies.",
        trailerId: "6Q9qX9i5g5M",
        tags: ["goa", "treasure", "manav", "slapstick"]
    },
    {
        id: "hera-pheri",
        title: "Hera Pheri",
        genre: "Comedy",
        year: 2000,
        rating: 8.2,
        runtime: "156 min",
        director: "Priyadarshan",
        img: "hera pheri.jpeg",
        caption: "21 days to double your money. Totally legit scheme.",
        synopsis: "Two tenants and a landlord in desperate need of money chance upon a ransom call meant for someone else and concoct a plan.",
        verdict: "Babu Bhaiya is the undisputed king of Indian memes.",
        trailerId: "3K1Hh5Gz1kU",
        tags: ["baburao", "memes", "bollywood", "legendary"]
    },
    {
        id: "3-idiots",
        title: "3 Idiots",
        genre: "Comedy",
        year: 2009,
        rating: 8.4,
        runtime: "170 min",
        director: "Rajkumar Hirani",
        img: "https://image.tmdb.org/t/p/w500/7492A7wSZyW6eUjW1n1C6M9rJ4S.jpg",
        caption: "All Izz Well (except the engineering semester exams).",
        synopsis: "Two friends search for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
        verdict: "Pursue excellence and success will chase you with pants down.",
        trailerId: "K0eDlFX9GMc",
        tags: ["engineering", "college", "friendship", "inspirational"]
    },
    {
        id: "superbad",
        title: "Superbad",
        genre: "Comedy",
        year: 2007,
        rating: 7.6,
        runtime: "113 min",
        director: "Greg Mottola",
        img: "https://image.tmdb.org/t/p/w500/ek8e8txUyUvd2BNqj6LKi0Il1dQ.jpg",
        caption: "McLovin: One name, 25-year-old Hawaiian organ donor.",
        synopsis: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        verdict: "Fogell will forever be known as McLovin.",
        trailerId: "4eaZ_48ZYog",
        tags: ["mclovin", "highschool", "party", "nostalgia"]
    },

    // ==========================================
    // ROMANCE
    // ==========================================
    {
        id: "titanic",
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        rating: 7.9,
        runtime: "195 min",
        director: "James Cameron",
        img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        caption: "Spoiler: The boat sinks, and that door definitely had room for two.",
        synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        verdict: "Rose could have slid over 4 inches to save Jack.",
        trailerId: "kVrqfYjkTdQ",
        tags: ["door", "iceberg", "drawing", "tears"]
    },
    {
        id: "the-notebook",
        title: "The Notebook",
        genre: "Romance",
        year: 2004,
        rating: 7.8,
        runtime: "123 min",
        director: "Nick Cassavetes",
        img: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
        caption: "Crying guaranteed or your money back with interest.",
        synopsis: "An elderly man reads to a woman with dementia the story of two young lovers who were separated by their social differences.",
        verdict: "If you're a bird, I'm a bird. *sniffle*",
        trailerId: "FC6biTjEyZw",
        tags: ["rain", "letters", "lake", "swans"]
    },
    {
        id: "om-shanti-om",
        title: "Om Shanti Om",
        genre: "Romance",
        year: 2007,
        rating: 6.8,
        runtime: "162 min",
        director: "Farah Khan",
        img: "om.jpg",
        caption: "Reincarnation: The ultimate comeback for Bollywood stardom.",
        synopsis: "In the 1970s, Om, an aspiring actor, is murdered, but is reincarnated in the present day to discover the mystery of his death and find his true love.",
        verdict: "Picture abhi baaki hai mere dost!",
        trailerId: "NBw5YScs8iQ",
        tags: ["srk", "deepika", "reincarnation", "retro"]
    },
    {
        id: "la-la-land",
        title: "La La Land",
        genre: "Romance",
        year: 2016,
        rating: 8.0,
        runtime: "128 min",
        director: "Damien Chazelle",
        img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkVJb0Rf0.jpg",
        caption: "Two pretty people tap-dance their way into bittersweet heartbreak.",
        synopsis: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        verdict: "That final look at the jazz bar destroyed an entire generation.",
        trailerId: "0pdqf4P9MB8",
        tags: ["jazz", "tapdance", "sunset", "dreams"]
    },
    {
        id: "jab-we-met",
        title: "Jab We Met",
        genre: "Romance",
        year: 2007,
        rating: 7.9,
        runtime: "138 min",
        director: "Imtiaz Ali",
        img: "https://image.tmdb.org/t/p/w500/gH04kL8P36B73n3X3p3x3i7k8n0.jpg",
        caption: "Main apni favourite hoon: The ultimate self-love anthem.",
        synopsis: "A depressed wealthy businessman finds his life changing after he meets a bubbly and talkative young woman on a train.",
        verdict: "Geet taught the world how to never shut up and still be lovable.",
        trailerId: "Hf_7k6Rsm4E",
        tags: ["train", "geet", "bhatinda", "wholesome"]
    },

    // ==========================================
    // HORROR
    // ==========================================
    {
        id: "it",
        title: "It",
        genre: "Horror",
        year: 2017,
        rating: 7.3,
        runtime: "135 min",
        director: "Andy Muschietti",
        img: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        caption: "Never talk to demonic dancing clowns lurking in storm drains.",
        synopsis: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry.",
        verdict: "You'll float too... into lifelong coulrophobia.",
        trailerId: "FnCdOQsX5kc",
        tags: ["clown", "balloon", "sewer", "fear"]
    },
    {
        id: "the-conjuring",
        title: "The Conjuring",
        genre: "Horror",
        year: 2013,
        rating: 7.5,
        runtime: "112 min",
        director: "James Wan",
        img: "conjuring.jpeg",
        caption: "Clap clap in the dark wardrobe. Instant cardiac arrest.",
        synopsis: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        verdict: "Hide and Clap will never be played in this house again.",
        trailerId: "k10ETZ41q5o",
        tags: ["ghost", "doll", "basement", "possession"]
    },
    {
        id: "stree",
        title: "Stree",
        genre: "Horror",
        year: 2018,
        rating: 7.5,
        runtime: "128 min",
        director: "Amar Kaushik",
        img: "https://upload.wikimedia.org/wikipedia/en/4/4f/Stree_-_2018_Movie_Poster.jpg",
        caption: "O Stree kal aana! (Please don't show up tonight, or tomorrow).",
        synopsis: "In the small town of Chanderi, the menfolk live in fear of an evil spirit named Stree who abducts men in the night.",
        verdict: "Respect women, or else she will literally take your clothes.",
        trailerId: "gze8xBdW3T4",
        tags: ["chanderi", "comedy-horror", "saree", "folklore"]
    },
    {
        id: "tumbbad",
        title: "Tumbbad",
        genre: "Horror",
        year: 2018,
        rating: 8.2,
        runtime: "104 min",
        director: "Rahi Anil Barve",
        img: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg",
        caption: "Greed has no limits, and Hastar never gets enough flour.",
        synopsis: "A mythological story about a goddess who created the entire universe and the forbidden first child, Hastar, who hoards endless gold coins in a dripping mansion.",
        verdict: "Masterclass Indian horror atmosphere with 10/10 visuals.",
        trailerId: "sN75MPHgvX8",
        tags: ["hastar", "greed", "rain", "mythology"]
    },
    {
        id: "get-out",
        title: "Get Out",
        genre: "Horror",
        year: 2017,
        rating: 7.8,
        runtime: "104 min",
        director: "Jordan Peele",
        img: "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        caption: "Tea cups, silver spoons, and the most awkward family dinner in history.",
        synopsis: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        verdict: "The Sunken Place will keep you awake at night.",
        trailerId: "DzfpyUB60YY",
        tags: ["teacup", "sunkenplace", "suspense", "mindgames"]
    },

    // ==========================================
    // SUPERHERO
    // ==========================================
    {
        id: "the-dark-knight",
        title: "The Dark Knight",
        genre: "Superhero",
        year: 2008,
        rating: 9.0,
        runtime: "152 min",
        director: "Christopher Nolan",
        img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        caption: "Billionaire in bat costume fights psychotic clown who just wants fireworks.",
        synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        verdict: "Why so serious? Heath Ledger's Joker is cinema perfection.",
        trailerId: "EXeTwQWrcwY",
        tags: ["batman", "joker", "gotham", "masterpiece"]
    },
    {
        id: "avengers-endgame",
        title: "Avengers: Endgame",
        genre: "Superhero",
        year: 2019,
        rating: 8.4,
        runtime: "181 min",
        director: "Anthony & Joe Russo",
        img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        caption: "Thanos was technically an aggressive environmentalist.",
        synopsis: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions.",
        verdict: "Avengers... Assemble! Chills every single time.",
        trailerId: "TcMBFSGVi1c",
        tags: ["avengers", "portal", "thanos", "marvel"]
    },
    {
        id: "iron-man",
        title: "Iron Man",
        genre: "Superhero",
        year: 2008,
        rating: 7.9,
        runtime: "126 min",
        director: "Jon Favreau",
        img: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
        caption: "Genius, billionaire, playboy, philanthropist in a flying tin can.",
        synopsis: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
        verdict: "The movie that built an entire cinematic universe in a cave with scraps.",
        trailerId: "8ugaeA-nMTc",
        tags: ["tonystark", "arc-reactor", "suit", "classic"]
    },
    {
        id: "man-of-steel",
        title: "Man of Steel",
        genre: "Superhero",
        year: 2013,
        rating: 7.1,
        runtime: "143 min",
        director: "Zack Snyder",
        img: "superman.jpeg",
        caption: "Property Damage: The Movie (Metropolis will never financially recover).",
        synopsis: "An alien child is evacuated from his dying world and sent to Earth to live among humans. His peace is threatened when other survivors of his home planet invade.",
        verdict: "Henry Cavill flying at Mach 10 to Hans Zimmer's epic drums.",
        trailerId: "T6DJcgm3wNY",
        tags: ["krypton", "superman", "zod", "punch"]
    },
    {
        id: "spider-man-spider-verse",
        title: "Spider-Man: Into the Spider-Verse",
        genre: "Superhero",
        year: 2018,
        rating: 8.4,
        runtime: "117 min",
        director: "Bob Persichetti, Peter Ramsey",
        img: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        caption: "What's up danger? Pure comic book pages coming alive on screen.",
        synopsis: "Teen Miles Morales becomes the new Spider-Man and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        verdict: "The leap of faith scene is unmatched visual ecstasy.",
        trailerId: "tg52up16eq0",
        tags: ["miles", "multiverse", "graffiti", "leapoffaith"]
    },

    // ==========================================
    // SCI-FI
    // ==========================================
    {
        id: "interstellar",
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        runtime: "169 min",
        director: "Christopher Nolan",
        img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        caption: "Matthew McConaughey crying in a 5th-dimensional bookshelf.",
        synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        verdict: "Love transcends time and gravity, and Hans Zimmer's organ blares.",
        trailerId: "zSWdZVtXT7E",
        tags: ["blackhole", "space", "tars", "docking"]
    },
    {
        id: "the-matrix",
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        runtime: "136 min",
        director: "Lana & Lilly Wachowski",
        img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        caption: "Take the red pill, dodge bullets in slow motion, question reality.",
        synopsis: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        verdict: "There is no spoon. Leather trench coats never left style.",
        trailerId: "vKQi3bBA1y8",
        tags: ["neo", "redpill", "bullet-dodge", "cyber"]
    },
    {
        id: "inception",
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        runtime: "148 min",
        director: "Christopher Nolan",
        img: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        caption: "A dream inside a dream inside a falling van while a top spins.",
        synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        verdict: "BWAAAAAH horn sound effect echoing for the rest of your life.",
        trailerId: "YoHD9XEInc0",
        tags: ["dreams", "totem", "gravity", "heist"]
    },
    {
        id: "dune-part-two",
        title: "Dune: Part Two",
        genre: "Sci-Fi",
        year: 2024,
        rating: 8.6,
        runtime: "166 min",
        director: "Denis Villeneuve",
        img: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        caption: "Riding 400-meter sand worms while screaming LISAN AL GAIB!",
        synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
        verdict: "Cinema that vibrates your teeth and makes you thirsty for water.",
        trailerId: "Way9Dexny3w",
        tags: ["desert", "spice", "sandworm", "prophecy"]
    },

    // ==========================================
    // ANIMATION
    // ==========================================
    {
        id: "coco",
        title: "Coco",
        genre: "Animation",
        year: 2017,
        rating: 8.4,
        runtime: "105 min",
        director: "Lee Unkrich",
        img: "https://image.tmdb.org/t/p/w500/gGEqqioYV7LAwo2T8Ki6964892V.jpg",
        caption: "Remember me... and remember to hydrate after crying rivers.",
        synopsis: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
        verdict: "Singing to Mama Coco is emotional warfare.",
        trailerId: "Rvr68u6k5sI",
        tags: ["guitar", "family", "marigold", "crying"]
    },
    {
        id: "spirited-away",
        title: "Spirited Away",
        genre: "Animation",
        year: 2001,
        rating: 8.6,
        runtime: "125 min",
        director: "Hayao Miyazaki",
        img: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        caption: "Don't eat random buffet food or you will literally turn into a pig.",
        synopsis: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
        verdict: "Studio Ghibli's crowning magical masterwork.",
        trailerId: "ByXuk9QqQkk",
        tags: ["ghibli", "spirits", "noface", "magic"]
    },
    {
        id: "shrek-2",
        title: "Shrek 2",
        genre: "Animation",
        year: 2004,
        rating: 7.3,
        runtime: "93 min",
        director: "Andrew Adamson",
        img: "https://image.tmdb.org/t/p/w500/2yYP0PQjG8zVqcPdpQxTkZr3vm0.jpg",
        caption: "I Need a Hero playing while giant gingerbread man storms the castle.",
        synopsis: "Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona's parents are King and Queen, to celebrate their marriage, but find little welcome.",
        verdict: "Peak cinema. Fairy Godmother's performance was Grammy worthy.",
        trailerId: "xBgjf497w0w",
        tags: ["ogre", "donkey", "farfaraway", "hero"]
    },

    // ==========================================
    // THRILLER
    // ==========================================
    {
        id: "parasite",
        title: "Parasite",
        genre: "Thriller",
        year: 2019,
        rating: 8.5,
        runtime: "132 min",
        director: "Bong Joon Ho",
        img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        caption: "Jessica, Only child, Illinois, Chicago. The ultimate hustle gone wild.",
        synopsis: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        verdict: "Once you overcome the 1-inch barrier of subtitles, mind = blown.",
        trailerId: "5xH0R_46n44",
        tags: ["subtitles", "basement", "ramdon", "oscar"]
    },
    {
        id: "andhadhun",
        title: "Andhadhun",
        genre: "Thriller",
        year: 2018,
        rating: 8.2,
        runtime: "139 min",
        director: "Sriram Raghavan",
        img: "https://image.tmdb.org/t/p/w500/r1XgQ4hQZqj9iK9L1xK19q1xK19.jpg",
        caption: "Pretending to be blind until you witness a murder in a bathroom.",
        synopsis: "A series of mysterious events change the life of a blind pianist, who must now report a crime that he should not technically know of.",
        verdict: "Tabu pushing boundaries, piano tunes, and a blind rabbit.",
        trailerId: "2iVYI99VGaw",
        tags: ["piano", "blind", "murder", "twists"]
    },
    {
        id: "knives-out",
        title: "Knives Out",
        genre: "Thriller",
        year: 2019,
        rating: 7.9,
        runtime: "130 min",
        director: "Rian Johnson",
        img: "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        caption: "Benoit Blanc's southern drawl dismantling trust fund vultures.",
        synopsis: "A detective investigates the death of a patriarch of an eccentric, combative family.",
        verdict: "Cozy cable-knit sweater mystery with delicious twists.",
        trailerId: "qGqiHJTsRfs",
        tags: ["whodunit", "donut", "mansion", "sweater"]
    }
];

// Export to window and module
if (typeof window !== 'undefined') {
    window.moviesDB = moviesDB;
}
if (typeof module !== 'undefined') {
    module.exports = moviesDB;
}
