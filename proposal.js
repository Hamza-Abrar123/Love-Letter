const yesBtn = document.getElementById("yes");
const thinkBtn = document.getElementById("think");

// YES Button
yesBtn.addEventListener("click", function () {

    // Create overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.75)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.flexDirection = "column";
    overlay.style.zIndex = "9999";

    // Message
    const message = document.createElement("h1");
    message.innerHTML = "❤️ Thank You Zainab ❤️<br><br>You made my day! 🌹";
    message.style.color = "white";
    message.style.textAlign = "center";
    message.style.fontFamily = "Poppins";
    message.style.fontSize = "45px";

    overlay.appendChild(message);

    document.body.appendChild(overlay);

    // Floating Hearts
    for (let i = 0; i < 70; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "99999";

        document.body.appendChild(heart);

        heart.animate([
            {
                transform: "translateY(0px) rotate(0deg)",
                opacity: 1
            },
            {
                transform: `translateY(-${window.innerHeight + 200}px) rotate(720deg)`,
                opacity: 0
            }
        ], {
            duration: 3000 + Math.random() * 2000,
            easing: "ease-out"
        });

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Redirect to Final Page
    setTimeout(() => {
        window.location.href = "final.html";
    }, 4000);

});


// THINK Button
thinkBtn.addEventListener("click", function () {

    alert(
`❤️ No Problem ❤️

Take your time.

I completely respect your decision.

Thank you for reading my little website.

😊`
    );

});