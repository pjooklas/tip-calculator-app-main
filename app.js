const bill = document.querySelector('#bill');
const people = document.querySelector('#people');
const values = document.querySelector('#values');
const values2 = document.querySelector('#values');
const customTip = document.querySelector('#customTip');
const button = document.querySelectorAll('.btn');
const error = document.getElementById('error');
const totalVal = document.querySelectorAll('.tipValue');
const reset = document.querySelector('.reset');

let billValue = 0;
let peopleValue = 1;
let tipValue = 0.15;

bill.addEventListener('input', validateBill);

function validateBill() {
    if (bill.value.includes(',')) {
        bill.value.replace(',', '.')
    }
    billValue = parseFloat(bill.value);
    calculate();
}

customTip.addEventListener('input', tipCustomValue);
people.addEventListener('input', setPeopleValue)
reset.addEventListener('click', handleReset);

button.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

function handleClick(event) {
    button.forEach(btn => {
        btn.classList.remove('active')
        if (event.target.innerHTML === btn.innerHTML) {
            btn.classList.add('active');
            tipValue = parseFloat(btn.innerHTML) / 100;
        }
    })
    customTip.value = '';
    calculate();
}

function tipCustomValue() {
    tipValue = parseFloat(customTip.value / 100);
    button.forEach(btn => {
        btn.classList.remove('active');
    })
    if (customTip.value !== 0) {
        calculate();
    }
}

function setPeopleValue() {
    peopleValue = parseFloat(people.value);
    if (peopleValue <= 0) {
        error.innerHTML = "Can't be zero";
    } else {
        error.innerHTML = '';
    };
    calculate();
}

function calculate() {
    if (peopleValue >= 1) {
        let tip = Math.round(((billValue * (tipValue)) / peopleValue) * 100) / 100;
        let totalAmount = Math.round((billValue / peopleValue + tip) * 100) / 100;
        totalVal[0].innerHTML = '$' + tip;
        totalVal[1].innerHTML = '$' + totalAmount;
    }
}

function handleReset() {
    bill.value = 0;
    validateBill();
    button[2].click();
    people.value = 1;
    setPeopleValue();
}