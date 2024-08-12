const filterIcon = document.querySelector(".filter__mobile");
const popupCloseIcon = document.querySelector(".popup__close");

filterIcon.addEventListener("click", () => {
  document.querySelector(".property-filters").classList.add("open");
  popupCloseIcon.classList.add("open");
  disableScroll();
});

popupCloseIcon.addEventListener("click", () => {
  document.querySelector(".property-filters").classList.remove("open");
  popupCloseIcon.classList.remove("open");
  enableScroll();
});
