// const form = document.getElementById("survey-form");
// const submitButton = document.getElementById("submit-button");
// const resetButton = document.getElementById("reset-button");
// const popup = document.getElementById("popup");
// const popupContent = document.getElementById("popup-content");
// const closePopupButton = document.getElementById("close-popup");
// const submittedData = document.getElementById("submitted-data");

// submitButton.addEventListener("click", () => {
//   let formData = new FormData(form);
//   let result = "Submitted Data:\n";
//   formData.forEach((value, key) => {
//     result += `${key}: ${value}\n`;
//   });
//   submittedData.innerText = result;
//   popup.style.display = "block";
// });

// resetButton.addEventListener("click", () => {
//   form.reset();
// });

// closePopupButton.addEventListener("click", () => {
//   popup.style.display = "none";
//   form.reset();
// });


const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupButton = document.getElementById("close-popup");
const submittedData = document.getElementById("submitted-data");
const errorDisplay = document.getElementById("error-display");

// Function to check if all fields are filled
function isFormValid() {
  const inputFields = form.querySelectorAll("input, select, textarea");
  let isValid = true;

  inputFields.forEach((input) => {
    if (!input.value) {
      isValid = false;
    }
  });

  return isValid;
}

submitButton.addEventListener("click", () => {
  if (isFormValid()) {
    let formData = new FormData(form);
    let result = "Submitted Data:\n";
    formData.forEach((value, key) => {
      result += `${key}: ${value}\n`;
    });
    submittedData.innerText = result;
    popup.style.display = "block";
  } else {
    // errorDisplay.innerText = "Please fill in all fields before submitting.";
    alert("Please fill in all fields before submitting.")
  }
});

resetButton.addEventListener("click", () => {
  form.reset();
  errorDisplay.innerText = ""; // Clear error message when resetting
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  form.reset();
  errorDisplay.innerText = ""; // Clear error message when closing the popup
});
