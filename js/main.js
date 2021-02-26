//Variables
let result = 0;
let enteredNumber = 0;

//Cached Elements
let resultNumber = document.getElementById('result');
let plusButton = document.getElementById('plus');
let minusButton = document.getElementById('minus');
let inputValue = document.getElementById('input-box');

//Event Listeners
plusButton.addEventListener('click', function(){
    toNumber();
    increase();
    checkColor();
    resultNumber.innerHTML = result;
})

minusButton.addEventListener('click', function(event){
    toNumber();
    decrease();
    checkColor();
    resultNumber.innerHTML = result;
    
})

//Functions
function toNumber(){
    result = Number(resultNumber.innerText)
    enteredNumber = Number(inputValue.value)
}

function increase(){
    result += enteredNumber;
    return result
}

function decrease(){
    result -= enteredNumber
    return result
}

function checkColor(){
    if(result < 0){
        resultNumber.style.color = "red";
    }
    else{
        resultNumber.style.color = "black";
    }
}

