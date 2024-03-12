let toggle = document.querySelector(".toggle-button");
console.log(toggle);
let navlinks = document.querySelector(".nav-items");
console.log(navlinks);

toggle.addEventListener("click", function (e) {
  e.preventDefault();
  navlinks.classList.toggle("active");
  console.log();
});
