const MOCK_OBJ = {
  addEventListener: function () {},
};
const Form = document.querySelectorAll(".form");
const submitFormButton = document.querySelectorAll(".form__button") || MOCK_OBJ;
const backdrops = document.querySelectorAll(".backdrop") || MOCK_OBJ;
const modalSentCrosses =
  document.querySelectorAll(".modalSentCrosses") || MOCK_OBJ;
const inputs =
  Array.from(document.querySelectorAll(".form__input")) || MOCK_OBJ;
const formBlocks =
  Array.from(document.querySelectorAll(".contacts__form--block")) || MOCK_OBJ;
const phoneInputElement = document.getElementById("formPhoneInput") || MOCK_OBJ;
const orderButton = document.getElementById("orderConsultation") || MOCK_OBJ;
const backdropForm = document.querySelector(".backdrop--form") || MOCK_OBJ;

console.log(inputs);

function formSubmit(event) {
  var url = "https://formspree.io/f/mzbkkvgg";
  var request = new XMLHttpRequest();
  request.open("POST", url, true);
  request.onload = function () {
    console.log(request.responseText);
  };

  request.onerror = function () {
    console.log("something went wrong with form submition");
  };

  request.send(new FormData(event.target));
  event.preventDefault();
}

if (Form) {
  console.log(Form);
  Form.forEach((form) => {
    console.log(form);
    form.addEventListener("submit", formSubmit);
  });
}

if (submitFormButton) {
  submitFormButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (Form[index].checkValidity() === true) {
        backdrops.forEach((backdrop) => {
          backdrop.classList.remove("modalOpen");
          if (Array.from(backdrop.classList).includes("backdrop-sent")) {
            backdrop.classList.add("modalOpen");
          }
        });
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].classList.remove("input-invalid");
          inputs[i].value = "";
        }
      } else {
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].checkValidity() === false) {
            inputs[i].classList.add("input-invalid");
            console.log("input invalid");
          }
        }
      }
    });
  });
}

if (modalSentCrosses) {
  modalSentCrosses.forEach((cross) => {
    cross.addEventListener("click", () => {
      backdrops.forEach((backdrop) => {
        backdrop.classList.remove("modalOpen");
      });
      inputs.forEach((element) => {
        console.log(element.value);
        element.value = "";
      });
    });
  });
}

orderButton.addEventListener("click", () => {
  backdropForm.classList.add("modalOpen");
});

backdrops.forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("backdrop")) {
      backdrop.classList.remove("modalOpen");
      if (Form) {
        let inputs = document.getElementsByTagName("input");
        let textarea = document.getElementsByTagName("textarea");
        for (let i = 0; i < inputs.length; i++) {
          if (inputs[i].type.toLowerCase()) inputs[i].value = "";
        }
        if (textarea) textarea[0].value = "";
      }
    }
  });
});
