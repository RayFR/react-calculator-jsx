import "./App.css";
import { Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";

function Calculator() {
  const [state, setState] = useState("");

  const input = (value) => {
    if (value === "⌫") {
      setState(state.slice(0, -1));
    }
    else if (value === "CE") {
      setState("");
    }
    else if (value === "=")
    {
      try {
        let strState = state.toString()
        let modifiedState = "";
        for (let i = 0; i < strState.length; i++)
          {
            let char = strState[i];
            if (char === "×") {
              modifiedState+="*";
            }
            else if (char === "÷") {
              modifiedState+="/";
            }
            else {
              modifiedState+=char;
            }
          }
        const result = eval(modifiedState);
        setState(result);
      }
      catch {
        alert("Invalid Calculation!")
        setState("");
      }
    }
    else {
      setState(state + value);
    }
  };

  return (
    <>
      <div id="calculator">
        <div id="input-box">{state}</div>
        <div className="calc-row">
          <button onClick={() => input("1")}>1</button>
          <button onClick={() => input("2")}>2</button>
          <button onClick={() => input("3")}>3</button>
          <button onClick={() => input("⌫")}>⌫</button>
        </div>
        <div className="calc-row">
          <button onClick={() => input("4")}>4</button>
          <button onClick={() => input("5")}>5</button>
          <button onClick={() => input("5")}>6</button>
          <button onClick={() => input("CE")}>CE</button>
        </div>
        <div className="calc-row">
          <button onClick={() => input("7")}>7</button>
          <button onClick={() => input("8")}>8</button>
          <button onClick={() => input("9")}>9</button>
          <button onClick={() => input("=")}>=</button>
        </div>
        <div className="calc-row">
          <button onClick={() => input("+")}>+</button>
          <button onClick={() => input("-")}>-</button>
          <button onClick={() => input("×")}>×</button>
          <button onClick={() => input("÷")}>÷</button>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <Calculator />
    </>
  );
}

export default App;
