const images = document.querySelectorAll("img");

const imgOptions = {};
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const img = entry.target;
    img.src = img.src.replace("min", "max");

    if (document.body.classList.contains('webp')){
        img.src = img.src.replace("png", "webp");
    }

    imgObserver.unobserve(entry.target);
  });
}, imgOptions);

images.forEach((img) => {
  imgObserver.observe(img);
});
