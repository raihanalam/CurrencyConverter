let currencyOne = document.querySelector('#currency-one');
let currencyTwo = document.querySelector('#currency-two');
let amountOne = document.querySelector('#amount-one');
let amountTwo = document.querySelector('#amount-two');

let rateEl = document.querySelector('#rate');
let swapEl = document.querySelector('#swap');

currencyOne.addEventListener('change',calculate);
currencyTwo.addEventListener('change',calculate);
amountOne.addEventListener('change',calculate);
amountTwo.addEventListener('change',calculate);
document.addEventListener('DOMContentLoaded',calculate);

swapEl.addEventListener('click',swap);

function calculate(e){
    let currency_one = currencyOne.value;
    let currency_two = currencyTwo.value; 

    fetch(`https://v6.exchangerate-api.com/v6/b957b1ede6a98da222f35181/latest/${currency_one}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        let rate = data.conversion_rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate.toFixed(2)} ${currency_two}`

        amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}
function swap(){
    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();

}