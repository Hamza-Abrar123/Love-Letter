const button = document.getElementById("openBtn");

button.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "memory.html";
    }, 1000);

});