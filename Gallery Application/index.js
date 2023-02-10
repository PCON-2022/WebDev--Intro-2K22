const images = document.querySelectorAll(".thumbnail");
const overlay = document.querySelector(".overlay");
const expandedImg = document.querySelector("#expandedImg");
const close = document.querySelector("#close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    overlay.style.display = "flex";
    expandedImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  overlay.style.display = "none";
});
