const text = "💖 Happy National Girlfriend Day 💖";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 80);
    }
}
window.onload = () => {
    typeEffect();
    startSlideshow();
    startParticles();
};


document.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    if (music.paused) {
        music.play().catch(err => console.log("Autoplay blocked:", err));
    }
});

document.getElementById("surpriseBtn").addEventListener("click", () => {
    document.getElementById("lovePopup").style.display = "flex";
});
document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("lovePopup").style.display = "none";
});



let slideIndex = 0;
function startSlideshow() {
    const slides = document.querySelectorAll(".slide");
    setInterval(() => {
        slides.forEach((s, i) => s.classList.toggle("active", i === slideIndex));
        slideIndex = (slideIndex + 1) % slides.length;
    }, 4000);
}

document.getElementById("surpriseBtn").addEventListener("click", () => {
    const secret = document.getElementById("secretMessage");
    secret.innerHTML = "💌 May our love last forever ❤️";
    secret.style.display = "block";

    for (let i = 0; i < 100; i++) {
        let conf = document.createElement("div");
        conf.innerHTML = "💖";
        conf.style.position = "absolute";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.top = "-20px";
        conf.style.fontSize = (Math.random() * 20 + 20) + "px";
        conf.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
        document.getElementById("confetti").appendChild(conf);
        setTimeout(() => conf.remove(), 5000);
    }
});
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {transform: translateY(0);}
    100% {transform: translateY(100vh);}
}`;
document.head.appendChild(style);

function startParticles() {
    const canvas = document.getElementById("love-particles");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const hearts = [];

    class Heart {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 100;
            this.size = Math.random() * 20 + 10;
            this.speed = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        draw() {
            ctx.globalAlpha = this.opacity;
            ctx.font = `${this.size}px Arial`;
            ctx.fillText("💗", this.x, this.y);
            ctx.globalAlpha = 1;
        }
        update() {
            this.y -= this.speed;
            if (this.y < -20) {
                this.y = canvas.height + 50;
                this.x = Math.random() * canvas.width;
            }
        }
    }

    for (let i = 0; i < 100; i++) hearts.push(new Heart());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(h => {h.update(); h.draw();});
        requestAnimationFrame(animate);
    }
    animate();
}
