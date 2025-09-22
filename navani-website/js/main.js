const images = document.querySelectorAll(".carrusel img");
let index = 0;
let interval = setInterval(nextImage, 4000); // cada 4s

function showImage(newIndex) {
  const current = images[index];
  const next = images[newIndex];

  // Quitar clases previas
  images.forEach(img => img.classList.remove("active", "prev"));

  // Imagen actual → pasa a "prev" (se desvanece)
  current.classList.add("prev");

  // Imagen nueva → fade in
  next.classList.add("active");

  // Actualizar índice
  index = newIndex;
}

function nextImage() {
  let newIndex = (index + 1) % images.length;
  showImage(newIndex);
}

