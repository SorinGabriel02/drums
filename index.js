window.addEventListener("keydown", e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // stop the function if there is no key data
  audio.currentTime = 0; // rewind every time to the start of the sound
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", () => {
    key.classList.remove("playing");
  });
});
