const images = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

images.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove("hidden");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
