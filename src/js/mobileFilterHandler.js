const filterIcon = document.querySelector(".filter__mobile");

filterIcon.addEventListener("click", () => {
  document.querySelector(".property-filters").classList.add("open");
  disableScroll();
});
