const images = document.querySelectorAll(".story-image");
const progress = document.querySelectorAll(".progress");
const caption = document.getElementById("caption");

const captions = [
    "Every beautiful journey begins with a single memory ❤️",
    "Your smile has a magical way of making every moment brighter ✨",
    "Every picture reminds me how lucky I am to know someone as special as you 🌹",
    "Some memories never fade because they are made with the right person 💖",
    "Thank you for being part of these beautiful moments. Now I have something special to tell you... ❤️"
];

let current = 0;
let storyInterval;

function showStory(index) {

    images.forEach(img => img.classList.remove("active"));
    progress.forEach(bar => bar.classList.remove("active"));

    images[index].classList.add("active");
    progress[index].classList.add("active");

    caption.innerHTML = captions[index];
}

function nextStory() {

    current++;

    if (current >= images.length) {
        window.location.href = "letter.html";
        return;
    }

    showStory(current);
}

function previousStory() {

    if (current > 0) {
        current--;
    }

    showStory(current);
}

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

function startStory() {

    clearInterval(storyInterval);

    storyInterval = setInterval(() => {

        nextStory();

    }, 4000);

}

showStory(current);
startStory();