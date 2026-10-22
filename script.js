
function openSurprise() {
    const message = document.getElementById("surprise-message");

    message.style.display = "block";
    message.classList.remove("show-surprise");
    void message.offsetWidth;
    message.classList.add("show-surprise");

    createHearts();
}

function createHearts() {
    const symbols = ["💗", "💕", "💖", "✨"];

    for (let i = 0; i < 18; i++) {
        const heart = document.createElement("span");
        heart.className = "floating-heart";
        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        heart.addEventListener("animationend", function () {
            heart.remove();
        });
    }
    createConfetti();

}


function createConfetti() {
    const colors = ["💗", "🎉", "✨", "🎀", "💕"];

    for (let i = 0; i < 35; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti";
        piece.textContent =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration =
            (2 + Math.random() * 2) + "s";
        piece.style.animationDelay = Math.random() * 0.5 + "s";

        document.body.appendChild(piece);

        piece.addEventListener("animationend", function () {
            piece.remove();
        });
    }
}



 
