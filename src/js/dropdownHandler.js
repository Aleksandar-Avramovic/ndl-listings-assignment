const sortingIcon = document.querySelector(".filter-sorting__icon");
const sortingBtn = document.querySelector(".filter-sorting__btn");
const sortingList = document.querySelector(".filter-sorting__list");

// activate/deactivate dropdown list
sortingBtn.addEventListener("click", () => {
  sortingIcon.classList.toggle("active-dropdown");
  sortingList.classList.toggle("active-dropdown");
});
