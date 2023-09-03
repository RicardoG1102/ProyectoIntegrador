let number1 =document.getElementById('number1')
let number2 =document.getElementById('number2')


let result = document.querySelector('#result')

let btnSum = document.querySelector('#Sum')


btnSum.addEventListener('click',sumNumbers)


function sumNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1+data2;
}

let btnRest = document.querySelector('#Rest')


btnRest.addEventListener('click',restNumbers)


function restNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1-data2;
}


let btnMul = document.querySelector('#Mul')


btnMul.addEventListener('click',mulNumbers)


function mulNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1*data2;
}


let btnDivi = document.querySelector('#Divi')


btnDivi.addEventListener('click',diviNumbers)


function diviNumbers() {
    let data1 = Number(number1.value)
    let data2 = parseFloat(number2.value)
    result.textContent = data1/data2;
}



