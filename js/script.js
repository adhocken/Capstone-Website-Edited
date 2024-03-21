window.addEventListener("scroll", function () {
  let header = document.querySelector("nav");
  let topOfPage = window.scrollY === 0;
  header.classList.toggle("sticky", !topOfPage);
});
