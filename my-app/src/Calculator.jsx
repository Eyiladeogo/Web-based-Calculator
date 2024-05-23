import React, { useState } from 'react';
import './calculator.css';

// Created reusable Keys component. Just passed in the list of keys it needs to render 
function Keys({ keyList, onButtonClick }) {
    return (
      <div className="keypad">
        {keyList.map((keyItem, index) => (
          <button
            className="key"
            onClick={() => onButtonClick(keyItem)}
            key={index}
          >
            {keyItem}
          </button>
        ))}
      </div>
    );
  }

function Calculator (){

    const [display, setDisplay] = useState("0")
    const keysList = ["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]

    function handleButtonClick(keyItem){
        if (keyItem === "="){

            try {
                const result = eval(display);
                setDisplay(result.toString());
                return
              } catch (error) {
                setDisplay("Error");
              }            
        }
        if (display === "0"){ setDisplay(keyItem)}
        else{
        setDisplay(display+keyItem)}
    }

    function handleClear(){
        setDisplay("0")
    }

    function handleBackspace(){
        if (display.length === 1){
            setDisplay("0")
        }
        else{
            setDisplay(display.slice(0,-1))
        }
    }

  return (
    <div className="calculator">
      <div className="display">
        {display}
      </div>
      <div className="controls">
        <button className="control-button" onClick={handleClear}>CLEAR</button>
        <button className="control-button" onClick={handleBackspace}>←</button>
      </div>
        <Keys keyList={keysList} onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
