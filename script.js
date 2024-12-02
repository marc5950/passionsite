// Select elements
const burgerMenu = document.getElementById("burger-menu");
const menu = document.getElementById("menu");

// Toggle the menu when the burger menu is clicked
burgerMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
});
