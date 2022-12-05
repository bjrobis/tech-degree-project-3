let userName = document.getElementById('name');
//puts the focus on the username box at top of form
userName.focus();

let jobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');

//hides the otherjobrole text box by default
otherJobRole.style.visibility = 'hidden';

//hides and unhides the jobrole box based on selection 
jobRole.addEventListener('change', e => {
    if (e.target.value === 'other'  ) {
        otherJobRole.style.visibility = 'visible';
    } else if (e.target.value !== 'other') {
        otherJobRole.style.visibility = 'hidden';
    }
});

let shirtColor = document.getElementById('color');
shirtColor.disabled = true;
let shirtColorOptions = shirtColor.children;
let design = document.getElementById('design');

//enable and disable color options based on the selected t-shirt theme
design.addEventListener('change', e => {
    if (e.target.value === 'js puns') {
        shirtColor.disabled = false;
        for (let i = 0; i < shirtColorOptions.length; i++) {
            let theme = shirtColorOptions[i].getAttribute('data-theme');
            if (theme === "js puns") {
               shirtColorOptions[i].disabled = false;
            } else if (theme !== "js puns"){
               shirtColorOptions[i].disabled = true;
            }
        }
    } else if (e.target.value === 'heart js') {
        shirtColor.disabled = false;
        for (let i = 0; i < shirtColorOptions.length; i++) {
            theme = shirtColorOptions[i].getAttribute('data-theme');
            if (theme === "heart js") {
                shirtColorOptions[i].disabled = false;
            } else if (theme !== "heart js") {
                shirtColorOptions[i].disabled = true;
            }
        }

    }
})

let totalCost = 0;
let totalCostMessage = document.getElementById('activities-cost');
totalCostMessage.innerHTML = `Total: $${totalCost}`;

let registeredActivities = document.getElementById('activities');

//when registered activities are selected their associated cost is added up and 
//the total cost display changes to reflect the new total cost based on selected activies
registeredActivities.addEventListener('change', e=> {
    let dataCost = e.target.getAttribute('data-cost');
    let dataCostNumber = parseInt(dataCost, 10);
    if (e.target.checked === true) {
        totalCost = totalCost + dataCostNumber;
    } else if (e.target.checked === false) {
        totalCost = totalCost - dataCostNumber;
    }
    totalCostMessage.innerHTML = `Total: $${totalCost}`;
})

let payment = document.getElementById('payment');
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');

//default visibility for each of the payment methods
paypal.style.visibility = 'hidden';
bitcoin.style.visibility = 'hidden';
creditCard.style.visibility = 'visible';

//sets the default payment method to the creditcard option
let defaultPayment = payment.children[1];
defaultPayment.setAttribute('selected', 'selected');

//changes the visiblity of the payment based ont he current payment option selected
payment.addEventListener('change', e => {
    let selectedPayment = e.target.value;
    if (selectedPayment === 'paypal') {
        paypal.style.visibility = 'visible';
        bitcoin.style.visibility = 'hidden';
        creditCard.style.visibility = 'hidden';
    } else if (selectedPayment === 'bitcoin') {
        paypal.style.visibility = 'hidden';
        bitcoin.style.visibility = 'visible';
        creditCard.style.visibility = 'hidden';
    } else if (selectedPayment === 'credit-card') {
        paypal.style.visibility = 'hidden';
        bitcoin.style.visibility = 'hidden';
        creditCard.style.visibility = 'visible';
    }

})

let email = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zip = document.getElementById('zip');
let cvv = document.getElementById('cvv');
let form = document.querySelector('form');

//invalidItem func adds the 'not-valid' class to the parentElement and removes the 'valid' class 
function invalidItem(variable){
    variable.parentElement.classList.add('not-valid');
    variable.parentElement.classList.remove('valid');
    variable.parentElement.lastElementChild.style.display = 'inline';
};

//validItem func adds the 'valid' class to the parentElement and removes the 'not-valid' class from it
function validItem(variable){
    variable.parentElement.classList.add('valid');
    variable.parentElement.classList.remove('not-valid');
    variable.parentElement.lastElementChild.style.display = 'none';

};


//when the submit button is clicked each required form element is verified against
//a regext and if it doesn't meet specs the form doesn't submit and the class of
//each parent element is changed based on if it meets criteria or not
form.addEventListener('submit', e => {
    //e.preventDefault();
    let userName2 = userName.value;
    let regex = /[\S\s]+[\S]+/.test(userName2);
    // regex used from https://regex101.com/library/aF9hX2
    console.log(regex);

    if (regex === false) {
        e.preventDefault();
        invalidItem(userName);
    } else {
        validItem(userName);
    }

    let email2 = email.value;
    let regexEmail = /^[^@]+@[^@.]+\.com$/.test(email2);
    console.log(regexEmail);

    if (regexEmail === false) {
        e.preventDefault();
        invalidItem(email);
    } else {
        validItem(email);
    }

    if (totalCost === 0) {
        console.log('Must have at least 1 activity selected');
        e.preventDefault();
        invalidItem(totalCostMessage);
    } else {
        validItem(totalCostMessage);
    }

    let cardNumber2 = cardNumber.value;
    let regexCardNumber = /^(\d{13,16})$/.test(cardNumber2);

    if (creditCard.style.visibility === 'visible') {
        if (regexCardNumber === false) {
            console.log('Invalid Card Number');
            e.preventDefault();
            invalidItem(cardNumber);
        } else {
            validItem(cardNumber);
        }
    }

    let zip2 = zip.value;
    let regexZip = /^(\d{5})$/.test(zip2);

    if (regexZip === false) {
        console.log('invalid zipcode');
        e.preventDefault();
        invalidItem(zip);
    } else {
        validItem(zip);
    }

    let cvv2 = cvv.value;
    let regexCvv = /^(\d{3})$/.test(cvv2);

    if (regexCvv === false) {
        console.log('invalid cvv');
        e.preventDefault();
        invalidItem(cvv);
    } else {
        validItem(cvv);
    }
})


let checkBoxes = document.querySelectorAll('input[type=checkbox]');
console.log(checkBoxes);

//this will add or remove a focus box around the selected checkbox based on
//if it is currently checked or not
for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('focus', e => {
        checkBoxes[i].parentElement.classList.add('focus');
    })

    checkBoxes[i].addEventListener('blur', e => {
        checkBoxes[i].parentElement.classList.remove('focus');

    })

}