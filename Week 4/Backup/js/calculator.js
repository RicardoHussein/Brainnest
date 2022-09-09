/*****Eventually will have to make checks for the numbers and operators(Edge Cases) */

let operations ="";
let firstOperand = "";
let secondOperand;
let firstNumber;
let expressionCut;
let operationCut;
let cummulativeCut;
let total = 0;
//let secondNumber; = parseInt(secondOperand);

const clearButton = document.querySelector('#keypad_clear');
const minusButton = document.querySelector('#keypad_minus');
const plusButton = document.querySelector('#keypad_plus');
const divideButton = document.querySelector('#keypad_divide');
const multiplyButton = document.querySelector('#keypad_multiply');
const dotButton = document.querySelector('#keypad_dot');
const equalButton = document.querySelector('#keypad_equal');
const number0Button = document.querySelector('#number0');
const number1Button = document.querySelector('#number1');
const number2Button = document.querySelector('#number2');
const number3Button = document.querySelector('#number3');
const number4Button = document.querySelector('#number4');
const number5Button = document.querySelector('#number5');
const number6Button = document.querySelector('#number6');
const number7Button = document.querySelector('#number7');
const number8Button = document.querySelector('#number8');
const number9Button = document.querySelector('#number9');

const output = document.getElementById("screen");

clearButton.addEventListener('click',() =>{
    firstOperand ="";
    secondOperand ="";
    output.textContent = "";
    total = 0;   
});

minusButton.addEventListener('click',() =>{
    if(output.textContent != "")
    {
        firstOperand = output.textContent;
        if(firstOperand.includes("."))
        {
            firstNumber = parseFloat(firstOperand);
        }
        else
        {
            firstNumber = parseInt(firstOperand);
        }
        
        output.textContent += '\r\n';
        output.textContent += "- ";
        output.textContent += '\r\n';
        operations = '-';
    }
    
    else
    {
            alert("Your input is incorrect. You should input a number")
    }
});

plusButton.addEventListener('click',() =>{
    if(output.textContent != "")
    {
        if(output.textContent.includes("+") || output.textContent.includes("-") || output.textContent.includes("*") || output.textContent.includes("/"))
        {
            //alert(total)
            cummulativeCut = output.textContent.split("+");
            //alert(cummulativeCut)
            //cummulativeCut = cummulativeCut.split(operations);
            cummulativeCut = cummulativeCut.slice(- 1);
            //alert(cummulativeCut)
            if(operations === '+')
            {
                //alert(total)
                total = total + parseInt(cummulativeCut[cummulativeCut.length - 1]);
            }

            if(operations === '-')
            {
                total = total - parseInt(cummulativeCut[cummulativeCut.length - 1]);
            }

            if(operations === '*')
            {
                total = total * parseInt(cummulativeCut[cummulativeCut.length - 1]);
            }

            if(operations === '/')
            {
                //Test Edge Cases (ie divided by zero)
                total = total / parseInt(cummulativeCut[cummulativeCut.length - 1]);
            }

            output.textContent += '\r\n';
            output.textContent += "+ ";
            output.textContent += '\r\n';
            operations = '+';
            //alert(total)
        }
        
        if(!(output.textContent.includes("+") || output.textContent.includes("-") || output.textContent.includes("*") || output.textContent.includes("/")))
        {
            firstOperand = output.textContent;
            if(firstOperand.includes("."))
            {
                firstNumber = parseFloat(firstOperand);
            }
            else
            {
                firstNumber = parseInt(firstOperand);
            }
            
            output.textContent += '\r\n';
            output.textContent += "+ ";
            output.textContent += '\r\n';
            total = firstNumber;
            operations = '+';
        }
    }
    
    else
    {
        alert("Your input is incorrect. You should input a number")
    }
});

divideButton.addEventListener('click',() =>{
    if(output.textContent != "")
    {
        firstOperand = output.textContent;
        if(firstOperand.includes("."))
        {
            firstNumber = parseFloat(firstOperand);
        }
        else
        {
            firstNumber = parseInt(firstOperand);
        }
        
        output.textContent += '\r\n';
        output.textContent += "/ ";
        output.textContent += '\r\n';
        operations = '/';
    }
    
    else
    {
        alert("Your input is incorrect. You should input a number")
    }
});

