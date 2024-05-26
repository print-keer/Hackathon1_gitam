
import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import DeptSub from "./DeptSub";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Login />
      <DeptSub />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
