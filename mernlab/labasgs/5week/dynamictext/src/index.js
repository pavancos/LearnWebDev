import React, { useState } from "react";
import ReactDOM from "react-dom";

const InputComponent = () => {
  const [inputText, setInputText] = useState("");

  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "Enter Text:"),
    React.createElement("input", {
      type: "text",
      onChange: (e) => setInputText(e.target.value),
    }),
    React.createElement("p", null, "You typed: "),
    React.createElement("h1", null, inputText)
  );
};

ReactDOM.render(React.createElement(InputComponent), document.getElementById("root"));