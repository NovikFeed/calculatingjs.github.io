var result = document.querySelector('.name')

document.querySelector('.clean').addEventListener('click', () =>{
    result.innerHTML =`<h1>Мій калькулятор</h1>`
    document.querySelector('.firstNumber').value = ''
    document.querySelector('.secondNumber').value = ''
    document.querySelector('h1').style.borderBottomColor = 'black'
})

document.querySelector('.plus').addEventListener('click', () => {
    var firstNumber = document.querySelector('.firstNumber').value
    var secondNumber = document.querySelector('.secondNumber').value
    if((firstNumber) && (secondNumber)){
        var sum = +firstNumber + +secondNumber
    result.innerHTML = `<h1>Відповідь: ${sum}</h1>`
    document.querySelector('.firstNumber').value = sum
    document.querySelector('.secondNumber').value = ''
    document.querySelector('h1').style.borderBottomColor = 'green'
    }
})

document.querySelector('.substr').addEventListener('click', () => {
    var firstNumber = document.querySelector('.firstNumber').value
    var secondNumber = document.querySelector('.secondNumber').value
    if((firstNumber) && (secondNumber)){
        var sub = +firstNumber - +secondNumber
    result.innerHTML = `<h1>Відповідь: ${sub}</h1>`
    document.querySelector('.firstNumber').value = sub
    document.querySelector('.secondNumber').value = ''
    document.querySelector('h1').style.borderBottomColor = 'red'
    }
})
document.querySelector('.multy').addEventListener('click', () => {
    var firstNumber = document.querySelector('.firstNumber').value
    var secondNumber = document.querySelector('.secondNumber').value
    if((firstNumber) && (secondNumber)){
        var multyply = (+firstNumber * +secondNumber).toFixed(3)
    result.innerHTML = `<h1>Відповідь: ${multyply}</h1>`
    document.querySelector('.firstNumber').value = multyply
    document.querySelector('.secondNumber').value = ''
    document.querySelector('h1').style.borderBottomColor = 'blue'
    }
})
document.querySelector('.divide').addEventListener('click', () => {
    var firstNumber = document.querySelector('.firstNumber').value
    var secondNumber = document.querySelector('.secondNumber').value
    if((firstNumber) && (secondNumber)){
     var divide = (+firstNumber / +secondNumber).toFixed(3)
    result.innerHTML = `<h1>Відповідь: ${divide}</h1>`
    document.querySelector('.firstNumber').value = divide
    document.querySelector('.secondNumber').value = ''
    document.querySelector('h1').style.borderBottomColor = 'orange'
    }

})    

