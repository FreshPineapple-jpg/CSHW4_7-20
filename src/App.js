import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  // Implement button functionality
  const buttonClick = (buttonText) => {
    switch (buttonText) {
      case 'AC':
        setDisplayValue('0');
        break;
      case '=':
        try {
          const result = eval(displayValue.replace('×', '*').replace('÷', '/'));
          setDisplayValue(result.toFixed(2)); // Adjust the precision as needed
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      // Handle other cases here
      case 'x!':
        // Calculate factorial of the result and update the display
        try {
          const num = eval(displayValue);
          const result = factorial(num);
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case '%':
        // Calculate the percentage of the result and update the display
        try {
          const result = eval(displayValue) / 100;
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'sin':
        // Calculate the sine of the result in radians and update the display
        try {
          const result = Math.sin(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'ln':
        // Calculate the natural logarithm of the result and update the display
        try {
          const result = Math.log(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'cos':
        // Calculate the cosine of the result in radians and update the display
        try {
          const result = Math.cos(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'log':
        // Calculate the logarithm base 10 of the result and update the display
        try {
          const result = Math.log10(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'tan':
        // Calculate the tangent of the result in radians and update the display
        try {
          const result = Math.tan(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case '√':
        // Calculate the square root of the result and update the display
        try {
          const result = Math.sqrt(eval(displayValue));
          setDisplayValue(result.toFixed(2));
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'EXP':
        // Enter a number in exponential form
        setDisplayValue((prevValue) => prevValue + 'E');
        break;
      case 'x^y':
        // Calculate the result of exponentiation and update the display
        setDisplayValue((prevValue) => prevValue + '**');
        break;
      case '÷':
        setDisplayValue((prevValue) => prevValue + '÷');
        break;
      case '×':
        setDisplayValue((prevValue) => prevValue + '×');
        break;
      case '-':
        setDisplayValue((prevValue) => prevValue + '-');
        break;
      case '+':
        setDisplayValue((prevValue) => prevValue + '+');
        break;
      default:
        // Append the button's text content to the display
        if (displayValue === '0' || displayValue === 'Error') {
          setDisplayValue(buttonText);
        } else {
          setDisplayValue((prevValue) => prevValue + buttonText);
        }
        break;
    }
  };

  // Custom factorial function
  const factorial = (num) => {
    if (num < 0) {
      throw new Error('Factorial of a negative number is undefined.');
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };



  return (
    <div className="container">


      <div id="deg">Deg</div>

    

      <div id="dis">{displayValue}</div>

      <div id="ac" onClick={() => buttonClick('AC')}>AC</div>
      <div id="equal" onClick={() => buttonClick('=')}>=</div>
      <div id="fac" onClick={() => buttonClick('x!')}>x!</div>
      <div id="per" onClick={() => buttonClick('%')}>%</div>
      <div id="sin" onClick={() => buttonClick('sin')}>sin</div>
      <div id="ln" onClick={() => buttonClick('ln')}>ln</div>
      <div id="cos" onClick={() => buttonClick('cos')}>cos</div>
      <div id="log" onClick={() => buttonClick('log')}>log</div>
      <div id="tan_" onClick={() => buttonClick('tan')}>tan</div>
      <div id="sqrt" onClick={() => buttonClick('√')}>√</div>
      <div id="EXP" onClick={() => buttonClick('EXP')}>EXP</div>
      <div id="pow" onClick={() => buttonClick('x^y')}>x^y</div>
      <div id="div" onClick={() => buttonClick('÷')}>÷</div>
      <div id="mul" onClick={() => buttonClick('×')}>×</div>
      <div id="sub_" onClick={() => buttonClick('-')}>-</div>

      {/* Other buttons here */}
      <div id="seven" onClick={() => buttonClick('7')}>7</div>
      <div id="eight" onClick={() => buttonClick('8')}>8</div>
      <div id="nine" onClick={() => buttonClick('9')}>9</div>
      <div id="four" onClick={() => buttonClick('4')}>4</div>
      <div id="left_" onClick={() => buttonClick('(')}>(</div>
      <div id="right_" onClick={() => buttonClick(')')}>)</div>
      <div id="five" onClick={() => buttonClick('5')}>5</div>
      <div id="six" onClick={() => buttonClick('6')}>6</div>
      <div id="one" onClick={() => buttonClick('1')}>1</div>
      <div id="two" onClick={() => buttonClick('2')}>2</div>
      <div id="three" onClick={() => buttonClick('3')}>3</div>
      <div id="zero_" onClick={() => buttonClick('0')}>0</div>
      <div id="period" onClick={() => buttonClick('.')}>.</div>
      <div id="add_" onClick={() => buttonClick('+')}>+</div>

    </div>
  );
  
  }
export default App;


  
