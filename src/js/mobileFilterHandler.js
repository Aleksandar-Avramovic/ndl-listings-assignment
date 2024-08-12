const filterIcon = document.querySelector(".filter__mobile");
const popupCloseIcon = document.querySelector(".popup__close");
const filterOverlay = document.querySelector(".property-filters-overlay");

function openPopup() {
  document.querySelector(".property-filters").classList.add("open");
  popupCloseIcon.classList.add("open");
  disableScroll();
}

function closePopup() {
  document.querySelector(".property-filters").classList.remove("open");
  popupCloseIcon.classList.remove("open");
  enableScroll();
}

filterIcon.addEventListener("click", openPopup);
popupCloseIcon.addEventListener("click", closePopup);
filterOverlay.addEventListener("click", closePopup);
