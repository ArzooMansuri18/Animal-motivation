const quoteElement = document.getElementById('quote');
const button = document.getElementById('get-quote');
const image = document.getElementById('output');
const text = document.getElementById('text');

function showOutput() {
    const quotes = [
        "Do what you can, with what you have, where you are.",
        "The sun himself is weak when he first rises, and gather strength and courage as the day gets on.",
        "You are capable of amazing things.",
        "Don't wait for the perfect moment, take a moment and make it perfect.",
        "A day without laughter is a day wasted.",
        "Believe you can and you're halfway there.",
        "Happiness is not out there, it's in you.",
        "Life is tough my darling, but so are you.",
        "The best way to cheer yourself is to try cheer someone else up.",
        "Throw kindness around like confetti."
    ]

    const random = Math.floor(Math.random() * 10);
    const showQuote = quotes[random];
    
    const pets = [
        "cat.jpg",
        "elephant.jpeg",
        "monkey.webp",
        "panda.avif",
        "rabbit.avif",
        "dog.jpeg",
        "dolphin.webp",
        "sparrow.jpg",
        "squirrel.jpeg",
        "tiger.jpg"
    ]
    const showImg = pets[random];
    
    button.addEventListener('click', () => {
        text.innerText = showQuote;
        image.style.display = "inline";
        image.src = showImg; 
    })
}
