function goYes() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 600);
}

/* ----------------------------
   Cute NO → YES Interaction
---------------------------- */

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;
let clickCount = 0;

const noMessages = [
  "NO THANK YOU",
  "Are you sure? 🥺",
  "Really sure? 😢",
  "Think again 💔",
  "Last chance 😭",
  "You don't mean that 🥹",
  "Just press YES 💖"
];

if (noBtn) {
  noBtn.addEventListener("click", () => {
    clickCount++;

    // Change NO text smoothly
    if (clickCount < noMessages.length) {
      noBtn.textContent = noMessages[clickCount];
    } else {
      noBtn.textContent = "Okay fine 😌";
    }

    // Grow YES button
    scale += 0.15;
    yesBtn.style.transform = `scale(${scale})`;

    // Add soft glow
    yesBtn.style.boxShadow = "0 0 25px rgba(255, 64, 129, 0.8)";
  });
}
