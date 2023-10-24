
// const form = document.getElementById("survey-form");
// const submitButton = document.getElementById("submit-button");
// const resetButton = document.getElementById("reset-button");
// const popup = document.getElementById("popup");
// const popupContent = document.getElementById("popup-content");
// const closePopupButton = document.getElementById("close-popup");
// const submittedData = document.getElementById("submitted-data");
// const errorDisplay = document.getElementById("error-display");

// function isFormValid() {
//   const inputFields = form.querySelectorAll("input, select, textarea");
//   let isValid = true;

//   inputFields.forEach((input) => {
//     if (!input.value) {
//       isValid = false;
//     }
//   });

//   return isValid;
// }

// submitButton.addEventListener("click", () => {
//   if (isFormValid()) {
//     let formData = new FormData(form);
//     let result = "Submitted Data:\n";
//     formData.forEach((value, key) => {
//       result += `${key}: ${value}\n`;
//     });
//     submittedData.innerText = result;
//     popup.style.display = "block";
//   } else {
//     alert("Please fill in all fields before submitting.")
//   }
// });

// resetButton.addEventListener("click", () => {
//   form.reset();
//   errorDisplay.innerText = "";
// });

// closePopupButton.addEventListener("click", () => {
//   popup.style.display = "none";
//   form.reset();
//   errorDisplay.innerText = "";
// });

const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupButton = document.getElementById("close-popup");
const submittedData = document.getElementById("submitted-data");
const errorDisplay = document.getElementById("error-display");

function isFormValid() {
  const inputFields = form.querySelectorAll("input, select, textarea");
  let isValid = true;

  inputFields.forEach(function(input) {
    if (!input.value) {
      isValid = false;
    }
  });

  return isValid;
}

submitButton.addEventListener("click", function() {
  if (isFormValid()) {
    let formData = new FormData(form);
    let result = "Submitted Data:\n";
    formData.forEach(function(value, key) {
      result += key + ": " + value + "\n";
    });
    submittedData.innerText = result;
    popup.style.display = "block";
  } else {
    alert("Please fill in all fields before submitting.");
  }
});

resetButton.addEventListener("click", function() {
  form.reset();
  errorDisplay.innerText = "";
});

closePopupButton.addEventListener("click", function() {
  popup.style.display = "none";
  form.reset();
  errorDisplay.innerText = "";
});

