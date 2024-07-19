const accordionBtns = document.querySelectorAll(
  ".property-filters__accordion-btn"
);

// handling accordion
accordionBtns.forEach((accBtn) => {
  accBtn.addEventListener("click", () => {
    accBtn.classList.toggle("active");
    accBtn.nextElementSibling.classList.toggle("active");
  });
});
