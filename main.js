const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    message: document.querySelector(".modal-card .title span"),
    btnClose: document.querySelector(".modal-card button.close"),
    open() {
        Modal.wrapper.classList.add("open");
    },
    close() {
        Modal.wrapper.classList.remove("open");
    },
};

form.onsubmit = function(event) {
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    const bmiResult = bmiCalculator(weight, height);
    const message = `Your BMI is ${bmiResult}`;
    Modal.open();
    Modal.message.innerText = message;
};

Modal.btnClose.onclick = function() {
    Modal.close();
};

function bmiCalculator(weight, height) {
    return (weight / (height / 100 ) ** 2).toFixed(1);
};