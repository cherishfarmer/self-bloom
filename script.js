const quotes = [
    "Keep watering yourself. You're growing.",
    "Loving yourself is the greatest revolution.",
    "You don't need an excuse to feel good about yourself.",
    "You were born to be real, not to be perfect.",
    "You can't pour from an empty cup. Take care of yourself first.",
    "Stop trying to fix your body. It was never broken.",
    "Feeling beautiful has nothing to do with what you look like.",
    "To love yourself is the beginning of a lifelong romance.",
    "You are enough just as you are.",
    "If you have the ability to love, love yourself first.",
    "To accept yourself as you are is the ultimate expression of love",
    "You yourself, as much as anybody in the entire universe, deserve your love and affection."
];

let min = 0;
let max = quotes.length;

const quoteEl = document.getElementById("quote");
let quoteIndex = Math.floor(Math.random() * (max - min + 1)) + min;
let charIndex = 0;
let typing = true;

function typeQuote() {
    const currentQuote = quotes[quoteIndex];

    if (typing) {
        if (charIndex < currentQuote.length) {
            quoteEl.textContent = currentQuote.slice(0, charIndex + 1);
            charIndex++;
            quoteEl.classList.add("typing");
            setTimeout(typeQuote, 60);
        } else {
            typing = false;
            quoteEl.classList.remove("typing");
            setTimeout(typeQuote, 2000);
        }
    } else {
        if (charIndex > 0) {
            quoteEl.textContent = currentQuote.slice(0, charIndex - 1);
            charIndex--;
            setTimeout(typeQuote, 30);
        } else {
            typing = true;
            quoteIndex = (quoteIndex + 1) % quotes.length;
            setTimeout(typeQuote, 800);
        }
    }
}

typeQuote();