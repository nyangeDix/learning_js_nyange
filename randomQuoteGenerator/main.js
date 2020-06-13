var quotes = [
    "Alone, we can do so little; together we can do so much. -- Helen Keller",
    "Whatever the mind of man can conceive and believe, it can achieve. -- Napoleon Hill",
    "Too many of us are not living our dreams because we are living our fears. -- Les Brown",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. -- Jimmy Dean",
    "Believe you can and you’re halfway there. -- Theodore Roosevelt"
];

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('newQuoteSection').textContent = quotes[randomNumber];
}