multiplyButton.addEventListener('click',() =>{
    if(output.textContent != "")
    {
        firstOperand = output.textContent;
        if(firstOperand.includes("."))
        {
            firstNumber = parseFloat(firstOperand);
        }
        else
        {
            firstNumber = parseInt(firstOperand);
        }

        output.textContent += '\r\n';
        output.textContent += "* ";
        output.textContent += '\r\n';
        operations = '*';
    }

    else
    {
        alert("Your input is incorrect. You should input a number")
    }
});

dotButton.addEventListener('click',() =>{
    if(output.textContent.includes("+") || output.textContent.includes("-") || output.textContent.includes("*") || output.textContent.includes("/"))
    {
        if(output.textContent.includes("+"))
        {
            operationCut = output.textContent.split("+");
            if(operationCut[1] != "" && (!operationCut[1].includes(".")))
            {
                output.textContent += ".";
                alert(operationCut[1])
            }
        }

        if(output.textContent.includes("-"))
        {

        }

        if(output.textContent.includes("*"))
        {

        }

        if(output.textContent.includes("/"))
        {

        }
    } 
    
    else if(output.textContent != "" && !(output.textContent.includes(".")))
    {
        output.textContent += ".";
    }

    else
    {
        alert("Your input is incorrect. You should only input a .(dot) after a number")
    }
});

equalButton.addEventListener('click',() =>{
    if(total < firstNumber)
    {
        output.textContent += '\r\n';
        expressionCut = output.textContent.split(operations);
        secondOperand = expressionCut[1];
        secondNumber = parseInt(secondOperand);
        output.textContent = operate(firstNumber,secondNumber,operations);
        total = operate(firstNumber,secondNumber,operations);
        firstOperand ="";
        secondOperand ="";
        //total = 0;
    }

    else
    {
        output.textContent += '\r\n';
        expressionCut = output.textContent.split(operations);
        secondOperand = expressionCut[1];
        secondNumber = parseInt(secondOperand);
        output.textContent = operate(total,secondNumber,operations);
        total = operate(total,secondNumber,operations);
        firstOperand ="";
        secondOperand ="";
        //total = 0;
    }
    //alert(expressionCut[1])
    //alert(firstNumber)
    //alert(secondNumber)
    //alert(operate)
    //alert(total)    
});

number0Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "0";    
});

number1Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "1";    
});

number2Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "2";    
});

number3Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "3";    
});

number4Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "4";    
});

number5Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "5";    
});

number6Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "6";    
});

number7Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "7";    
});

number8Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "8";    
});

number9Button.addEventListener('click',() =>{
    //output.textContent += '\r\n';
    output.textContent += "9";    
});

//operate(firstNumber,secondNumber,operations)

function add(firstNumber, secondNumber)
{
    return firstNumber + secondNumber;       
}

function subtract(firstNumber, secondNumber)
{
    return firstNumber - secondNumber;   
}

function multiply(firstNumber, secondNumber)
{
    return firstNumber * secondNumber;  
}

function divide(firstNumber, secondNumber)
{
    return firstNumber / secondNumber;   
}

function operate(firstNumber, secondNumber, operations)
{
    if(operations === '+')
    {
        //console.log("The sum is "+ add(firstNumber, secondNumber))
        firstOperand = add(firstNumber, secondNumber);
        return add(firstNumber, secondNumber);
    }

    if(operations === '-')
    {
        //console.log("The subtraction is "+ subtract(firstNumber, secondNumber))
        firstOperand = subtract(firstNumber, secondNumber);
        return subtract(firstNumber, secondNumber);
    }

    if(operations === '*')
    {
        //console.log("The multiplication is "+ multiply(firstNumber, secondNumber))
        firstOperand = multiply(firstNumber, secondNumber);
        return multiply(firstNumber, secondNumber);
    }

    if(operations === '/')
    {
        if(secondNumber != 0)
        {
            //console.log("The division is "+ divide(firstNumber, secondNumber))
            firstOperand = divide(firstNumber, secondNumber);
            return divide(firstNumber, secondNumber);
        }

        else
        {
            output.textContent = "";
            console.log("The second number must be different of 0(zero)")
        }
    }
}