const flagBlock = document.querySelector(".navbar__languages");
const container = document.querySelector(".navbar__languages--container");
const optionList = document.querySelectorAll(".option");
const flagList = document.querySelectorAll(".flagLabel");

flagBlock.addEventListener("click", () => {
  container.classList.toggle("option-active");
  console.log("flagblock");
});

flagList.forEach((flag) => {
  flag.addEventListener("click", () => {
    container.classList.toggle("option-active");
    console.log("flag");
  });
});
