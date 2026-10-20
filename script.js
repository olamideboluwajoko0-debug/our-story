const loginScreen = document.getElementById("login-screen");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

function checkPassword() {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === "moonandsun") {
    errorMessage.textContent = "";
    loginScreen.classList.add("unlocked");
    document.body.classList.add("story-revealed");

    window.setTimeout(() => {
      loginScreen.style.display = "none";
    }, 850);
  } else {
    errorMessage.textContent = "Not quite, my angel. Try again ❤️";
    passwordInput.value = "";
    passwordInput.focus();
  }
}

// Pressing Enter works too.
passwordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// Gentle floating hearts. Keep the number small for mobile.
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function createFloatingHeart() {
  if (reduceMotion || document.hidden) return;

  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.setProperty("--left", `${Math.random() * 100}%`);
  heart.style.setProperty(
    "--duration",
    `${7 + Math.random() * 5}s`
  );
  heart.style.setProperty(
    "--heart-color",
    ["#d8788d", "#bd526b", "#e9a2ad", "#c18a76"][
      Math.floor(Math.random() * 4)
    ]
  );

  heart.style.fontSize = `${14 + Math.random() * 18}px`;

  document.body.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}

// Start hearts slowly rather than filling the whole screen.
if (!reduceMotion) {
  createFloatingHeart();
  window.setInterval(createFloatingHeart, 1300);
}

// Optional music player.
// Add your own audio file at music/our-song.mp3.
const music = new Audio("music/our-song.mp3");
music.loop = true;
music.preload = "none";
music.volume = 0.35;

const musicButton = document.createElement("button");
musicButton.id = "music-toggle";
musicButton.type = "button";
musicButton.textContent = "♫ Play our song";
musicButton.setAttribute("aria-pressed", "false");

const musicNote = document.createElement("div");
musicNote.className = "music-note";
musicNote.hidden = true;
musicNote.setAttribute("role", "status");

document.body.append(musicButton, musicNote);

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicButton.textContent = "Ⅱ Pause our song";
      musicButton.setAttribute("aria-pressed", "true");
      musicNote.hidden = true;
    } catch (error) {
      musicNote.textContent =
        "Add your song as music/our-song.mp3, then try again.";
      musicNote.hidden = false;
    }
  } else {
    music.pause();
    musicButton.textContent = "♫ Play our song";
    musicButton.setAttribute("aria-pressed", "false");
  }
});

music.addEventListener("error", () => {
  musicNote.textContent =
    "Your song file is missing. Add music/our-song.mp3 to enable playback.";
  // Only show the note after she tries to play.
});