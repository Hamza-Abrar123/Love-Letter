const button = document.getElementById("openBtn");


button.addEventListener("click", () => {

document.body.style.opacity = "0";

document.body.style.transition = "1s";

setTimeout(() => {
    

window.location.href = "memory.html";


},1000);

});