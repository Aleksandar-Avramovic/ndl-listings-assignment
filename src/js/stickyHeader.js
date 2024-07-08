const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header--sticky", window.scrollY > 0);
});
