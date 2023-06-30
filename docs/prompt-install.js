window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  document.querySelector(".reset-btn").addEventListener("click", () => {
    e.prompt();
  });
});
