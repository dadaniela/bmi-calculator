import {Modal} from "./modal.js";
import {AlertError} from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function(event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const showAlertError = notNumber(weight) || notNumber(height);
    
    if(showAlertError) {
        AlertError.open()
        return;
    };

    AlertError.close();

    const bmiResult = bmiCalculator(weight, height);
    const message = `Your BMI is ${bmiResult}`;
    Modal.open();
    Modal.message.innerText = message;
};

function notNumber (value) {
    return isNaN(value) || value == ""
    
};

function bmiCalculator(weight, height) {
    return (weight / (height / 100 ) ** 2).toFixed(1);
};