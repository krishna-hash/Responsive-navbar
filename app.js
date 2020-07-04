const hamberger = document.querySelector(".humberger");
const links = document.querySelector(".links");
const fading = document.querySelectorAll(".links li");

hamberger.addEventListener("click", () => {
  links.classList.toggle("open");
  fading.forEach((fades) => {
    fades.classList.toggle("fade");
  });
});
