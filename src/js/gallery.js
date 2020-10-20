let galleryImages = document.querySelectorAll(".gallery__img");
let galleryLatestOpenedImg;
let windowWidth = window.innerWidth;
let rusBtn = ["Пред", "След"];
let ukrBtn = ["Попер", "Наст"];

if (galleryImages) {
  galleryImages.forEach((image, index) => {
    image.onclick = () => {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImgUrlPos = getFullImgUrl.split("/dist/");
      //let setNewImgUrl = getImgUrlPos[1].replace('")', "");

      galleryLatestOpenedImg = index + 1;

      let container = document.body;
      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.addEventListener("click", () => {
        document.querySelector(".img-window").remove();
        document.querySelector(".img-btn-next").remove();
        document.querySelector(".img-btn-prev").remove();
      });
      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "./" + galleryLatestOpenedImg + ".jpg");
      newImg.setAttribute("id", "current-img");
      console.log(newImg);

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

        let newNextBtn = document.createElement("a");
        let nextBtnIcon = document.createElement("i");
        nextBtnIcon.classList.add("fas");
        nextBtnIcon.classList.add("fa-arrow-circle-right");
        nextBtnIcon.classList.add("fa-5x");
        newNextBtn.appendChild(nextBtnIcon);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.addEventListener("click", () => {
          document.getElementById("current-img").remove();
          let getImgWindow = document.querySelector(".img-window");
          let newImg = document.createElement("img");
          getImgWindow.appendChild(newImg);
          let calcNewImg;
          calcNewImg = galleryLatestOpenedImg + 1;
          if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;
          }
          newImg.setAttribute("src", "./" + calcNewImg + ".jpg");
          newImg.setAttribute("id", "current-img");
          galleryLatestOpenedImg = calcNewImg;
          /*           newImg.onload = function () {
            let imgWidth = newImg.style.width;
            let calcImgToEdge = (windowWidth - imgWidth) / 2;

            let nextBtn = document.querySelector(".img-btn-next");
            nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";
          }; */
          console.log(newImg);
        });
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px";

        let newPrevBtn = document.createElement("a");
        let prevBtnIcon = document.createElement("i");
        prevBtnIcon.classList.add("fas");
        prevBtnIcon.classList.add("fa-arrow-circle-left");
        prevBtnIcon.classList.add("fa-5x");
        newPrevBtn.appendChild(prevBtnIcon);
        container.appendChild(newPrevBtn);
        newPrevBtn.setAttribute("class", "img-btn-prev");
        newPrevBtn.addEventListener("click", () => {
          document.getElementById("current-img").remove();
          let getImgWindow = document.querySelector(".img-window");
          let newImg = document.createElement("img");
          getImgWindow.appendChild(newImg);
          let calcNewImg;
          calcNewImg = galleryLatestOpenedImg - 1;
          if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;
          }
          newImg.setAttribute("src", "./" + calcNewImg + ".jpg");
          newImg.setAttribute("id", "current-img");
          galleryLatestOpenedImg = calcNewImg;
          /*           newImg.onload = function () {
            let imgWidth = newImg.style.width;
            let calcImgToEdge = (windowWidth - imgWidth) / 2 - 80;

            let prevBtn = document.querySelector(".img-btn-prev");
            prevBtn.style.cssText = "right: " + calcImgToEdge + "px;";
            console.log("nextBtn");
          }; */
        });
        newPrevBtn.style.cssText = "left: " + calcImgToEdge + "px";
      };
    };
  });
}
