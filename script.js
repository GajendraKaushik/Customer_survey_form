const form = document.getElementById("survey-form");
const submitButton = document.getElementById("submit-button");
const resetButton = document.getElementById("reset-button");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closePopupButton = document.getElementById("close-popup");
const submittedData = document.getElementById("submitted-data");

submitButton.addEventListener("click", () => {
  let formData = new FormData(form);
  let result = "Submitted Data:\n";
  formData.forEach((value, key) => {
    result += `${key}: ${value}\n`;
  });
  submittedData.innerText = result;
  popup.style.display = "block";
});

resetButton.addEventListener("click", () => {
  form.reset();
});

closePopupButton.addEventListener("click", () => {
  popup.style.display = "none";
  form.reset();
});
