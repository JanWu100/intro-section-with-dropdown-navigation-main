document.querySelector(".nav__burger").addEventListener("click", () => {
  console.log("a");
  document.querySelector(".nav__menu").classList.remove("nav__menu--hidden");
});
document
  .querySelector(".nav__menu__close-icon")
  .addEventListener("click", () => {
    console.log("b");
    document.querySelector(".nav__menu").classList.add("nav__menu--hidden");
  });

const dropdowns = document.querySelectorAll(".dropdown__link");

dropdowns.forEach((dropdown) =>
  dropdown.addEventListener("click", function () {
    this.parentElement.classList.toggle("dropdown--active");
  })
);
