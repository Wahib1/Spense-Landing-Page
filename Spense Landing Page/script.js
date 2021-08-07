const hamburger = document.getElementById("hamburger");
const centeredItems = document.getElementById("centeredItems");
const leftLinks = document.getElementsByClassName("left-Links")[0];
const leftLinksNd = document.getElementsByClassName("left-Links")[1];
hamburger.addEventListener('click', () => {
  centeredItems.classList.toggle("active");
  leftLinks.classList.toggle("active");
  leftLinksNd.classList.toggle("active");
})