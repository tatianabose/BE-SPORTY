let hamberger = document.querySelector(".mob-nav-icon");
let CloseBar = document.querySelector(".close-icon");
let MobNav = document.querySelector(".mob-nav-bar");

hamberger.addEventListener("click", function () {
  MobNav.classList.add("open");
});

CloseBar.addEventListener("click", function () {
  MobNav.classList.remove("open");
});
