const calculatorDisplay = document.getElementById('calculations');
const calculatorBtn = document.querySelectorAll('.btn');

let equation = ''

// handles button clicks
calculatorBtn.forEach(btn => {
    btn.addEventListener('click', function handleClick(event){
        const input = btn.innerHTML
        const lastInput = equation[equation.length -1]
        const currentInputIsOperator = isOperator(input)
        const lastInputIsOperator = isOperator(lastInput)
        if(currentInputIsOperator && lastInput === undefined) equation = equation + '0';
        if((btn.getAttribute('data-type')) || (currentInputIsOperator && lastInputIsOperator)){
            if(input.trim() === '='){ 
                console.log('eqaul')
                equation = calculate(equation)
            }else if (input.trim() =='RESET'){
                console.log('reset')
                equation = '';
            }else if(input.trim() === 'DEL'){
                equation = equation.slice(0,-1)
            }
        }else {
            equation = equation + input
        }
        updateDisplay();
    })
})

// up dates calculator display
const updateDisplay = () => {
    if(equation == ''){
        calculatorDisplay.innerHTML = 0;
    }else{
        calculatorDisplay.innerHTML = equation
    }
}

// Calculate user entered equation
function calculate(equation) {
    const newEquation = equation.replace('x', '*')
    // stops injection 
    const validExpressionRegex = /^[-+*/()\d\s.]+$/;

    if (!validExpressionRegex.test(newEquation)) {
        return "0";
      }

    if(equation == '') { 
        console.log('return 0')
    return '0';
    }

  try {
    const result = eval(newEquation);
    if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid result");
    }
    return String(result);
  } catch (error) {
    return "Error: Invalid expression";
  }
}

// checks to see if input is an operator 
const isOperator = (input) => {
    const operatorArray = ['x', '/', '+', '-',]
    if(operatorArray.includes(input)){
        return true
    }else{ 
        return false
    }
    
}
 
// allows users to use keypad
document.addEventListener('keydown', (event) => {
    const keyPressed = event.key
    for(let i = 0; i < calculatorBtn.length; i++){
        let btn = calculatorBtn[i].getAttribute('data-key')
        if(btn == keyPressed) {
            calculatorBtn[i].click();
            calculatorBtn[i].classList.add('active')
            setInterval(function() {calculatorBtn[i].classList.remove('active')}, 100);
        }
    }

   
})