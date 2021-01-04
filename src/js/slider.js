let MockObj = { id: 0 };

const slides = Array.from(document.querySelectorAll(".slider__slide"));
const slider = document.querySelector(".slider") || MockObj;
const arrows = Array.from(document.querySelectorAll(".arrow"));
const lines = Array.from(document.querySelectorAll(".numbers__line"));
const numbers = Array.from(document.querySelectorAll(".numbers__number"));
let initialLength = 0;

function getNextPrev() {
  const activeSlide = document.querySelector(".active-slide");
  const activeIndex = slides.indexOf(activeSlide);
  let next, prev;

  if (activeIndex === slides.length - 1) {
    next = slides[0];
  } else {
    next = slides[activeIndex + 1];
  }

  if (activeIndex === 0) {
    prev = slides[slides.length - 1];
  } else {
    prev = slides[activeIndex - 1];
  }
  return [next, prev];
}

/* function getPosition() {
  const activeSlide = document.querySelector(".active-slide");
  const activeIndex = slides.indexOf(activeSlide);
  const [next, prev] = getNextPrev();
  console.log(next);

  slides.forEach((slide, index) => {
    if (index === activeIndex) {
      slide.style.transform = "translateX(0)";
      console.log(index === activeIndex);
    } else if (slide === prev) {
      slide.style.transform = "translateX(-100%)";
      console.log(slide === prev);
    } else if (slide === next) {
      slide.style.transform = "translateX(100%)";
      console.log(slide === next);
    }

    slide.addEventListener("transitionend", () => {
      slide.classList.remove("top");
    });
  });
}

getPosition(); */

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    if (arrow.classList.contains("arrow__right")) {
      getNextSlide();
    } else if (arrow.classList.contains("arrow__left")) {
      getPrevSlide();
    }
  });
});

function getNextSlide() {
  if (slider.id !== "drillingSlider") {
    const current = document.querySelector(".active-slide");
    const [next, prev] = getNextPrev();
    const currentIndex = slides.indexOf(current);
    const nextIndex = slides.indexOf(next);

    if (current && slider) {
      slider.style.marginLeft = `-${nextIndex * 100}%`;
      current.classList.remove("active-slide");
      numbers[currentIndex].classList.remove("numbers__number-active");
      next.classList.add("active-slide");
      numbers[nextIndex].classList.add("numbers__number-active");
    }
  }
  /*   startCount(); */
}
function getPrevSlide() {
  const current = document.querySelector(".active-slide");
  const [next, prev] = getNextPrev();
  const currentIndex = slides.indexOf(current);
  const prevIndex = slides.indexOf(prev);
  const nextIndex = slides.indexOf(next);
  console.log("something");
  /* 
  slider.style.marginLeft = `${nextIndex * 100}%`; */
  prev.classList.remove("active-slide");
  numbers[currentIndex].classList.remove("numbers__number-active");
  prev.classList.add("active-slide");
  numbers[prevIndex].classList.add("numbers__number-active");
}

/* function startCount() {
  let now = new Date();
  now = now.getSeconds();
  let end = now + 5;
  lengthInterval();
}
 */
function increaseWidth() {
  initialLength = initialLength + 0.1;
  lines[0].style.width = `${initialLength}rem`;
  if (initialLength >= 2) {
    initialLength = 0;
  }
  console.log(initialLength);
}

/* lengthInterval = setInterval(() => {
  increaseWidth();
}, 100);
 */
window.addEventListener("DOMContentLoaded", () => {
  lines.forEach((line) => {
    line.style.width = "0px";
  });

  if (slider.id && slider.id === "drillingSlider") {
    numbers.forEach((number) => {
      number.style.display = "none";
    });
    arrows.forEach((arrow) => {
      arrow.style.display = "none";
    });
  }

  setInterval(() => {
    getNextSlide();
    /*     setTimeout(() => {
      clearInterval(lengthInterval);
    }, 3800); */
  }, 4000);
});
