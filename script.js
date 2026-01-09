const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const mainGif = document.getElementById('main-gif');
const question = document.getElementById('question');

// Make the "No" button run away!
noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// What happens when she clicks "Yes"
yesButton.addEventListener('click', () => {
    question.innerHTML = "Yay! See you on the 14th, Ayesha! 🥰";
    mainGif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6Zzhic3R6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1z/Iatj86iaB7H68/giphy.gif"; // Happy gif
    noButton.style.display = 'none'; // Hide the no button
});
