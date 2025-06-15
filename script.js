
document.addEventListener("DOMContentLoaded", () => {
  const btn      = document.getElementById("joinBtn");
  const modal    = document.getElementById("joinModal");
  const closers  = modal.querySelectorAll(".close-modal");

  btn.addEventListener("click", () => modal.classList.add("show"));
  closers.forEach(el => el.addEventListener("click", () => modal.classList.remove("show")));

  document.addEventListener("keydown", e => {
    if(e.key === "Escape") modal.classList.remove("show");
  });
});

