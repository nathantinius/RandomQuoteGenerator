/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
 * The array of objects being used
 * in this project.  This could eventually
 * be replaced with an API JSON 
 * response if desired. 
***/
const quotes = [
    {
        source: 'Ezra Tinius',
        quote: "Spank it mom!",
        citation: "",
        year: 2018,
        tag: "Humor"
    },
    {
        source: "SpongeBob Squarepants",
        quote: "I'm ready... promotion!",
        citation: "The SpongeBob Squarepants Movie ",
        year: 2004,
        tag: "Movies"
    },
    {
        source: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
        citation: "",
        year: "",
        tag: "Online"
    },
    {
        source: "Dr Seuss",
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        citation: "Oh The Places You'll Go!",
        year: "",
        tag: "Books"
    },
    {
        source: "Dory",
        quote: "P. Sherman, 42 Wallaby Way, Sydney.",
        citation: "Finding Nemo",
        year: "",
        tag: "Movies"
    },
    {
        source: "Jake Paralta",
        quote: "Oh... cool. cool. cool. cool. cool. cool. cool. cool. cool. cool. cool. cool.",
        citation: "Brooklyn 99",
        year: "",
        tag: "Television"
    },
    {
        source: "Peter Quill",
        quote: "Remember, I'm only half human. So that 50% of me that's stupid... that's 100% you.",
        citation: "Avengers: Infinity War",
        year: "",
        tag: "Movies"
    },
    {
        source: "Obi-Wan Kanobe",
        quote: "You can't win Darth. If you strike me down and I will become more powerful than you can possibly imagine.",
        citation: "Star Wars: A New Hope",
        year: "",
        tag: "Movies"
    }
]

/***
 * `getRandomQuote` function 
 * Uses the random number returned 
 * from GetRandomNumber() and grabs 
 * the quote from that location 
 * in the array.
***/
function GetRandomQuote() {
    return quotes[GetRandomNumber()];
}

/***
 * `getRandomNumber` function 
 * Uses Math.Random to get a random number.
***/
function GetRandomNumber() {
    return Math.floor(Math.random() * Math.floor(quotes.length));
}

/***
 * `printQuote` function
 * Builds the quote html and assigns it
 * to the designated div in index.html
***/
setInterval(
    function printQuote() {
        let newQuote = GetRandomQuote();
        let html = `<p class="quote">${newQuote.quote}</p>
        <p class="source">${newQuote.source},`;
        if (newQuote.citation && newQuote.year) {
            html += `<span id="citation"> ${newQuote.citation},</span><span id="year"> ${newQuote.year},</span>`;
        } else if (newQuote.citation) {
            html += `<span id="citation"> ${newQuote.citation},</span>`;
        } else if (newQuote.year) {
            html += `<span id="year"> ${newQuote.year},</span>`;
        }
        html += `<span> ${newQuote.tag}</span></p>`;

        document.getElementById('quote-box').innerHTML = html;
        document.body.style.backgroundColor = getRandomBackground();

    }, 10000
);

function getRandomBackground() {
    color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    return color;
}

/* The on click event listener that runs printQuote */
document.getElementById('load-quote').addEventListener("click", printQuote, false);


