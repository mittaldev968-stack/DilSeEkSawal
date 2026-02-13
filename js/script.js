const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const wrapper = document.getElementById("buttonWrapper");
const heartContainer = document.getElementById("heartContainer");

let scale = 1;
let clickCount = 0;

const messages = [
  "NO THANK YOU",
  "Are you sure? 🥺",
  "Really sure? 😢",
  "Think again 💔",
  "Last chance 😭",
  "You don't mean that 🥹",
  "Just press YES 💖"
];

yesBtn.addEventListener("click", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 600);
});

noBtn.addEventListener("click", () => {
  clickCount++;

  if (clickCount < messages.length) {
    noBtn.textContent = messages[clickCount];
  }

  /* YES grows faster */
  scale += 0.35;
  yesBtn.style.transform = `scale(${scale})`;
  yesBtn.style.boxShadow = "0 0 40px rgba(255, 64, 129, 0.9)";

  /* NO shrinks slightly */
  noBtn.style.transform = `scale(${1 - clickCount * 0.05})`;
  noBtn.style.opacity = 1 - clickCount * 0.08;

  /* Rearrange layout */
  if (clickCount >= 2) {
    wrapper.style.flexDirection = "column";
  }

  /* Floating hearts */
  createHeart();

  /* Intensify background */
  document.body.style.background =
    "radial-gradient(circle at center, #ffd6eb 0%, #ffb6d5 40%, #ff9fc8 100%)";

  /* Final fullscreen takeover */
  if (clickCount >= messages.length - 1) {
    setTimeout(() => {
      yesBtn.classList.add("fullscreen");
      yesBtn.textContent = "💖 SAY YES ALREADY 💖";
    }, 400);
  }
});

/* Floating hearts effect */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2500);
}
