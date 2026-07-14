const message = `

From the very beginning, getting to know you has made many ordinary moments feel more meaningful.

Your kindness, your smile, and the way you carry yourself are qualities I genuinely admire.

I wanted to create something a little different—not because a webpage can express everything I feel, but because I wanted to put time and effort into telling you that you are someone special to me.

Whatever the future holds, I hope you always have reasons to smile, achieve your dreams, and be surrounded by happiness.

Thank you for taking the time to read this letter.

❤️
`;

const area = document.getElementById("typewriter");

let i = 0;

function type(){

if(i < message.length){

area.innerHTML += message.charAt(i);
area.scrollTop = area.scrollHeight;

i++;

setTimeout(type,45);

}

}

type();

document.getElementById("nextBtn").onclick = function(){

window.location.href="reasons.html";

}