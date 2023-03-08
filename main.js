import {Modal} from "./modal.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.onsubmit = function(event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const bmiResult = bmiCalculator(weight, height);
    const message = `Your BMI is ${bmiResult}`;
    Modal.open();
    Modal.message.innerText = message;
};

function bmiCalculator(weight, height) {
    return (weight / (height / 100 ) ** 2).toFixed(1);
};