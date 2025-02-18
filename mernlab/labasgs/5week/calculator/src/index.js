import React, { useState } from "react";
import ReactDOM from "react-dom";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const calculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult("Enter valid numbers");
      return;
    }

    let res;
    switch (operation) {
      case "add":
        res = n1 + n2;
        break;
      case "sub":
        res = n1 - n2;
        break;
      case "mul":
        res = n1 * n2;
        break;
      case "div":
        res = n2 !== 0 ? n1 / n2 : "Cannot divide by zero";
        break;
      case "mod":
        res = n2 !== 0 ? n1 % n2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid Operation";
    }
    setResult(res);
  };

  return React.createElement(
    "div",
    { style: { textAlign: "", marginTop: "", fontFamily:"monospace" } },
    React.createElement("h1", null, "calculator"),
    React.createElement("input", {
      type: "number",
      onChange: (e) => setNum1(e.target.value),
    }),
    React.createElement("br"),
    React.createElement("input", {
      type: "number",
      onChange: (e) => setNum2(e.target.value),
    }),
    React.createElement("br"),
    React.createElement(
      "div",
      { style: { marginTop: "10px" } },
      React.createElement("button", { onClick: () => calculate("add") }, "+"),
      React.createElement("button", { onClick: () => calculate("sub") }, "-"),
      React.createElement("button", { onClick: () => calculate("mul") }, "*"),
      React.createElement("button", { onClick: () => calculate("div") }, "/"),
      React.createElement("button", { onClick: () => calculate("mod") }, "%")
    ),
    React.createElement("h2", null, "Result: " + (result !== null ? result : ""))
  );
};

ReactDOM.render(React.createElement(Calculator), document.getElementById("root"));