const companion = document.querySelector(".companion");
const companionButton = document.querySelector("#companionButton");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const setLook = (event) => {
  if (!companion) return;

  const rect = companion.getBoundingClientRect();
  const headX = rect.left + rect.width * 0.55;
  const headY = rect.top + rect.height * 0.29;
  const lookX = clamp((event.clientX - headX) / 38, -9, 9);
  const lookY = clamp((event.clientY - headY) / 46, -7, 7);

  companion.style.setProperty("--look-x", `${lookX}px`);
  companion.style.setProperty("--look-y", `${lookY}px`);
};

window.addEventListener("pointermove", setLook, { passive: true });

window.addEventListener("pointerleave", () => {
  if (!companion) return;
  companion.style.setProperty("--look-x", "0px");
  companion.style.setProperty("--look-y", "0px");
});

companionButton?.addEventListener("click", () => {
  companion.classList.add("is-excited");
  companion.classList.add("is-smiling");

  window.setTimeout(() => {
    companion.classList.remove("is-excited");
    companion.classList.remove("is-smiling");
  }, 760);
});
