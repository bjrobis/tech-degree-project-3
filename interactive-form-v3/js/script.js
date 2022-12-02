let userName = document.getElementById('name');
userName.focus();

let jobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');

otherJobRole.style.visibility = 'hidden';

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
let totalCostMessage = document.getElementById('activities-cost').innerHTML;
totalCostMessage.innerHTML = `Total: $${totalCost}`;

let registeredActivities = document.getElementById('activities');

registeredActivities.addEventListener('change', e=> {
    let dataCost = e.target.getAttribute('data-cost');
    let dataCostNumber = parseInt(dataCost, 10);
    if (e.target.checked === true) {
        totalCost = totalCost + dataCostNumber;
    } else if (e.target.checked === false) {
        totalCost = totalCost - dataCostNumber;
    }
    
})

