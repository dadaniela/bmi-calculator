import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { notNumber, bmiCalculator } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function(event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);
    
    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close();

    const bmiResult = bmiCalculator(weight, height);
    displayResultBMI(bmiResult);
};

function displayResultBMI(bmiResult) {
    const message = `Your BMI is ${bmiResult}`;
    Modal.open();
    Modal.message.innerText = message;
};