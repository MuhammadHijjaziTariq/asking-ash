const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

// Function to move the button
const moveButton = () => {
    // Subtract button size and a small margin so it stays on screen
    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
};

// For mobile taps and desktop hovers
noButton.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicking
    moveButton();
});

noButton.addEventListener('mouseover', moveButton);

// Success Action
yesButton.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th, Ash! 🥰";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/Iatj86iaB7H68/giphy.gif";
    noButton.style.display = 'none';
    
    // Optional: Add a little confetti feel by changing background
    document.body.style.backgroundColor = "#ffb3c1";
});
