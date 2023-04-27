import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import "./styles.css";

function App() {
  const [display, setDisplay] = useState(0);
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    console.log(":::::::>", expression);
    if (value === "AC") {
      setExpression("0");
      setDisplay(0);
    } else {
      setExpression(expression + String(value));
    }
  };
  // const AC = () => {
  //   setDisplay("");
  // };
  const handleResult = () => {
    console.log(eval(expression));
    setDisplay(eval(expression));
  };

  return (
    <div className="App">
      <h3 className="display">{display}</h3>

      <span className="expression">{expression}</span>

      <div className="panel">
        <div className="numbers">
          <button name="AC" onClick={() => handleClick("AC")}>
            AC
          </button>
          <button onClick={() => handleClick()}>+/-</button>
          <button onClick={() => handleClick("%")}>%</button>

          <button name="7" onClick={() => handleClick(7)}>
            7
          </button>
          <button name="8" onClick={() => handleClick(8)}>
            8
          </button>
          <button name="9" onClick={() => handleClick(9)}>
            9
          </button>

          <button name="4" onClick={() => handleClick(4)}>
            4
          </button>
          <button name="5" onClick={() => handleClick(5)}>
            5
          </button>
          <button name="6" onClick={() => handleClick(6)}>
            6
          </button>

          <button name="1" onClick={() => handleClick(1)}>
            1
          </button>
          <button name="2" onClick={() => handleClick(2)}>
            2
          </button>
          <button name="3" onClick={() => handleClick(3)}>
            3
          </button>

          <button name="0" onClick={() => handleClick(0)}>
            0
          </button>
        </div>

        <div className="operators">
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
