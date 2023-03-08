export function notNumber (value) {
    return isNaN(value) || value == "" || value == 0
};

export function bmiCalculator(weight, height) {
    return (weight / (height / 100 ) ** 2).toFixed(1);
};