// 
let currentYear = document.querySelectorAll(".cureent-year input")[0];
let birthYear = document.querySelectorAll(".birth-year input")[0];
let result = document.querySelectorAll(".result")[0];

function ageCalulate () {
    let currYear = Number(currentYear.value);
    let birYear = Number(birthYear.value);
    result.innerHTML = `This is your age current year is <span class='agecolor'> ${currYear - birYear} </span>`
}