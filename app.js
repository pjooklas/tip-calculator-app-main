console.log('testas');

const bill = document.querySelector('#bill');
const tipButton = document.querySelector('[name=tip]:checked');
const tipCustom = document.querySelector('#custom');
const tipField = document.querySelector('#tip');


tipField.addEventListener('click', () => {
    console.log('pasirinkai');
    const tipSelector = document.getElementsByName('tip');
    tipSelector.forEach((tip) => {
        if (tip.checked) {
            console.log(tip.value, );
        }
    });

});


let people = 5;

let tipAmount = Math.round(((bill.value * ((tipButton.value || tipCustom.value) / 100)) / people) * 100) / 100;

let total = Math.round((bill.value / people + tipAmount) * 100) / 100;



console.log(tipAmount);
console.log(total);