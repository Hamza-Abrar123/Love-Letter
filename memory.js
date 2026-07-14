// ===============================
// Instagram Story Memory Page
// ===============================

// Images
const images = document.querySelectorAll(".story-image");

// Progress Bars
const progress = document.querySelectorAll(".progress");

// Caption
const caption = document.getElementById("caption");

// Buttons
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// Music
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Romantic Captions
const captions = [

"Every beautiful journey begins with a single memory ❤️",

"Your smile has a magical way of making every moment brighter ✨",

"Every picture reminds me how lucky I am to know someone as special as you 🌹",

"Some memories never fade because they are made with the right person 💖",

"Thank you for being part of these beautiful moments. Now I have something special to tell you... ❤️"

];

let current = 0;

let storyInterval;

// ===============================
// Show Story
// ===============================

function showStory(index){

    // Hide all images
    images.forEach(img => img.classList.remove("active"));

    // Reset all progress bars
    progress.forEach(bar => bar.classList.remove("active"));

    // Show current image
    images[index].classList.add("active");

    // Fill current progress
    progress[index].classList.add("active");

    // Change Caption
    caption.innerHTML = captions[index];

}

// ===============================
// Next Story
// ===============================

function nextStory(){

    current++;

    if(current >= images.length){

        window.location.href="letter.html";

        return;

    }

    showStory(current);

}

// ===============================
// Previous Story
// ===============================

function previousStory(){

    current--;

    if(current < 0){

        current = 0;

    }

    showStory(current);

}

// ===============================
// Buttons
// ===============================

document.getElementById("rightTap").addEventListener("click", () => {

    clearInterval(storyInterval);

    nextStory();

    startStory();

});

document.getElementById("leftTap").addEventListener("click", () => {

    clearInterval(storyInterval);

    previousStory();

    startStory();

});

// ===============================
// Auto Story
// ===============================

function startStory(){

    storyInterval = setInterval(()=>{

        nextStory();

    },4000);

}

// ===============================
// Music
// ===============================

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML="🔊";

    }

    else{

        music.pause();

        musicBtn.innerHTML="🎵";

    }

});

// ===============================
// Start
// ===============================

showStory(current);

startStory();