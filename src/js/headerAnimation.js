const header = document.querySelector(".navbar");
const rightPart = document.querySelector(".navbar__right");
const link = document.querySelector(".link");
const plank1 = document.querySelector(".link__hamburger--1");
const plank2 = document.querySelector(".link__hamburger--2");
const plank3 = document.querySelector(".link__hamburger--3");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

link.addEventListener("click", function () {
  rightPart.classList.toggle("list-active");
  link.classList.toggle("link-active");
  plank1.classList.toggle("list-active-plank-1");
  plank2.classList.toggle("list-active-plank-2");
  plank3.classList.toggle("list-active-plank-3");
  console.log(rightPart.classList);
});
