const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const wrapper = document.getElementById("buttonWrapper");

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

  // YES grows smoothly
  scale += 0.18;
  yesBtn.style.transform = `scale(${scale})`;

  // Add glow
  yesBtn.style.boxShadow = "0 0 30px rgba(255, 64, 129, 0.9)";

  // Move buttons vertically after 3 clicks
  if (clickCount >= 3) {
    wrapper.style.flexDirection = "column";
    wrapper.style.gap = "20px";
  }

  // FINAL STAGE – FULL SCREEN
  if (clickCount >= messages.length - 1) {
    setTimeout(() => {
      yesBtn.classList.add("fullscreen");
      yesBtn.textContent = "💖 YOU HAVE NO ESCAPE 💖";
    }, 400);
  }
});
