const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const modalWrapper = document.querySelector(".modal-wrapper");
const modalMessage = document.querySelector(".modal-card .title span");
const modalBtnClose = document.querySelector(".modal-card button.close");

form.onsubmit = function(event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const bmiResult = bmiCalculator(weight, height);
    const message = `Your BMI is ${bmiResult}`;
    modalWrapper.classList.add("open");
    modalMessage.innerText = message;
};

modalBtnClose.onclick = function() {
    modalWrapper.classList.remove("open");
};

function bmiCalculator(weight, height) {
    return (weight / (height / 100 ) ** 2).toFixed(1);
};