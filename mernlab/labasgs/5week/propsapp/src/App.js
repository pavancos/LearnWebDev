import React from "react";
import ReactDOM from "react-dom";

const Child = (props) => {
  return React.createElement("h1", null, "Message Passed: " + props.message);
};

const Parent = () => {
  return React.createElement(Child, { message: "Hello World" });
};

const App = () => {
  ReactDOM.render(React.createElement(Parent), document.getElementById("root"));
}

export default App;